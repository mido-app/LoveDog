<template>
  <view>
    <text>Click button to navigate</text>
    <button title="Login" @press="() => navigate('Login')" />
    <button title="MyPage" @press="() => navigate('MyPage')" />
    <button title="UserSetting" @press="() => navigate('UserSetting')" />
    <button title="WorldActivity" @press="() => navigate('WorldActivity')" />
  </view>  
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    navigate(pageName) {
      this.navigation.navigate(pageName)
    },
    test() {
      this.navigation.navigate('Login')
    }
  }
}
</script>
