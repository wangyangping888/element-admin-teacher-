import Vue from 'vue'
import Router from 'vue-router'
import Admin from './components/Admin.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Tab1 from './views/Tab1.vue'
import Tab2 from './views/Tab2.vue'
import Tab3 from './views/Tab3.vue'
import Tab4 from './views/Tab4.vue'

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/admin',
		component: Admin,
		/**管理后台子路由**/
		children: [{
			path: '',
			alias:'home',
			name: 'home',
			component: Home
		}, {
			path: 'tab1',
			name: 'table1',
			component: Tab1
		}, {
			path: 'tab2',
			name: 'table2',
			component: Tab2
		}, {
			path: 'tab3',
			name: 'table3',
			component: Tab3
		}, {
			path: 'tab4',
			name: 'table4',
			component: Tab4
		}]
	},{
		name:'login',
		path:'/login',
		component:Login
	}]
});