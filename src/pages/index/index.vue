<template>
  <view class="home-page">
    <view class="home-top">
      <text>我的flag: 进行中(15)</text>      <text>已完成（8）,共： 100</text>
    </view>
    <view class="home-in-flag">
      <view class="at-row at-row--wrap">
        <view class="at-col  at-col-6 at-col--wrap">
          <AtCard
            note="剩余3天"
            title="坚持吃素3天"
            thumb="http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
          >
            <view class="flag-content">
              第一天，是件很容易的事情
              <view class="flag-content-bottom">
                <view>第一天</view>
                <view class="color-success">
                  今日挑成功
                </view>
              </view>
            </view>
          </AtCard>
        </view>
        <view class="at-col at-col-6 at-col--wrap">
          <AtCard
            note="第二天"
            title="这是个标题"
            thumb="http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
          >
            <view class="flag-card-content">
              这也是内容区 可以随意定义功能
            </view>
          </AtCard>
        </view>
        <view class="at-col at-col-6 at-col--wrap">
          <AtCard
            note="第三天"
            title="这是个标题"
            thumb="http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
          >
            <view class="flag-card-content">
              这也是内容区 可以随意定义功能
            </view>
          </AtCard>
        </view>
      </view>
    </view>
    <AtTabBar
      fixed
      :tab-list="tabList1"
      :on-click="handleClick"
      :current="current1"
    />
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtButton, AtToast, AtNoticebar,AtTabBar,AtCard } from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/button.scss"
import "taro-ui-vue/dist/style/components/toast.scss"
import "taro-ui-vue/dist/style/components/noticebar.scss"
import "taro-ui-vue/dist/style/components/tab-bar.scss";
import "taro-ui-vue/dist/style/components/badge.scss";
import "taro-ui-vue/dist/style/components/card.scss";

import "taro-ui-vue/dist/style/components/flex.scss";
import './index.less' 
export default {
    components: {
    // AtButton,
    // AtToast,
    // AtNoticebar,
    AtTabBar,
    AtCard
  },
  data () {
    return {
      current1: 0,
      tabList1: [
        { title: '首页', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png', text: 'new' },
        { title: 'flag加油站', image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png' },
        { title: '我的', image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png', text: '100', max: 99 }
      ]
    }
  },
  methods: {
  },
}
</script>