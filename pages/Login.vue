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
    <nb-button rounded primary :onPress="SignUpPress">
      <nb-text>SignUp</nb-text>
    </nb-button>
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
import { firebase, auth, firestore } from '../firebase'
import AssetsImage from "../assets/icon.png";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
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
  async mounted() {
    await this.checkAuth()
    // if(firebase.auth().currentUser) {
    //   this.navigation.navigate('MyPage')
    // }
  },
  methods: {
    async checkAuth() {
      return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
          if (user) {
            this.navigation.navigate('MyPage')
          }
        })
      })
    },
    async SignUpPress() {
      try {
        const result = await auth.createUserWithEmailAndPassword(this.Email, this.Password)

        const userDoc = {
          name: 'デフォルトユーザ名',
          iconPath: 'userIcon/default.png',
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }
        await firestore.collection('user').doc(result.user.uid).set(userDoc)
        this.navigation.navigate('MyPage')
      } catch (err) {
        console.error(err)
      }
    },
    async LoginPress() {
      try {
        const result = await auth.signInWithEmailAndPassword(this.Email, this.Password)
        this.navigation.navigate('MyPage')
      } catch (err) {
        console.error(err)
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