import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from './router';
import { showMessage } from './utils/showMessage'

showMessage({ type: 'success', content: "asdasdas", duration: 1000 })
new Vue({
  router,
  render: h => h(App),
}).$mount('#app'); // 调用$mount方法将APP组件挂载到id为app的容器中