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
      <view v-if="post.images != null">
        <view v-for="imageUri in post.images" :key="imageUri">
          <image :style="{width: 150, height: 90}" :source="{uri: imageUri}" />
        </view>
      </view>
      <nb-button :on-press="addCount" transparent>
        <nb-icon name="thumbs-up" active></nb-icon>
        <nb-text>{{post.likeCount}} Likes</nb-text>
      </nb-button>
    </nb-body>
    <nb-right>
      <view v-if="post.childPostList instanceof Array ">
        <nb-button transparent :onPress="onPressView">
          <nb-text>View</nb-text>
        </nb-button>
        <nb-button transparent :onPress="onPressMap">
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
    },
    navigation: {
      Type: Object
    }
  },
  methods: {
    onPressView() {
      this.$emit('view', this.post.postId)
    },
    onPressMap() {
      this.$emit('map', this.post.postId)
    },
    addCount() {
      this.post.likeCount += 1
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