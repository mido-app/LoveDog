<template>
  <view>
    <text>Login</text>
    <button title="Login" @press="login" />
  </view>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import config from './firebase.config'
// firebase.initializeApp(config)
// const firestore = firebase.firestore()

export default { 
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    login() {
      this.navigation.navigate('MyPage')
    }
  }
}
</script>
