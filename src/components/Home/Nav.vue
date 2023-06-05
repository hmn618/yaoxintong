<template>
	<div>
		<Top></Top>
		<div class="bodypart_medicine">
			<div class="header">
				{{tip}}
			</div>
			<hr class="hr0" />
			<div class="medicine_list">
				<div class="medicine_item" v-for="(medicine,index) in medicines">
					<div class="columns medicine_item" @click="showDetail(0,index)">
						<div class="column is-3">
							<img v-bind:src="img[index]" alt="药品图片" style="width: 100px;height: 100px;margin-top:0px;margin-bottom: 0px;margin-left:10px ;margin-right:15px;">
						</div>
						<div class="column is-9" style="padding-top: 7px;">
							<p style="font-size: 18px;font-weight: bold;padding-bottom: 0x;padding-left:10px ;">{{medicine.drugName}}
							</p>
							<p class="list_info"><span class="span_style">药品品牌：{{medicine.brand}}</span></p>
							<p class="list_info"><span class="span_style">主治功能：{{medicine.useForIllness}}</span></p>
							<p class="list_info"><span class="span_style">使用人群：{{medicine.useForPeople}}</span></p>
						</div>
					</div>
					<hr class="hr0" style="margin-top: -5px;" />
				</div>
			</div>
			<div class="company_list">
				<div v-for="(business,index) in companys">
					<div class="columns company_item" @click="showDetail(1,index)">
						<div class=" column is-7 ">
							<p style="font-size: 18px;font-weight: bold;padding-bottom: 5px;padding-left:10px ; ">公司名称：{{business.companyName}}</span>
							</p>
							<p class="list_info "><span class="span_style ">企业负责人：{{business.responsiblePerson}}</span></p>

							<p class="list_info "><span class="span_style ">公司地址：{{business.registeredAddress}}</span></p>

							<p class="list_info "><span class="span_style ">经营范围：{{business.productionRange}}</span></p>
						</div>
					</div>
					<hr class="hr0" style="margin-top: -5px;"/>
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import Top from '../common/Top'
	import foot from '../common/Foot'
	export default {
		name: 'Nav',
		data() {
			return {
				beforelogin: false,
				afterlogin: false,
				usertoken: null,
				companytoken: null,
				search_type: null,
				word: null,
				search_ob: null,
				medicines: null,
				companys: null,
				img: [],
				tip: "正在搜索中..."
			}
		},
		components: {
			Top,
			foot
		},
		mounted() {
			console.log(this.$route.params.search_ob);
			console.log(this.$route.params.search_type);
			console.log(this.$route.params.word);
			this.search_ob = this.$route.params.search_ob;
			this.search_type = this.$route.params.search_type;
			this.word = this.$route.params.word;

			this.usertoken = $.session.get('yaoxintong_user_token');
			this.companytoken = $.session.get('yaoxintong_business_token');

			if(this.usertoken || this.companytoken) {
				this.afterlogin = true;
			} else {
				this.beforelogin = true;
			}

			console.log("usertoken: " + this.usertoken);
			console.log("companytoken: " + this.companytoken);
			this.search(this.search_ob, this.search_type, this.word);
		},
		methods: {
			search: function(search_ob, search_type, word) {
				this.$http.post(this.HOST_9090 + '/api/' + search_ob + 's/search/', {
						type: this.search_type,
						name: this.word
						//search_type: this.search_type,
						//word: this.word
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						if(search_ob == 'medicine') {
							this.medicines = response.body.datum;

							if(this.medicines.length > 0) {
								this.tip = "药信通为您找到 以下符合条件的药品";
							} else {
								this.tip = "没有找到符合条件的药品";
							}

							for(var i = 0; i < this.medicines.length; i++) {
								this.img[i] = "http://www.zcy100.com/uploadfile/goods/f3/cc/dd/27/59cde0874d30c.jpg";
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
						}
						if(search_ob == 'company') {
							this.companys = response.body.datum;
							console.log(this.companys);
							if(this.companys.length > 0) {
								this.tip = "药信通为您找到 以下符合条件的企业";
							} else {
								this.tip = "没有找到符合条件的企业~";
							}
						}

					}, (response) => {
						console.log('请求失败');
						this.tip = "网络错误~";
					});

			},
			onMouseEnter: function(value, index, i) {
				this.selected_filter_hidden = false;
				this.selectedFilters.push(value);
				console.log(this.filters[index].contents);
				this.filters[index].contents.splice(i, 1);
			},
			detail: function() {
				console.log("detail ");
				window.location.href = "#/medicine_detail ";
			},
			refresh: function() {
				console.log("refresh ");
				location.reload();
			},
			showDetail: function(type, index) {
				switch(type) {
					case 0:
						var url = "/#/medicine_detail/" + this.medicines[index].id;
						break;
					case 1:
						var url = "/#/medicine_company_detail/" + this.companys[index].id;
						break;
					default:
				}
				window.location.href = url;
			}
		}

	}
</script>
<style scoped>
	.bodypart_medicine {
		margin: 20px 120px;
	}
	
	.header {
		font-size: 18px;
		font-weight: bold;
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
	
	.list_info {
		margin: 5px 10px;
	}
</style>