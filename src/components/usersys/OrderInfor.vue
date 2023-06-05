<template>
	<div id="orderInfor">
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
						<menu-item :to="{ path: '/orderinfor'}" icon="music" :is-active="true">我的订单</menu-item>
						<!--<menu-item :to="{ path: '/compensationapply'}" icon="music">申请理赔</menu-item>
						<menu-item :to="{ path: '/compensationinfor'}" icon="music">理赔结果</menu-item>-->
						<div class="divider"></div>
						<p @click="logout">
							<menu-item icon="sign-out" style="margin:-15px -15px;">退出登录</menu-item>
						</p>
					</menus>
				</div>
			</div>
			<div class="column is-6">
				<div>
					<div class="columns">
						<div class="column is-2">
							<h1 style="font-size: larger;padding-top: 20px;padding-left: 15px;">我的订单</h1>
						</div>
						<div class="column is-5 is-offset-4">
							<p class="control has-addons">
								<input class="input" v-model="words" type="text" placeholder="商品名称、商品ID、订单号">
								<a class="button is-info" @click="filter">
									搜索
								</a>
							</p>
						</div>
					</div>
				</div>
				<br>
				<div>
					<table class="gridtable">
						<tr style="background-color: whitesmoke; height: 30px;line-height: 30px;font-size: 12px;">
							<th style="text-align: center;width: 150px;">药品</th>
							<th style="text-align: center;width: 50px;">单价</th>
							<th style="text-align: center;width: 50px;">数量</th>
							<th style="text-align: center;width: 50px;">实付款</th>
							<th style="text-align: center;width: 50px;">订单状态</th>
							<th style="text-align: center;width: 60px;">交易操作</th>
						</tr>
						<div style="width: 100%;height: 20px;"></div>
						<tr v-for="(orderInfor,i) in orders" style="width: 100%;height: 50px;line-height: 50px;font-size: 12px;border: 1px whitesmoke solid;">
							<td style="text-align: center;width: 150px;">{{orderInfor.medicineName}}</td>
							<td style="text-align: center;width: 50px;">{{orderInfor.price}}</td>
							<td style="text-align: center;width: 50px;">{{orderInfor.medicineNumber}}</td>
							<td style="text-align: center;width: 50px;">{{orderInfor.payPrice}}</td>
							<td style="text-align: center;width: 50px;">{{orderInfor.orderStatus}}</td>
							<td style="text-align: center;width: 60px;">
								<a :href="orders_op[i].url">{{orders_op[i].name}}</a>
							</td>
						</tr>							
						<!--<tr v-for="(orderInfor,i) in orders" style="width: 100%;height: 50px;line-height: 50px;font-size: 12px;border: 1px whitesmoke solid;">
							<td style="padding-left: 20px;">{{orderInfor.medicineName}}</td>
							<td>{{orderInfor.price}}</td>
							<td>{{orderInfor.medicineNumber}}</td>
							<td>{{orderInfor.payPrice}}</td>
							<td>{{orderInfor.orderStatus}}</td>
							<td>
								<a :href="orders_op[i].url">{{orders_op[i].name}}</a>
							</td>
						</tr>-->
					</table>
				</div>
			</div>
			<!--<div class="column is-11">
		  	
		  </div>-->
		</div>
		<innerFoot></innerFoot>
	</div>
</template>

<script>
	import innerHead from "../innerHeadAndFoot/innerHead" //同样也是相对路径
	import innerFoot from '../common/Foot'
	export default {
		name: 'orderInfor',
		data() {
			return {
				words: null,
				token: null,
				id: '',
				ctoken: null,
				search_id: '',
				orders: [],
				orders_op: []
			}
		},
		components: {
			innerHead,
			innerFoot
		},
		mounted() {
			this.token = $.session.get('yaoxintong_user_token');
			this.id = $.session.get('yaoxintong_user_id');
			this.ctoken = $.session.get('yaoxintong_business_token');
			if(this.token == null) {
				alert('请先登录');
				window.location.href = "./#/login";
			} else {
				this.$http.post(this.HOST + '/userorder/orders/', {
						token: this.token,
						user_id: this.id
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						if(response.body.result == true) {
							console.log(response);
							this.orders = response.body.datum;
							console.log(this.orders);
							for(var i = 0; i < this.orders.length; ++i) {
								var order = this.orders[i];
								var op = {
									name: null,
									url: null
								};
								switch(order.orderStatus) {
									case '0':
										//等待支付
										this.orders[i].orderStatus = '等待支付';
										op.name = '取消订单';
										op.url = '/#/';
										break;
									case '1':
										//等待发货
										this.orders[i].orderStatus = '等待发货';
										op.name = '申请退款';
										op.url = '/#/';
										break;
									case '2':
										//等待收货
										this.orders[i].orderStatus = '等待收货';
										op.name = '申请退款';
										op.url = '/#/';
										break;
									case '3':
										//已完成
										this.orders[i].orderStatus = '已完成';
										op.name = '申请理赔';
										op.url = '/#/compensationapply/' + order.id + "/" + order.medicineName;
										break;
									case '4':
										//理赔中
										this.orders[i].orderStatus = '理赔中';
										op.name = '查看进度';
										op.url = '/#/compensationinfor/' + order.id;
										break;
									default:
										break;
								}
								this.orders_op[i] = op;
							}
							//							window.location.href='./#/orderupdate';
						} else {
							alert(response.body.reason);
							if(response.body.reason == "会话已失效") {
								this.cleanUserSession();
							}
						}
					}, (response) => {
						console.log(response.body.datum);
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
			},
			filter: function() {
				for(var i = 0; i < this.orders.length; ++i) {
					console.log(this.orders[i].medicineName.indexOf(this.words) <0);
					if(this.orders[i].medicineName.indexOf(this.words) < 0) {
						console.log(this.words);
						console.log(this.orders);
						this.orders.splice(i, 1);
						--i;
					}
				}
			},
			searchById: function() {
				if(this.token == null) {
					alert('请先登录');
					window.location.href = "./#/login";
				} else {
					this.$http.post(this.HOST + '/userorder/order/', {
							token: this.token,
							id: this.search_id
						}, {
							emulateJSON: true
						}) //跨域加{emulateJSON: true}
						.then((response) => {
							if(response.body.result == true) {
								console.log(response);
								this.orders = response.body.datum;
								console.log(this.orders);
								window.location.href = './#/orderupdate';
							} else {
								alert(response.body.reason);
								if(data.reason == "会话已失效") {
									this.cleanUserSession();
								}
							}
						}, (response) => {
							console.log('请求失败');
						});
				}
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
</style>