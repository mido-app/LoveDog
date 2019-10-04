<template>
    <view>
      <!-- <text>{{ act.body & " " & act.createdAt & " ♡" & act.likeCount}}</text> -->
      <text>{{ moment(act.createdAt).format('YYYY-MM-DD') }} {{ act.body }}</text>
      <text>{{ act.body }}</text>
      <text>♡{{ act.likeCount }}</text>
      <image :style="{width: 50, height: 50}" :source="{uri: act.icon}" />
    </view>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    act: {
      Type: Object
    }
  },
  data: function () {
    return {
      moment: moment
    }
  }
};
</script>