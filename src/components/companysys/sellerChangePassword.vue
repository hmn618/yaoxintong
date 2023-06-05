<template>
  <div class="sellerChangePassword">
  	<!--
  	通过 label 设置菜单组的标签
		icon 设置菜单项目的图标
		设置 to 生成vue-router的链接
		设置 click 为菜单项添加点击事件,如果设置了此项 to 参数失效
		is-active 设置菜单项是否是激活状态
		menu 标签可嵌套
		-->
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
				            <menu-item :to="{ path: '/changesellerinfor'}" icon="slack">修改基本信息</menu-item>
				            <menu-item :to="{ path: '/changesellerpassword'}" icon="slack" :is-active="true">修改密码</menu-item>
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
			        <tab-item label="修改密码">
						<div class="kuai">
							<label for="orderid " class="la ">原密码：</label>
							<input type="password" v-model="prepsw" @blur="inputcheck('prepsw')" id="companyname1 " class="form-control " style="width: 240px; ">
	 						<p style="width: 300px;height: 10px;color: red;padding-left: 150px;">{{prepswerror}}</p>
						</div>
						<div class="kuai">
							<label for="medicine_name " class="la ">新密码：</label>
							<input type="password" v-model="newpsw" @blur="inputcheck('newpsw')" name="user " id="user " class="form-control " style="width: 240px; ">
							<p style="width: 300px;height: 10px;color: red;padding-left: 150px;">{{newpswerror}}</p>
						</div>
						<div class="kuai">
							<label for="medicine_type " class="la ">确认新密码：</label>
			 				<input type="password" v-model="newpswagain" @blur="inputcheck('newpswagain')" name="address " id="address " class="form-control " style="width: 240px; ">
			 				<p style="width: 300px;height: 10px;color: red;padding-left: 150px;">{{newpswagainerror}}</p>
						</div>
						<p class="control">
						  <button class="button is-primary" v-bind:disabled="isDisabled" style="width:300px;height: 40px;margin-left: 75px;" @click="submitpsw">
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

<script>
	import innerHead from "../innerHeadAndFoot/innerHead"  //同样也是相对路径
	import innerFoot from "../innerHeadAndFoot/innerFoot"
	export default{
		name: 'sellerChangePassword',
		data(){
			return{
				username:'zwjtest',
				companyname:'可信医药',
				email:'1212121@qq.com',
				prepsw:'',
				prepswerror:'',
				newpsw:'',
				newpswerror:'',
				newpswagain:'',
				newpswagainerror:'',
				isDisabled:true,
				utoken:null,
				token:null     //页面部分设置token变量
			}
		},
  	components: { innerHead,innerFoot },
		mounted(){
			this.token = $.session.get('yaoxintong_business_token');   //页面加载时检查token
			console.log(this.token);
			if(this.token==null){
				window.location.href="./#/login"
			}
		},
  	methods:{
  		logout:function(){
				$.session.remove('yaoxintong_user_token');
				this.utoken = null;
				$.session.remove('yaoxintong_business_token');
				this.token = null;
			},
			submitpsw:function(){
	
				this.$http.post(this.HOST+'/business/changepassword',{password:this.prepsw,new_password:this.newpsw,token:this.token},{emulateJSON:true})
				.then((response)=>{
					console.log(response);
					if(response.body.result==true){
						alert('修改成功！');
						window.location.href='/#/showsellerinfor';
					}else{
							alert(response.body.reason);
							if(response.body.reason=="会话已失效"){
								this.cleanUserSession();
							}
					}
				},(response)=>{
					alert('修改失败');
				});
			},
  			inputcheck(checktype){
  				if(checktype=='prepsw'){
  					if(this.prepsw==''){
  						this.prepswerror='原密码不能为空'
  					}else{
  						this.prepswerror=''
  					}
  				}else if(checktype=='newpsw'){
   					if(this.newpsw==''){
  						this.newpswerror='新密码不能为空'
  					}else{
  						this.newpswerror=''
  					} 					
  				}else if(checktype=='newpswagain'){
   					if(this.newpswagain!=this.newpsw){
  						this.newpswagainerror='两次输入密码不一致'
  					}else{
  						this.newpswagainerror=''
  					} 					
  				}
  				if(this.prepsw!=''&&this.newpsw!=''&&this.newpswagain!=''){
  					this.isDisabled=false
  				}else{
  					this.isDisabled=true
  				}
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