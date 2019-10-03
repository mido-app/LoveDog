<template>
  <view>
    <button
      :on-press="pickImage"
      title="Cam"
    />
  </view>
</template>

<script>
import { Permissions } from "expo";
import * as ImagePicker from 'expo-image-picker';
export default {
    props: {
      result: null,
      // imageuri: null
    },
    methods: {
      async pickImage() {
        try {
          this.result = await ImagePicker.launchCameraAsync();
          console.log(this.result)
          // this.imageuri = this.result.uri
          this.$emit('load', this.result.uri)
        } catch (err) {
          console.error(err)
        }
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