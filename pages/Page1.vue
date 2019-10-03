<template>
  <view>
    <text>Page1</text>
    <button title="Navigate" @press="onTap" />
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
    onTap() {
      this.navigation.navigate('Page2')
    }
  }
}
</script>
