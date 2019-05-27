import Vue from 'vue'
import Vuex from 'vuex'
import Tabs from "./tabs"
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		Tabs:Tabs
	}
});