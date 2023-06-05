// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './assets/js/jquerysession.js'
/*引入资源请求插件*/
import VueResource from 'vue-resource'
import VueBlu from "vue-blu"
import "vue-blu/dist/css/vue-blu.min.css"

Vue.use(VueBlu)

/*使用VueResource插件*/
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;
//Vue.prototype.HOST = 'http://192.168.31.141:8888/yaoxintong/'     //设置全局属性
Vue.prototype.NEO4J_HOST = 'http://localhost:8081/yaoxintong/'     //设置全局属性
//Vue.prototype.HOST = 'http://111.207.243.71:8838/yaoxintong/'     //设置全局属性
//Vue.prototype.HOST = 'http://192.168.31.112:8888/yaoxintong'
//Vue.prototype.HOST = 'http://localhost:8080/yaoxintong'
Vue.prototype.HOST = 'http://10.108.208.28:8081/yaoxintong/'
Vue.prototype.HOST_9090 = 'http://10.108.208.28:9090/medicinekg'
Vue.prototype.HOST_medicinekg = 'http://10.108.208.28:9898/medicinekg'
//Vue.prototype.HOST_medicinekg = 'http://10.108.208.28:9898/medicinekg'
//Vue.prototype.HOST = 'http://192.168.31.141:8888/yaoxintong'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
