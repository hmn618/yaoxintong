<template>
	<div id="login">
		<div class="columns" style="margin-top: 10px;">
			<div class="column is-2 is-offset-2">
				<img src="../../assets/biglogo.png" style="height: 100px;width: 150px;">
			</div>
		</div>
		<div class="columns" >
			<div class="column is-8 is-offset-2 blockstyle">
				<div class="columns">
					<div class="column is-7">
						<img src="../../assets/bglogo2.jpg" style="width: 550px;height: 360px;">
					</div>
					<div class="column is-5">
						<div class="columns">
						  <div class="column">
						    <tabs type="toggle" :is-full-width="true">
						    	<div @click="reloadInfo('user')">
							      <tab-item label="用户注册" >
									<p class="control has-icon" >
									  <input class="input" type="text" placeholder="用户名" style="height: 30px;" v-model="UserInfor.username" @blur="inputBlur('username')">
									  <i class="fa fa-user" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{UserInfor.usererror}}</p>
									</p>
									<p class="control has-icon">
									  <input class="input" type="password" placeholder="设置密码" style="height: 30px;" v-model="UserInfor.userpassword" @blur="inputBlur('userpassword')">
									  <i class="fa fa-lock" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{UserInfor.passworderror}}</p>
									</p>
									<p class="control has-icon">
									  <input class="input" type="password" placeholder="请确认密码" style="height: 30px;" v-model="UserInfor.passwordagain" @blur="inputBlur('passwordagain')">
									  <i class="fa fa-lock" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{UserInfor.passwordagainerror}}</p>
									</p>
									<p class="control has-icon">
									  <input class="input" type="email" placeholder="Email" style="height: 30px;" v-model="UserInfor.useremail" @blur="inputBlur('useremail')">
									  <i class="fa fa-envelope" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{UserInfor.useremailerror}}</p>
									</p>
									<p class="control has-icon">
									  <input class="input" type="text" placeholder="手机号" style="height: 30px;" v-model="UserInfor.userphone" @blur="inputBlur('userphone')">
									  <i class="fa fa-mobile" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{UserInfor.userphoneerror}}</p>
									</p>
									<!--<p class="control">
										<input type="checkbox" v-model="UserInfor.checkboxstate" v-on:click="alocked(UserInfor.checkboxstate)">&nbsp;&nbsp;&nbsp;&nbsp;我已看过并接受《用户协议》
									</p>								-->
									<p class="control">
									  <button id="submit1" class="button is-primary " style="width:100%;height: 30px;" v-bind:disabled="UserInfor.beDisabled" @click="submituserinfor">
									    	注册
									  </button>
									</p>
							      </tab-item>
							    </div>
							    <div @click="reloadInfo('shop')">
							      <tab-item label="商家注册" >
							      	<p class="control has-icon" >
									  <input class="input" type="text" placeholder="账户名" style="height: 30px;" v-model="CompanyInfor.cusername" @blur="inputBlur1('cusername')">
									  <i class="fa fa-user" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{CompanyInfor.cusernameerror}}</p>
									</p>
									<p class="control has-icon">
									  <input class="input" type="text" placeholder="公司名称" style="height: 30px;" v-model="CompanyInfor.companyname" @blur="inputBlur1('companyname')">
									  <i class="fa fa-address-card-o" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{CompanyInfor.companynameerror}}</p>
									</p>
									<p class="control has-icon">
<!--									  <input class="input" type="text" placeholder="公司类型" style="height: 30px;" v-model="CompanyInfor.companytype" @blur="inputBlur('companytype')"> -->
									  <!--<i class="fa fa-address-card-o" ></i>-->
									    <p class="control" style="width: 350px;margin-left: -10px;">
										  <span class="select" style="width: 100%;">
										    <select style="width: 100%;" v-model="CompanyInfor.companytype" @blur="inputBlur1('companytype')">
										      <option value="2" selected>公司类型</option>
										      <option value="1">药企</option>
										      <option value="0">电商</option>
										    </select>
										    <!--<select id = "sel">
												<option value = "1">1</option>
												<option value = "2" selected = "selected">2</option>
												<option value = "3">3</option>
											</select>-->
										  </span>
										</p>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{CompanyInfor.companytypeerror}}</p>
									</p>
									<p class="control has-icon">
									  <input class="input" type="password" placeholder="设置密码" style="height: 30px;" v-model="CompanyInfor.companypsw" @blur="inputBlur1('companypsw')">
									  <i class="fa fa-lock" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{CompanyInfor.companypswerror}}</p>
									</p>
									<p class="control has-icon">
									  <input class="input" type="password" placeholder="请确认密码" style="height: 30px;" v-model="CompanyInfor.companypswagain" @blur="inputBlur1('companypswagain')">
									  <i class="fa fa-lock" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{CompanyInfor.companypswagainerror}}</p>
									</p>
									<p class="control has-icon">
									  <input class="input" type="email" placeholder="Email" style="height: 30px;" v-model="CompanyInfor.companyemail" @blur="inputBlur1('companyemail')">
									  <i class="fa fa-envelope" ></i>
									  <p style="width: 300px;height: 10px;font-size:4px;color: red;padding-left: 15px;margin-top: -13px;">{{CompanyInfor.companyemailerror}}</p>
									</p>
									<!--<p class="control">
										<input type="checkbox" id="remember"/>&nbsp;&nbsp;&nbsp;&nbsp;我已看过并接受《商家协议》
									</p>								-->
									<p class="control">
									  <button class="button is-primary" style="width:100%;height: 30px;" v-bind:disabled="CompanyInfor.beCompanyDisabled" @click="submitcompanyinfor">
									    	注册
									  </button>
									</p>
							      </tab-item>
						      </div>
						    </tabs>
						  </div>
						</div>
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
	export default {
		name: 'login',
		data(){
			return{
				UserInfor: {//表单中的参数
	                username: null,
	                usererror: null,
	                userpassword: null,
	                passworderror: null,
	                passwordagain: null,
	                passwordagainerror:null,
	                useremail:null,
	                useremailerror:null,
	                userphone:null,
	                userphoneerror:null,
	                checkboxstate:false,
	                beDisabled: true				
				},
				CompanyInfor: {
					cusername:null,
					cusernameerror:null,
					companyname:null,
					companynameerror:null,
					companytype:2,
					companytypeerror:'',
					companypsw:null,
					companypswerror:null,
					companypswagain:null,
					companypswagainerror:null,
					companyemail:null,
					companyemailerror:null,
					beCompanyDisabled: true
				}
			}
		},

		methods: {
			inputBlur:function(errorItem){
				if(errorItem==='username'){
					if (this.UserInfor.username === '') {
	                    this.UserInfor.usererror = '用户名不能为空';
	                }else{
	                		var filter  = new RegExp(/^[\u4E00-\u9FA5a-zA-Z]+[0-9]*$/); //限制用户名输入
							if(this.UserInfor.username.match(filter))
							{
								this.UserInfor.usererror = '';
							}
							else{
								this.UserInfor.usererror="格式不正确(仅可输入汉字/字母/数字且以汉字/字母开始)";
							}
	                }
				}else if(errorItem==='userpassword'){
					if (this.UserInfor.userpassword === '') {
	                    this.UserInfor.passworderror = '密码不能为空';
	                }else{
		                	if(this.UserInfor.userpassword.length<6){
		                		this.UserInfor.passworderror = '密码不能少于6位';
		                	}else{
		                		this.UserInfor.passworderror = '';
		                	}	                    
	                }					
				}else if(errorItem==='passwordagain'){
					if (this.UserInfor.userpassword === this.UserInfor.passwordagain) {
	                    this.UserInfor.passwordagainerror = '';
	                }else{
	                    this.UserInfor.passwordagainerror = '与原密码不一致';
	                }					
				}else if(errorItem==='useremail'){
					if (this.UserInfor.useremail === '') {
	                    this.UserInfor.useremailerror = '邮箱不能为空';
	                }else{
							var myreg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
					        if(!myreg.test(this.UserInfor.useremail)){
					            this.UserInfor.useremailerror='请输入有效邮箱！';
					        }else{
					        	this.UserInfor.useremailerror = '';
					        }		                    
	                }					
				}else if(errorItem==='userphone'){
					if (this.UserInfor.userphone === '') {
	                    this.UserInfor.userphoneerror = '手机号不能为空';
	                }else{
	                	var phonereg = /^1[3|5]{1}\d{9}$/;
	                	if(phonereg.test(this.UserInfor.userphone)){
	                		this.UserInfor.userphoneerror = '';
	                	}else{
	                		this.UserInfor.userphoneerror='请输入有效电话号码！';
	                	}
	                }					
				}
				
				if (this.UserInfor.usererror == '' && this.UserInfor.passworderror == '' && this.UserInfor.passwordagainerror == '' && this.UserInfor.useremailerror == '' && this.UserInfor.userphoneerror == '') {
	                this.UserInfor.beDisabled = false;
	            }else{
	                this.UserInfor.beDisabled = true;
	            }
			},
			inputBlur1:function(errorItem){
				if(errorItem==='cusername'){
					if (this.CompanyInfor.cusername === '') {
	                    	this.CompanyInfor.cusernameerror = '用户名不能为空'
	               }else{
	                		var filter  = new RegExp(/^[\u4E00-\u9FA5a-zA-Z]+[0-9]*$/); //限制用户名输入
							if(this.CompanyInfor.cusername.match(filter))
							{
								this.CompanyInfor.cusernameerror = '';
							}
							else{
								this.CompanyInfor.cusernameerror="格式不正确(仅可输入汉字/字母/数字且以汉字/字母开始)";
							}
	                }
				}else if(errorItem==='companyname'){
					if (this.CompanyInfor.companyname === '') {
	                   	 	this.CompanyInfor.companynameerror = '公司名不能为空'
	                }else{
	                    	var filter  = new RegExp(/^[\u4E00-\u9FA5a-zA-Z]+[0-9]*$/); //限制用户名输入
							if(this.CompanyInfor.companyname.match(filter))
							{
								this.CompanyInfor.companynameerror = '';
							}
							else{
								this.CompanyInfor.companynameerror="格式不正确(仅可输入汉字/字母/数字且以汉字/字母开始)";
							}
	                }
	            }else if(errorItem==='companytype'){
					if (this.CompanyInfor.companytype === '2') {
	                    this.CompanyInfor.companytypeerror = '请选择公司类型'
	                }else{
	                    this.CompanyInfor.companytypeerror = '';
	                }
	            }else if(errorItem==='companypsw'){
					if (this.CompanyInfor.companypsw === '') {
	                    	this.CompanyInfor.companypswerror = '密码不能为空'
	                }else{
		                	if(this.CompanyInfor.companypsw.length<6){
		                		this.CompanyInfor.companypswerror = '密码不能少于6位';
		                	}else{
		                		this.CompanyInfor.companypswerror = '';
		                	}	
	                }					
				}else if(errorItem==='companypswagain'){
					if (this.CompanyInfor.companypsw === this.CompanyInfor.companypswagain) {
	                    this.CompanyInfor.companypswagainerror = '';
	                }else{
	                    this.CompanyInfor.companypswagainerror = '与原密码不一致';
	                }					
				}else if(errorItem==='companyemail'){
					if (this.CompanyInfor.companyemail === '') {
	                    this.CompanyInfor.companyemailerror = '邮箱不能为空'
	                }else{
							var myreg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
					        if(!myreg.test(this.CompanyInfor.companyemail)){
					            this.CompanyInfor.companyemailerror='请输入有效邮箱！';
					        }else{
					        	this.CompanyInfor.companyemailerror = '';
					        }	
	                }
	            }
				
	            if (this.CompanyInfor.cusernameerror == '' && this.CompanyInfor.companynameerror == '' && this.CompanyInfor.companytypeerror == '' && this.CompanyInfor.companypswerror == '' && this.CompanyInfor.companypswagainerror == '' && this.CompanyInfor.companyemailerror == '') {
	                this.CompanyInfor.beCompanyDisabled = false;
	            }else{
	                this.CompanyInfor.beCompanyDisabled = true;
	            }				

			},
		    alocked: function (state) {
	            state = !state;
//	            console.log(this.UserInfor.checkboxstate),
//				console.log(this.UserInfor.username != '' && this.UserInfor.userpassword != ''&&this.UserInfor.passwordagain != '' && this.UserInfor.useremail != '' && this.UserInfor.userphone != ''&& this.UserInfor.checkboxstate),
//              console.log(this.UserInfor.beDisabled)
	       	},
	       	submituserinfor: function(){

			    this.$http.post(this.HOST + '/user/register/',
			    {username:this.UserInfor.username,password:this.UserInfor.userpassword,email:this.UserInfor.useremail,phone:this.UserInfor.userphone},{emulateJSON: true})
			    .then((response) => {
					// 响应成功回调
					console.log(response);
					if(response.body.result==true){
		             	alert("注册成功！");
		                window.location.href="/#/login";
					}else{
						alert(response.body.reason+"注册失败，请重试");   
		            }
				}, (response) => {    
					// 响应错误回调
					this.msg = '请求失败！';
					console.log(this.msg)
				});	       		
	       },
	       submitcompanyinfor: function(){
	       		if(this.CompanyInfor.companytype == '2'){
	       			alert('请选择公司类型');
	       		}else{
				    this.$http.post(this.HOST + '/business/register',{username: this.CompanyInfor.cusername,
				    	business_name:this.CompanyInfor.companyname,business_type:this.CompanyInfor.companytype,
				    	password: this.CompanyInfor.companypsw,email:this.CompanyInfor.companyemail},{emulateJSON: true})
				    .then((response) => {
						// 响应成功回调
						console.log(response);
						if(response.body.result==true){
			             	alert("注册成功！");
			                window.location.href="/#/login";
						}else{
							alert(response.body.reason+"注册失败，请重试");   
			            }
					}, (response) => {    
						// 响应错误回调
						this.msg = '请求失败！';
						console.log(this.msg)
					});	 	   	       			
	       		}
//	       		console.log(this.CompanyInfor.companypsw);	       	
	     	},
			reloadInfo:function(type){
				if(type=="user"){
					console.log(type);
					this.CompanyInfor.cusername=null;
					this.CompanyInfor.cusernameerror=null;
					this.CompanyInfor.companyname=null;
					this.CompanyInfor.companynameerror=null;
					this.CompanyInfor.companytype='2';
					this.CompanyInfor.companytypeerror=null;
					this.CompanyInfor.companypsw=null;
					this.CompanyInfor.companypswerror=null;
					this.CompanyInfor.companypswagain=null;
					this.CompanyInfor.companypswagainerror=null;
					this.CompanyInfor.companyemail=null;
					this.CompanyInfor.companyemailerror=null;
				}else if(type=="shop"){	
	                this.UserInfor.username=null;
	                this.UserInfor.usererror=null;
	                this.UserInfor.userpassword=null;
	                this.UserInfor.passworderror=null;
	                this.UserInfor.passwordagain=null;
	                this.UserInfor.passwordagainerror=null;
	                this.UserInfor.useremail=null;
	                this.UserInfor.useremailerror=null;
	                this.UserInfor.userphone=null;
	                this.UserInfor.userphoneerror=null;
				}else{
					console.log(type);
				}
			}
	       
		}
}
</script>
<style scoped>
	@import url("../../../node_modules/vue-blu/dist/css/vue-blu.min.css");
	.blockstyle{
	/*	width: 250px;*/
		height: 400px;
		box-shadow: 2px 2px 6px 6px #D5D5D5
	}
	.head{
		width: 100%;
		height:40px;
		margin-top: 10px;
	}
	.hello{
		width: 100px;
		height:40px;
		font-size: 20px;
	}
	.turn_to_reg{
		height:40px;
		font-size: 8px;	
		float: right;
		margin-top: 7px;	
	}
	.control{
		margin-top: 10px;
		/*margin-bottom: 10px;*/
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
	span{
		padding-left: 10px ;
		padding-right: 10px;
		font-size: 14px;
		font-family: "arial";
		color: #708090;
	}
</style>