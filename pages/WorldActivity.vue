<template>
  <view>
    <view>
      <text>WorldActivity</text>
      <button title="MyPage" @press="onMyPage" />
    </view>
    <view class="container">
      <TweetSlice v-for="post in globalPost" :key="post.postId" :post="post" />
    </view>
  </view>
</template>

<script>
import { firebase } from '../firebase'
import TweetSlice from "./TweetSlice";

export default {
  components: { TweetSlice },
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
      globalPost: [
        {
          postId: 1,
          userName: "ぽち",
          icon:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          body: "本文",
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 2,
          userName: "ぽち",
          icon:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          body: "本文",
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 3,
          userName: "ぽち",
          icon:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          body: "本文",
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 4,
          userName: "ぽち",
          icon:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          body: "本文",
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
