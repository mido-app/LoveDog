<template>
  <view class="container">
    <!-- <image  -->
     <!-- :style="{width: 50, height: 50}" -->
     <!-- :source="{uri:staticImage}"/> -->
    <text-input 
    class="text-input-container"
    placeholder="Type here to Email" 
    v-model="Email"/>
    <text-input
    class="text-input-container" 
    placeholder="Type here to Password" 
    v-model="Password"/> 
    <text v-if = "LoginCheck" class="text-color-primary">EmailかPassword間違ってるよ( *´艸｀)</text>
    <!-- <button v-bind:title="Login" v-bind:on-press="LoginPress"/> -->
    <nb-button rounded primary :onPress="LoginPress">
      <nb-text>Login</nb-text>
    </nb-button>

    <image
     class="inu"
     :style="{width: 120, height: 120}"
     :source="require('../assets/5673.gif')"/> 
  
  </view>
</template>

<script>
import AssetsImage from "../assets/icon.png";
export default {
  data: function() {
    return {
      message: "Hello World",
      Email: "",
      Password: "",
      Login:"Login", 
      staticImage: "https://facebook.github.io/react-native/docs/assets/favicon.png",
      LoginCheck:false,
    };
  },
  methods: {
    LoginPress: function() {

      if(this.Password == "Password" && this.Email == "Email"){
        alert('やったね');
      } else {
      alert('今は入れません');
      this.LoginCheck = true;
      }
    }
  }
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.text-color-primary {
  align-items: center;
  color: red;
}

.text-input-container {
  width: 300;
  height: 40;
  font-size: 28;
  border-color: gray;
}

.center{
  align-items: center;
}

.inu{
 align-items: flex-end;
}

</style>