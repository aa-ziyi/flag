import Vue from 'vue'
import './app.less'
import "taro-ui-vue/dist/style/components/flex.scss";
import "taro-ui-vue/dist/style/components/grid.scss"

const App = new Vue({
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
