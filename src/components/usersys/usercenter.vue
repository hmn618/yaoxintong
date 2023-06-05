<template>
	<div id='userChangeInfor'>
		<innerHead></innerHead>
		<div class="columns" style="background-color: #FFFFFF;">
		  <div class="column is-2 is-offset-2" >	
		    <div class="menu" style="background-color: #67B168;">
		    	<h1 style="font-size: large;padding-top: 20px;padding-left: 15px;">用户中心</h1>
		    	<hr>
		      <menus>
		        <menu-item icon="image">
		          <span>个人信息</span>
		          <menus slot="sub">
		            <menu-item :to="{ path: '/usercenter'}" icon="car" :is-active="true">信息展示</menu-item>  <!--, query: { userId: 321 }-->
		          <!--  <menu-item :to="{ path: '/userchangeinfor'}" icon="slack">修改基本信息</menu-item>-->
		            <menu-item :to="{ path: '/userchangepassword'}" icon="slack">修改密码</menu-item>
		          </menus>
		        </menu-item>
		        <menu-item :to="{ path: '/orderinfor'}"  icon="music">我的订单</menu-item>
		        <!--<menu-item :to="{ path: '/compensationapply'}"  icon="music">申请理赔</menu-item>
		        <menu-item :to="{ path: '/compensationinfor'}"  icon="music">理赔结果</menu-item>-->
		        <div class="divider" ></div>
		        <p @click="logout"><menu-item  icon="sign-out" style="margin:-15px -15px;">退出登录</menu-item></p>
		      </menus>
		    </div>
		  </div>
		  <div class="column is-6">
			<tabs type="boxed">
		        <tab-item label="信息展示">
					<div class="kuai">
						<label for="orderid " class="la ">账户名：</label>
						<input type="text " v-model="username" name="companyname1 " class="form-control " style="width: 240px; ">
					</div>
					<div class="kuai">
						<label for="medicine_name " class="la ">手机号码：</label>
						<input type="text " v-model="phone" name="user " id="user " class="form-control " style="width: 240px; ">
					</div>
					<div class="kuai">
						<label for="medicine_type " class="la ">邮箱：</label>
		 				<input type="email" v-model="email" name="address " id="address " class="form-control " style="width: 240px; ">
					</div>
					<div class="kuai">
						<label for="medicine_type " class="la ">性别：</label>
						  <span class="select">
						    <select style="width: 240px; " v-model="sex">
						      <option value="3">--请选择--</option>
						      <option value="0">男</option>
						      <option value="1">女</option>
						      <option value="2">保密</option>
						    </select>
						  </span>
					</div>
					<div class="kuai">
						<label for="medicine_type " class="la ">生日：</label>
		 				<input type="date"  value="" style="width: 240px;margin-top: -5px;" v-model="birth">
					</div>
					<p class="control">
					  <button class="button is-primary" style="width:300px;height: 40px;margin-left: 75px;" @click="modify">
					    	申请修改
					  </button>
					</p>
		        </tab-item>
			</tabs>
		  </div>
		</div>
		<innerFoot></innerFoot>
	</div>
</template>

<script>import innerHead from "../innerHeadAndFoot/innerHead" //同样也是相对路径
import innerFoot from '../common/Foot'
export default {
	name: 'userChangeInfor',
	data() {
		return {
			username: '',
			phone: '',
			email: '',
			sex: '3',
			birth: '',
			token: null,
			ctoken: null
		}
	},
	components: { innerHead, innerFoot },
	mounted() {
		//页面加载展示用户信息
		this.token = $.session.get('yaoxintong_user_token'); //检查token
		this.ctoken = $.session.get('yaoxintong_business_token');
		console.log(this.token);
		console.log(this.ctoken);
		if(this.token == null) {
			alert('请先登录');
			window.location.href = "/#/login";
		} else {
			this.$http.post(this.HOST + '/user/info/', { token: this.token }, { emulateJSON: true }) //跨域加{emulateJSON: true}
			.then((response) => {
					console.log(response);
					var data = response.body;
					if(data.result == true) {
						var userinfo = data.datum;
						this.birth = userinfo.birthday;
						var user = userinfo.user;

						this.username = user.username;
						this.sex = user.sex;

						var contactInformations = userinfo.contactInformation;
						for(var i = 0; i < contactInformations.length; i++) {
							var contactInformation = contactInformations[i];
							if(contactInformation.type == "email") {
								this.email = contactInformation.contactInfo;

							}
							if(contactInformation.type == "phone") {
								this.phone = contactInformation.contactInfo;
							}
						}
						//						console.log(user.sex);
						//						$("#sex").val(user.sex);      						
					} else {
						alert(data.reason);
						if(data.reason == "会话已失效") {
							this.cleanUserSession();
							//console.log("什么鬼");
						}
					}
				}, (response) => {
					console.log('请求失败');
			});
		}

	},
	methods: {
		modify: function() {
			if(this.token == null) {
				window.location.href = "/#/login";
			} else {
				if(this.username==''||this.username==null){
					alert("用户名不能为空！");
				}else if(this.phone==''||this.phone==null){
					alert("电话号码不能为空！");
				}else if(this.email==''||this.email==null){
					alert("邮箱不能为空！");
				}else if(this.sex=='3'){
					alert("性别尚未选择！");
				}else if(this.birth==''||this.birth==null){
					alert("生日尚未填写！");
				}else{
					this.$http.post(this.HOST + '/user/modify', { username: this.username, email: this.email, phone: this.phone, sex: this.sex, birthday: this.birth, token: this.token }, { emulateJSON: true }) //跨域加{emulateJSON: true}
					.then((response) => {
							console.log(response);
							var data = response.body;
							if(data.result == true) {
								alert("信息修改成功！");
								window.location.href = "/#/usercenter";
							} else {
								alert(data.reason);
								if(data.reason == "会话已失效") {
									this.cleanUserSession();
								}
							}
						}, (response) => {
							console.log('请求失败');
					});				
				}
			}
		},
		logout: function() {
			this.$http.post(this.HOST + '/user/logout', { token: this.token }, { emulateJSON: true }) //跨域加{emulateJSON: true}
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
					console.log('请求失败');
					alert("请求失败！");
				});
			
		},
		cleanUserSession:function(){
			$.session.remove('yaoxintong_user_token');
			this.token = null;
			$.session.remove('yaoxintong_business_token');
			this.ctoken = null;
			window.location.href = '/#/login'
		}
	}
}</script>

<style scoped>p {
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
}</style>