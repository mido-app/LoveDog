<template>
  <view>
    <text>Login</text>
    <button title="Login" @press="login" />
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
