<template>
  <view>
    <view class="timeline">
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
    <image-picker />
    </view>
  </view>
</template>

<script>
import ImagePicker from "../components/ImagePicker";
export default {
    components: { ImagePicker },
    data: { 
        walking: true,
        text: '',
        comment: '',
    },
    methods: {
      onPressWalking: function() {
        this.walking = !this.walking
      },
      onPressSend: function() {
        alert(this.comment)
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
