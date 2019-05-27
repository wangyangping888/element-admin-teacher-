export default {
	state: {
		mini: false,
		tabs: [],
		activeTab: ''
	},
	mutations: {
		// 设置是否为mini侧边栏模式
		setMini: function(state, flag) {
			state.mini = flag;
		},
		// 把菜单中第一个作为默认打开
		initTab: function(state, menu) {
			// 如果已经初始化，则不再重复初始化
			if(state.tabs.length > 0) {
				return;
			}
			let first = menu[0].items[0];
			state.tabs.push(first);
			state.activeTab = first.path;
		},
		// 添加tab
		addTab: function(state, tab) {
			// 如果tab.path中"/admin/"特定字符开头则不添加！！！
			if(tab.path.indexOf("/admin/") != 0) {
				return;
			}
			let flag = false;
			// 查看数组中是否存在点击项
			state.tabs.forEach((t, index) => {
				if(t.path == tab.path) {
					flag = true;
				}
			});
			if(!flag) {
				// 如果不存在则新增点击项
				state.tabs.push(tab);
			}
			// tabs中切换到点击的菜单项
			state.activeTab = tab.path;
		},
		// 移除tab
		removeTab: function(state, path) {
			// 遍历找出下一个处于激活状态的tab
			if(state.activeTab == path) {
				state.tabs.forEach((tab, index) => {
					if(state.activeTab === path) {
						let nextActiveTab = state.tabs[index + 1] || state.tabs[index - 1];
						if(nextActiveTab) {
							state.activeTab = nextActiveTab.path;
						}
					}
				});
			}
			// 从数组删除该选项
			state.tabs = state.tabs.filter(tab => tab.path !== path);
		},
		// 切换到指定的tab上
		setActiveTab: function(state, path) {
			state.activeTab = path;
		}
	},
	actions: {

	}
}