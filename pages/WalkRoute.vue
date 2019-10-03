<template>
  <view class="container">
    <map-view class="container" :initial-region="coordinates" />
  </view>
</template>

<script>
import MapView from "react-native-maps";
export default {
  data: function() {
    return {
      coordinates: {
        latitude: 12.91074,
        longitude: 77.5996363,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
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