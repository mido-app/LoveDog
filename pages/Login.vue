<template>
  <view>
    <text>Login</text>
    <nb-button rounded primary :onPress="login">
      <nb-text>Login</nb-text>
    </nb-button>
  </view>
</template>

<script>
import { firestore } from '../firebase'

export default { 
  props: {
    navigation: {
      type: Object
    }
  },
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    login() {
      this.navigation.navigate('MyPage')
    }
  }
}
</script>

<style scoped>
.input {
  background-color: bisque;
}
</style>
