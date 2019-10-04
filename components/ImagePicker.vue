<template>
    <nb-button small light
      :on-press="pickImage"
    >
      <nb-icon name='camera'></nb-icon>
    </nb-button>
</template>

<script>
import { Permissions } from "expo";
import * as ImagePicker from 'expo-image-picker';
export default {
    props: {
      result: null,
    },
    methods: {
      async pickImage() {
        try {
          this.result = await ImagePicker.launchCameraAsync();
          console.log(this.result)          
        } catch (err) {
          console.error(err)
        }

        if(!this.result.cancelled) {
          this.$emit('load', this.result.uri)
        }
      }
 }
}
</script>

<style>
</style>