<template>
    <nb-button small light
      :on-press="pickImage"
    >
      <nb-icon name='camera'></nb-icon>
    </nb-button>
</template>

<script>
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
export default {
    props: {
      result: null,
    },
    methods: {
      async pickImage() {
        try {
          await Permissions.askAsync(Permissions.CAMERA);
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