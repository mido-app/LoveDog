<template>
  <view>
    <image
      :style="{width: 70, height: 70}"
      :source="{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}"
    /><!--user.icon-->
    <button
      class="upload"
      :on-press="onPressUpload"
      title="アップロード"
      color="#841584"
      accessibility-label="Upload"
    />
    <text>ユーザ名</text>
    <text-input
      :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
      v-model="text"
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
import { firebase, auth } from '../firebase'

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  mounted () {
    if(!firebase.auth().currentUser) {
      this.navigation.navigate('Login')
    }
  },
  data: function() {
    return {
      text: "犬　好男"
    };
  },
  methods: {
    onPressUpload: function() {
        alert('Hello')
    },
    onPressUpdate: function() {
        alert('Hello')
    },
    async onPressLogout() {
      await auth.signOut()        
      this.navigation.navigate('Login')
    },
    onPressUpdate: function() {  
      //user.name=text;
      alert("ユーザ名を変更しました。");
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

