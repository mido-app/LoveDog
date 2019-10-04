<template>
  <view>
    <view class="timeline">
      <Action v-for="act in actions" :key="act.postId" :act="act"></Action>
    </view>
    <view class="action">
    <button
      v-if="walking"
      :on-press="onPressWalking"
      title="散歩開始"
      color="#841584"
    />
    <button
      v-else
      :on-press="onPressWalking"
      title="散歩終了"
      color="#841584"
    />
    <text-input v-model="comment" />
    <button
      :on-press="onPressSend"
      title="投稿"
      color="#993099"
      accessibility-label="Learn more about this purple button"
    />
    <image-picker @load="onLoadPhoto" />
    </view>
  </view>
</template>

<script>
import Action from "../components/Action";
import ImagePicker from "../components/ImagePicker";
export default {
    components: { Action, ImagePicker },
    props: { 
        walking: true,
        text: '',
        comment: '',
        photoUri: ''
    },
    data: function() {
          return {
            actions: [
              {
                postId: 1,
                body: "a Sunny Day",
                icon: "",
                likeCount: 5,
                createdAt: "ドキュメントの登録日時"
              },
              {
                postId: 2,
                body: "a Sunny Day",
                icon: "",
                likeCount: 10,
                createdAt: "ドキュメントの登録日時"
              },
              {
                postId: 3,
                body: "a Sunny Day",
                icon: "",
                likeCount: 100,
                createdAt: "ドキュメントの登録日時"
              },
            ]
          };
        },
    methods: {
      onPressWalking: function() {
        this.walking = !this.walking
      },
      onPressSend: function() {
        alert(this.comment)
    },
    onLoadPhoto(uri) {
      console.log(uri)
      this.photoUri = uri
    }
  }
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.timeline {
  background-color: white;
}
.action {
  background-color: lightslategray;
  color: aquamarine;
}
.text-color-primary {
  color: blue;
}
</style>
