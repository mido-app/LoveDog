<template>
  <view>
    <view>
      <text>{{ post.body & " " & post.createdAt}}</text>
      <image :style="{width: 50, height: 50}" :source="{uri: post.icon}" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    post: {
      Type: Object
    }
  }
};
</script>