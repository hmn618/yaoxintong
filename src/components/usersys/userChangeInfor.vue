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
		            <menu-item :to="{ path: '/userchangeinfor'}" icon="car" :is-active="true">信息展示</menu-item>  <!--, query: { userId: 321 }-->
		          <!--  <menu-item :to="{ path: '/userchangeinfor'}" icon="slack">修改基本信息</menu-item>-->
		            <menu-item :to="{ path: '/userchangepassword'}" icon="slack">修改密码</menu-item>
		          </menus>
		        </menu-item>
		        <menu-item :to="{ path: '/orderinfor'}"  icon="music">我的订单</menu-item>
		        <menu-item :to="{ path: '/compensationapply'}"  icon="music">申请理赔</menu-item>
		        <menu-item :to="{ path: '/compensationinfor'}"  icon="music">理赔结果</menu-item>
		      </menus>
		    </div>
		  </div>
		  <div class="column is-6">
			<tabs type="boxed">
		        <tab-item label="信息展示">
					<div class="kuai">
						<label for="orderid " class="la ">账户名：</label>
						<input type="text " name="companyname1 " id="companyname1 " class="form-control " style="width: 240px; ">
					</div>
					<div class="kuai">
						<label for="medicine_name " class="la ">手机号码：</label>
						<input type="text " name="user " id="user " class="form-control " style="width: 240px; ">
					</div>
					<div class="kuai">
						<label for="medicine_type " class="la ">邮箱：</label>
		 				<input type="email" name="address " id="address " class="form-control " style="width: 240px; ">
					</div>
					<div class="kuai">
						<label for="medicine_type " class="la ">性别：</label>
		 				<label style="padding-left: 50px;"><input name="order" type="radio" value="" />男 </label> 
						<label style="padding-left: 30px;"><input name="order" type="radio" value="" />女 </label> 
					</div>
					<div class="kuai">
						<label for="medicine_type " class="la ">生日：</label>
		 				<input type="date" value="" style="width: 240px;margin-top: -5px;"/>
					</div>
					<p class="control">
					  <button class="button is-primary" style="width:300px;height: 40px;margin-left: 75px;">
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
		name: 'userChangeInfor',
		data(){
			return{
				username:'zwjtest',
				companyname:'可信医药',
				email:'1212121@qq.com'
			}
		},
  	components: { innerHead,innerFoot }
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