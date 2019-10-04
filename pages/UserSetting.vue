<template>
  <view>
    <image
      :style="{width: 70, height: 70}"
      :source="{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}"
    /><!--user.icon-->
    <button
      class="upload"
      :on-press="onChangeIcon"
      title="アイコン変更"
      color="#841584"
      accessibility-label="Upload"
    />
    <text>ユーザ名</text>
    <text-input
      :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
      v-model="user.name"
    />
    <button :on-press="onPressUpdate" title="更新" color="#841584" accessibility-label="Update" />
    <button
      @press="() => navigate('Login')"
      title="ログアウト"
      color="#841584"
      accessibility-label="Logout"
    />
  </view>
</template>
<script>
import { firebase, auth, firestore, storage } from '../firebase'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  async created () {
    const user = firebase.auth().currentUser
    if(!user) {
      this.navigation.navigate('Login')
      return Promise.resolve()
    }

    const doc = await firestore.collection('user').doc(user.uid).get()
    const data = doc.data()
    this.user = {
      id: doc.id,
      name: data.name,
      iconPath: data.iconPath,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }
},
  data: function() {
    return {
      user: {
        id: '',
        name: '',
        iconPath: '',
        createdAt: null,
        updatedAt: null
      }
    };
  },
  methods: {
    async onChangeIcon() {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
          return Promise.resolve()
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true
      })
      if (result.cancelled) return Promise.resolve()

      // 画像をアップロード
      const blob = await this._uriToBlob(result.uri)
      const commaSplittedUri = result.uri.split('.')
      const ext = commaSplittedUri[commaSplittedUri.length - 1]
      const uploadPath = `userIcon/${this.user.id}/icon.${ext}`
      await storage.ref(uploadPath).put(blob, { contentType: `image/${ext}` })

      // DBのデータを書き換える
      const prevIconPath = this.user.iconPath // 既存の画像を削除するために取っておく
      this.user.iconPath = uploadPath
      await firestore.collection('user').doc(this.user.id).update({
        iconPath: this.user.iconPath,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      })

      if (prevIconPath !== uploadPath) {
        await storage.ref(prevIconPath).delete()
      } 

      blob.close()
    },
    _uriToBlob (uri) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          // return the blob
          resolve(xhr.response);
        };
        xhr.onerror = function() {
          // something went wrong
          reject(new Error('uriToBlob failed'));
        };
        // this helps us get a blob
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      });
    },
    onPressUpdate: function() {
        alert('Hello')
    },
    async onPressLogout() {
      await auth.signOut()        
      this.navigation.navigate('Login')
    },
    async onPressUpdate() {
      await firestore.collection('user').doc(this.user.id).update({
        name: this.user.name,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      alert('更新成功')
    },
    navigate(pageName) {
      this.navigation.navigate(pageName);
    }
  }
};
</script>
<style>
.container {
  flex: 1;
  background-color: white;
  justify-content: flex-start;
}
.upload {
  flex: 2;
  align-items: flex-start;
  justify-content: center;
}
.text-color-primary {
  color: blue;
  font-size: 30;
}
</style>

