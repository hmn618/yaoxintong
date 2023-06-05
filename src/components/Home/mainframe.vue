<template>
	<div id="mainframe">
		<div class="navbar">
			<div class="logobar fl">
				<img class="logopng" src="../../assets/img/logo.png" style="height: 60px;width: 70px;margin-left: 120px;">
			</div>
			<div class="search_choose fl">
				<a class="meandshop" :class="{selected:search_ob==0}" @click="()=>{search_ob=0;words_tip='请输入药品名称、主治功能、品牌、生产厂家等';search_type=4;}">查药品</a>
				<a class="meandshop" :class="{selected:search_ob==1}" @click="()=>{search_ob=1;words_tip='请输入企业名称、省份、经营范围等';search_type=8;}">查药企</a>
			</div>
			<div class="otherbar fr" v-show="beforelogin">
				<a class="otheruse" href="./#/login">登陆</a>|
				<a class="otheruse" href="./#/register">免费注册</a>|
				<a class="otheruse" href="#">了解更多</a>
			</div>
			<div class="otherbar fr" v-show="afterlogin">
				<a class="otheruse" href="./#/usercenter" v-show="usershow">用户中心&nbsp;&nbsp;&nbsp;&nbsp;|</a>
				<a class="otheruse" href="./#/showsellerinfor" v-show="companyshow">商家中心&nbsp;&nbsp;&nbsp;&nbsp;|</a>
				<a class="otheruse" href="#">了解更多</a>|
				<a class="otheruse" href="./#/refresh" @click="logout">退出登陆</a>
				<!--页面刷新只能跳空页面再跳回来-->
			</div>
		</div>

		<div class="search-container home-center-type">
			<div id="home-center-welcome">
				<p class="centertitle">欢迎来到可信医药！</p>
			</div>
			<div style="padding-left: 370px;padding-bottom: 10px;" v-show="search_ob==0">
				<a class="mtype" :class="{selected:search_type==4}" @click="click(4)">全部</a>
				<a class="mtype" :class="{selected:search_type==0}" @click="click(0)">名称</a>
				<a class="mtype" :class="{selected:search_type==1}" @click="click(1)">主治功能</a>
				<a class="mtype" :class="{selected:search_type==2}" @click="click(2)">品牌</a>
				<a class="mtype" :class="{selected:search_type==3}" @click="click(3)">生产厂家</a>
			</div>
			<div style="padding-left: 370px;padding-bottom: 10px;" v-show="search_ob==1">
				<a class="mtype" :class="{selected:search_type==8}" @click="click(8)">全部</a>
				<a class="mtype" :class="{selected:search_type==5}" @click="click(5)">企业名称</a>
				<a class="mtype" :class="{selected:search_type==6}" @click="click(6)">省份</a>
				<a class="mtype" :class="{selected:search_type==7}" @click="click(7)">经营范围</a>
			</div>
			<p class="control has-addons" style="padding-left: 300px;">
				<input class="input" v-model="search_word" type="text" :placeholder="words_tip" style="width: 670px;height: 45px;">
				<a class="button is-primary" style="width: 100px;height: 45px;font-size: 20px;" @click="search()">
					搜一搜
				</a>
			</p>

			<div>

			</div>
		</div>

		
		<div class="news">
			<!--选择框-->
			<div>
				<a class="bottom_tab" :class="{selected:select_bottom_tabs==0}" @click="()=>{select_bottom_tabs=0;}">热销药品</a>
				<a class="bottom_tab" :class="{selected:select_bottom_tabs==1}" @click="()=>{select_bottom_tabs=1;}">热销药品企业</a>
				<a class="bottom_tab" :class="{selected:select_bottom_tabs==2}" @click="()=>{select_bottom_tabs=2;}">最新热点新闻</a>
			</div>
			<hr type="dot" class="hr0" />
			<div class="bottom_tab" v-show="select_bottom_tabs==0">
				<div class="columns" style="width: 100%;height: auto;" v-for="(ms,n) in medicinesList">
					<div class="column is-3 medicine_item" style="" v-for="(medicine,index) in ms" @click="showDetail(0,n,index)">
						<img v-bind:src="img[index]" alt="药品图片" style="width: 100px;height: 100px;margin-top:0px;margin-bottom: 0px;margin-left:60px ;margin-right:15px;">
						<p style="text-align: center;">{{medicine.drugName}}</p>
						<p style="text-align: center;">￥{{medicine.price}}元</p>
					</div>
				</div>
			</div>
			<div class="bottom_tab" v-show="select_bottom_tabs==1">
				<div v-for="(business,index) in companys">
					<div class="columns company_item" @click="showDetail(1,0,index)">
						<div class=" column is-7 medicine_shop_style">
							<p style="font-size: 18px;font-weight: bold;padding-bottom: 5px;padding-left:10px ; ">公司名称：{{business.companyName}}</span>
							</p>
							<p class="list_info "><span class="span_style ">企业负责人：{{business.responsiblePerson}}</span></p>

							<p class="list_info "><span class="span_style ">公司地址：{{business.registeredAddress}}</span></p>

							<div class="list_info "><span class="span_style ">经营范围：{{business.productionRange}}</span></div>
						</div>
					</div>
					<hr class="hr0" style="margin-top: -5px;" />
				</div>
			</div>
			<div class="bottom_tab" v-show="select_bottom_tabs==2">
				<div v-for="news in newses">
					<p style="cursor:pointer;" @click="()=>{window.location.href = news.url;}">
						<span>{{news.content}}</span><span style="float: right;">{{news.time}}</span></p>

					<hr type="dot" class="hr0" />
				</div>
			</div>

		</div>

		<foot></foot>
	</div>
</template>

<script>
	import top from '../common/Top'
	import foot from '../common/Foot'
	export default {
		name: 'mainframe',
		data() {
			return {
				search_word: null,
				beforelogin: true,
				afterlogin: false,
				usertoken: null,
				usershow: true,
				companytoken: null,
				companyshow: false,
				search_type: 4,
				search_ob: 0,
				words_tip: "请输入药品名称、主治功能、品牌、生产厂家等",
				newses: [],
				medicines: null,
				medicinesList: [],
				companys: null,
				img: [],
				window: null,
				select_bottom_tabs: 0
			}
		},
		components: {
			top,
			foot
		},
		mounted() {
			this.getNews();
			this.getMedicines();
			this.getCompanys();
			this.window = window;
			this.usertoken = $.session.get('yaoxintong_user_token'),
				this.companytoken = $.session.get('yaoxintong_business_token')
			//			console.log(this.usertoken)
			//			console.log(this.companytoken)
			if(this.usertoken == null && this.companytoken == null) {
				this.beforelogin = true,
					this.afterlogin = false
				//				console.log('dsfd')
			} else if(this.usertoken == null && this.companytoken != null) {
				this.beforelogin = false,
					this.afterlogin = true
				console.log('a')
				this.usershow = false,
					this.companyshow = true
				console.log('b')
			} else if(this.usertoken != null && this.companytoken == null) {
				this.beforelogin = false,
					this.afterlogin = true
				console.log('c')
				this.usershow = true,
					this.companyshow = false
				console.log('d')
			}
			console.log(this.usertoken)
			console.log(this.companytoken)
			console.log(this.usershow)
			console.log(this.companyshow)
		},
		methods: {
			getNews: function() {
				var url = this.HOST + "/news/get/";
				console.log("url---->" + url);
				this.$http.post(url, {
						token: (this.usershow ? this.usertoken : this.companytoken)
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						if(data.result == true) {
							this.newses = data.datum;
							for(var i = 0; i < this.newses.length; ++i) {
								this.newses[i].time = this.fmtDate(this.newses[i].time);
							}
						} else {}
					}, (response) => {});

			},
			getMedicines: function() {
				var url = this.HOST + "/medicine/getHot/";
				console.log("url---->" + url);
				this.$http.post(url, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						if(data.result == true) {
							this.medicines = data.datum;
							for(var i = 0; i < this.medicines.length; i++) {
								this.img[i] = "https://p2.maiyaole.com/img/item/201709/18/100_20170918132618912.jpg";
								if(i % 2 == 0) {
									this.img[i] = "https://p3.maiyaole.com/img/item/201704/07/100_20170407193135336.jpg";
								}
								if(i % 3 == 0) {
									this.img[i] = "https://p3.maiyaole.com/img/201708/24/100_201708241046223.jpg";
								}
								if(i % 5 == 0) {
									this.img[i] = "https://p4.maiyaole.com/img/item/201711/07/100_20171107155408421.jpg";
								}

								console.log(this.img[i]);
							}

							var tmp = this.medicines;
							var index = 0;
							while(tmp.length > 0) {
								this.medicinesList[index] = tmp.splice(0, 4);
								index++;
							}

						} else {}
					}, (response) => {});

			},
			getCompanys: function() {
				var url = this.HOST + "/company/getHot/";
				console.log("url---->" + url);
				this.$http.post(url, {
						token: (this.usershow ? this.usertoken : this.companytoken)
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						if(data.result == true) {
							this.companys = data.datum;
						} else {}
					}, (response) => {});

			},
			search: function() {
				console.log(this.search_ob)
				if(this.search_word == null) {
					alert("请输入关键字！");
				} else {
					var ob;
					switch(this.search_ob) {
						case 0:
							ob = 'medicine';
							break;
						case 1:
							ob = 'company';
							break;
					}
					var url = '/#/nav/' + ob + '/' + this.search_type + '/' + this.search_word;
					console.log(url);
					window.location.href = url;
				}

			},
			click: function(search_type) {
				switch(search_type) {
					case 0:
						this.words_tip = "请输入药品名称...";
						break;
					case 1:
						this.words_tip = "请输入药品主治功能...";
						break;
					case 2:
						this.words_tip = "请输入药品品牌...";
						break;
					case 3:
						this.words_tip = "请输入药品生产厂家...";
						break;
					case 4:
						this.words_tip = "请输入药品名称、主治功能、品牌、生产厂家等";
						break;
					case 5:
						this.words_tip = "请输入企业名称...";
						break;
					case 6:
						this.words_tip = "请输入省份...";
						break;
					case 7:
						this.words_tip = "请输入经营范围...";
						break;
					case 8:
						this.words_tip = "请输入企业名称、省份、经营范围等";
						break;
					default:
				}
				this.search_type = search_type;
			},
			logout: function() {
				var url = this.HOST + (this.usershow ? '/user/logout' : '/business/logout');
				console.log("url---->" + url);
				this.$http.post(url, {
						token: (this.usershow ? this.usertoken : this.companytoken)
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
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
						console.log(response);
						alert("请求失败！");
					});

			},
			showDetail: function(type, n, index) {
				console.log("index:" + index);
				console.log("this.medicines:" + this.medicines);
				switch(type) {
					case 0:
						var url = "/#/medicine_detail/" + this.medicinesList[n][index].id;
						break;
					case 1:
						var url = "/#/medicine_company_detail/" + this.companys[index].id;
						break;
					default:
				}
				window.location.href = url;
			},
			cleanUserSession: function() {
				$.session.remove('yaoxintong_user_token');
				this.usertoken = null;
				$.session.remove('yaoxintong_business_token');
				this.companytoken = null;
				window.location.href = "/#/";
			},
			getWords: function() {
				var url = this.HOST + "/medicine/getHot/";
				console.log("url---->" + url);
				this.$http.post(url, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						if(data.result == true) {
							this.medicines = data.datum;
							for(var i = 0; i < this.medicines.length; i++) {
								this.img[i] = "https://p2.maiyaole.com/img/item/201709/18/100_20170918132618912.jpg";
								if(i % 2 == 0) {
									this.img[i] = "https://p3.maiyaole.com/img/item/201704/07/100_20170407193135336.jpg";
								}
								if(i % 3 == 0) {
									this.img[i] = "https://p3.maiyaole.com/img/201708/24/100_201708241046223.jpg";
								}
								if(i % 5 == 0) {
									this.img[i] = "https://p4.maiyaole.com/img/item/201711/07/100_20171107155408421.jpg";
								}
								console.log(this.img[i]);
							}
						} else {}
					}, (response) => {});
			},
			fmtDate: function(obj) {
				var date = new Date(obj);
				var y = 1900 + date.getYear();
				var m = "0" + (date.getMonth() + 1);
				var d = "0" + date.getDate();
				var h = "0" + date.getHours();
				var min = "0" + (date.getMinutes());
				var s = "0" + date.getSeconds();
				return y + "-" + m.substring(m.length - 2, m.length) +
					"-" + d.substring(d.length - 2, d.length) +
					" " + h.substring(h.length - 2, h.length) +
					":" + min.substring(min.length - 2, min.length) +
					":" + s.substring(s.length - 2, s.length);
			}

		}
	}
</script>

<style scoped>
	/*@import url("../../assets/css/bootstrap.min.css");*/
	
	.home-footer-type {
		background-color: #E0E0E0;
		padding-bottom: 30px;
	}
	
	#home-under {
		padding-left: 80px;
		padding-right: 80px;
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
		margin-top: 3px;
		height: 500px;
		background-image: url(../../assets/img/bg1.jpg);
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
	
	.navbar {
		width: 100%;
		height: 60px;
		background-color: white;
		box-shadow: -5px 0 5px #B2DBA1
	}
	
	.logobar {
		width: 200px;
		height: 50px;
	}
	
	.searchbox {
		width: 600px;
		height: 50px;
		margin-left: 100px;
		padding-top: 7px;
	}
	
	.otherbar {
		padding-right: 80px;
		height: 50px;
		margin-right: 0px;
		line-height: 50px;
		margin-top: 5px;
	}
	
	.otherbar .otheruse {
		width: 90px;
		padding: 0 15px;
		color: #5E5E5E;
	}
	
	.fr {
		float: right;
	}
	
	.fl {
		float: left;
	}
	
	.search_choose {
		padding-left: 80px;
		height: 50px;
		line-height: 50px;
		margin-top: 5px;
		font-size: 16px;
		/*font-weight: bold;*/
	}
	
	.search_choose a {
		color: #555555;
	}
	
	.search_choose a:hover {
		color: #46B8DA;
	}
	
	.search_choose .selected {
		/*font-weight: bold*/
		color: #46B8DA;
	}
	
	.search_choose .meandshop {
		padding: 0 20px;
	}
	
	.search_choose .medicince {
		padding: 0 20px;
	}
	
	.centertitle {
		margin-left: 500px;
		font-size: 40px;
	}
	
	.mtype {
		padding-left: 20px;
		padding-right: 20px;
		font-size: 17px;
		color: white;
	}
	
	.bottom_tab {
		color: black;
		margin: 20px;
	}
	
	.bottom_tab_item {
		margin: 50px;
	}
	
	.selected {
		/*font-weight: bold*/
		color: #46B8DA;
	}
	
	.news {
		margin: 50px 120px;
	}
	
	.medicine_item {
		cursor: pointer;
	}
	
	.medicine_item:hover {
		color: #28A4C9;
	}
	
	.company_item {
		cursor: pointer;
	}
	
	.company_item:hover {
		color: #28A4C9;
	}
	
	.medicine_shop_style {
		padding-left: 10px;
		margin-top: 0px;
	}
	
	.list_info {
		margin: 0px 10px;
	}
	/*div .list_info{
		word-wrap: break-word;
		word-break设置强行换行;normal 亚洲语言和非亚洲语言的文本规则，允许在字内换行
		word-break: normal;
	}*/
</style>