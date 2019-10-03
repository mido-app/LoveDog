<template>
  <view>
    <text>MyPage</text>
    <button title="WorldActivity" @press="onWorldActivity" />
    <button title="UserSetting" @press="onUserSetting" />
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
    onWorldActivity() {
      this.navigation.navigate('WorldActivity')
    },
    onUserSetting(){
      this.navigation.navigate('UserSetting')
    }
  }
}
</script>
