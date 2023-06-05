<template>
	<div id="login">
		<div class="columns" style="margin-top: 10px;">
			<div class="column is-2 is-offset-2">
				<img src="../../assets/biglogo.png" style="height: 100px;width: 150px;">
			</div>
		</div>

		<div class="columns">
			<div class="column is-8 is-offset-2 blockstyle">
				<div class="columns">
					<div class="column is-7">
						<img src="../../assets/bglogo2.jpg" style="width: 550px;height: 360px;">
					</div>
					<div class="column is-5">
						<tabs type="toggle" :is-full-width="true">
							<!--<div @click="reloadInfo('user')">-->
							<tab-item label="用户登陆">
								<h1 class="head"><span class="hello">Hi，欢迎登录！</span><span class="turn_to_reg">还不是药信通会员？<span id="registerA" @click="go_to_register" style="color: #666666;" @mouseover="onMouseOver($event)"
									 @mouseout="onMouseOut($event)">免费注册</span></span></h1>
								<p class="control has-icon">
									<input class="input" type="email" placeholder="邮箱/手机号/用户名" style="height: 40px;" v-model="formName.user" @blur="inputBlur('user',formName.user)">
									<i class="fa fa-user" style="height: 40px;padding-top: 5px;"></i>
									<p style="width: 300px;height: 10px;color: red;padding-left: 15px;">{{formName.userError}}</p>
								</p>
								<p class="control has-icon">
									<input class="input" type="password" placeholder="登录密码" style="height: 40px;" v-model="formName.password" @blur="inputBlur('password',formName.password)">
									<i class="fa fa-lock" style="height: 40px;padding-top: 5px;"></i>
									<p style="width: 300px;height: 10px;color: red;padding-left: 15px;">{{formName.passwordError}}</p>
								</p>
								<p style="float: right;margin-bottom: 30px;">
									<!--<input type="checkbox" id="remember"/>记住账号-->
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span @mouseover="onMouseOver($event)" @mouseout="onMouseOut($event)" @click="go_to_register" style="color: #666666;">忘记密码？</span>
								</p>
								<p class="control">
									<button class="button is-primary" style="width:100%;height: 40px;" @click="submitForm('user')" v-bind:disabled="formName.beDisabled">
									    	登陆
									  </button>
								</p>
							</tab-item>
							<!--</div>
							 	<div @click="reloadInfo('shop')">-->
							<tab-item label="商家登陆">
								<h1 class="head"><span class="hello">Hi，欢迎登录！</span><span class="turn_to_reg">还不是药信通会员？
											<span @click="go_to_register" style="color: #666666;" @mouseover="onMouseOver($event)" @mouseout="onMouseOut($event)">免费注册</span></span></h1>
								<p class="control has-icon">
									<input class="input" type="email" placeholder="邮箱/联系电话/用户名" style="height: 40px;" v-model="shopName.user" @blur="inputBlur('shop',shopName.user)">
									<i class="fa fa-address-card-o" style="height: 40px;padding-top: 5px;"></i>
									<p style="width: 300px;height: 10px;color: red;padding-left: 15px;">{{shopName.userError}}</p>
								</p>
								<p class="control has-icon">
									<input class="input" type="password" placeholder="登录密码" style="height: 40px;" v-model="shopName.password" @blur="inputBlur('shoppassword',shopName.password)">
									<i class="fa fa-lock" style="height: 40px;padding-top: 5px;"></i>
									<p style="width: 300px;height: 10px;color: red;padding-left: 15px;">{{shopName.passwordError}}</p>
								</p>
								<p style="float: right;margin-bottom: 30px;">
									<!--<input type="checkbox" id="remember"/>记住账号-->
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<!--<a href="#">忘记密码？</a>-->
									<span @mouseover="onMouseOver($event)" @mouseout="onMouseOut($event)" @click="go_to_register" style="color: #666666;">忘记密码？</span>
								</p>
								<p class="control">
									<button class="button is-primary" style="width:100%;height: 40px;" @click="submitForm('company')" v-bind:disabled="shopName.beDisabled">
										    	登陆
										  </button>
								</p>
							</tab-item>
							<!--</div>-->
						</tabs>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<!--<div id="footLine"></div>-->
			<div id="footLine"><span id="space">联系我们：010-3222332</span>|<span id="space">联系地址：北京市海淀区北京邮电大学新科研楼</span></div>
			<div id="footLine"><span id="space">Copyright© 可信导航2017， All Rights Reserved</span></div>
		</div>
	</div>
</template>
<script>
	//import Axios from 'axios'
	export default {
		name: 'login',
		data() {
			return {
				formName: { //表单中的参数
					user: '',
					userError: '',
					password: '',
					passwordError: '',
					beDisabled: true
				},
				shopName: {
					user: '',
					userError: '',
					password: '',
					passwordError: '',
					beDisabled: true
				}
			}
		},
		mounted() {
			var usertoken = $.session.get('yaoxintong_user_token')
			var companytoken = $.session.get('yaoxintong_business_token')
			console.log(usertoken);
			console.log(companytoken);
			if(usertoken != null) {
				alert("用户已经登陆，进入用户中心");
				window.location.href = './#/usercenter'
			} else if(companytoken != null) {
				alert("企业用户已经登陆，进入用户中心");
				window.location.href = './#/showsellerinfor'
			}
		},
		methods: {
			onMouseOver: function(ele) {
				console.log(ele.target);
				ele.target.style.color = 'blue';
			},
			onMouseOut: function(ele) {
				console.log(ele.target);
				ele.target.style.color = '#666666';
			},
			go_to_register: function() {
				window.location.href = "/#/register";
			},
			reloadInfo: function(type) {
				if(type == "user") {
					console.log(type);
					this.shopName.user = null;
					this.shopName.userError = null;
					this.shopName.password = null;
					this.shopName.passwordError = null;
				} else if(type == "shop") {
					console.log(type);
					this.formName.user = null;
					this.formName.userError = null;
					this.formName.password = null;
					this.formName.passwordError = null;
				} else {
					console.log(type);
				}
			},
			submitForm: function(logintype) {
				if(logintype == 'user') {
					var user = this.formName.user;
					var password = this.formName.password;
					this.$http.post(this.HOST + '/user/login/', {
							username: user,
							password: password
						}, {
							emulateJSON: true
						})
						.then((response) => {
							console.log(response)
							if(response.body.result == true) {
								alert("登录成功！");
								var data = response.body;
								var token = data.datum.token;
								var id = response.body.datum.userid;
								//	                	var yaoxintong_user_token,yaoxintong_business_token;
								$.session.set('yaoxintong_user_token', token); //保证是仅是某一类用户登陆
								$.session.set('yaoxintong_user_id', id);
								$.session.remove('yaoxintong_business_token'); //用set会出问题，用remove成undefined是对的      
								$.session.remove('yaoxintong_business_id');
								//	                	console.log('yaoxintong_user_token')
								//	                	console.log('yaoxintong_business_token')	                	
								window.location.href = "/#/";
							} else {
								alert(response.body.reason + "登陆失败，请重试");
							}
						}, (response) => {
							alert('请求失败');
						});
				} else if(logintype == 'company') {
					var cuser = this.shopName.user;
					var cpassword = this.shopName.password;
					console.log(cuser);
					console.log(cpassword);
					this.$http.post(this.HOST + '/business/login', {
							username: cuser,
							password: cpassword
						}, {
							emulateJSON: true
						})
						.then((response) => {
							console.log(response);
							if(response.body.result == true) {
								alert('登陆成功!')
								var token = response.body.datum.token;
								var id = response.body.datum.userid;
								$.session.set('yaoxintong_business_token', token);
								$.session.set('yaoxintong_business_id', id);
								$.session.remove('yaoxintong_user_token');
								$.session.remove('yaoxintong_user_id');
								window.location.href = './#/';
							} else {
								alert(response.body.reason + "登录失败，请重试");
							}
						}, (response) => {
							console.log('接口访问失败');
						});
				}
			},
			inputBlur: function(errorItem, inputContent) {
				if(errorItem === 'user') {
					if(inputContent === '') {
						this.formName.userError = '用户名不能为空'
					} else {
						this.formName.userError = '';
					}
				} else if(errorItem === 'password') {
					if(inputContent === '') {
						this.formName.passwordError = '密码不能为空'
					} else {
						this.formName.passwordError = '';
					}
				} else if(errorItem === 'shop') {
					if(inputContent === '') {
						this.shopName.userError = '商家名不能为空'
					} else {
						this.shopName.userError = '';
					}
				} else if(errorItem === 'shoppassword') {
					if(inputContent === '') {
						this.shopName.passwordError = '密码不能为空'
					} else {
						this.shopName.passwordError = '';
					}
				}
				//对于按钮的状态进行修改
				if(this.formName.user != '' && this.formName.password != '') {
					this.formName.beDisabled = false;
				} else {
					this.formName.beDisabled = true;
				}
				if(this.shopName.user != '' && this.shopName.password != '') {
					this.shopName.beDisabled = false;
				} else {
					this.shopName.beDisabled = true;
				}
			},
			refresh: function() {
				window.location.reload();
			}
		},
		watch: {
			//'$route': 'refresh'
		}
	}
</script>
<style scoped>
	.blockstyle {
		/*	width: 250px;*/
		height: 400px;
		box-shadow: 2px 2px 6px 6px #D5D5D5
	}
	
	.head {
		width: 100%;
		height: 40px;
		margin-top: 10px;
	}
	
	.hello {
		width: 100px;
		height: 40px;
		font-size: 20px;
	}
	
	.turn_to_reg {
		height: 40px;
		font-size: 8px;
		float: right;
		margin-top: 7px;
	}
	
	.control {
		margin-top: 30px;
		margin-bottom: 10px;
	}
	
	.footer {
		position: absolute;
		top: 570px;
		width: 100%;
		height: 40px;
		text-align: center;
	}
	
	#footLine {
		margin-top: 10px;
		text-align: center;
	}
	
	span {
		padding-left: 10px;
		padding-right: 10px;
		font-size: 14px;
		font-family: "arial";
		color: #708090;
	}
</style>