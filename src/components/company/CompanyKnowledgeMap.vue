<template>
	<div id="CompanyKnowledgeMap">
		<Top></Top>
		<div class="main">
			<br />
			<div class="main-font">
				<strong>{{map.nodes[0].name}}</strong>
			</div>
			<!--
            	描述：左右结构图谱导航
            -->
			<br />
			<div class="main">
				<div class="panel panel-default">
					<div class="panel-body">
						<!--
                    	描述：左右结构导航栏
                    	药品图谱  疑似关系
                    -->
						<div class="columns">
							<div class="column">
								<tabs layout="left" v-bind:activeIndex="0">
									<tab-item label="基本图谱" id="tabMap">
										<svg class="svg-size" id="mapTab">
										</svg>
									</tab-item>
									<tab-item label="相关药企" id="tabRelation">
										<svg class="svg-size" id="relationMapTab">
										</svg>
									</tab-item>
								</tabs>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import * as d3 from 'd3';
	import Top from '../common/Top'
	import Foot from '../common/Foot'
	export default {
		name: 'CompanyKnowledgeMap',
		data() {
			return {
				id: null,
				map: {
					nodes: [{
						"name": "wydewy"
					}],
					edges: []
				},
				map_op: 1
			}
		},
		mounted() {
			window.scrollTo(0, 0);
			console.log(this.$route.params.id);
			console.log(this.$route.params.map_op)
			this.id = this.$route.params.id;
			//			this.map_op=this.$route.query.map_op;
			this.map_op = this.$route.params.map_op;
			this.getData(this.id, 0, "#mapTab");
			this.getData(this.id, 1, "#relationMapTab");
		},
		methods: {
			getData: function(id, map_op, ele) {
				this.$http.post(this.HOST + '/company/map/', {
						id: this.id,
						map_op: map_op
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						this.map = response.body.datum;
						console.log(this.map);
						if(response.body.datum) {
							this.draw(response.body.datum, ele);
						} else {
							alert("没有找到图谱信息");
						}

					}, (response) => {
						console.log('请求失败');
						alert("请求失败，请刷新重试");
					});
			},
			draw: function(data, ele) {
				//初始数据如下：
				var width = 1000;
				var height = 666;
				var svg = d3.select(ele)
					.append("svg")
					.attr("width", width)
					.attr("height", height);

				//定义一个力导向图的布局如下
				var force = d3.layout.force()
					.nodes(data.nodes) //指定节点数组
					.links(data.edges) //指定连线数组
					.size([width, height]) //指定作用域范围
					.linkDistance(100) //指定连线长度
					.charge([-1800]); //相互之间的作用力

				force.start(); //开始作用
				//添加连线		
				var svg_edges = svg.selectAll("line")
					.data(data.edges)
					.enter()
					.append("line")
					.style("stroke", "#aaa")
					.style("stroke-width", 1);

				var color = d3.scale.category20();

				//添加节点			
				var svg_nodes = svg.selectAll("circle")
					.data(data.nodes)
					.enter()
					.append("circle")
					.attr("r", 25)
					.style("fill", function(d, i) {
						return color(i);
					})
					.call(force.drag); //使得节点能够拖动

				//添加描述节点的文字
				var svg_texts = svg.selectAll("text")
					.data(data.nodes)
					.enter()
					.append("text")
					.style("fill", "black")
					.attr("dx", 20)
					.attr("dy", 8)
					.text(function(d) {
						return d.name;
					});

				force.on("tick", function() { //对于每一个时间间隔

					//更新连线坐标
					svg_edges.attr("x1", function(d) {
							return d.source.x;
						})
						.attr("y1", function(d) {
							return d.source.y;
						})
						.attr("x2", function(d) {
							return d.target.x;
						})
						.attr("y2", function(d) {
							return d.target.y;
						});

					//更新节点坐标
					svg_nodes.attr("cx", function(d) {
							return d.x;
						})
						.attr("cy", function(d) {
							return d.y;
						});

					//更新文字坐标
					svg_texts.attr("x", function(d) {
							return d.x;
						})
						.attr("y", function(d) {
							return d.y;
						});
				});
			},
			draw1: function(data, ele) {
				console.log("draw");
				var color = d3.scaleOrdinal(d3.schemeCategory20);
				//布局(数据转换) linkDistance是结点间的距离,charge是定义结点间是吸引（值为正）还是互斥（值为负），值越大力越强。
				var simulation = d3.forceSimulation()
					.force("link", d3.forceLink().id(function(d) {
						return d.name;
					}))
					.force("charge", d3.forceManyBody())
					.force("center", d3.forceCenter(500, 300));
				//添加连线
				var edges = d3.select(ele).append("g").selectAll(".force_line")
					.data(data.edges)
					.enter()
					.append("line")
					.style("stroke", "#ccc")
					.style("stroke-width", 3);
				//					.on("mouseover", function(d, i) {
				//						//显示连接线上的文字
				//						relations.style("fill-opacity", function(edge) {
				//							if(edge.source === d.source && edge.target === d.target) {
				//								return 1.0;
				//							} else {
				//								return 0.0;
				//							}
				//						});
				//					})
				//					.on("mouseout", function(d, i) {
				//						//隐去连接线上的文字
				//						relations.style("fill-opacity", 0.0);
				//					});

				//添加关系
				var relations = d3.select(ele).append("g").selectAll(".force_relation")
					.data(data.edges)
					.enter()
					.append("text")
					//	.style("fill-opacity", 0.0)
					.style("fill-opacity", 1.0)
					.attr("class", "force_text")
					.attr("class", "is-unselectable")
					.text(function(d) {
						return d.relation;
					});
				//改为圆点
				var nodes = d3.select(ele).append("g").selectAll(".force_node")
					.data(data.nodes)
					.enter()
					.append("circle")
					.attr("r", 50)
					.style("fill", function(d, i) {
						return color(i);
					})
					.on("mouseover", function(d, i) {
						//显示连接线上的文字
						texts.style("fill-opacity", function(node) {
							if(node.name === d.name) {
								return 1.0;
							} else {
								return 0.0;
							}
						});
					})
					.on("mouseout", function(d, i) {
						//隐去连接线上的文字
						texts.style("fill-opacity", 0.0);
					})
					.call(d3.drag()
						.on("start", dragstarted)
						.on("drag", dragged)
						.on("end", dragended)
					);  
				//添加文字
				var texts = d3.select(ele).append("g").selectAll(".force_text")
					.data(data.nodes)
					.enter()
					.append("text")
					.attr("class", "force_text")
					.attr("dx", -13)
					.attr("dy", 3)
					.style("fill-opacity", 0.0)
					.attr("class", "is-unselectable")
					.text(function(d) {
						return d.name;
					});
				//不断更新力导向图中的元素
				simulation
					.nodes(data.nodes)
					.on("tick", function() { //对于每一个时间间隔，力导向图布局 force 有一个事件 tick
						//更新连线坐标
						edges.attr("x1", function(d) {
								return d.source.x;
							})
							.attr("y1", function(d) {
								return d.source.y;
							})
							.attr("x2", function(d) {
								return d.target.x;
							})
							.attr("y2", function(d) {
								return d.target.y;
							});
						//更新关系坐标
						relations.attr("x", function(d) {
								return(d.source.x + d.target.x) / 2;
							})
							.attr("y", function(d) {
								return(d.source.y + d.target.y) / 2;
							});
						//更新节点坐标
						nodes.attr("cx", function(d) {
								return d.x;
							})
							.attr("cy", function(d) {
								return d.y;
							});
						//更新文字坐标
						texts.attr("x", function(d) {
								return d.x;
							})
							.attr("y", function(d) {
								return d.y;
							});
					});
				simulation
					.force("link")
					.links(data.edges);

				function dragstarted(d) {
					if(!d3.event.active) simulation.alphaTarget(0.3).restart();
					d.fx = d.x;
					d.fy = d.y;
				}

				function dragged(d) {
					d.fx = d3.event.x;
					d.fy = d3.event.y;
				}

				function dragended(d) {
					if(!d3.event.active) simulation.alphaTarget(0);
					d.fx = d.x;
					d.fy = d.y;
				}

			}
		},
		components: {
			Top,
			Foot
		}
	}
</script>

<style scoped>
	/*药品页面部分*/
	
	.main {
		margin: 12px auto;
		width: 1170px;
	}
	
	.navleft {
		width: 200px;
	}
	
	.main-font {
		font-size: 25px;
	}
	
	.panel-margin {
		margin: 20px 30px;
	}
	/*图谱部分*/
	
	.svg-size {
		width: 1024px;
		height: 1024px;
	}
	
	.force_line {}
	
	.force_node {}
	
	.force_text {
		font: 10px sans-serif;
	}
	
	.linetext {
		font-size: 12px;
		font-family: SimSun;
		fill: #0000FF;
		fill-opacity: 1.0;
	}
</style>