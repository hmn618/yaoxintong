<template>
	<div id="home-start">
		<HomeTop></HomeTop>
		<div id="home-center" class="home-center-type">
			<div id="home-center-welcome">
				<h1 style="text-align: center;">欢迎来到可信医药</h1>
			</div>
			<div>
				<div id="home-center-btn" class="container">
					<div class="row">
						<div class="col-xs-2"></div>
						<div class="col-xs-2" data-toggle="buttons">
							<label class="btn btn-success active">
    						<input type="radio" name="options" id="option1" autocomplete="off">全部
 							</label>
						</div>
						<div class="col-xs-2" data-toggle="buttons">
							<label class="btn btn-success">
    						<input type="radio" name="options" id="option1" autocomplete="off">药品
 							</label>
						</div>
						<div class="col-xs-2" data-toggle="buttons">
							<label class="btn btn-success">
    						<input type="radio" name="options" id="option2" autocomplete="off">药企
  						</label>
						</div>
						<div class="col-xs-2" data-toggle="buttons">
							<label class="btn btn-success">
    						<input type="radio" name="options" id="option3" autocomplete="off">电商
  						</label>
						</div>
						<div class="col-xs-2"></div>
					</div>
				</div>
				
				<div id="home-center-search" class="container">
					<form role="form" class="form-horizontal">
						<div class="form-group row">
							<div class="col-xs-1">
							</div>
							<div class="col-xs-9">
								<input id="input-search" class="form-control input-lg" type="text">
							</div>
							<div class="col-xs-2">
								<router-link to="nav/12"><button >查一查</button></router-link>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div id="home-center-hotwords" class="container">
				<div class="row">
					<div class="col-xs-1"></div>
					<div class="col-xs-1">
						热搜：
					</div>
					<div class="col-xs-2">
						<a class="">感康</a>
					</div>
					<div class="col-xs-2">云南白药创可贴</div>
					<div class="col-xs-2">速效救心丸</div>
					<div class="col-xs-2">马云</div>
					<div class="col-xs-1 pull-left">换一批</div>
				</div>
			</div>
		</div>

		<div id="home-under">
			<ul class="nav nav-tabs" role="tablist">
				<li role="presentation" class="active">
					<a href="#home" aria-controls="home" role="tab" data-toggle="tab">头条新闻</a>
				</li>
				<li role="presentation">
					<a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">热销药品</a>
				</li>
				<li role="presentation">
					<a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">药品企业</a>
				</li>
				<li role="presentation">
					<a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">药品电商Top</a>
				</li>
			</ul>

			<!-- Tab panes -->
			<div class="tab-content">
				<div role="tabpanel" class="tab-pane active" id="home">
					<div class="row">
					<div class="col-xs-6">
						<h2>
							使用最广的六拉姆齐
						</h2>	
						<hr class="divider">
					</div>
					<div class="col-xs-6">
						杀杀杀杀 的烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦
						帆帆帆帆帆帆帆帆帆帆帆帆帆帆帆帆
						ffffffffffffffffff
						<hr class="divider">
					</div>
					<div class="col-xs-6">
						杀杀杀杀 顶顶顶顶顶顶顶顶顶顶顶顶顶烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦她她她她她她她她她她她她她钱钱钱钱钱钱钱钱钱钱钱钱钱
						荣荣荣荣荣荣荣荣有有有有有有有有有有有有有有有有
						<hr class="divider">
					</div>
					<div class="col-xs-6">
						杀杀杀杀 顶顶顶顶顶顶顶顶顶顶顶顶顶烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦她她她她她她她她她她她她她钱钱钱钱钱钱钱钱钱钱钱钱钱
						荣荣荣荣荣荣荣荣有有有有有有有有有有有有有有有有
						<hr class="divider">
					</div>
					</div>
				</div>
				<div role="tabpanel" class="tab-pane" id="profile">
					
				</div>
				<div role="tabpanel" class="tab-pane" id="messages">...</div>
				<div role="tabpanel" class="tab-pane" id="settings">...</div>
			</div>
		</div>
		<div id="home-footer" class="home-footer-type">
			<hr class="divider">
		<footer class="footer-type">
			<p class="pull-right">
				<a href="#">回到顶部</a>
			</p>
			<p>可信医药</p>
		</footer>
		</div>
		
	</div>
</template>

<script>
import HomeTop from './HomeTop';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { HomeTop },
  mounted(){
  	
  },
  methods:{
  }
}
</script>

<style scoped>
	.home-footer-type{
		background-color:#E0E0E0;
		padding-bottom: 30px;
	}
	#home-under{
		padding-left:80px;
		padding-right:80px;
		padding-top: 30px;
	}
	#home-center-hotwords {
		padding-top: 35px;
	}
	
	#home-center-search {
		padding-top: 10px;
	}
	
	#home-center-welcome {
		padding-top: 100px;
		padding-bottom: 40px;
	}
	
	.home-center-type {
		height: 500px;
		background-image: url(../assets/img/bg1.jpg);
		background-size: 100%;
		color: #FFFFFF;
	}
	.home-center-type img {
		width: 100%;
		height: 500px;
	}
	
	.h1 {
		color: #FFFFFF;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #000000;
		margin-top: 60px;
	}
</style>