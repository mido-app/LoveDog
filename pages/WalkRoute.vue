<template>
  <nb-container class="container">
    <nb-header>
      <text>散歩ルート</text>
    </nb-header>
    <nb-grid>
      <nb-row>
        <map-view class="map" :initial-region="coordinates" :region="region">
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
        latitude: 12.91074,
        longitude: 77.5996363,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      region: {},
      location: {},
      title: "TitleA",
      description: "Desc",
    };
  },
  async created() {
    console.log("Initial location=" + JSON.stringify(this.coordinates));
  },
  methods: {
    getLocation: async function() {
      await Location.requestPermissionsAsync();
      this.location = await Location.getCurrentPositionAsync({});
      console.log("getLocation=" + JSON.stringify(this.location));
      this.region = {
        latitude: this.location.coords.latitude,
        longitude: this.location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      };
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
