<template>
	<div id="top">
		<div class="navbar">
			<div class="logobar fl">
				<img class="logopng" src="../../assets/img/logo.png" style="height: 48px;width: 60px;margin-left: 120px;">
			</div>
			<div class="searchbox fl" style="padding-left: 100px;">
				<p class="control has-addons" style="margin-top: 2px;">
					<input class="input" v-model="words" type="text" style="width: 400px;" placeholder="想搜索什么...">
					<a class="button is-primary" @click="search">
						<i class="fa fa-search"></i>
					</a>
				</p>
			</div>
			<div class="otherbar fr" v-show="isLogin">
				<a class="otheruse" href="./#/usercenter" v-show="usershow">用户中心 </a>
				<a class="otheruse" href="./#/showsellerinfor" v-show="companyshow">商家中心 </a>
				<a class="otheruse" href="./#/" @click="logout">退出登录</a>
			</div>
			<div class="otherbar fr" v-show="!isLogin">
				<a class="otheruse" href="./#/login">登陆</a>|
				<a class="otheruse" href="./#/register">免费注册</a>|
				<a class="otheruse" href="/#/">了解更多</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Top',
		data() {
			return {
				words: null,
				usershow: false,
				companyshow: false,
				usertoken: null,
				companytoken: null,
				isLogin: false
			}
		},
		mounted() {
			this.usertoken = $.session.get('yaoxintong_user_token');
			this.companytoken = $.session.get('yaoxintong_business_token');
			if(this.usertoken) {
				this.usershow = true;
				this.isLogin = true;
			} else {
				this.usershow = false;
			}

			if(this.companytoken) {
				this.companyshow = true;
				this.isLogin = true;
			} else {
				this.companyshow = false;
			}

			console.log(this.usershow);
			console.log(this.companyshow);
		},
		methods: {
			logout: function() {

				if(!this.usertoken && !this.companytoken) {
					alert("登陆状态异常");
					this.cleanUserSession();
				} else {
					var url = this.HOST + (this.usershow ? '/user/logout' : '/business/logout');
					console.log("url---->" + url);
					this.$http.post(url, {
							token: (this.usershow ? this.usertoken : this.companytoken)
						}, {
							emulateJSON: true
						}) //跨域加{emulateJSON: true}
						.then((response) => {
							console.log(response);
							var data = response.body;
							if(data.result == true) {
								this.cleanUserSession();
								alert("登出成功！");
							} else {
								alert("登出失败，请重试！");
							}
						}, (response) => {
							console.log(response);
							alert("请求失败！");
						});
				}

			},
			cleanUserSession: function() {
				$.session.remove('yaoxintong_user_token');
				this.usertoken = null;
				$.session.remove('yaoxintong_business_token');
				this.companytoken = null;
				window.location.reload();
			},
			search: function() {
				if(!this.words) {
					alert("请输入关键字！");
				} else {
					var url = '/#/nav/medicine/4/' + this.words;
					console.log(url);
					window.location.href = url;
				}
			}
		}
	}
</script>

<style scoped>
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.navbar {
		width: 100%;
		height: 50px;
		background-color: white;
		box-shadow: -5px 0 5px #B2DBA1
	}
	
	.logobar {
		width: 200px;
		height: 50px;
	}
	
	.searchbox {
		width: 600px;
		height: 50px;
		margin-left: 100px;
		padding-top: 7px;
	}
	
	.otherbar {
		padding-right: 80px;
		height: 50px;
		margin-right: 0px;
		line-height: 50px;
	}
	
	.otherbar .otheruse {
		width: 90px;
		padding: 0 15px;
		/*color: #5E5E5E; 此处设置颜色则a的样式展示不出来 */
	}
	
	a {
		color: #4f4f4f;
	}
	
	a:hover {
		text-decoration: none;
		color: #28A4C9;
	}
</style>