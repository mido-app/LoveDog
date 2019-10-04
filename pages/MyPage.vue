<template>
  <nb-container>
    <nb-grid>
      <nb-row>
      <scroll-view :content-container-style="{contentContainer: {
          paddingVertical: 20
      }}">
        <view>
          <Action v-for="act in actions" :key="act.postId" :act="act"></Action>
        </view>
      </scroll-view>
      </nb-row>
      <nb-row v-if="walking" :style="{height: 35}">
        <image
          v-if="walking"
          class="inu"
          :style="{width: 35, height: 35}"
          :source="require('../assets/5673.gif')"/>
      </nb-row>
      <nb-row :style="{height: 35}">
      <nb-col :style="{width: 60}">
      <nb-button small light
        v-if="!walking"
        :on-press="onPressWalking"
      >
        <nb-text>散歩開始</nb-text></nb-button>
      <nb-button small primary
        v-else
        :on-press="onPressWalking"
      >
        <nb-text>散歩終了</nb-text>
      </nb-button>
        </nb-col>
        <nb-col>
      <text-input v-model="comment" />
        </nb-col>
        <nb-col :style="{width: 45}">
          <nb-button small light
            :on-press="onPressSend"
          >
            <nb-text>投稿</nb-text>
          </nb-button>
        </nb-col>
        <nb-col :style="{width: 50}">
          <image-picker @load="onLoadPhoto" />
        </nb-col>
      </nb-row>
      </nb-grid>
  </nb-container>
</template>

<script>
import Action from "../components/Action";
import ImagePicker from "../components/ImagePicker";
import { firebase } from '../firebase'

export default {
    components: { Action, ImagePicker },
    props: {
      navigation: {
        type: Object
      }
    },
    mounted () {
      if(!firebase.auth().currentUser) {
        this.navigation.navigate('Login')
      }
    },
    data: function() {
      return {
          walking: false,
          text: '',
          comment: '',
          photoUri: '',
          actions: [
            {
              postId: 1,
              body: "a Sunny Day",
              icon: "",
              likeCount: 5,
              createdAt: "ドキュメントの登録日時"
            },
            {
              postId: 2,
              body: "a Sunny Day",
              icon: "",
              likeCount: 10,
              createdAt: "ドキュメントの登録日時"
            },
            {
              postId: 3,
              body: "a Sunny Day",
              icon: "",
              likeCount: 100,
              createdAt: "ドキュメントの登録日時"
            },
            {
              postId: 4,
              body: "a Sunny Day",
              icon: "",
              likeCount: 100,
              createdAt: "ドキュメントの登録日時"
            },
            {
              postId: 5,
              body: "a Sunny Day",
              icon: "",
              likeCount: 100,
              createdAt: "ドキュメントの登録日時"
            }
          ]
        }
    },
    methods: {
      onPressWalking: function() {
        this.walking = !this.walking
      },
      onPressSend: function() {
        alert(this.comment)
    },
    onLoadPhoto(uri) {
      console.log(uri)
      this.photoUri = uri
    }
  }
}
</script>

<style>
</style>
