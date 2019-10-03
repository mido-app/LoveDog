<template>
  <view>
    <text>Page1</text>
    <text-input class="input" v-model="name" />
    <nb-button @press="onTap"><nb-text>Navigate</nb-text></nb-button>
  </view>
</template>

<script>
import { firestore } from '../firebase'

export default { 
  props: {
    navigation: {
      type: Object
    }
  },
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    async onTap() {
      await firestore.collection('test').doc('TESTUSER').set({
        name: this.name
      })
      this.navigation.navigate('Page2')
    }
  }
}
</script>

<style scoped>
.input {
  background-color: bisque;
}
</style>
