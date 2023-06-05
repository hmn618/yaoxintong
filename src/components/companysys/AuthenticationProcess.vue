<template>
	<div id="AuthenticationProcess">
		<innerHead></innerHead>
		<div class="columns" style="background-color: #ffffff;">
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
			        <menu-item :to="{ path: '/authenticationapply'}"  icon="music" >申请认证</menu-item>
			        <menu-item :to="{ path: '/authenticationprocess'}"  icon="music" :is-active="true">认证进度</menu-item>
			        <div class="divider" ></div>
			        <p @click="logout"><menu-item :to="{ path: '/login'}" icon="sign-out" style="margin:-15px -15px;">退出登录</menu-item></p>
			      </menus>
			    </div>
			</div>
			<div class="column is-6" style="padding-left: 50px;">
				<progressBar :current="current_status" type="line">
				  <dot title="申请入驻" description="">
				    <p>等待系统检测是否认证成功</p>
				  </dot>
				  <dot title="资料审核" description="">
				    <p>入驻成功，检测资料是否合格</p>
				  </dot>
				  <dot title="成功" description="">
				    <p>资料检测成功，待最终审核</p>
				  </dot>
				</progressBar>
				    <tabs style="height: 300px;">
				      <tab-item label="商家信息">
				      		<table class="gridtable" >
								<tr>
									<th>公司名称</th><th>公司类型</th><th>联系人</th><th>联系方式</th>
								</tr>
								<tr>
									<td>{{companyname}}</td>
									<td>{{companytype}}</td>
									<td>{{contact}}</td>
									<td>{{phone}}</td>
								</tr>
							</table>	
				      </tab-item>
				      <tab-item label="许可证信息">
				      	<div v-show="businessType==1">
				      	    <tabs  layout="left" style="padding-left: 50px;">
						      		<tab-item  label="营业执照"><img v-bind:src="img_businessLicense" alt="营业执照"/></tab-item>
						      		<tab-item  label="卫生许可证"><img v-bind:src="img_hygieneLicense"  alt="卫生许可证"/></tab-item>
						      		<tab-item  label="食品流通许可证"><img v-bind:src="img_foodCirculationLicense"  alt="食品流通许可证"/></tab-item>
				      	    </tabs>
						</div>
						<div v-show="businessType==0">
				      	    <tabs  layout="left" style="padding-left: 50px;">
				      	    	<tab-item  label="ICP备案信息"><img v-bind:src="img_icp_filing_information"  alt="ICP备案信息"/></tab-item>
						      	<tab-item  label="互联网药品交易服务资格证书"><img v-bind:src="img_idtsqc"  alt="互联网药品交易服务资格证书"/></tab-item>
						      	<tab-item  label="药品经营质量管理规范认证证书"><img v-bind:src="img_dmqmsc"  alt="药品经营质量管理规范认证证书"/></tab-item>
				      	    </tabs>
						</div>
				      </tab-item>
				    </tabs>

			</div>	

		</div>
	<innerFoot></innerFoot>
	</div>
</template>

<script>
	import innerHead from "../innerHeadAndFoot/innerHead"; //同样也是相对路径
	import innerFoot from "../innerHeadAndFoot/innerFoot";
	import progressBar from "../common/Steps";
	import dot from "../common/Step";
	export default{
		name: 'AuthenticationProcess',
		data(){
			return{
				companyname: null,
				contact: null,
				companytype: null,
				businessType:0,
				authenticationYaoqi:null,
				authenticationDianshang:null,
				img_businessLicense:null,
				img_hygieneLicense:null,
				img_foodCirculationLicense:null,
				img_icp_filing_information:null,
				img_idtsqc:null,
				img_dmqmsc:null,
				current_status:null,
				phone: null,
				utoken:null,
				token:null
			}
		},
		components:{innerHead,innerFoot,progressBar,dot},
		mounted(){
			window.scrollTo(0,0);
			this.token = $.session.get('yaoxintong_business_token');   //页面加载时检查token
			console.log(this.token);
			if(this.token==null){
				window.location.href="./#/login"
			}else{
				this.$http.post(this.HOST+'/business/authentication/status',{token:this.token},{emulateJSON: true})
				.then((response)=>{
					console.log(response);
					if(response.body.result==true){
						var data=response.body.datum;
						var business=data.business.user;
						if(data.authenticationYaoqi!=null){
							this.authenticationYaoqi=  data.authenticationYaoqi;
							
							this.img_businessLicense = this.HOST+this.authenticationYaoqi.businessLicense;
							this.img_hygieneLicense = this.HOST+this.authenticationYaoqi.hygieneLicense;
							this.img_foodCirculationLicense = this.HOST+this.authenticationYaoqi.foodCirculationLicense;
							this.img_icp_filing_information = this.HOST+this.authenticationYaoqi.icp_filing_information;
							this.img_idtsqc = this.HOST+this.authenticationYaoqi.idtsqc;
							this.img_dmqmsc = this.HOST+this.authenticationYaoqi.dmqmsc;
							this.current_status = parseInt(this.authenticationYaoqi.status)+1;
							
							console.log(this.img_businessLicense);
							console.log(this.img_hygieneLicense);
						}
						if(data.authenticationDianshang!=null){
							this.authenticationDianshang=  data.authenticationDianshang; 
						}
						
						if(data.authenticationYaoqi==null&&data.authenticationDianshang==null){
							alert("尚未申请入驻，去申请");
							window.location.href="/#/AuthenticationApply";
						}
						
						if(business!=null){
							this.companyname=business.businessName;
							this.contact=business.contact;
							var contactInfos = response.body.datum.business.contactInformation;
							console.log(contactInfos);
							if(contactInfos.length>0){
								for(var j = 0,len=contactInfos.length; j < len; j++) {
   									if(contactInfos[j].type=='phone'){
										this.phone=contactInfos[j].contactInfo;
									}
								}								
							}
							this.businessType = business.businessType;
							if(business.businessType==1){
								this.companytype='药企';
							}else if(business.businessType==0){
								this.companytype='电商';
							}else{
								this.companytype='其他';
							}
						}else{
							
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