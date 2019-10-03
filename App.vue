<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from "vue-native-router";

import Home from './pages/Home'
import Login from './pages/Login'
import MyPage from './pages/MyPage'
import WorldActivity from './pages/WorldActivity'
import UserSetting from './pages/UserSetting'
import WalkRoute from './pages/WalkRoute'

import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
Vue.use(VueNativeBase);

const BottomTabNavigator = createBottomTabNavigator(
  {
    MyPage: MyPage,
    WorldActivity: WorldActivity,
    UserSetting: UserSetting,
  }
);

const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  {
    MyPage: MyPage,
    WorldActivity: WorldActivity,
    UserSetting: UserSetting,
  }
);

const StackNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    WalkRoute: WalkRoute,
    IOSTabs: BottomTabNavigator,
    AndroidTabs: MaterialTopTabNavigator,
  },
  {
    initialRouteName: 'Login'
  }
);

const AppNavigator = createAppContainer(StackNavigator)

export default {
  components: { AppNavigator }
}
</script>
