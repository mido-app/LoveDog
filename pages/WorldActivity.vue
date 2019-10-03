<template>
  <view>
    <text>WorldActivity</text>
    <button title="MyPage" @press="onMyPage" />
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
    onMyPage() {
      this.navigation.navigate('MyPage')
    }
  }
}
</script>
