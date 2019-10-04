<template>
  <nb-container class="container">
    <nb-header>
      <text>散歩ルート</text>
    </nb-header>
    <nb-grid>
      <nb-row>
        <map-view class="map" :initial-region="coordinates">
        </map-view>
      </nb-row>
      <nb-row>
        <text>私は昨日日の出とともに散歩をしました。ほぼ寝起きの私にとって、小鳥たちのさえずりは睡魔を誘う子守唄のようでした。犬も自分で散歩できるともっとお布団と一緒に入れるのになーと思った今日この頃でした。</text>
      </nb-row>
      <nb-row>
        <nb-button rounded primary :onPress="getLocation">
          <nb-text>現在位置は？</nb-text>
        </nb-button>
        <text>あなたのいる場所:{{ location.coords }}</text>
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
      title: "TitleA",
      description: "Desc",
    };
  },
  async created() {
    await Location.requestPermissionsAsync();
    this.location = await Location.getCurrentPositionAsync({});
    console.log("Current location=" + JSON.stringify(this.location));
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
  background-color: white;
  flex: 1;
}
.map {
  flex: 1;
}
</style>
