<template>
	<div id="CompensationApply">
		<innerHead></innerHead>
		<div class="columns" style=" background-color: #FFFFFF;">
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
						<!--<menu-item :to="{ path: '/compensationapply'}" icon="music" :is-active="true">申请理赔</menu-item>
						<menu-item :to="{ path: '/compensationinfor'}" icon="music">理赔结果</menu-item>-->
						<div class="divider"></div>
						<p @click="logout">
							<menu-item icon="sign-out" style="margin:-15px -15px;">退出登录</menu-item>
						</p>
					</menus>
				</div>
			</div>
			<div class="column is-6" style="padding-left: 50px;">
				<tabs type="boxed">
					<tab-item label="申请理赔">
						<div class="kuai">
							<label for="orderid " class="la ">待赔订单号：</label>
							<input type="text " v-model="Payback.orderNumber" name="companyname1 " id="companyname1 " class="form-control " style="width: 240px; ">
						</div>
						<div class="kuai">
							<label for="medicine_name " class="la ">药品名称：</label>
							<input type="text " v-model="Payback.medicineName" name="user " id="user " class="form-control " style="width: 240px; ">
						</div>
						<!--<div class="kuai">
						<label for="medicine_type " class="la ">所属药品：</label>
		 				<input type="text " name="address " id="address " class="form-control " style="width: 240px; ">
					</div>-->
						<div class="kuai" id="invoice">
							<label for="fapiao " class="la" style="float: left;">发票验证：</label>
							<input id="invoice_file" type="file" @change="() => getFile(0)" runat="server" style="width:240px;" />
							<div id="imgDiv">
							</div>
						</div>
						<div class="kuai" v-model="Payback.paybackway">
							<label for="medicine_type" class="la ">赔付方式：</label>
							<label style="padding-left: 50px;"><input name="order" type="radio" selected value="0" />退款 </label>
							<label style="padding-left: 30px;"><input name="order" type="radio" value="1" />换购 </label>
							<label style="padding-left: 30px;"><input name="order" type="radio" value="2" />其它 </label>
						</div>
						<div class="kuai">
							<label for="medicine_type " class="la ">理由简述：</label>
							<textarea rows="4" cols="32" v-model="Payback.claimReason">
						
						</textarea>
						</div>
						<p class="control">
							<button @click="submit" class="button is-primary" style="width:300px;height: 40px;margin-left: 75px;">
					    	申请理赔
					  </button>
						</p>
					</tab-item>
				</tabs>
			</div>
		</div>
		<innerFoot></innerFoot>
	</div>
</template>

<script>
	import innerHead from "../innerHeadAndFoot/innerHead" //同样也是相对路径
	import innerFoot from '../common/Foot'
	export default {
		name: 'CompensationApply',
		data() {
			return {
				token: null,
				Payback: {
					orderNumber: null,
					//					orderNumberError:null,
					medicineName: null,
					//					medicineNameError:null,
					invoice: null,
					//					invoiceError:null,
					paybackway: null,
					//					paybackwayError:null,
					isDisabled: true,
					claimReason: null
				}
			}
		},
		components: {
			innerHead,
			innerFoot
		},
		mounted() {
			console.log(this.$route.params.id);
			this.Payback.orderNumber = this.$route.params.id;
			this.Payback.medicineName = this.$route.params.name;

			this.token = $.session.get('yaoxintong_user_token'); //页面加载时检查token
			console.log(this.token);
			if(!$.session.get('yaoxintong_user_token')) {
				alert("请先登陆");
				window.location.href = "./#/login";
			}
		},
		methods: {
			getFile: function(tag) {
				console.log("getFile:" + tag);
				if(tag == 0) {
					console.log($("#invoice_file").get(0).files[0]);
					this.Payback.invoice = $("#invoice_file").get(0).files[0]; //获取要上传的文件  
				}
			},
			submit: function() {
				if(this.Payback.orderNumber == null || this.Payback.orderNumber == "") {
					alert("订单号不能为空");
				} else if(this.Payback.medicineName == null || this.Payback.medicineName == "") {
					alert("药品名不能为空");
				} else if(this.Payback.invoice == null || this.Payback.invoice == "") {
					alert("发票尚未上传");
				} else {
					const formData = new FormData();
					formData.append('orderNumber', this.Payback.orderNumber);
					formData.append('medicineName', this.Payback.medicineName);
					formData.append('invoice', this.Payback.invoice);
					formData.append('paybackway', this.Payback.paybackway);
					formData.append('claimReason', this.Payback.claimReason);
					formData.append('token', this.token);
					this.$http.post(this.HOST + '/user/claim_order/apply',
							formData, {
								emulateJSON: true
							})
						.then((response) => {
							console.log(response);
							if(response.body.result == true) {
								alert("申请成功，等待处理结果");
								window.location.href = "./#/compensationinfor/"+response.body.datum;
							} else {
								alert("申请失败，请重试");
							}
						}, (response) => {
							alert("网络错误");
						});

				}
			},
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
	
	.kuai {
		margin-top: 20px;
	}
	
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