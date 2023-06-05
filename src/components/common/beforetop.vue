<template>
	<div id="beforetop">
		<div class="navbar">
			<div class="logobar fl">
				<img class="logopng" src="../../assets/img/logo.png" style="height: 48px;width: 60px;margin-left: 120px;">
			</div>
			<div class="searchbox fl" style="padding-left: 100px;">
				<p class="control has-addons" style="margin-top: 2px;">
				  <input class="input" type="text" style="width: 400px;" placeholder="想搜索什么...">
				  <a class="button is-primary">
				    <i class="fa fa-search"></i>
				  </a>
				</p>
			</div>
			<div class="otherbar fr">
				<a class="otheruse" href="./#/login">登陆</a>|
				<a class="otheruse" href="./#/register">免费注册</a>|
				<a class="otheruse" href="#">了解更多</a>
			</div>
		</div>	
	</div>
</template>

<script>
	export default{
		name:'beforetop',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.fl{
	float: left;
}
.fr{
	float: right;
}
.navbar{
	width: 100%;
	height: 50px;
	background-color: white;
	box-shadow: -5px 0 5px #B2DBA1
}
.logobar{
	width:200px;
	height: 50px;
}
.searchbox{
	width: 600px;
	height: 50px;
	margin-left: 100px;
	padding-top: 7px;
}
.otherbar{
	padding-right: 80px;
	height: 50px;
	margin-right:0px ;
	line-height: 50px;
}
.otherbar .otheruse{
	width:90px;
	padding: 0 15px;
	color: #5E5E5E;
}
.footer{
	height: 440px;
	width: 100%;
	background-color: #4f4f4f;
	color: #C5C1AA;
	box-shadow: -5px 0 5px #4f4f4f;
	padding: 30px 130px;
}
.footer .aboutandcontact{
	height: 240px;
	width: 100%;		
}
.footer .aboutus{
	width: 250px;
	height: 240px;
}
.footer .contact{
	width: 300px;
	height: 240px;	
}
.footer .link_other{
	margin-left: 50px;
	width: 250px;
	height: 240px;		
}
.footer .company_info{
	padding-top: 5px;
	text-align: center;
	
}
.footer .company_info p{
	padding: 3px 0;
}
</style>