<template>
  <view>
    <view class="container">
      <image :style="{width: 50, height: 50}" :source="{uri: post.icon}" />
      <text>{{ post.userName }}</text>
      <text>♡</text>
      <text>{{ post.body }}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    showText: false,
    post: {
      Type: Object
    }
  }
};
</script>

<style>
/* .container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
} */
</style>