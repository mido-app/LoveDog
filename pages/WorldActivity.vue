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
import Vue from 'vue-native-core';
import { firebase, firestore, storage } from '../firebase'
import TweetSlice from "../components/TweetSlice";

export default {
  components: { TweetSlice },
  props: {
    navigation: {
      type: Object
    }
  },
  async mounted() {
    if (!firebase.auth().currentUser) {
      this.navigation.navigate("Login");
    }

    // 投稿を取得
    let snapshot = await firestore
      .collection('global-post')
      .orderBy('updatedAt', 'desc')
      .get()
    let globalPost = []
    snapshot.forEach(doc => {
      const data = doc.data()
      let post = doc.data()
      post.postId = doc.id
      post.createdAt = data.createdAt.toDate()
      post.updatedAt = data.updatedAt.toDate()
      globalPost.push(post)      
    })

    console.log(globalPost)

    // ユーザを取得
    let userIdList = globalPost.map(post => post.userId).filter((x, i, self) => self.indexOf(x) === i)
    console.log(userIdList)
    let userDocList = await Promise.all(
      userIdList.map(uid => firestore.collection('user').doc(uid).get())
    )

    await Promise.all(
      globalPost.map(async post => {
        const userDoc = userDocList.filter(doc => doc.id === post.userId)[0]
        const user = userDoc.data()      
        post.icon = await storage.ref(user.iconPath).getDownloadURL()      
        post.userName = user.name
      })
    )

    console.log(globalPost)
    this.globalPost = globalPost
  },
  data: function() {
    return {
      globalPost: []
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
