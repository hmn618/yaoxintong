<template>
	<div id="CompensationInfor">
		<innerHead></innerHead>
		<div class="columns" style="background-color: #FFFFFF;">
			<div class="column is-2 is-offset-2">
				<div class="menu" style="background-color: #67B168;">
					<h1 style="font-size: large;padding-top: 20px;padding-left: 15px;">用户中心</h1>
					<hr>
					<menus>
						<menu-item icon="image">
							<span>个人信息</span>
							<menus slot="sub">
								<menu-item :to="{ path: '/usercenter'}" icon="car">信息展示</menu-item>
								<!--, query: { userId: 321 }-->
								<!--  <menu-item :to="{ path: '/userchangeinfor'}" icon="slack">修改基本信息</menu-item>-->
								<menu-item :to="{ path: '/userchangepassword'}" icon="slack">修改密码</menu-item>
							</menus>
						</menu-item>
						<menu-item :to="{ path: '/orderinfor'}" icon="music">我的订单</menu-item>
						<!--<menu-item :to="{ path: '/compensationapply'}" icon="music">申请理赔</menu-item>
						<menu-item :to="{ path: '/compensationinfor'}" icon="music" :is-active="true">理赔结果</menu-item>-->
						<div class="divider"></div>
						<p @click="logout">
							<menu-item :to="{ path: '/login'}" icon="sign-out" style="margin:-15px -15px;">退出登录</menu-item>
						</p>
					</menus>
				</div>
			</div>
			<div class="column is-6" style="padding-left: 50px;">
				<progressBar :current="status" type="line">
					<dot title="资料审核中" description="" >
						<p>等待系统审核资料</p>
					</dot>
					<dot title="赔付处理中" description="">
						<p>资料审核成功，处理赔付请求</p>
					</dot>
					<dot title="处理完毕，请查验" description="">
						<p>赔付请求处理完成，待最终通过</p>
					</dot>
				</progressBar>
				<div>
					<!--此处为赔付订单接口-->
				</div>
			</div>
		</div>
		<innerFoot></innerFoot>
	</div>
</template>

<script>
	import innerHead from "../innerHeadAndFoot/innerHead" //同样也是相对路径
	import innerFoot from '../common/Foot'
	import progressBar from "../common/Steps";
	import dot from "../common/Step";
	export default {
		name: 'CompensationInfor',
		data() {
			return {
				order: null,
				token: null,
				order_id:null,
				status:0
			}
		},
		components: {
			innerHead,
			innerFoot,
			progressBar,
			dot
		},
		mounted() {
			window.scrollTo(0, 0);
			
			this.order_id = this.$route.params.id;
			
			this.token = $.session.get('yaoxintong_user_token'); //页面加载时检查token
			console.log(this.token);
			if(this.token == null) {
				window.location.href = "./#/login"
			} else {
				this.$http.post(this.HOST + '/user/claim_order/status', {
						token: this.token,
						id:this.order_id
					}, {
						emulateJSON: true
					})
					.then((response) => {
						console.log(response);
						var data = response.body;
						if(data.result){
							this.order = data.datum;
							this.status = parseInt(this.order.claimStatus)
							console.log(this.status);
						}else{
							alert("获取理赔状态失败");
						}
						
					}, (response) => {
						alert("网络错误");
					});
			}
		},
		methods: {
			logout: function() {
				this.$http.post(this.HOST + '/user/logout', {
						token: this.token
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						if(data.result == true) {
							alert("登出成功！");
							this.cleanUserSession();
						} else {
							alert("登出失败，请重试！");
						}
					}, (response) => {
						console.log('请求失败');
						alert("请求失败！");
					});

			},
			cleanUserSession: function() {
				$.session.remove('yaoxintong_user_token');
				this.token = null;
				$.session.remove('yaoxintong_business_token');
				this.ctoken = null;
				window.location.href = './#/login'
			}
		}
	}
</script>

<style scoped>
	p {
		padding: 15px;
	}
	
	.key {
		font-size: 18px;
		font-family: arial;
	}
	
	input {
		border: 1px solid #ccc;
		padding: 7px 0px;
		border-radius: 3px;
		padding-left: 5px;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
		-webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
		-o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s
	}
	
	input:focus {
		border-color: #66afe9;
		outline: 0;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
	}
	/*div {
		margin-top: 20px;
	}*/
	
	.input-group {
		margin-top: 0px;
	}
	
	.container {
		height: 600px;
		width: 600px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	
	.linear {
		/*background-image: url('../../images/1.jpg');*/
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		z-index: -1;
	}
	
	.containerA {
		height: 400px;
		width: 600px;
		background: #ECFFFF;
		margin-top: -40px;
		margin-left: -220px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	
	.containerB {
		background: #ECFFFF;
		margin-top: -40px;
		margin-left: -220px;
		height: 1700px;
		width: 650px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	
	.containerC {
		margin-top: 10px;
		background: white;
		width: 500px;
		height: 300px;
		margin-left: 100px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	
	.containerD {
		background: #ECFFFF;
		margin-top: -40px;
		margin-left: -220px;
		height: 550px;
		width: 650px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	
	.middle {
		margin: 0 auto;
		width: 400px;
	}
	
	.la {
		float: left;
		width: 150px;
		text-align: right;
	}
	
	.te {
		width: 240px;
		margin-left: 100px;
	}
</style>