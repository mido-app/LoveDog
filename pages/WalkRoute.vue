<template>
  <view class="container">
    <map-view class="container" :initial-region="coordinates" :region="location" />

    <touchable-opacity :on-press="getLocation" >
      <text>Get Current Location</text>
    </touchable-opacity>
    <text>Current Location:</text>
    <text>{{location.latitude}}</text>
  </view>
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