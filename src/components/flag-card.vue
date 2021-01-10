<template>
  <AtCard
    note="剩余3天"
    title="坚持吃素3天"
    thumb="http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
  >
    <view class="flag-content">
      <view class="flag-content-top">
        坚持过今天，就是踏出胜利的第一步了。
      </view>
      <view class="flag-content-bottom">
        <view>第一天</view>
        <view class="color-success">
          今日挑成功
        </view>
      </view>
    </view>
  </AtCard>
</template>
<script>
import { AtCard } from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/card.scss";
export default {
  components:{
    AtCard
  }
}
</script>
<style lang="less" scoped>
 .at-card {
    margin: 0 10px;
    margin-bottom: 20px;
    .at-card__header-title {
      font-size: 24px;
    }
    .at-card__content-note.hydrated {
      font-size: 14px;
    }
  }
  .flag-content {
    .flag-content-top {
      font-size: 24px;
      line-height: 30px;
      height: 60px;
      margin-bottom: 20px;
    }
    .flag-content-bottom {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>