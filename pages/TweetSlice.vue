<template>
  <nb-list-item thumbnail>
    <nb-left>
      <image :style="{width: 66, height: 58}" :source="{uri: post.icon}" />
    </nb-left>
    <nb-body>
      <nb-text>{{post.userName}}</nb-text>
      <nb-text note :numberOfLines="3">{{post.body}}</nb-text>
      <nb-button v-on:click="post.counter += 1" transparent>
        <nb-icon name="thumbs-up" active></nb-icon>
        <nb-text>{{post.counter}} Likes</nb-text>
      </nb-button>
    </nb-body>
    <nb-button transparent>
      <nb-text>View</nb-text>
    </nb-button>
  </nb-list-item>
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