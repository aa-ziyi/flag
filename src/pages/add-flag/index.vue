<template>
  <view class="add-flag-page">
    <AtForm>
      <view class="form-content">
        <AtInput 
          name="value" 
          title="名称" 
          type="text" 
          placeholder="请输入Flag" 
          :value="flagName"
          :on-change="handleChange" 
        />
        <picker
          mode="date"
          :value="dateSel"
          @change="handleDateChange"
        >
          <view class="picker-date">
            <view class="title">
              开始日期
            </view>
            <view class="content">
              {{ dateSel }}
            </view>
          </view>
        </picker>
        <view class="picker-date">
          <view class="title">
            天数
          </view>
          <view class="content">
            <AtInputNumber
              :width="200"
              :min="0"
              :max="10"
              :step="1"
              :value="dayLength"
              :on-change="handleNumberChange"
            />
          </view>
        </view>
      </view>
      <AtButton
        form-type="submit"
        :on-click="onSubmit"
        type="primary"
        class=""
      >
        提交
      </AtButton>
    </AtForm>

    快速参与
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
  </view>
</template>
<script>
import { AtForm, AtInput, AtButton,AtInputNumber } from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/form.scss";
import "taro-ui-vue/dist/style/components/button.scss";
import "taro-ui-vue/dist/style/components/input.scss";
import "taro-ui-vue/dist/style/components/input-number.scss";
import "taro-ui-vue/dist/style/components/icon.scss";
import './index.less' 

import FlagCard from '../../components/flag-card.vue';
export default {
  components:{
    AtForm,
    AtInput,
    AtButton,
    AtInputNumber,
    FlagCard
  },
  data() {
    return {
      flagName:'',
      dayLength: 3,
      dateSel: new Date().toLocaleDateString().replaceAll('/','-'),
    }
  },
  created() {
  },
  methods:{
    handleDateChange (e) {
      this.dateSel = e.detail.value
    },
    handleChange (e) {
      this.flagName = e.detail.value
    },
    handleNumberChange(val) {
      this.dayLength = val;
    },
    onSubmit() {

    },
    onReset() {

    }
  }
}
</script>
<style lang="scss" scoped>
.add-flag-page {
  padding: 20px;
  font-size:0.68267rem;
  .picker-date {
    display: flex;
    align-items: center;
    padding: 0.512rem 0;
    color: #333;
    background-color: #FFF;
    margin-left: 0.68267rem;
    margin-bottom: 1PX;
    border-bottom: 1px solid #d6e4ef;
    .title {
      margin-right: 0.34133rem;
      width: 3.66933rem;
      font-size: 0.68267rem;
      line-height: 1.5;
      vertical-align: middle;
      text-align: left;
    }
    .content {
      color: #333;
      font-size: 0.68267rem;
      height: 0.95573rem;
      line-height: 1.5;
    }
  }
  .form-content {
    margin-bottom: 40px;
  }
}
</style>