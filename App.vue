<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from "vue-native-router"

import Login from './pages/Login'
import MyPage from './pages/MyPage'
import WorldActivity from './pages/WorldActivity'

const StackNavigator = createStackNavigator(
  {
    Login: Login,
    MyPage: MyPage,
    WorldActivity: WorldActivity,
  },
  {
    initialRouteName: 'Login'
  }
)

const AppNavigator = createAppContainer(StackNavigator)

export default {
  components: { AppNavigator }
}
</script>
