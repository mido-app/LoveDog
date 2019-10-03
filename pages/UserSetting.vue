<template>
    <view>
        <image
          :style="{width: 50, height: 50}"
          :source="{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}"
        />
        <button class="upload"
          :on-press="onPressUpload"
          title="アップロード"
          color="#841584"
          accessibility-label="Upload"
        />
        <text>ユーザ名</text>
        <text-input
          :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
          v-model="text"
        />
      <button
          :on-press="onPressUpdate"
          title="更新"
          color="#000000"
          accessibility-label="Update"
        />
      <button
          :on-press="onPressLogout"
          title="ログアウト"
          color="#841584"
          accessibility-label="Logout"
        />
    </view>

</template>
<script>
export default {
  data: function() {
    return {
        text: '犬　好男'
    }
  },
  methods: {
      onPressUpload: function() {
          alert('Hello')
      },
      onPressUpdate: function() {
          alert('Hello')
      },
      onPressLogout: function() {
          alert('Hello')
      },
    },
  
}
</script>
<style>
.container {
  flex: 1;
  background-color: white;
  justify-content: flex-start;
}
.upload {
  flex: 2;
  align-items: flex-start;
  justify-content: center;
}
.text-color-primary {
  color: blue;
  font-size: 30;
}
</style>

