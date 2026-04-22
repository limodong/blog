import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from './router';
import { showMessage } from './utils/showMessage'
import './mock'; // mock必须在axios请求之前引入，否则无法拦截请求
import './api/banner';

Vue.prototype.$showMessage = showMessage;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app'); // 调用$mount方法将APP组件挂载到id为app的容器中