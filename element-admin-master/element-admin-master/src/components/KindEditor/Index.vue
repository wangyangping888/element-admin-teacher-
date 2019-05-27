<template>

	<textarea id="editor_id" name="content" style="width:700px;height:300px;">{{content}}</textarea>

</template>

<script>
	import "./kindeditor/kindeditor.js";
	import "./kindeditor/kindeditor-all-min.js";
	import "./kindeditor/lang/zh-CN.js";
	import './kindeditor/themes/default/default.css'

	export default {
		data() {
			return {
				content: ''
			}
		},
		mounted() {
			window.KindEditor.ready(function(K) {
				window.editor = K.create('#editor_id');
			});
		}
	}
</script>

<style>

</style>