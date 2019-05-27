<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>卡片名称</span>
			<el-button type="text">操作按钮</el-button>
		</div>
		<Editor />
	</el-card>
</template>

<script>
	import Editor from "@/components/KindEditor/Index";
	export default {
		
		components:{
			Editor
		}
	}
</script>

<style type="text/css">

</style>