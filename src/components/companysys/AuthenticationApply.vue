<template>
	<div id="AuthenticationApply">
		<innerHead></innerHead>
		<div class="columns" style=" background-color: #FFFFFF;">
			<div class="column is-2 is-offset-2">	
			    <div class="menu is-dark">
			    	<h1 style="font-size: large;padding-top: 20px;padding-left: 15px;">商家中心</h1>
			    	<hr>
			      <menus>
			        <menu-item icon="image">
			          <span>商家信息</span>
			          <menus slot="sub">
			            <menu-item :to="{ path: '/showsellerinfor'}" icon="car" >信息展示</menu-item>  <!--, query: { userId: 321 }-->
			            <menu-item :to="{ path: '/changesellerinfor'}" icon="slack" >修改基本信息</menu-item>
			            <menu-item :to="{ path: '/changesellerpassword'}" icon="slack">修改密码</menu-item>
			          </menus>
			        </menu-item>
			        <menu-item :to="{ path: '/authenticationapply'}"  icon="music" :is-active="true">申请认证</menu-item>
			        <menu-item :to="{ path: '/authenticationprocess'}"  icon="music">认证进度</menu-item>
			        <div class="divider" ></div>
			        <p @click="logout"><menu-item :to="{ path: '/login'}" icon="sign-out" style="margin:-15px -15px;">退出登录</menu-item></p>
			      </menus>
			    </div>
			</div>
			<div class="column is-6" style="padding-left: 50px;">
			    <div >
			    	<p style="text-align:left;">{{businessType==0?"药企":"电商"}}</p>
			      <div v-bind:hidden="businessType!=0">
  						<div class="kuai">
							<label for="companyname1 " class="la ">公司名称：</label>
							<input type="text " v-model="Business.companyName" @blur="inputBlur('companyname')" name="companyname1 " id="companyname1 " class="form-control " style="width: 240px; ">
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Business.companyNameError}}</p>
  						</div>
						<div class="kuai">
							<label for="user " class="la ">联系人：</label>
							<input type="text " v-model="Business.contact" @blur="inputBlur('contact')" name="user " id="user " class="form-control " style="width: 240px; ">
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Business.contactError}}</p>
						</div>
						<div class="kuai">
							<label for="address " class="la ">地址：</label>
			 				<input type="text " v-model="Business.address" @blur="inputBlur('address')" name="address " id="address " class="form-control " style="width: 240px; ">
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Business.addressError}}</p>
						</div>
						<div class="kuai">
							<label for="iphone " class="la ">手机号：</label>
							<input type="text " v-model="Business.phone" @blur="inputBlur('phone')" name="iphone " id="iphone " class="form-control " style="width: 240px; ">
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Business.phoneError}}</p>
						</div>
						<div class="kuai">
							<label for="yingye " class="la" style="float: left;">营业执照：</label>
							<input type="file" @change="() => getFile(0)" @blur="inputBlur('license')" id="Business_license" runat="server" style="width:240px;"/>
							<!--<div id="imgDiv">
							</div>-->
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Business.licenseError}}</p>
						</div>
						<div class="kuai">
							<label for="weisheng" class="la" style="float: left;">卫生许可证：</label>
							<input type="file" @change="() => getFile(1)" @blur="inputBlur('health_license')" id="Business_health_license" runat="server" style="width:240px;"/>
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Business.health_licenseError}}</p>
						</div>
						<div class="kuai">
							<label for="shipin" class="la" style="float: left;">食品流通许可证：</label>
							<input type="file" @change="() => getFile(2)" @blur="inputBlur('food_distribution_license')" id="Business_food_distribution_license" runat="server" style="width:240px;"/>
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Business.food_distribution_licenseError}}</p>
						</div>
						<!--<div style="margin-top: 20px;margin-left: 100px ">
							<input type="checkbox"  id="check1" onclick="">我已阅读并同意《药企入驻协议》
						</div>-->
						<p class="control">
						  <button class="button is-primary" v-bind:disabled="Business.isDisabled" @click="submit('business')" style="width:300px;height: 40px;margin-left: 75px;">
						    	确认提交
						  </button>
						</p>
			      </div>
			      <div v-bind:hidden="businessType!=1">
  						<div class="kuai">
							<label for="companyname1 " class="la ">公司名称：</label>
							<input type="text " v-model="Webshop.companyName" @blur="inputBlur('wcompanyname')" name="companyname1 " id="companyname1 " class="form-control " style="width: 240px; ">
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Webshop.companyNameError}}</p>
  						</div>
						<div class="kuai">
							<label for="user " class="la ">联系人：</label>
							<input type="text " v-model="Webshop.contact" @blur="inputBlur('wcontact')" name="user " id="user " class="form-control " style="width: 240px; ">
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Webshop.contactError}}</p>
						</div>
						<div class="kuai">
							<label for="address " class="la ">地址：</label>
			 				<input type="text " v-model="Webshop.address" @blur="inputBlur('waddress')" name="address " id="address " class="form-control " style="width: 240px; ">
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Webshop.addressError}}</p>
						</div>
						<div class="kuai">
							<label for="iphone " class="la ">手机号：</label>
							<input type="text " v-model="Webshop.phone" @blur="inputBlur('wphone')" name="iphone " id="iphone " class="form-control " style="width: 240px; ">
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Webshop.phoneError}}</p>
						</div>
						<div class="kuai">
							<label for="yingye " class="la" style="float: left;">ICP备案信息：</label>
							<input type="file" @change="() => getFile(3)" @blur="inputBlur('icp')" id="Webshop_icp" runat="server" style="width:240px;"/>
							<!--<div id="imgDiv">
							</div>-->
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Webshop.icpError}}</p>
						</div>
						<div class="kuai">
							<label for="weisheng" class="la" style="float: left;">互联网药品交易服务资格证书：</label>
							<input type="file" @change="() => getFile(4)" @blur="inputBlur('wservice_license')" id="Webshop_wservice_license" runat="server" style="width:240px;"/>
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Webshop.wservice_licenseError}}</p>
						</div>
						<div class="kuai">
							<label for="shipin" class="la" style="float: left;">药品经营质量管理规范认证证书：</label>
							<input type="file" @change="() => getFile(5)" @blur="inputBlur('wmanagement_license')" id="Webshop_wmanagement_license" runat="server" style="width:240px;"/>
							<p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 150px;margin-top: -13px;">{{Webshop.wmanagement_licenseError}}</p>
						</div>
						<!--<div style="margin-top: 20px;margin-left: 100px ">
							<input type="checkbox"  id="check1" onclick="">我已阅读并同意《电商入驻协议》
						</div>-->
						<p class="control">
						  <button class="button is-primary" v-bind:disabled="Webshop.isDisabled" @click="submit('webshop')" style="width:300px;height: 40px;margin-left: 75px;">
						    	确认提交
						  </button>
						</p>
			      </div>

			    </div>	
			</div>	
		</div>
		<innerFoot></innerFoot>
	</div>
</template>

<script>
	import innerHead from "../innerHeadAndFoot/innerHead"  //同样也是相对路径
	import innerFoot from "../innerHeadAndFoot/innerFoot"
	export default{
		name: 'AuthenticationApply',
		data(){
			return{
				username:'zwjtest',
				companyname:'可信医药',
				businessType:0,
				email:'1212121@qq.com',
				utoken:null,
				token:null,
				Business:{
					companyName:'',
					companyNameError:'',
					contact:'',
					contactError:'',
					address:'',
					addressError:'',
					phone:'',
					phoneError:'',
					license:null,
					licenseError:'',
					health_license:null,
					health_licenseError:'',
					food_distribution_license:null,
					food_distribution_licenseError:'',
					isDisabled:true
				},
				Webshop:{
					companyName:'',
					companyNameError:'',
					contact:'',
					contactError:'',
					address:'',
					addressError:'',
					phone:'',
					phoneError:'',
					icp:null,
					icpError:'',
					wservice_license:null,
					wservice_licenseError:'',
					wmanagement_license:null,
					wmanagement_licenseError:'',
					isDisabled:true
				}
			}
		},
	  	components: { innerHead,innerFoot },
	  	mounted(){
			this.token = $.session.get('yaoxintong_business_token');   //页面加载时检查token
			console.log(this.token);
			if(this.token==null){
				alert("");
				window.location.href="./#/login"
			}else{
				this.$http.post(this.HOST+'/business/authentication/status',{token:this.token},{emulateJSON: true})
				.then((response)=>{
					console.log(response);
					if(response.body.result==true){
						if(response.body.datum.authenticationDianshang!=null||response.body.datum.authenticationYaoqi!=null){
							alert("该企业已申请认证，查看申请状态");
							window.location.href="./#/authenticationprocess";
						}else{
							this.businessType = response.body.datum.business.user.businessType==0;
						}
					}else{
						alert(response.body.reason);
						if(response.body.reason=="会话已失效"){
							this.cleanUserSession();
						}else{
							alert("获取申请状态失败");						
						}
	
					}
				},(response)=>{
					alert("网络错误");
				});				
			}

	  	},
	  	methods:{
		    getFile:function(tag){  
		    	console.log("getFile:"+tag);
		    	if(tag==0){
		      		this.Business.license = $("#Business_license").get(0).files[0]; //获取要上传的文件  
					console.log(this.Business.license);
		    	}else if(tag==1){
				   	this.Business.health_license = $("#Business_health_license").get(0).files[0]; //获取要上传的文件  
					console.log(this.Business.health_license);		    		
		    	}else if(tag==2){
		    		this.Business.food_distribution_license = $("#Business_food_distribution_license").get(0).files[0]; //获取要上传的文件  
					console.log(this.Business.food_distribution_license);
		    	}else if(tag==3){
		    		this.Webshop.icp = $("#Webshop_icp").get(0).files[0]; //获取要上传的文件  
					console.log(this.Business.icp);
		    	}else if(tag==4){
		    		this.Webshop.wservice_license = $("#Webshop_wservice_license").get(0).files[0]; //获取要上传的文件  
					console.log(this.Business.wservice_license);
		    	}else if(tag==5){
		    		this.Webshop.wmanagement_license = $("#Webshop_wmanagement_license").get(0).files[0]; //获取要上传的文件  
					console.log(this.Webshop.wmanagement_license);
		    	}

		   },
			inputBlur:function(errorItem){
				if(errorItem==='companyname'){
					if (this.Business.companyName === '') {
	                    this.Business.companyNameError = '公司名不能为空'
	                }else{
	                    this.Business.companyNameError = '';
	                }
				}else if(errorItem==='contact'){
					if (this.Business.contact === '') {
	                    this.Business.contactError = '联系人名不能为空'
	                }else{
	                    this.Business.contactError = '';
	                }					
				}else if(errorItem==='address'){
					if (this.Business.address === '') {
	                    this.Business.addressError = '地址不能为空';
	                }else{
	                    this.Business.addressError = '';
	                }					
				}else if(errorItem==='phone'){
					if (this.Business.phone === '') {
	                    this.Business.phoneError = '手机号不能为空'
	                }else{
	                    this.Business.phoneError = '';
	                }					
				}else if(errorItem==='license'){
					if (this.Business.license === null) {
	                    this.Business.licenseError = '请上传营业执照'
	                }else{
	                    this.Business.licenseError  = '';
	                }
				}else if(errorItem==='health_license'){
					if (this.Business.health_license === null) {
	                    this.Business.health_licenseError = '请上传卫生许可证'
	                }else{
	                    this.Business.health_licenseError = '';
	                }
	            }else if(errorItem==='food_distribution_license'){
					if (this.Business.food_distribution_license === null) {
	                    this.Business.food_distribution_licenseError = '请上传食品流通许可证'
	                }else{
	                    this.Business.food_distribution_licenseError = '';
	                }
	            }else if(errorItem==='wcompanyname'){
					if (this.Webshop.companyName === '') {
	                    this.Webshop.companyNameError = '公司名不能为空'
	                }else{
	                    this.Webshop.companyNameError = '';
	                }
				}else if(errorItem==='wcontact'){
					if (this.Webshop.contact === '') {
	                    this.Webshop.contactError = '联系人名不能为空'
	                }else{
	                    this.Webshop.contactError = '';
	                }					
				}else if(errorItem==='waddress'){
					if (this.Webshop.address === '') {
	                    this.Webshop.addressError = '地址不能为空';
	                }else{
	                    this.Webshop.addressError = '';
	                }					
				}else if(errorItem==='wphone'){
					if (this.Webshop.phone === '') {
	                    this.Webshop.phoneError = '手机号不能为空'
	                }else{
	                    this.Webshop.phoneError = '';
	                }					
				}else if(errorItem==='icp'){
					if (this.Webshop.icp === null) {
	                    this.Webshop.icpError = '请上传ICP备案信息'
	                }else{
	                    this.Webshop.icpError  = '';
	                }
				}else if(errorItem==='wservice_license'){
					if (this.Webshop.wservice_license === null) {
	                    this.Webshop.wservice_licenseError = '请上传互联网药品交易服务资格证书'
	                }else{
	                    this.Webshop.wservice_licenseError = '';
	                }
	            }else if(errorItem==='wmanagement_license'){
					if (this.Webshop.wmanagement_license === null) {
	                    this.Webshop.wmanagement_licenseError = '请上传食品流通许可证'
	                }else{
	                    this.Webshop.wmanagement_licenseError = '';
	                }
	            }
				//对于按钮的状态进行修改
	            if (this.Business.companyName != '' && this.Business.contact != '' && this.Business.address != '' && this.Business.phone != ''&& this.Business.license != null && this.Business.health_license != null && this.Business.food_distribution_license != null) {
	                this.Business.isDisabled = false;
	            }else{
	                this.Business.isDisabled = true;
	            }
	            if (this.Webshop.companyName != '' && this.Webshop.contact != '' && this.Webshop.address != '' && this.Webshop.phone != '' &&this.Webshop.icp != null && this.Webshop.wservice_license != null && this.Webshop.wmanagement_license != null) {
	                this.Webshop.isDisabled = false;
	            }else{
	                this.Webshop.isDisabled = true;
	            }
			},
		    submit:function(type){
		    	if(type=='business'){
		    		if(this.token==null){
						window.location.href="./#/login"
					}else{
						const formData = new FormData();
						formData.append('token',this.token);
						formData.append('companyName',this.Business.companyName);
						formData.append('contact',this.Business.contact);
						formData.append('address',this.Business.address);
						formData.append('phone',this.Business.phone);
						formData.append('businessLicense',this.Business.license);
						formData.append('hygieneLicense',this.Business.health_license);
						formData.append('foodCirculationLicense',this.Business.food_distribution_license);
						this.$http.post(this.HOST+'/business/applyAuthentication/yaoqi',formData,{emulateJSON: true})
						.then(response=>{
							console.log(response);
							if(response.body.result==true){
								alert('申请成功，请等待申请结果！');
								window.location.href='/#/AuthenticationProcess';
							}else{
								alert(response.body.reason);
								if(response.body.reason=="会话已失效"){
									this.cleanUserSession();
								}else{
									alert('请求失败！');
								}
							}
						},response=>{
							// 响应错误回调
							alert('请求失败！');
						});
					}
		    	}else if(type=='webshop'){
		    		if(this.token==null){
						window.location.href="./#/login"
					}else{
						const formData = new FormData();
						formData.append('token',this.token);
						formData.append('corporateName',this.Webshop.companyName);
						formData.append('contact',this.Webshop.contact);
						formData.append('address',this.Webshop.address);
						formData.append('phone',this.Webshop.phone);
						formData.append('icp_filing_information',this.Webshop.icp);
						formData.append('idtsqc',this.Webshop.wservice_license);
						formData.append('dmqmsc',this.Webshop.wmanagement_license);
						this.$http.post(this.HOST+'/business/applyAuthentication/dianshang',formData,{emulateJSON: true})
						.then(response=>{
							console.log(response);
							if(response.body.result==true){
								alert('申请成功，请等待申请结果！');
								window.location.href='/#/AuthenticationProcess';
							}else{
								alert(response.body.reason);
								if(response.body.reason=="会话已失效"){
									this.cleanUserSession();
								}else{
									alert('请求失败！');
								}
							}
						},response=>{
							// 响应错误回调
							alert('请求失败！');
						});
					}		    		
		    	}
		    },
			logout: function() {
				this.$http.post(this.HOST + '/business/logout', { token: this.token }, { emulateJSON: true }) //跨域加{emulateJSON: true}
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
	}
</script>

<style scoped>
	p{
		padding: 15px;
	}
	.key{
		font-size: 18px;
		font-family: arial;
	}
    input{
        border: 1px solid #ccc;
        padding: 7px 0px;
        border-radius: 3px;
        padding-left:5px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
    }
    input:focus{
            border-color: #66afe9;
            outline: 0;
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
	.kuai{
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
	.containerC{
		margin-top:10px;
		background: white;
		width: 500px;
		height: 300px;
		margin-left: 100px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.containerD{
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
		float:left;
		width: 150px;
		text-align: right;
	}
	
	.te {
		width: 240px;
		margin-left: 100px;
	}
</style>