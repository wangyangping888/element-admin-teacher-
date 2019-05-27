<template>
	<el-aside class="transition" :width="isCollapse?'64px':'220px'">
		<!--
			默认打开第一个：default-active="menu[0].items[0].path"
		-->
		<el-menu :default-active="defaultActive" :unique-opened="true" class="el-menu-vertical-demo" @select="select" :collapse="isCollapse" background-color="#2f4050" text-color="#a7b1c2" active-text-color="#ffffff">
			<el-submenu :index="'index'+index" v-for="(item,index) in menu">
				<template slot="title">
					<i class="fa" :class="'fa-'+item.icon"></i>
					<span v-text="item.title"></span>
				</template>
				<el-menu-item-group>
					<el-menu-item :index="sub.path" v-for="sub in item.items">
						<i class="fa" :class="'fa-'+sub.icon"></i>
						<span v-text="sub.title"></span>
					</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</el-aside>
</template>

<script>
	import axios from 'axios'
	export default {
		data: function() {
			return {
				menu: [],
				defaultActive: ''
			}
		},
		methods: {
			// 菜单被选中
			select: function(path) {
				let tab = this.getTab(path);
				if(tab != false)
					this.openTab(tab);
			},
			// 根据path获取tab元素
			getTab: function(path) {
				for(let i in this.menu) {
					for(let j in this.menu[i].items) {
						if(this.menu[i].items[j].path == path) {
							// 这样返回是一个纯对象，不含Vue对象属性
							return { ...this.menu[i].items[j]
							};
						}
					}
				}
				return false;
			}
		},
		computed: {
			isCollapse: function() {
				return this.$store.state.Tabs.mini;
			}
		},
		created: function() {
			const path = this.$route.path;
			// 获取管理后台菜单
			this.menu = require("@/admin.nav.json");
			// 展开当前页面菜单
			this.defaultActive = path;
			// 初始化tabs数组
			this.$store.commit('initTab', this.menu);
			// 根据路径显示当前的tab
			const tab = this.getTab(path);
			if(path != "/admin/home") {
				this.openTab(tab);
			}
		}
	}
</script>

<style>
	.transition {
		-webkit-transition: all 0.3s linear;
		transition: all 0.3s linear;
	}
	
	.fa {
		margin-right: 5px;
	}
	
	.el-aside {
		background-color: #2f4050;
	}
	
	.el-aside .el-menu {
		border-right: none!important;
	}
	
	.el-aside .el-menu.v-leave-active span,
	.el-aside .el-menu.v-leave-active .el-submenu__icon-arrow,
	.el-aside .el-menu.v-leave-active ul {
		/*优化左侧菜单收起与展开动画效果 */
		display: none;
	}
	
	.el-aside::-webkit-scrollbar {
		display: none
	}
	/*隐藏分组内容*/
	
	.el-aside .el-menu-item-group__title {
		display: none;
	}
	
	.el-aside .is-active {
		font-weight: bolder;
		background-color: #263340!important;
	}
	
	.el-aside .is-opened .el-submenu__title {
		background-color: #263340!important;
	}
	
	.el-aside .is-opened ul.el-menu {
		border-left: 4px solid #3a8ee6!important;
	}
</style>