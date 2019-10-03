<template>
  <view>
    <button
      :on-press="pickImage"
      title="Cam"
    >
  </view>
</template>

<script>
import * as ImagePicker from 'expo-image-picker';
export default {
    methods: {
          pickImage: function() {
            ImagePicker.launchCameraAsync();
          }
 }
}
</script>

<style>
.container {
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>