<template>
	<div>
		<Top></Top>
		<div class="main">
			<!--
				描述：中间部分-上部
			-->
			<div class="panel panel-default">
				<div class="panel-body row">
					<!--
						描述：中间部分-上部-左侧
						药企logo
					-->
					<div class="col-xs-6 logoleft">
						<img class="yaoqiLogo" src="../../assets/img/DianShanglogo.png" alt="电商Logo" />
					</div>
					<!--
						描述：中间部分-上部-右侧
						药企简要信息
					-->
					<div class="col-xs-6">
					<h3>
        				<strong>单位名称</strong>
        			</h3>
            		<dl class="dl-horizontal">
            			<dt>网站名称：</dt>
            			<dd><a href="#">xxxxxxx</a></dd>
            			<dt>网址：</dt>
            			<dd><a href="#">xxxxxxx</a></dd>
            			<dt>单位地址：</dt>
            			<dd>xxxxxxx</dd>
            		</dl>
					</div>
				</div>
			</div>
		<!--
        	描述：中间部分-下部
        	class="row"必须写在有class="container..."的div里
        -->
		<div class="container">
			<div class="row">
			<!--
            	描述：中间-下部-左边
            -->
            <div class="col-xs-6 panel panel-default panel-left">
                <div class="panel-body">
                	<!--
                    	描述：导航栏
                    	基本信息  法律诉讼  经营状况 
                   -->
                   <nav class="navbar navbar-default" role="navigation">
                   	<div class="container-fluid">
                   		<ul class="nav nav-tabs" id="tabitem">
                   			<!--
                   				描述：基本信息
                   				公司简介  认证信息
                   			-->    
                   			<li id="info" class="active"><a href="#infotab" data-toggle="tab">基本信息</a></li>
                   			<!--
                				描述：法律诉讼
                				统计分析  裁判文书
                			-->    
                   			<li id="law"><a href="#lawtab" data-toggle="tab">法律诉讼</a></li>
                   			<!--
                				描述：经营状况
                				财务总览  经营异常  行政处罚  行政许可  税务信息  产品信息 
                			-->    
                   			<li id="status"><a href="#stattab" data-toggle="tab">经营状况</a></li>
                   		</ul>
                   		<div class="tab-content">
                   			    <div class="tab-pane active" id="infotab">
                   				<!--
                   					描述：公司简介
                   				-->
                   				<section>
                   					<div>
                   						<h4>
                   							<strong class="label label-info">
                   								公司简介
                   							</strong>
                   						</h4>
                   					</div>
                   					<div class="thumbnail">
                   						xxxxxxx
                   					</div>
                   				</section>
                   				<!--
                   					描述：认证信息
                   				-->
                   				<section>
                   					<div>
                   						<h4>
                   							<strong class="label label-info">
                   								认证信息
                   							</strong>
                   						</h4>
                   					</div>
                   					<div class="thumbnail">
                   						<dl class="dl-horizontal">
                   							<dt>证书编号：</dt>
                   							<dd>xxxxxxx</dd>
            								<dt>服务范围：</dt>
            								<dd>xxxxxxx</dd>
            								<dt>单位名称：</dt>
					            			<dd>xxxxxxx</dd>
					            			<dt>法定代表人：</dt>
					            			<dd>xxxxxxx</dd>
					            			<dt>单位地址：</dt>
					            			<dd>xxxxxxx</dd>
					            			<dt>省份：</dt>
					            			<dd>xxxxxxx</dd>
					            			<dt>网站名称：</dt>
					            			<dd>xxxxxxx</dd>
					            			<dt>IP地址：</dt>
					            			<dd>xxxxxxx</dd>
					            			<dt>域名：</dt>
					            			<dd>xxxxxxx</dd>
					            			<dt>发证日期：</dt>
					            			<dd>xxxxxxx</dd>
					            			<dt>有效截至日期：</dt>
					            			<dd>xxxxxxx</dd>
					            			<dt>邮编：</dt>
					            			<dd>xxxxxxx</dd>					            			
					                    </dl>
					            	</div>
					            </section>
                   			    </div>
                   				<div class="tab-pane" id="lawtab">
				                <!--
				                	描述：统计分析
				                -->
				                <section>
				            		<div>
				            			<h4>
				            				<strong class="label label-info">
				            					统计分析
				            				</strong>
				            		   </h4>
				            		</div>
				            		<div class="thumbnail">
				            			xxxxxxx
				            	    </div>
				            	</section>
				            	<!--
				                	描述：裁判文书
				                -->
				                <section>
				            		<div>
				            			<h4>
				            				<strong class="label label-info">
				            					裁判文书
				            				</strong>
				            		   </h4>
				            		</div>
				            		<div>
				            			<table class="table table-bordered table-hover table-condensed">
				            			<thead>
				            				<tr>
				            					<th>	
				            					           序号
				            					</th>
				            					<th>
				            						案件名称
				            					</th>
				            					<th>
				            						发布时间
				            					</th>
				            					<th>
				            						案件编号
				            					</th>
				            					<th>
				            						案件身份
				            					</th>
				            					<th>
				            						执行法院
				            					</th>
				            				</tr>
				            			</thead>
				            			<tbody>
				            				<tr>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						<a href="#">xxxxxxx</a>
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						原告-<a href="#">xxxxxxx</a><br />
				            						被告-<a href="#">xxxxxxx</a>
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            				</tr>
				             				<tr>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						<a href="#">xxxxxxx</a>
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						原告-<a href="#">xxxxxxx</a><br />
				            						被告-<a href="#">xxxxxxx</a>
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            				</tr>
				            			</tbody>
				            		</table>
				            		</div>
				            	</section>
				                </div>
				                <div class="tab-pane" id="stattab">
				                <!--
				                	描述：财务总览
				                -->
				                <section>
				            		<div>
				            			<h4>
				            				<strong class="label label-info">
				            					财务总览
				            				</strong>
				            		   </h4>
				            		</div>
				            		<div class="thumbnail">
				            			<dl class="dl-horizontal">
				            			<dt>公司实力等级：</dt>
				            			<dd>xxxxxxx</dd>
				            			<dt>纳税区间：</dt>
				            			<dd>xxxxxxx</dd>
				            			<dt>销售净利润率：</dt>
				            			<dd>xxxxxxx</dd>
				            			<dt>销售毛利率：</dt>
				            			<dd>xxxxxxx</dd>
				            			</dl>
				            	    </div>
				            	</section>
				            	<!--
				                	描述：经营异常
				                -->
				                <section>
				            		<div>
				            			<h4>
				            				<strong class="label label-info">
				            					经营异常
				            				</strong>
				            		   </h4>
				            		</div>
				            		<div>
				            			<table class="table table-bordered table-hover table-condensed">
				            			<thead>
				            				<tr>
				            					<th>	
				            					           序号
				            					</th>
				            					<th>
				            						列入日期
				            					</th>
				            					<th>
				            						列入决定机关
				            					</th>
				            					<th>
				            						移出日期
				            					</th>
				            					<th>
				            						移出决定机关
				            					</th>
				            					<th>
				            						列入经营异常名录原因
				            					</th>
				            					<th>
				            						移出经营异常名录原因
				            					</th>
				            				</tr>
				            			</thead>
				            			<tbody>
				            				<tr>
				            					<th>
				            						1
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            				</tr>
				             				<tr>
				            					<th>
				            						2
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            				</tr>
				            			</tbody>
				            		</table>
				            		</div>
				            	</section>
				                <!--
				                	描述：行政处罚
				                -->
				                <section>
				            		<div>
				            			<h4>
				            				<strong class="label label-info">
				            					行政处罚 [工商局]
				            				</strong>
				            		   </h4>
				            		</div>
				            		<div>
				            			<table class="table table-bordered table-hover table-condensed">
				            			<thead>
				            				<tr>
				            					<th>	
				            					           序号
				            					</th>
				            					<th>
				            						文号
				            					</th>
				            					<th>
				            						类型
				            					</th>
				            					<th>
				            						处罚内容
				            					</th>
				            					<th>
				            						决定机关
				            					</th>
				            					<th>
				            						决定日期
				            					</th>
				            				</tr>
				            			</thead>
				            			<tbody>
				            				<tr>
				            					<th>
				            						1
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxx-xx-xx
				            					</th>
				            				</tr>
				             				<tr>
				            					<th>
				            						2
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxx-xx-xx
				            					</th>
				            				</tr>
				            			</tbody>
				            		</table>
				            		
				            	    </div>
				            	</section>
				            	<!--
				                	描述：行政许可
				                -->
				                <section>
				            		<div>
				            			<h4>
				            				<strong class="label label-info">
				            					行政许可
				            				</strong>
				            		   </h4>
				            		</div>
				            		<div>
				            			<table class="table table-bordered table-hover table-condensed">
				            			<thead>
				            				<tr>
				            					<th>	
				            					           序号
				            					</th>
				            					<th>
				            						项目名称
				            					</th>
				            					<th>
				            						地域
				            					</th>
				            					<th>
				            						决定日期
				            					</th>
				            					<th>
				            					</th>
				            				</tr>
				            			</thead>
				            			<tbody>
				            				<tr>
				            					<th>
				            						1
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxx-xx-xx
				            					</th>
				            					<th>
				            						<a href="#">详情</a>
				            					</th>
				            				</tr>
				             				<tr>
				            					<th>
				            						2
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxx-xx-xx
				            					</th>
				            					<th>
				            						<a href="#">详情</a>
				            					</th>
				            				</tr>
				            			</tbody>
				            		</table>
				            		</div>
				            	</section>
				                <!--
				                	描述：税务信息
				                -->
				                <section>
				            		<div>
				            			<h4>
				            				<strong class="label label-info">
				            					税务信息
				            				</strong>
				            		   </h4>
				            		</div>
				            		<div>
				            			<table class="table table-bordered table-hover table-condensed">
				            			<thead>
				            				<tr>
				            					<th>	
				            					           序号
				            					</th>
				            					<th>
				            						评价年度
				            					</th>
				            					<th>
				            						纳税人识别号
				            					</th>
				            					<th>
				            						纳税信用等级
				            					</th>
				            					<th>
				            						评价单位
				            					</th>
				            					<th>
				            						是否正常纳税
				            					</th>
				            					<th>
				            						是否欠税
				            					</th>
				            					<th>
				            						欠税余额
				            					</th>
				            				</tr>
				            			</thead>
				            			<tbody>
				            				<tr>
				            					<th>
				            						1
				            					</th>
				            					<th>
				            						xxxx年
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						A
				            					</th>
				            					<th>
				            						国家税务总局
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            				</tr>
				            				<tr>
				            					<th>
				            						2
				            					</th>
				            					<th>
				            						xxxx年
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						A
				            					</th>
				            					<th>
				            						国家税务总局
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            				</tr>
				             				</tbody>
				            		</table>
				            		</div>
				            	</section>
				            	<!--
				                	描述：产品信息
				                -->
				                <section>
				            		<div>
				            			<h4>
				            				<strong class="label label-info">
				            					产品信息
				            				</strong>
				            		   </h4>
				            		</div>
				            		<div>
				            			<table class="table table-bordered table-hover table-condensed">
				            			<thead>
				            				<tr>
				            					<th>
				            						名称
				            					</th>
				            					<th>
				            						网址
				            					</th>
				            					<th>
				            						领域
				            					</th>
				            					<th>
				            						分类
				            					</th>
				            					<th>
				            						描述
				            					</th>
				            				</tr>
				            			</thead>
				            			<tbody>
				            				<tr>
				            					<th>
				            						<a href="#">xxxxxxx</a>
				            					</th>
				            					<th>
				            						<a href="#">xxxxxxx</a>
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>				            				
				            					<th>
				            						xxxxxxx
				            					</th>
				            				</tr>
				             				<tr>
				            					<th>
				            						<a href="#">xxxxxxx</a>
				            					</th>
				            					<th>
				            						<a href="#">xxxxxxx</a>
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>
				            					<th>
				            						xxxxxxx
				            					</th>				            					
				            					<th>
				            						xxxxxxx
				            					</th>
				            				</tr>
				            			</tbody>
				            		</table>
				            		</div>
				            	</section>
				                </div>
                   		</div>
                   	</div>
                   </nav>
                </div>
            </div>
            
            <!--
            	描述：中间-下部-右边
            	【下载报告】【药品图谱】【疑似关系】图片和按钮都是可点的
            	alt--规定图像的替代文本-->
            <div class="col-xs-6 panel panel-default panel-right">
            	<div class="panel-body">
            	<section>
            	<div>
            			<h4>
            				<strong class="label label-info">
            					下载报告
            				</strong>
            			</h4>
            	</div>
            	<div class="thumbnail btn-center">
            		<a href="#/medicine_report">
            			<img src="../../assets/img/xiazaibaogao.png" alt="下载报告" /><br />
            		</a>
            		<button type="button" class="btn btn-info" v-on:click="loadReport">下载报告</button>
            	</div>
            	</section>
            	
            	<section>
            	<div>
            			<h4>
            				<strong class="label label-info">
            					电商图谱
            				</strong>
            			</h4>
            	</div>
            	<div class="thumbnail btn-center">
            		<a href="#/medicine_knowledge_map">
            			<img src="../../assets/img/yaopintupu.jpg" alt="电商图谱" /><br />
            		</a>
            		<button type="button" class="btn btn-info" v-on:click="showMap">查看电商图谱</button>
            	</div>
            	</section>
            	<section>
            	<div>
            			<h4>
            				<strong class="label label-info">
            					疑似关系
            				</strong>
            			</h4>
            	</div>
            	<div class="thumbnail btn-center">
            		<a href="#/medicine_knowledge_map">
            			<img src="../../assets/img/yaopintupu.jpg" alt="疑似关系" /><br />
            		</a>
            		<button type="button" class="btn btn-info" v-on:click="showRelation">查看疑似关系</button>
            	</div>
            	</section>
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
  name: 'ElectricBusinessDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { Top,Foot },
  methods:{
  	showMap:function(){
  		console.log("showMap");
  		window.location.href = "#/medicine_knowledge_map";
  	},
  	loadReport:function(){
  		console.log("loadReport");
  		window.location.href = "#/medicine_report";
  	},
  	showRelation:function(){
  		console.log("showRelation");
  		window.location.href = "#/medicine_knowledge_map";
  	}
  }
}	
</script>

<style scoped>
/*药品页面部分*/
.main{
	margin: 0 auto;
	width: 1170px;
}
.panel-left{
	width: 850px;
}
.panel-right{
	width: 320px;
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
</style>