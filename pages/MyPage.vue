<template>
  <view>
    <view class="timeline">
      <Action v-for="act in actions" :key="act.postId" :act="act"></Action>
    </view>
    <view class="action">
    <button
      v-if="walking"
      :on-press="onPressWalking"
      title="散歩開始"
      color="#841584"
    />
    <button
      v-else
      :on-press="onPressWalking"
      title="散歩終了"
      color="#841584"
    />
    <text-input v-model="comment" />
    <button
      :on-press="onPressSend"
      title="投稿"
      color="#993099"
      accessibility-label="Learn more about this purple button"
    />
    <image-picker @load="onLoadPhoto" />
    </view>
  </view>
</template>

<script>
import Action from "../components/Action";
import ImagePicker from "../components/ImagePicker";
import { firebase, auth, firestore } from '../firebase'

export default {
    components: { Action, ImagePicker },
    props: {
      navigation: {
        type: Object
      }
    },
    async mounted () {
      if(!auth.currentUser) {
        this.navigation.navigate('Login')
      }

      let snapshot = await firestore
        .collection('mypage-post')
        .where("userId", "==", auth.currentUser.uid)
        .orderBy('createdAt', 'desc')
        .get()
      let actions = []
      snapshot.forEach(doc => {
        const data = doc.data()
        let post = doc.data()
        post.postId = doc.id
        post.createdAt = data.createdAt.toDate()
        actions.push(post)
      })
      this.actions = actions
    },
    data: function() {
      return {
          walking: true,
          currentWalkingId: null,
          text: '',
          comment: '',
          photoUri: '',
          actions: []
        }
    },
    methods: {
      async onPressWalking() {
        if (this.walking) {
          // 散歩開始の場合
          await this._upsertPost('散歩を開始しました', true)
        } else {
          // 散歩終了の場合
          await this._upsertPost('散歩を終了しました')
          this.currentWalkingId = null
        }
        this.walking = !this.walking
      },
      async onPressSend() {
        await this._upsertPost(this.comment)
        alert('投稿しました！')
        this.comment = ''
      },
      async onLoadPhoto(uri) {
        alert(uri)
      },
      async _upsertPost(body, walkingStartFlug) {
        // 画像をアップロード
        // const blob = await this._uriToBlob(result.uri)
        // const commaSplittedUri = result.uri.split('.')
        // const ext = commaSplittedUri[commaSplittedUri.length - 1]
        // const uploadPath = `userIcon/${this.user.id}/icon.${ext}`
        // await storage.ref(uploadPath).put(blob, { contentType: `image/${ext}` }) 

        // DBに投稿を登録する
        try {
          await firestore.collection('mypage-post').add({
            userId: auth.currentUser.uid,
            body: body,
            images: [],
            likeCount: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          })          
        } catch (err) {
          console.error(err)
        }

        if (walkingStartFlug) {
          // 散歩開始の時に親ドキュメントを追加してIDを保存
          const doc = await firestore.collection('global-post').add({
            userId: auth.currentUser.uid,
            body: '散歩記録',
            images: [],
            likeCount: 0,
            childPostList: [],
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          })
          this.currentWalkingId = doc.id
        } else if (this.currentWalkingId !== null) {
          // 散歩中の場合、子投稿に追加
          await firestore
            .collection('global-post')
            .doc(this.currentWalkingId)
            .collection('child-post')
            .add({
              userId: auth.currentUser.uid,
              body: body,
              images: [],
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
          
          await firestore.collection('global-post').doc(this.currentWalkingId).update({
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          })
        } else {
          // ただの投稿
          await firestore.collection('global-post').add({
            userId: auth.currentUser.uid,
            body: this.comment,
            images: [],
            likeCount: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          })
        }
      },
      _uriToBlob (uri) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            // return the blob
            resolve(xhr.response);
          };
          xhr.onerror = function() {
            // something went wrong
            reject(new Error('uriToBlob failed'));
          };
          // this helps us get a blob
          xhr.responseType = 'blob';
          xhr.open('GET', uri, true);
          xhr.send(null);
      });
    }
  }
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.timeline {
  background-color: white;
}
.action {
  background-color: lightslategray;
  color: aquamarine;
}
.text-color-primary {
  color: blue;
}
</style>
