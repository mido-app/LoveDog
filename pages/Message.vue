<template>
  <nb-container>
    <nb-header />
    <nb-content padder>
      <nb-view v-for="card in childPostList" :key="card.postId">
      <nb-card>
        <nb-card-item bordered>
          <nb-left>
             <view v-for="iconpaths in userList" :key="iconpaths.iconPath">
            <image :style="{width: 50, height: 50}" :source="{uri: iconpaths.iconPath}" />
            </view>
            <nb-body>
              <nb-text v-for="username in userList" :key="username.name">{{ username.name }}</nb-text>
              <nb-text >{{ card.createdAt }}</nb-text>
            </nb-body>
          </nb-left>
        </nb-card-item> 
        <nb-card-item>
          <nb-body>
            <nb-text>{{ card.body }}</nb-text>
                <!-- <view  class="card-item-image"  v-for="imageList in card" :key="imageList.images"> -->
                    <view class="card-item-image" v-for="images in card.images" :key="images.imagePath">
                     <!-- <image :style="{width: 70, height: 70 }" :source="{uri: images.imagePath}"/> -->
                     <image :style="{width: 150, height: 150 }" :source="images.imagePath"/>
                    </view>
                <!-- </view> -->
            <!-- <image :source="cardImage" class="card-item-image" :style="stylesObj.cardItemImage"/> -->
          </nb-body>
        </nb-card-item>
        <nb-card-item :style="{ paddingVertical: 0 }">
          <nb-left>
            <nb-button transparent>
              <nb-icon name="thumbs-up"></nb-icon>
              <nb-text>{{ card.likeCount }}</nb-text>
            </nb-button>
          </nb-left>
        </nb-card-item>
      </nb-card>
      </nb-view>
    </nb-content>
  </nb-container>
</template>

<script>
  import { Dimensions } from "react-native";
  import logo from "../assets/icon.png";
  import cardImage from "../assets/5673.gif";
  const deviceWidth = Dimensions.get("window").width;
  export default {
    data: function() {
      return {
        logo,
        cardImage,
        stylesObj: {
          cardItemImage: {
            resizeMode: "cover",
            width: deviceWidth / 1.18
          }
        },

        childPostList: [
        {
            postId: '子投稿ID',
            body: '散歩を開始しました',
            images: [ 
                //{imagePath: require('../assets/5673.gif') },
                // {imagePath: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
                // {imagePath: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
             ],
            likeCount: '80000',
            createdAt: '投稿日時：1998/6/20/05:12'
         },

                 {
            postId: '子投稿ID',
            body: '私は昨日日の出とともに散歩をしました。ほぼ寝起きの私にとって、小鳥たちのさえずりは睡魔を誘う子守唄のようでした。犬も自分で散歩できるともっとお布団と一緒に入れるのになーと思った今日この頃でした。',
            images: [ 
                {imagePath: require('../assets/5673.gif') },
                // {imagePath: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
                // {imagePath: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
             ],
            likeCount: '80000',
            createdAt: '投稿日時：1998/6/20/09:12'
         },

                 {
            postId: '子投稿ID',
            body: '愛犬！',
            images: [ 
                {imagePath: require('../assets/5673.gif') },
                // {imagePath: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
                // {imagePath: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
             ],
            likeCount: '80000',
            createdAt: '投稿日時：1998/6/20/13:12'
         },


       ],

        userList:[
          {
            id: '31415926',
            name: 'すずき',
            iconPath: "https://facebook.github.io/react-native/docs/assets/favicon.png",
          }
      ],

      };
    },
    methods: {
      onPressLike(){
        likeCount = likeCount+1;
      }
    
    }
  };
</script>

<style>
  .card-item-image {
    align-self: center;
    /* margin-vertical: 5; */
  }

.center{
  align-items: center;
}
</style>