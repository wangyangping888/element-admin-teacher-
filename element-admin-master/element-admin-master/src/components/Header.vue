<template>
	<el-header height="60px">
		<el-row type="flex" justify="space-between" align="middle">
			<el-col style="width: 30px;">
				<i class="close-btn el-icon-tickets" @click="$store.commit('setMini',!$store.state.Tabs.mini)"></i>
			</el-col>
			<el-col id="header-search" style="width: 200px;">
				<el-input placeholder="请输入搜索内容" v-model="searchStr"  size="small" clearable class="input-with-select">
					<i slot="prefix" class="el-input__icon el-icon-search"></i>
				</el-input>
			</el-col>
			<el-col id="header-menu" :span="12">
				<el-menu class="el-menu-demo" mode="horizontal" background-color="#FFFFFF">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项1</el-menu-item>
							<el-menu-item index="2-4-2">选项2</el-menu-item>
							<el-menu-item index="2-4-3">选项3</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="3">
						<el-badge value="12" class="item">
							消息中心
						</el-badge>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col style="width: 80px;">
				<el-dropdown>
					<span class="el-dropdown-link">
		    			管理员<i class="el-icon-arrow-down el-icon--right"></i>
		  		</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>修改头像</el-dropdown-item>
						<el-dropdown-item>个人资料</el-dropdown-item>
						<el-dropdown-item>联系我们</el-dropdown-item>
						<el-dropdown-item>信箱</el-dropdown-item>
						<el-dropdown-item>退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-row>
	</el-header>
</template>

<script>
	export default {
		data(){
			return {
				searchStr:''
			};
		}
	}
</script>

<style>
	.el-header {
		overflow: hidden;
		border-bottom: 1px solid #e4e4e4;
		background-color: #FFFFFF;
	}
	/*消息中心数字*/
	
	.el-badge__content.is-fixed {
		top: 1.5em!important;
	}
	
	.el-dropdown {
		line-height: 60px;
	}
	
	.close-btn {
		padding: 6px 10px;
		background-color: #409EFF;
		color: #FFFFFF;
		border-radius: 3px;
		cursor: pointer;
	}
	
	.close-btn:hover {
		background-color: #3a8ee6;
	}
	/* 小屏时隐藏搜索框，菜单栏 */
	
	@media only screen and (max-width: 900px) {
		#header-menu,
		#header-search {
			display: none;
		}
	}
</style>