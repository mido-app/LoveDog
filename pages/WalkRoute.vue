<template>
  <nb-container>
    <nb-header>
      <text>散歩ルート</text>
    </nb-header>
    <nb-grid>
      <nb-row :style="{ backgroundColor: '#635DB7' }">
        <map-view class="container" :initial-region="coordinates" :region="location" />
      </nb-row>
      <nb-row :style="{ backgroundColor: '#635DB7' }">
        <touchable-opacity :on-press="getLocation" >
          <text>現在一取得</text>
        </touchable-opacity>
      <nb-row :style="{ backgroundColor: '#635DB7' }">
        <text>あなたの現在位置:{{location.latitude}}</text>
      </nb-row>
    </nb-grid>
  </nb-container>
</template>

<script>
import MapView from "react-native-maps";
import * as Location from "expo-location";

export default {
  data: function() {
    return {
      coordinates: {
        latitude: 35.7656561,
        longitude: 139.2269407,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      location: {},
    };
  },
  created: async function() {
    await Location.requestPermissionsAsync();
    this.location = await Location.getCurrentPositionAsync({});
    console.log("current location=" + JSON.stringify(this.location));
  },
  methods: {
    getLocation: async function() {
      await Location.requestPermissionsAsync();
      this.location = await Location.getCurrentPositionAsync({});
      console.log("getLocation=" + JSON.stringify(this.location));
      // this.coordinates = {
      //   latitude: this.location.latitude,
      //   longitude: this.location.longitude,
      //   latitudeDelta: this.location.latitudeDelta,
      //   longitudeDelta: this.location.longitudeDelta,
      // };
    }
  },
  components: {
    MapView
  }
};
</script>
<style>
.container {
  flex: 1;
}
</style>