<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style>
	html,
	body,
	#app,
	#app>.el-container {
		height: 100%;
		margin: 0;
		padding: 0;
	}
	
	/* 卡片右侧按钮样式*/
	
	.el-card .clearfix .el-button {
		float: right;
		padding: 3px 0;
	}
</style>