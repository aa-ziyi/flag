<template>
  <view class="home-page">
    <view class="home-top">
      我的Flag
      <AtGrid
        :data="
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '5'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '10'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '30'
            },
          ]"
      />
    </view>
    <view class="home-in-flag">
      <view class="at-row at-row--wrap">
        <view class="at-col  at-col-6 at-col--wrap">
          <FlagCard />
        </view>
        <view class="at-col at-col-6 at-col--wrap">
          <FlagCard />
        </view>
        <view class="at-col at-col-6 at-col--wrap">
          <FlagCard />
        </view>
      </view>
      <view class="mb20">
        <AtButton
          loading
          type="primary"
          :on-click="handleGoAdd"
        >
          + New Flag Go
        </AtButton>
      </view>
    </view>
    <AtList>
      <AtListItem
        title="刚刚已完成第三天打卡，剩余"
        note="3天素食打卡"
        extra-text="查看心得"
        arrow="right"
        thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
      />
      <AtListItem
        title="刚刚已完成第三天打卡，剩余"
        note="3天素食打卡"
        extra-text="查看心得"
        arrow="right"
        thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
      />
      <AtListItem
        title="标题文字"
        note="描述信息"
        extra-text="详细信息"
        arrow="right"
        thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
      />
    </AtList>
    <AtTabBar
      fixed
      :tab-list="tabList1"
      :on-click="handleBottomClick"
      :current="current1"
    />
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro';
import { AtButton, AtNoticebar,AtTabBar ,AtGrid,AtList, AtListItem} from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/button.scss";
import "taro-ui-vue/dist/style/components/tab-bar.scss";
import "taro-ui-vue/dist/style/components/list.scss";
import "taro-ui-vue/dist/style/components/noticebar.scss";
import FlagCard from '../../components/flag-card.vue';
import './index.less' 
export default {
    components: {
    AtButton,
    AtTabBar,
    AtList, 
    AtListItem,
    AtGrid,
    FlagCard,
    // AtNoticebar,
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
    handleGoAdd() {
      console.log('handleGoAdd');
      Taro.navigateTo({
        url: '/pages/add-flag/index'
      })
    },
    handleBottomClick(){

    }
  },
}
</script>
