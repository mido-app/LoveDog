<template>
  <view>
    <view>
      <button title="MyPage" @press="onMyPage" />
    </view>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
    <view>
      <TweetSlice v-for="post in globalPost" :key="post.postId" :post="post" />
    </view>
    </scroll-view>
  </view>
</template>

<script>
import Vue from 'vue-native-core';
import { VueNativeBase } from 'native-base';
import TweetSlice from "../components/TweetSlice";

Vue.use(VueNativeBase);

export default {
  components: { TweetSlice },
  data: function() {
    return {
      globalPost: [
        {
          postId: 1,
          userName: "ぽち",
          icon: "https://facebook.github.io/react-native/docs/assets/favicon.png",
          body: "本文",
          counter: 0,
          picture: "http://www.cor-art.com/best/tenkei/down/SA001.JPG",
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 2,
          userName: "太郎",
          icon: "http://arch.casio.jp/image/dc/images/fh20_gallery_pic04_b.jpg",
          body: "本文",
          counter: 0,
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 3,
          userName: "ぽち",
          icon: "http://arch.casio.jp/image/dc/images/fh20_gallery_pic04_b.jpg",
          body: "本文",
          counter: 0,
          picture: "http://www.cor-art.com/best/tenkei/down/SA001.JPG",
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 4,
          userName: "ぽち",
          icon: "http://arch.casio.jp/image/dc/images/fh20_gallery_pic04_b.jpg",
          body: "本文",
          counter: 0,
          picture: "http://www.cor-art.com/best/tenkei/down/SA001.JPG",
          createdAt: "ドキュメントの登録日時"
        }
      ]
    };
  },
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    onMyPage() {
      this.navigation.navigate("MyPage");
    }
  }
};
</script>
