<template>
  <view>
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
import { firebase } from "../firebase";
import TweetSlice from "../components/TweetSlice";

export default {
  components: { TweetSlice },
  props: {
    navigation: {
      type: Object
    }
  },
  mounted() {
    if (!firebase.auth().currentUser) {
      this.navigation.navigate("Login");
    }
  },
  data: function() {
    return {
      globalPost: [
        {
          postId: 1,
          userId: 'pochi',
          userName: "ぽち",
          icon:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          body: "本文",
          likeCount: 0,
          picture: "http://www.cor-art.com/best/tenkei/down/SA001.JPG",
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 2,
          userId: 'pochi',
          userName: "太郎",
          icon: "http://arch.casio.jp/image/dc/images/fh20_gallery_pic04_b.jpg",
          body: "本文",
          likeCount: 0,
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 3,
          userId: 'pochi',
          userName: "ぽち",
          icon: "http://arch.casio.jp/image/dc/images/fh20_gallery_pic04_b.jpg",
          body: "本文",
          likeCount: 0,
          picture: "http://www.cor-art.com/best/tenkei/down/SA001.JPG",
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 4,
          userId: 'pochi',
          userName: "ぽち",
          icon: "http://arch.casio.jp/image/dc/images/fh20_gallery_pic04_b.jpg",
          body: "本文本文ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
          likeCount: 0,
          picture: "http://www.cor-art.com/best/tenkei/down/SA001.JPG",
          createdAt: "ドキュメントの登録日時"
        },
        {
          postId: 5,
          userId: 'samp_user',
          userName: "散歩ユーザー",
          icon: "http://arch.casio.jp/image/dc/images/fh20_gallery_pic04_b.jpg",
          body: "散歩しました",
          likeCount: 0,
          childPostList: [
            {
              postId: "5",
              body: "散歩を開始",
              createdAt: "投稿日時"
            },
            {
              postId: "6",
              body: "散歩を終了",
              createdAt: "投稿日時"
            }
          ],
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
