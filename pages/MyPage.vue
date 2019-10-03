<template>
  <view>
    <text>MyPage</text>
    <button title="WorldActivity" @press="onWorldActivity" />
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
    }
  }
}
</script>
