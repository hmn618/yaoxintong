<template>
	<div>
		<Top></Top>
		<div class="main">
			
			<!--
            	描述：页面上部-报告
            -->
			<div class="panel">
				<div class="panel-body report-margin">
					<span style="color: cornflowerblue;" class="main-font">{{medicine.drugName}} </span>
					<span class="main-font">- 药品基本信息报告</span>     
					<!--
						描述：报告大纲
					-->
					<br />
					<br />
					<span class="child-font">报告内容 :</span>
					<div class="columns">
						<div class="column is-2">
						<section class="panel">
							<header class="panel-heading">基本信息</header>
							<ul class="list-group report-margin">
								<li class="list-group-item">药品详细信息</li>	
								<br />
								<li class="list-group-item">生产企业信息</li>
							</ul>
						</section>
						</div>
						<div class="column is-2">
						<section class="panel">
							<header class="panel-heading">相关信息</header>
							<ul class="list-group report-margin">
								<li class="list-group-item">相关企业信息</li>	
								<br />
								<li class="list-group-item">相似药品信息</li>
							</ul>
						</section>
						</div>
					</div>
				</div>
			</div>
			<!--
            	描述：页面下部-邮箱
            -->
            <div class="panel">
            	<div class="panel-body report-margin">
            		<strong class="main-font">请填写邮箱来获取报告</strong>
            		<br />
            		<br />
            		<br />
					<div class="columns">
						<input class="column is-6" type="text" name="report_e-mail"/>
						<div class="column is-2">
							<input type="submit" @click="showMedicineReport(id)" class="button is-info" value="立即获取"/>
						</div>
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
  name: 'MedicineReport',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id:null,
      medicine: {}
    }
  },
  components: { Top,Foot },
  mounted() {
  	window.scrollTo(0, 0);
  	console.log(this.$route.params.id);
	this.id = this.$route.params.id;
	this.showMedicineReport(this.id);
  },
  methods:{
  	showMedicineReport: function(id) {
				this.$http.post(this.HOST + '/medicine/report/', {
						id: this.id
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						this.medicine = response.body.datum;
						console.log(this.medicine);
					}, (response) => {
						console.log('请求失败');
						alert("请求失败，请刷新重试");
					});
			}
  }
}	
</script>

<style scoped>
	/*药品页面部分*/
	.main{
		margin: 12px auto;
		width: 1170px;
	}
	.main-font{
		font-size: 25px;
	}
	.report-margin{
		margin: 20px 20px;
	}
	.child-font{
		font-size: 18px;
	}
	.email-input{
		width: 500px;
	}
</style>