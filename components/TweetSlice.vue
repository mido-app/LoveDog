<template>
  <nb-list-item thumbnail>
    <nb-left :style="{width: 66}">
      <view>
        <image :style="{width: 66, height: 58}" :source="{uri: post.icon}" />
        <nb-text>@{{post.userId}}</nb-text>
      </view>
    </nb-left>
    <nb-body>
      <nb-text>{{post.userName}}</nb-text>
      <nb-text note :style="{width: 150}">{{post.body}}</nb-text>
      <view v-if="post.picture != null">
        <image :style="{width: 150, height: 90}" :source="{uri: post.picture}" />
      </view>
      <nb-button :on-press="addCount" transparent>
        <nb-icon name="thumbs-up" active></nb-icon>
        <nb-text>{{post.likeCount}} Likes</nb-text>
      </nb-button>
    </nb-body>
    <nb-right>
      <nb-button transparent>
        <nb-text>View</nb-text>
      </nb-button>
      <view v-if="post.childPostList instanceof Array">
        <nb-button transparent>
          <nb-icon name="navigate" active></nb-icon>
        </nb-button>
      </view>
    </nb-right>
  </nb-list-item>
</template>

<script>
export default {
  props: {
    post: {
      Type: Object
    }
  },
  methods: {
    addCount() {
      this.post.counter += 1
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