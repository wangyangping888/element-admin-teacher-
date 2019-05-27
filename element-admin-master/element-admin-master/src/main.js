import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
/**加载element组件库**/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/**字体图标**/
import "./assets/css/font-awesome.css"
// ajax 通信工具
import axios from "axios"

Vue.use(ElementUI);
Vue.config.productionTip = false

/** 
 * 打开tab的方法，
 * path：路径  
 * tab：{title:标题,icon:图标,path:路径}
 * 注：icon 为fontawesome字体图标库，不需要"fa-"前缀
 * */
Vue.prototype.openTab = function(tab, query = {}) {
	store.commit('addTab', tab);
	router.push({
		path: tab.path,
		query: query
	});
}

/**vue实例**/
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')