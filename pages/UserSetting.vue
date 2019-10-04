<template>
  <view class="container">
    <nb-grid class="center">
      <nb-row :style="{backgroundColor: '#ffffff' }">
        <nb-thumbnail v-if="iconUrl !== null" large :source="{uri: iconUrl}" />
      </nb-row>
      <nb-row :style="{ backgroundColor: '#ffffff' }">
        <nb-button rounded primary :onPress="onChangeIcon">
          <nb-text>アイコン変更</nb-text>
        </nb-button>
      </nb-row>
      <nb-row class="center" :style="{ backgroundColor: '#ffffff' }">
        <text :style="{fontSize: 20}">ユーザ名</text>
        <text-input
          :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
          v-model="user.name"
        />
      </nb-row>
      <nb-row :style="{backgroundColor: '#ffffff' }">
        <nb-button rounded primary :onPress="onPressUpdate">
          <nb-text>ユーザ名更新</nb-text>
        </nb-button>
      </nb-row>
      <nb-row :style="{backgroundColor: '#ffffff' }">
        <nb-button rounded primary :onPress="() => navigate('Login')">
          <nb-text>ログアウト</nb-text>
        </nb-button>
      </nb-row>
      <nb-row :style="{backgroundColor: '#ffffff' }"></nb-row>
      <nb-row :style="{backgroundColor: '#ffffff' }"></nb-row>
    </nb-grid>
  </view>
</template>
<script>
import { firebase, auth, firestore, storage } from "../firebase";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  async created() {
    const user = firebase.auth().currentUser;
    if (!user) {
      this.navigation.navigate("Login");
      return Promise.resolve();
    }

    const doc = await firestore
      .collection("user")
      .doc(user.uid)
      .get();
    const data = doc.data();
    this.user = {
      id: doc.id,
      name: data.name,
      iconPath: data.iconPath,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    };

    this.iconUrl = await storage.ref(this.user.iconPath).getDownloadURL();
  },
  data: function() {
    return {
      user: {
        id: "",
        name: "",
        iconPath: "",
        createdAt: null,
        updatedAt: null
      },
      iconUrl: null
    };
  },
  methods: {
    async onChangeIcon() {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
          return Promise.resolve();
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true
      });
      if (result.cancelled) return Promise.resolve();

      // 画像をアップロード
      const blob = await this._uriToBlob(result.uri);
      const commaSplittedUri = result.uri.split(".");
      const ext = commaSplittedUri[commaSplittedUri.length - 1];
      const uploadPath = `userIcon/${this.user.id}/icon.${ext}`;
      await storage.ref(uploadPath).put(blob, { contentType: `image/${ext}` });

      // DBのデータを書き換える
      const prevIconPath = this.user.iconPath; // 既存の画像を削除するために取っておく
      this.user.iconPath = uploadPath;
      await firestore
        .collection("user")
        .doc(this.user.id)
        .update({
          iconPath: this.user.iconPath,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });

      if (prevIconPath !== uploadPath) {
        await storage.ref(prevIconPath).delete();
      }

      blob.close();
    },
    _uriToBlob(uri) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          // return the blob
          resolve(xhr.response);
        };
        xhr.onerror = function() {
          // something went wrong
          reject(new Error("uriToBlob failed"));
        };
        // this helps us get a blob
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
      });
    },
    async onPressLogout() {
      await auth.signOut();
      this.navigation.navigate("Login");
    },
    async onPressUpdate() {
      await firestore
        .collection("user")
        .doc(this.user.id)
        .update({
          name: this.user.name,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      alert("更新成功");
    },
    navigate(pageName) {
      this.navigation.navigate(pageName);
    }
  }
};
</script>
<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.center {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.text-color-primary {
  color: blue;
  font-size: 30;
}
</style>

