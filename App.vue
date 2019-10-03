<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from "vue-native-router"

import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

const StackNavigator = createStackNavigator(
  {
    Page1: Page1,
    Page2: Page2
  },
  {
    initialRouteName: 'Page1'
  }
)

const AppNavigator = createAppContainer(StackNavigator)

export default {
  components: { AppNavigator }
}
</script>
