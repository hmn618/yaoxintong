<template>
	<div>
		<Top></Top>
		<div class="main">
			<!--
            	描述：页面上部-报告
            -->
			<div class="panel panel-default">
				<div class="panel-body">
					<h3>
						<span style="color: cornflowerblue;">药企名称 </span>
						- 药企基本信息报告
					</h3>
					<!--
						描述：报告大纲
					-->
					<br />
					<h4>
						报告内容 :
					</h4>
					<div class="row">
						<div class="col-md-2">
							<section class="panel panel-default">
								<header class="panel-heading bg-light">基本信息</header>
								<div class="list-group">
									<a class="list-group-item" href="#">公司简介</a>
									<a class="list-group-item" href="#">认证信息</a>
									<a class="list-group-item" href="#">股东信息</a>
									<a class="list-group-item" href="#">主要人员</a>
									<a class="list-group-item" href="#">分支机构</a>
								</div>
							</section>
						</div>
						<div class="col-md-2">
							<section class="panel panel-default">
								<header class="panel-heading bg-light">法律诉讼</header>
								<div class="list-group">
									<a class="list-group-item" href="#">统计分析</a>
									<a class="list-group-item" href="#">裁判文书</a>
								</div>
							</section>
						</div>
						<div class="col-md-2">
							<section class="panel panel-default">
								<header class="panel-heading bg-light">经营状况</header>
								<div class="list-group">
									<a class="list-group-item" href="#">财务总览</a>
									<a class="list-group-item" href="#">经营异常</a>
									<a class="list-group-item" href="#">行政处罚</a>
									<a class="list-group-item" href="#">行政许可</a>
									<a class="list-group-item" href="#">税务信息</a>
									<a class="list-group-item" href="#">产品信息</a>
									<a class="list-group-item" href="#">融资信息</a>
									<a class="list-group-item" href="#">公司员工</a>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
			<!--
            	描述：页面下部-邮箱
            -->
			<div class="panel panel-default">
				<div class="panel-body">
					<h3>
						<strong>请填写邮箱来获取报告</strong>
					</h3>
					<br />
					<div>
						<div class="col-sm-10 email-input">
							<input class="form-control" type="text" name="report_e-mail" />
						</div>
						<button type="button" class="btn btn-info col-sm-2">立即获取</button>
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
		name: 'MedicineCompanyReport',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			Top,
			Foot
		}
	}
</script>

<style scoped>
	.main {
		margin: 0 auto;
		width: 1170px;
	}
	
	.email-input {
		width: 500px;
	}
</style>