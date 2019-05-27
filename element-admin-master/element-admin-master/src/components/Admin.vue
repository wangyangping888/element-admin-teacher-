<!--管理后台首页-->
<template>
	<el-container>
		<admin-aside></admin-aside>
		<el-container>
			<admin-header></admin-header>
			<el-main>
				<admin-tab></admin-tab>
				<div class="content">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</div>
			</el-main>
			<el-footer height="36px">© 2018-2019 niyinlong@126.com</el-footer>
		</el-container>
	</el-container>
</template>

<script>
	import AdminHeader from "@/components/Header.vue"
	import AdminAside from "@/components/Aside.vue"
	import AdminTab from "@/components/Tabs.vue"

	export default {
		data: function() {
			return {};
		},
		methods: {},
		components: {
			AdminHeader,
			AdminAside,
			AdminTab
		}
	}
</script>

<style type="text/css">
	.el-main {
		position: relative;
		padding: 0px!important;
		background-color: #f2f2f2;
		overflow: hidden!important;
	}
	
	.el-main .content {
		height: calc(100% - 73px);
		width: calc(100% - 30px);
		top: 43px;
		padding: 15px;
		position: absolute;
		overflow-y: auto;
	}
	
	.el-footer {
		line-height: 36px;
		border-top: 1px solid #e7eaec;
	}
</style>