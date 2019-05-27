<template>
	<el-tabs v-model="active" @tab-remove="removeTab" @tab-click="clickTab">
		<!--第一个不能关闭，其他都能关闭-->
		<el-tab-pane v-for="(item,index) in tabs" :closable="index!=0" :name="item.path" :key="item.path">
			<span slot="label"><i class="fa " :class="'fa-'+item.icon"></i> {{item.title}}</span>
		</el-tab-pane>
	</el-tabs>
</template>
<script>
	export default {
		data: function() {
			return {};
		},
		methods: {
			clickTab: function(tab, event) {
				// 跳转到点击项
				this.$router.push({
					path: this.active
				})
			},
			removeTab: function(path) {
				// 关闭tab
				this.$store.commit('removeTab', path);
			}
		},
		computed: {
			tabs: function() {
				return this.$store.state.Tabs.tabs;
			},
			active: {
				get: function() {
					return this.$store.state.Tabs.activeTab;
				},
				set: function(path) {
					if(typeof path == "string") {
						this.$store.commit('setActiveTab', path);
						this.$router.push({
							path: path
						})
					}
				}
			}
		}
	}
</script>

<style>
	.el-tabs {
		box-sizing: border-box;
		background-color: #FFFFFF;
		border-bottom-color: #2f4050;
	}
	
	.el-tabs__nav-scroll {
		padding: 0px 10px;
	}
	
	.el-tabs__header {
		margin: 0px!important;
	}
	
	.el-tabs__content {
		display: none;
	}
	
	.el-tabs .el-tabs__nav {
		border-left: none!important;
	}
	
	.el-tabs .fa {
		margin-right: 0px;
	}
</style>