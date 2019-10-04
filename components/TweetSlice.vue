<template>
  <nb-list-item thumbnail>
    <nb-left>
      <image :style="{width: 66, height: 58}" :source="{uri: post.icon}" />
    </nb-left>
    <nb-body>
      <nb-text>{{post.userName}}</nb-text>
      <nb-text note :numberOfLines="3">{{post.body}}</nb-text>
      <image :style="{width: 140, height: 58}" :source="{uri: post.picture}" />
      <nb-button v-on:click="post.counter += 1" transparent>
        <nb-icon name="thumbs-up" active></nb-icon>
        <nb-text>{{post.counter}} Likes</nb-text>
      </nb-button>
    </nb-body>
    <nb-right>
      <nb-button transparent :onPress="onPressView">
        <nb-text>View</nb-text>
      </nb-button>
      <view v-if="post.childPostList instanceof Array ">
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
    },
    navigation: {
      Type: Object
    }
  },
  methods: {
    onPressView() {
      this.$emit('view', this.post.postId)
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