<template>
	<div>
		<Top></Top>
		<div class="main">
		<!--
        	描述：中间部分-上部
        -->
        
        <div class="panel">
        	<div class="panel-body columns">
        		<!--
                	描述：中间部分-上部-左侧
                	药企logo
                -->
                <div class="column is-2 logo-margin">
                	<img class="yaoqiLogo" src="../../assets/img/yaoqiLogo.jpg" alt="药企Logo" />
                </div>
                <!--
                	描述：中间部分-上部-右侧
                	药企简要信息
                -->
        		<div class="column is-9 name-margin">
        			<div class="main-font">
        				<strong>{{company.companyName}}</strong>
        			</div>
        			<br />
        			<span>地址：</span><span>{{company.registeredAddress}}</span>
            		<br />
            		<span>企业名称：</span><span>{{company.companyName}}</span>
        		</div>
        	</div>
        </div>
		
		<!--
        	描述：中间部分-下部
        	class="row"必须写在有class="container..."的div里
        -->
			<div class="columns main">
			<!--
            	描述：中间-下部-左边
            -->
            <div class="column is-9 panel panel-left ">
                <div class="panel-body">
                	<!--
                    	描述：导航栏
                    	基本信息  法律诉讼  经营状况
                    -->
                    <div class="columns">
                    	<div class="column is-12">
                    		<tabs type="boxed" is-full-width="false">
                    			<tab-item label="基本信息">
                    				<!--
                    					描述：公司简介
                    				-->
                    				<section class="panel-margin">
                    					<div class="tag-margin">
                    						<strong><tag type="info" class="child-font">公司简介</tag></strong>
                    					</div>
                    					该企业主要的经营地区和范围是：<br />
                    					{{company.productionRange}}
                    				</section>
	                   				<!--
	                   					描述：认证信息
	                   				-->
	                   				<section class="panel-margin">
	                   					<div class="tag-margin">
	                   						<strong><tag type="info" class="child-font">认证信息</tag></strong>
	                   					</div>
	                   					<div style="width: 800px;  word-wrap: break-word;">
	                   					<span v-for="info in AuthenticationInfor">
	                   						{{info.name}}
	                   						<span style="word-wrap: break-word;">
	                   							{{info.data}}
	                   						</span>
	                   						<br />
	                   					</span>
	                   					</div>
	                   					<span>相关数据库查询： </span>
	                   					<span><a href="http://app2.sfda.gov.cn/datasearchp/index1.do?tableId=25&tableName=TABLE25&tableView=%E5%9B%BD%E4%BA%A7%E8%8D%AF%E5%93%81&Id=188877">查询药监局药企数据</a></span>
						            </section>
					            	<!--
					                	描述：股东信息
					                -->
					              	<!--<section class="panel-margin">
					              		<div class="tag-margin">
	                   						<strong><tag type="info" class="child-font">股东信息</tag></strong>
					              		</div>	
					              		<table class="table is-bordered">
					              			<thead>
					              				<tr>
					              					<th>股东</th>
					              					<th>持股比例</th>
					              					<th>认缴出资额(万元)</th>
					              					<th>认缴出资日期</th>
					              					<th>股东类型</th>
					              				</tr>
					              			</thead>					              			
					              			<tbody v-for="info in StockholderInfo">
					              				<tr>
					              					<th>{{info.stock_holder}}</th>
					              					<th>{{info.stock_percent}}</th>
					              					<th>{{info.contribution}}</th>
					              					<th>{{info.date}}</th>
					              					<th>{{info.shock_type}}</th>
					              				</tr>	
					              			</tbody>
					              		</table>
					              	</section>
					                <!--
					                	描述：主要人员
					                -->
					                <!--<section class="panel-margin">
					              		<div class="tag-margin">
	                   						<strong><tag type="info" class="child-font">主要人员</tag></strong>
					              		</div>	
					              		<table class="table is-bordered">
					              			<thead>
					              				<tr>
					              					<th>姓名</th>
					              					<th>职务</th>
					              				</tr>
					              			</thead>					              			
					              			<tbody v-for="info in MainpersonInfo">
					              				<tr>
					              					<th>
					              						<a href="#">{{info.name}}</a>
					              					</th>
					              					<th>{{info.position}}</th>
					              				</tr>	
					              			</tbody>
					              		</table>
					              	</section>-->
					              	<!--
					                	描述：分支机构
					                -->
					            	<section class="panel-margin">
					              		<div class="tag-margin">
	                   						<strong><tag type="info" class="child-font">分支机构</tag></strong>
					              		</div>	
					              		<ol v-for="info in BranchInfo">
					              			<li><a href="#/electric_business_detail">{{info.name}}</a></li>
					              		</ol>
					            	</section>
                    			</tab-item>
                    			
                    			<tab-item label="法律诉讼">
                                <!--
				                	描述：统计分析
				                -->
				                <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">统计分析</tag></strong>
				                	</div>
				                	xxxxxxx
				                </section>
				            	<!--
				                	描述：裁判文书
				                -->
				                <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">裁判文书</tag></strong>
				                	</div>	
				                	<table class="table is-bordered">
					              		<thead>
					              			<tr>
					              				<th>序 号</th>
					              				<th>案件名称</th>
					              				<th>发布时间</th>
					              				<th>案件编号</th>
					              				<th>案件身份</th>
					              				<th>执行法院</th>
					              			</tr>
					              		</thead>
					              		<tbody v-for="info in JudgmentInfo">
					              			<tr>
					              				<th>{{info.No}}</th>
					              				<th><a href="#">{{info.name}}</a></th>
					              				<th>{{info.date}}</th>
					              				<th>{{info.number}}</th>
					              				<th>原告-<a href="#">{{info.accuser}}</a><br />被告-<a href="#">{{info.defendant}}</a></th>
					              				<th>{{info.court}}</th>
					              			</tr>
					              		</tbody>
				                	</table>
				                </section>
                    			</tab-item>
                    			
                    			<tab-item label="经营状况">
                    				<!--
                    					描述：财务总览
				                    -->
				                    <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">财务总览</tag></strong>
				                	</div>
				                	<span v-for="info in FinancialoverviewInfor">
				                		{{info.name}}
				                		<span >
				                			{{info.data}}
				                		</span>
				                		<br />
	                   					</span>
				                    </section>
					            	<!--
					                	描述：经营异常
					                -->
					                <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">经营异常</tag></strong>
				                	</div>
				                	<table class="table is-bordered">
					              		<thead>
					              			<tr>
					              				<th>序 号</th>
					              				<th>列入日期</th>
					              				<th>列入决定机关</th>
					              				<th>移出日期</th>
					              				<th>移出决定机关</th>
					              				<th>列入经营异常名录原因</th>
					              				<th>移出经营异常名录原因</th>
					              			</tr>
					              		</thead>
					              		<tbody v-for="info in AbnormaloperationInfo">
					              			<tr>
					              				<th>{{info.No}}</th>
					              				<th>{{info.date}}</th>
					              				<th>{{info.indecisionorgan}}</th>
					              				<th>{{info.removedate}}</th>
					              				<th>{{info.outdecisionorgan}}</th>
					              				<th>{{info.inreason}}</th>
					              				<th>{{info.outreason}}</th>
					              			</tr>
					              		</tbody>
				                	</table>
				                    </section>
					                <!--
					                	描述：行政处罚
					                -->
					                <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">行政处罚 [工商局]</tag></strong>
				                	</div>
				                	<table class="table is-bordered">
					              		<thead>
					              			<tr>
					              				<th>序 号</th>
					              				<th>文号</th>
					              				<th>类型</th>
					              				<th>处罚内容</th>
					              				<th>决定机关</th>
					              				<th>决定日期</th>
					              			</tr>
					              		</thead>
					              		<tbody v-for="info in AdministrativepenaltyInfo">
					              			<tr>
					              				<th>{{info.NO}}</th>
					              				<th>{{info.documentnumber}}</th>
					              				<th>{{info.type}}</th>
					              				<th>{{info.punishmentcontent}}</th>
					              				<th>{{info.decisionorgan}}</th>
					              				<th>{{info.decisiondate}}</th>
					              			</tr>
					              		</tbody>
				                	</table>
				                    </section>
				                    <!--
					                	描述：行政许可
					                -->
					                <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">行政许可</tag></strong>
				                	</div>
				                	<table class="table is-bordered">
					              		<thead>
					              			<tr>
					              				<th>序 号</th>
					              				<th>项目名称</th>
					              				<th>地域</th>
					              				<th>决定日期</th>
					              				<th></th>
					              			</tr>
					              		</thead>
					              		<tbody v-for="info in AdministrativelicensingInfo">
					              			<tr>
					              				<th>{{info.NO}}</th>
					              				<th>{{info.projectname}}</th>
					              				<th>{{info.region}}</th>
					              				<th>{{info.decisiondate}}</th>
					              				<th><a href="#">详情</a></th>
					              			</tr>
					              		</tbody>
				                	</table>
				                    </section>
				                    <!--
					                	描述：税务信息
					                -->
					                <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">税务信息</tag></strong>
				                	</div>
				                	<table class="table is-bordered">
					              		<thead>
					              			<tr>
					              				<th>序号</th>
					            				<th>评价年度</th>
					            				<th>纳税人识别号</th>
					            			    <th>纳税信用等级</th>
					            				<th>评价单位</th>
					            				<th>是否正常纳税</th>
					            				<th>是否欠税</th>
					            				<th>欠税余额</th>
					              			</tr>
					              		</thead>
					              		<tbody v-for="info in TaxInfo">
					              			<tr>
					              				<th>{{info.NO}}</th>
					              				<th>{{info.evaluationyear}}</th>
					              				<th>{{info.taxpayeridentificationnumber}}</th>
					              				<th>{{info.taxcreditrating}}</th>
					              				<th>{{info.evaluationunit}}</th>
					              				<th>{{info.regulartax}}</th>
					              				<th>{{info.owingtaxes}}</th>
					              				<th>{{info.taxesbalance}}</th>
					              			</tr>
					              		</tbody>
				                	</table>
				                   </section>
					            	<!--
					                	描述：产品信息
					                -->
					                <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">产品信息</tag></strong>
				                	</div>
				                	<table class="table is-bordered">
					              		<thead>
					              			<tr>
					              				<th>名称</th>
					              				<th>网址</th>
					              				<th>领域</th>
					              				<th>分类</th>
					              				<th>描述</th>
					              			</tr>
					              		</thead>
					              		<tbody v-for="info in ProductInfo">
					              			<tr>
					              				<th><a href="#/electric_business_detail">{{info.name}}</a></th>
					              				<th><a href="#/electric_business_detail">{{info.url}}</a></th>
					              				<th>{{info.field}}</th>
					              				<th>{{info.type}}</th>
					              				<th>{{info.description}}</th>
					              			</tr>
					              		</tbody>
				                	</table>
				                    </section>
					                <!--
					                	描述：融资信息
					                -->
					                
					                <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">融资信息</tag></strong>
				                	</div>
				                	<table class="table is-bordered">
					              		<thead>
					              			<tr>
					              				<th>日期</th>
					              				<th>级别</th>
					              				<th>金额</th>
					              				<th>投资方</th>
					              			</tr>
					              		</thead>
					              		<tbody v-for="info in FinancingInfo">
					              			<tr>
					              				<th>{{info.date}}</th>
					              				<th>{{info.rating}}</th>
					              				<th>{{info.money}}</th>
					              				<th>{{info.investor}}</th>
					              			</tr>
					              		</tbody>
				                	</table>
				                    </section>
					            	<!--
					                	描述：公司员工
					                -->
					                <section class="panel-margin">
				                	<div class="tag-margin">
				                		<strong><tag type="info" class="child-font">公司员工</tag></strong>
				                	</div>
				                	<table class="table is-bordered">
					              		<thead>
					              			<tr>
					              				<th>职位</th>
					              				<th>年龄</th>
					              				<th>工作经验</th>
					              				<th>毕业院校</th>
					              				<th>性别</th>
					              				<th>预估薪资</th>
					              				<th>委托联系</th>
					              			</tr>
					              		</thead>
					              		<tbody v-for="info in CompanystaffInfo">
					              			<tr>
					              				<th>{{info.position}}</th>
					              				<th>{{info.age}}</th>
					              				<th>{{info.workexperiencer}}</th>
					              				<th>{{info.graduateduniversity}}</th>
					              				<th>{{info.sex}}</th>
					              				<th>{{info.salary}}</th>
					              				<th><a href="#">委托联系</a></th>
					              			</tr>
					              		</tbody>
				                	</table>
				                  </section>
                    			</tab-item>
                    		</tabs>
                    	</div>
                    </div>
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
            		<router-link :to="{path: '/medicine_company_report', query: {id:id}}">
            			<img src="../../assets/img/xiazaibaogao.png" alt="下载报告" /><br />
            		</router-link>
            		<button type="button" class="button is-info" v-on:click="loadReport">下载报告</button>
            	</div>
            	</section>
            	<br />
            	
            	<section>
            	<div>
            				<strong>
            					<tag type="info" class="child-font">企业图谱</tag>
            				</strong>
            	</div>
            	<div class="btn-center map-margin">
            		<router-link :to="{path: '/medicine_knowledge_map', query: {medOrCom:1,map_op:0,id:id}}">
            			<img src="../../assets/img/yaopintupu.jpg" alt="企业图谱" /><br />
            		</router-link>
            		<button type="button" class="button is-info" v-on:click="showMap">查看企业图谱</button>
            	</div>
            	</section>
            	
            	<!--<section>
            	<div>
            				<strong>
            					<tag type="info" class="child-font">投资图谱</tag>
            				</strong>
            	</div>
            	<div class="btn-center map-margin">
            		<a href="#/medicine_knowledge_map">
            			<img src="../../assets/img/yaopintupu.jpg" alt="投资图谱" /><br />
            		</a>
            		<button type="button" class="button is-info" v-on:click="showInvestMap">查看投资图谱</button>
            	</div>
            	</section>-->
            	
            	<section>
            	<div>
            				<strong>
            					<tag type="info" class="child-font">疑似关系</tag>
            				</strong>
            	</div>
            	<div class="btn-center map-margin">
					<router-link :to="{path: '/medicine_knowledge_map', query: {medOrCom:1,map_op:1,id:id}}">
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
  name: 'MedicineCompanyDetail',
  data () {
  	return {
  		medOrCom:0,
  		msg: 'Welcome to Your Vue.js App',
  		id:null,
  		company:{},
  		branch:{},
  		map_op:0,
  		AuthenticationInfor:[
  		{"name":"编号：" ,"data":"xxxxxxx"},
  		{"name":"社会信用代码/组织机构代码： " ,"data":"xxxxxxx"},
  		{"name":"分类码：" ,"data":"xxxxxxx"},
  		{"name":"省市：" ,"data":"xxxxxxx"},
  		{"name":"企业名称：" ,"data":"xxxxxxx"},
  		{"name":"法定代表人：" ,"data":"xxxxxxx"},
  		{"name":"企业负责人：" ,"data":"xxxxxxx"},
  		{"name":"质量负责人：" ,"data":"xxxxxxx"},
  		{"name":"注册地址：" ,"data":"xxxxxxx"},
  		{"name":"生产地址：" ,"data":"xxxxxxx"},
  		{"name":"生产范围：" ,"data":"xxxxxxx"},
  		{"name":"发证日期：" ,"data":"xxxxxxx"},
  		{"name":"有效期至：" ,"data":"xxxxxxx"},
  		{"name":"发证机关：" ,"data":"xxxxxxx"},
  		{"name":"签发人：" ,"data":"xxxxxxx"},
  		{"name":"日常监管机构：" ,"data":"xxxxxxx"},
  		{"name":"日常监管人员：" ,"data":"xxxxxxx"},
  		{"name":"监督举报电话：" ,"data":"xxxxxxx"}
  		],
  		StockholderInfo:[
  		{"stock_holder":"xxxxxxx","stock_percent":"xxxxxxx","contribution":"xxxxxxx","date":"xxxxxxx","shock_type":"xxxxxxx"},
  		{"stock_holder":"xxxxxxx","stock_percent":"xxxxxxx","contribution":"xxxxxxx","date":"xxxxxxx","shock_type":"xxxxxxx"}
  		],
  		MainpersonInfo:[
  		{"name":"xxxxxxx","position":"xxxxxxx"},
  		{"name":"xxxxxxx","position":"xxxxxxx"}
  		],
  		BranchInfo:[
  		{"name":"xxxxxxx"},
  		{"name":"xxxxxxx"}
  		],
  		JudgmentInfo:[
  		{"No":"xxxxxxx","name":"xxxxxxx","date":"xxxxxxx","number":"xxxxxxx","accuser":"xxxxxxx","defendant":"xxxxxxx","court":"xxxxxxx"},
  		{"No":"xxxxxxx","name":"xxxxxxx","date":"xxxxxxx","number":"xxxxxxx","accuser":"xxxxxxx","defendant":"xxxxxxx","court":"xxxxxxx"}
  		],
  		FinancialoverviewInfor:[
  		{"name":"公司实力等级： " ,"data":"xxxxxxx"},
  		{"name":"纳税区间： " ,"data":"xxxxxxx"},
  		{"name":"销售净利润率： " ,"data":"xxxxxxx"},
  		{"name":"销售毛利率： " ,"data":"xxxxxxx"}
  		],
  		AbnormaloperationInfo:[
  		{"No":"xxxxxxx","date":"xxxxxxx","indecisionorgan":"xxxxxxx","removedate":"xxxxxxx","outdecisionorgan":"xxxxxxx","inreason":"xxxxxxx","outreason":"xxxxxxxx"},
  		{"No":"xxxxxxx","date":"xxxxxxx","indecisionorgan":"xxxxxxx","removedate":"xxxxxxx","outdecisionorgan":"xxxxxxx","inreason":"xxxxxxx","outreason":"xxxxxxxx"}
  		],
  		AdministrativepenaltyInfo:[
  		{"NO":"xxxxxxx","documentnumber":"xxxxxxx","type":"xxxxxxx","punishmentcontent":"xxxxxxx","decisionorgan":"xxxxxxx","decisiondate":"xxxxxxxx"},
  		{"NO":"xxxxxxx","documentnumber":"xxxxxxx","type":"xxxxxxx","punishmentcontent":"xxxxxxx","decisionorgan":"xxxxxxx","decisiondate":"xxxxxxxx"}
  		],
  		AdministrativelicensingInfo:[
  		{"NO":"xxxxxxx","projectname":"xxxxxxx","region":"xxxxxxx","decisiondate":"xxxxxxx"},
  		{"NO":"xxxxxxx","projectname":"xxxxxxx","region":"xxxxxxx","decisiondate":"xxxxxxx"}
  		],
  		TaxInfo:[
  		{"NO":"xxxxxxx","evaluationyear":"xxxxxxx","taxpayeridentificationnumber":"xxxxxxx","taxcreditrating":"xxxxxxx","evaluationunit":"xxxxxxx","regulartax":"xxxxxxx","owingtaxes":"xxxxxxx","taxesbalance":"xxxxxxx"},
  		{"NO":"xxxxxxx","evaluationyear":"xxxxxxx","taxpayeridentificationnumber":"xxxxxxx","taxcreditrating":"xxxxxxx","evaluationunit":"xxxxxxx","regulartax":"xxxxxxx","owingtaxes":"xxxxxxx","taxesbalance":"xxxxxxx"}
  		],
  		ProductInfo:[
  		{"name":"xxxxxxx","url":"xxxxxxx","field":"xxxxxxx","type":"xxxxxxx","description":"xxxxxxx"},
  		{"name":"xxxxxxx","url":"xxxxxxx","field":"xxxxxxx","type":"xxxxxxx","description":"xxxxxxx"}
  		],
  		FinancingInfo:[
  		{"date":"xxxxxxx","rating":"xxxxxxx","money":"xxxxxxx","investor":"xxxxxxx"},
  		{"date":"xxxxxxx","rating":"xxxxxxx","money":"xxxxxxx","investor":"xxxxxxx"}
  		],
  		CompanystaffInfo:[
  		{"position":"xxxxxxx", "age":"xxxxxxx","workexperiencer":"xxxxxxx","graduateduniversity":"xxxxxxx","sex":"xxxxxxx","salary":"xxxxxxx"},
  		{"position":"xxxxxxx", "age":"xxxxxxx","workexperiencer":"xxxxxxx","graduateduniversity":"xxxxxxx","sex":"xxxxxxx","salary":"xxxxxxx"}
  		]
  	}
  },
  components: { Top,Foot },
  mounted(){
  	window.scrollTo(0, 0);
  	console.log(this.$route.params.id);
  	this.id = this.$route.params.id;
  	this.getData(this.id);
  },
  methods:{
  	getData:function(id){  //得到有关药企的所有数据
  		this.$http.post(this.HOST + '/company/detail/', {
						id: this.id
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						this.company = response.body.datum;
						console.log(this.company);
						this.AuthenticationInfor[0].data=this.company.number;
						this.AuthenticationInfor[1].data=this.company.creditOrganizationCode;
						this.AuthenticationInfor[2].data=this.company.classificationCode;
						this.AuthenticationInfor[3].data=this.company.provincesCities;
						this.AuthenticationInfor[4].data=this.company.companyName;
						this.AuthenticationInfor[5].data=this.company.legalRepresentative;
						this.AuthenticationInfor[6].data=this.company.responsiblePerson;
						this.AuthenticationInfor[7].data=this.company.qualityOfficer;
						this.AuthenticationInfor[8].data=this.company.registeredAddress;
						var arr1 = this.company.productionAddress.split('***');
						var arr2 = arr1[0].split('：');
						var arr3=arr2[1].split('、');
						this.AuthenticationInfor[9].data=arr2[0];
						this.AuthenticationInfor[10].data=arr3[0];
						this.AuthenticationInfor[11].data=this.company.issueDate;
						this.AuthenticationInfor[12].data=this.company.effectiveDeadline;
						this.AuthenticationInfor[13].data=this.company.issuingAuthority;
						this.AuthenticationInfor[14].data=this.company.issuer;
						this.AuthenticationInfor[15].data=this.company.regulator;
						this.AuthenticationInfor[16].data=this.company.supervisor;
						this.AuthenticationInfor[17].data=this.company.reportCall;
//						this.getIdByCompanyName(this.medicine.manufacturer);

					}, (response) => {
						console.log('请求失败');
						alert("请求失败，请刷新重试");
					});
  	},
  	getBranch:function(id){  //得到有关药企的所有数据
  		this.$http.post(this.HOST + '/company/branch/', {
						id: this.id
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						this.branch = response.body.datum;
						console.log(branch);
//						this.getIdByCompanyName(this.medicine.manufacturer);

					}, (response) => {
						console.log('请求失败');
						alert("请求失败，请刷新重试");
					});
  	},
  	loadReport:function(){
  		console.log("loadReport");
  		var url = '/#/medicine_company_report/' + this.id ;
  		console.log(url);
  		window.location.href = url;
  	},
  	showMap:function(){
  		console.log("showMap");
		this.map_op=0;
		var url='/#/company_knowledge_map/'+ this.map_op + '/' + this.id ;
		console.log(url);
		window.location.href = url;
  	},
//	showInvestMap:function(){
//		console.log("showInvestMap");
//		window.location.href = "#/medicine_knowledge_map";
//	},
  	showRelation:function(){
 		console.log("showRelation");
		this.map_op=1;
		var url='/#/company_knowledge_map/' + this.map_op + '/' + this.id ;
		console.log(url);
		window.location.href = url;
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
.panel-left{
	width: 850px;
}
.panel-right{
	width: 320px;
}
.main-font{
	font-size: 25px;
}
.child-font{
	font-size: 15px;
}
.panel-margin{
	margin: 20px 20px;
}
.map-margin{
	margin:12px auto;
}
.logo-margin{
	margin: 20px 20px;
}
.name-margin{
	margin: 40px 0px;
}
.btn-center{
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}
.yaoqiLogo{
	height: 120px;
}
.logoleft{
	width: 300px;
}
.tag-margin{
	margin: 4px 0px;
}
</style>