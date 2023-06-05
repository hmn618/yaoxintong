<template>
  <div class="sellerShowInfor">
  	<!--
  	通过 label 设置菜单组的标签
		icon 设置菜单项目的图标
		设置 to 生成vue-router的链接
		设置 click 为菜单项添加点击事件,如果设置了此项 to 参数失效
		is-active 设置菜单项是否是激活状态
		menu 标签可嵌套
		-->
		<innerHead></innerHead>
		<div class="columns" style="background-color: #FFFFFF;">
			<div class="column is-2 is-offset-2">	
			    <div class="menu is-dark">
			    	<h1 style="font-size: large;padding-top: 20px;padding-left: 15px;">商家中心</h1>
			    	<hr>
			      <menus>
			        <menu-item icon="image">
			          <span>商家信息</span>
			          <menus slot="sub">
			            <menu-item :to="{ path: '/showsellerinfor'}" icon="car" :is-active="true">信息展示</menu-item>  <!--, query: { userId: 321 }-->
			            <menu-item :to="{ path: '/changesellerinfor'}" icon="slack">修改基本信息</menu-item>
			            <menu-item :to="{ path: '/changesellerpassword'}" icon="slack">修改密码</menu-item>
			          </menus>
			        </menu-item>
			        <menu-item :to="{ path: '/authenticationapply'}"  icon="music">申请认证</menu-item>
			        <menu-item :to="{ path: '/authenticationprocess'}"  icon="music">认证进度</menu-item>
			        <div class="divider" ></div>
			        <p @click="logout"><menu-item :to="{ path: '/login'}" icon="sign-out" style="margin:-15px -15px;">退出登录</menu-item></p>
			      </menus>
			    </div>
			</div>
			<div class="column is-6">
				<tabs type="boxed">
			        <tab-item label="商家信息展示">
						<div class="kuai">
							<label for="orderid " class="la ">账户名：</label>
							<input type="text " v-model="username" name="companyname1 " id="companyname1 " class="form-control " style="width: 240px; " readonly  unselectable="on" >
						</div>
						<div class="kuai">
							<label for="medicine_name " class="la ">公司名称：</label>
							<input type="text " v-model="companyname" name="user " id="user " class="form-control " style="width: 240px; " v-text:{{username}}  readonly  unselectable="on" >
						</div>
						<div class="kuai">
							<label for="medicine_name " class="la ">公司类型：</label>
							  <span class="select">
							    <select style="width: 240px; " v-model="companytype">
							      <option value="0">药企</option>
							      <option value="1">电商</option>
							      <option value="2">其他</option>
							    </select>
							  </span>
						</div>
						<div class="kuai">
							<label for="medicine_type " class="la ">邮箱：</label>
			 				<input type="email" v-model="email" name="address " id="address " class="form-control " style="width: 240px; "  readonly  unselectable="on" >
						</div>
						<div class="kuai">
							<label for="medicine_name " class="la ">公司联系人：</label>
							<input type="text " v-model="contactman" name="user " id="user " class="form-control " style="width: 240px; "  readonly  unselectable="on" >
						</div>
						<div class="kuai">
							<label for="medicine_name " class="la ">公司联系电话：</label>
							<input type="text " v-model="phone" name="user " id="user " class="form-control " style="width: 240px; "  readonly  unselectable="on" >
						</div>
					</tab-item>
				</tabs>
			</div>
		</div>
		<innerFoot></innerFoot>
  </div>

</template>

<script>
	import innerHead from "../innerHeadAndFoot/innerHead"  //同样也是相对路径
	import innerFoot from "../innerHeadAndFoot/innerFoot"
	export default{
		name: 'sellerShowInfor',
		data(){
			return{
				username:'',
				companyname:'',
				companytype:'',
				email:'',
				contactman:'',
				phone:'',
				utoken:null,
				token:null
			}
		},
  	components: { innerHead,innerFoot },
  	mounted(){
  		this.utoken=$.session.get('yaoxintong_user_token');
  		this.token=$.session.get('yaoxintong_business_token');
  		console.log(this.utoken);
  		console.log(this.token);
  		if(this.token==null){
  			alert("尚未登陆！");
  			window.location.href='./#/login';
  		}else{
  			this.$http.post(this.HOST+'/business/info',{token:this.token},{emulateJSON:true})
  			.then((response)=>{
  				console.log(response);
  				var company=response.body;
  				if(company.result==true){
						this.username=company.datum.user.username;
						this.companyname=company.datum.user.businessName;
						this.companytype=company.datum.user.businessType;
						this.contactman=company.datum.user.contact;
						
						var contactInformations = company.datum.contactInformation;
						for(var i = 0;i<contactInformations.length;i++){
							var contactInformation = contactInformations[i];
							if(contactInformation.type=="email"){
								 this.email=contactInformation.contactInfo;
								 
							}
							if(contactInformation.type=="phone"){
								this.phone=contactInformation.contactInfo;
							}
						}					
  				}else{
						alert(company.reason);
						if(company.reason=="会话已失效"){
							this.logout();
						}
  				}
  			},(response)=>{
  				console.log('接口访问失败');
  			});
  			
  		}
  	},
  	methods:{
  		logout:function(){
				$.session.remove('yaoxintong_user_token');
				this.utoken = null;
				$.session.remove('yaoxintong_business_token');
				this.token = null;
				window.location.href='./#/login'
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