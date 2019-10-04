<template>
  <view>
    <view>
      <!-- <text>{{ act.body & " " & act.createdAt & " ♡" & act.likeCount}}</text> -->
      <text>{{ act.createdAt }} {{ act.body }}</text>
      <text>{{ act.body }}</text>
      <text>♡{{ act.likeCount }}</text>
      <image :style="{width: 50, height: 50}" :source="{uri: act.icon}" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    act: {
      Type: Object
    }
  }
};
</script>