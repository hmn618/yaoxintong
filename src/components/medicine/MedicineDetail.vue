<template>
	<div>
		<Top></Top>
		<div class="main">
			<!--
        	描述：中间部分-上部
       -->
			<div class="panel">
				<div class="panel-body ">
					<div class="main-font panel-margin">
						<strong>{{medicine.drugName}}</strong>
					</div>
					<div>
						<ul class="panel-margin">
							<span>批准文号：</span>
							<span>{{medicine.licenseNumber}}</span>
							<br />
							<span>产品名称：</span>
							<span>{{medicine.drugName}}</span>
						</ul>
					</div>
				</div>
			</div>

			<!--
        	描述：中间部分-下部
        	class="row"必须写在有class="container..."的div里
       -->
			<div class=" main columns">
				<!--
            	描述：中间-下部-左边
            -->
				<div class="column is-9 panel panel-left">
					<!--
                	描述：药品信息部分
                	生产单位和相关数据库查询可点
                -->
					<div class="panel-body">
						<section class="panel-margin">
							<div>
								<strong>
            				<tag type="info" class="child-font">药品详细信息</tag>
            			</strong>
							</div>
							<br />
							<div>
								<span>批准文号：</span>
								<span>{{medicine.licenseNumber}}</span>
								<br />
								<span>产品名称：</span>
								<span>{{medicine.drugName}}</span>
								<br />
								<span>品牌：</span>
								<span>{{medicine.brand}}</span>
								<br />
								<span>剂型：</span>
								<span>{{medicine.drugForm}}</span>
								<br />
								<span>规格：</span>
								<span>{{medicine.productWeight}}</span>
								<br />
								<span>类别：</span>
								<span>{{medicine.drugType1+" "+medicine.drugType2+" "+medicine.drugType3}}</span>
								<br />
								<span>主治功能：</span>
								<span>{{medicine.useForIllness}}</span>
								<br />
								<span>使用方法：</span>
								<span>{{medicine.dosageUse}}</span>
								<br />
								<span>生产单位：</span>
								<span><a :href="companyUrl">{{medicine.manufacturer}}</a></span>
								<br />
								<span>生产地址：</span>
								<span>{{medicine.manufacturer}}</span>
								<br />
								<span>产品类别：</span>
								<span>{{medicine.type}}</span>
								<br />
								<span>批准日期：</span>
								<span>{{medicine.validPeriod}}</span>
								<br />
								<span>原批准文号：</span>
								<span>{{medicine.licenseNumber}}</span>
								<br />
								<!--<span>药品本位码：</span>
								<span>{{medicine.manufacturer}}</span>
								<br />
								<span>药品本位码备注：</span>
								<span>{{medicine.manufacturer}}</span>
								<br />-->
								<span>相关数据库查询：</span>
								<span><a href="#">GMP认证</a></span>
							</div>
					
						</section>
					</div>
				</div>

				<!--
            	描述：中间-下部-右边
            	【下载报告】【药品图谱】【疑似关系】图片和按钮都是可点的
            	alt--规定图像的替代文本
            -->
				<div class="column is-3 panel panel-right">
					<div class="panel-body">
						<section>
							<div>
								<strong>
									<tag type="info" class="child-font">下载报告</tag>
								</strong>
							</div>
							<div class="btn-center map-margin">
								<router-link :to="{path: '/medicine_report', query: {id:id}}">
									<img src="../../assets/img/xiazaibaogao.png" alt="下载报告" /><br />
								</router-link>
								<button type="button" class="button is-info " v-on:click="loadReport">下载报告</button>
							</div>

						</section>
						<br />

						<section>
							<div>
								<strong>
									<tag type="info" class="child-font">药品图谱</tag>
								</strong>
							</div>
							<div class="btn-center map-margin">
								<router-link :to="{path: '/medicine_knowledge_map', query: {medOrCom:0,map_op:0,id:id}}">
									<img src="../../assets/img/yaopintupu.jpg" alt="药品图谱" /><br />
								</router-link>
								<button type="button" class="button is-info" v-on:click="showMap">查看药品图谱</button>
							</div>
						</section>
						<br />

						<section>
							<div>
								<strong>
									<tag type="info" class="child-font">疑似关系</tag>
								</strong>
							</div>
							<div class="btn-center map-margin">
								<router-link :to="{path: '/medicine_knowledge_map', query: {medOrCom:0,map_op:1,id:id}}">
									<img src="../../assets/img/yaopintupu.jpg" alt="疑似关系" /><br />
								</router-link>
								<button type="button" class="button is-info" v-on:click="showRelation">查看疑似关系</button>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Top from '../common/Top'
	import Foot from '../common/Foot'
	export default {
		name: 'MedicineDetail',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				medicine: {},
				id: null,
				companyUrl: null,
				map_op: 0,
				medOrCom: 0
			}
		},
		components: {
			Top,
			Foot
		},
		mounted() {
			window.scrollTo(0, 0);
			console.log(this.$route.params.id);
			this.id = this.$route.params.id;
			this.showMedicineDetail(this.id);

		},
		methods: {
			showMap: function() {
				console.log("showMap");
				this.map_op = 0;
				this.medOrCom = 0;
				var url = '/#/medicine_knowledge_map/' + this.medOrCom + '/' + this.map_op + '/' + this.id;
				console.log(url);
				window.location.href = url;
			},
			loadReport: function() {
				console.log("loadReport");
				var url = '/#/medicine_report/' + this.id;
				console.log(url);
				window.location.href = url;
			},
			showRelation: function() {
				console.log("showRelation");
				this.map_op = 1;
				this.medOrCom = 0;
				var url = '/#/medicine_knowledge_map/' + this.medOrCom + '/' + this.map_op + '/' + this.id;
				console.log(url);
				window.location.href = url;
			},
			showMedicineDetail: function(id) {
				this.$http.post(this.HOST + '/medicine/detail/', {
						id: this.id
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						this.medicine = response.body.datum;
						console.log(this.medicine);
						this.getIdByCompanyName(this.medicine.manufacturer);

					}, (response) => {
						console.log('请求失败');
						alert("请求失败，请刷新重试");
					});
			},
			getIdByCompanyName: function(manufacturer) {
				this.$http.post(this.HOST + '/company/getIdByName/', {
						name: manufacturer
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						var companyId = response.body.datum;
						this.companyUrl = "/#/medicine_company_detail/" + companyId;
						console.log(this.companyUrl);

					}, (response) => {
						console.log(response);
					});
			}
		}
	}
</script>

<style scoped>
	/*药品页面部分*/
	
	.main {
		margin: 12px auto;
		width: 1170px;
	}
	
	.main-font {
		font-size: 25px;
	}
	
	.child-font {
		font-size: 15px;
	}
	
	.panel-left {
		width: 850px;
	}
	
	.panel-right {
		width: 320px;
	}
	
	.panel-margin {
		margin: 20px 30px;
	}
	
	.map-margin {
		margin: 12px auto;
	}
	
	.btn-center {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
	
	.yaoqiLogo {
		height: 120px;
	}
	
	.logoleft {
		width: 300px;
	}
</style>