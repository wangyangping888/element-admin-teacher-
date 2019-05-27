<template>

	<div class="login-page">
		<el-row type="flex" justify="center">
			<el-col :sm="12" :xs="22">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>用户登录</span>
						<el-button style="float: right; padding: 3px 0" type="text">注册</el-button>
					</div>
					<div class="login">
						<el-form :model="form" ref="form" label-width="80px">
							<el-form-item label="用户名" prop="user" :rules="{required: true, message: '用户名不能为空！', trigger: 'blur' }">
								<el-input v-model="form.user" placeholder="请输入用户名/邮箱/手机号" prefix-icon="fa fa-user"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="pwd" :rules="{required: true, message: '密码不能为空！', trigger: 'blur' }">
								<el-input v-model="form.pwd" type="password" placeholder="请输入密码" prefix-icon="fa fa-lock"></el-input>
							</el-form-item>
							<el-form-item >
								<el-button type="primary" @click="submitForm('form')" :loading="loading">登录</el-button>
								<el-button @click="resetForm('form')">重置</el-button>
							</el-form-item>
						</el-form>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				form: {
					user: '',
					pwd: ''
				},
				loading: false
			};
		},methods:{
			// 表单提交
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						console.log("验证通过");
					} 
				});
			},
			// 重置表单
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		},
		components: {}

	}
</script>

<style>
	.login-page .el-row {
		width: 760px;
		margin: 0px auto 0;
		padding-top: 100px;
		box-sizing: border-box;
	}
	
	@media only screen and (max-width:780px) {
		.login-page .el-row {
			width: 100%;
		}
	}
</style>