<template>
	<div>
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
								<!--<div id="tabMap"></div>-->
								<tabs layout="left" v-bind:activeIndex="0">
									<tab-item label="基本图谱">
										<!--<svg class="svg-size" id="mapTab">
										</svg>-->
										<div class="columns">
											<div  class="column is-9" id="tabMap">
												
											</div>
											<div class="column is-3">
												
											</div>
						 			</div>
									</tab-item>
									<tab-item label="类似药品" id="tabRelation">
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
	import cytoscape from 'cytoscape'
	export default {
		name: 'MedicineKnowledgeMap',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				id: null,
				map: {
					nodes: [{
						"name": "wydewy"
					}],
					edges: []
				},
				map_op: 1,
				nodes: [],
				edges: []
			}
		},
		mounted() {
			window.scrollTo(0, 0);
			console.log(this.$route.params.id);
			console.log(this.$route.params.map_op)
			this.id = this.$route.params.id;
			//			this.map_op=this.$route.query.map_op;
			this.map_op = this.$route.params.map_op;
			this.getData(this.id, "mapTab");
			//			this.getData00(this.id, 1, "#relationMapTab");
		},
		methods: {
			getData: function(id, ele) {
				console.log("getData");
				var url = this.HOST_medicinekg+"/api/medicines/getResource/" + id;
				this.$http.get(url, {}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						//						this.medicines.push(data);
						//						for(var i = 0; i < this.medicines.length; ++i) {
						var node1 = {
							data: {
								"id": data.id,
								'rId': data.rId,
								"name": data.name,
								"label": "Medicine"
							}
						};
						this.nodes.push(node1);

						var node2 = {
							data: {
								id: data.dosageForm.id,
								name: data.productionUnit.name,
								label: "ProductionUnit"
							}
						};
						this.nodes.push(node2);

						var node3 = {
							data: {
								id: data.productionUnit.id,
								name: data.dosageForm.name,
								label: "DosageForm"
							}
						};
						this.nodes.push(node3);

						var edge1 = {
							data: {
								source: data.id,
								target: data.dosageForm.id,
								relationship: "剂型是"
							}
						};
						var edge2 = {
							data: {
								"source": data.id,
								"target": data.productionUnit.id,
								"relationship": "生产厂家是"
							}
						};

						this.edges.push(edge1);
						this.edges.push(edge2);

						//						}
						this.draw(ele);
					}, (response) => {});
			},
			draw: function(ele) {

				console.log(this.nodes);
				console.log(this.edges);

				var cy = cytoscape({
					container: document.getElementById('tabMap'),
					style: [{
							selector: 'node[label = "Medicine"]',
							css: {
								'background-color': '#6FB1FC',
								'content': 'data(name)'
							}
						},
						{
							selector: 'node[label = "ProductionUnit"]',
							css: {
								'background-color': '#F5A45D',
								'content': 'data(name)'
							}
						},
						{
							selector: 'node[label = "DosageForm"]',
							css: {
								'background-color': '#11A45D',
								'content': 'data(name)'
							}
						},
						{
							selector: 'edge',
							css: {
								'content': 'data(relationship)',
								'target-arrow-shape': 'triangle'
							}
						}
					],
					elements: {
						nodes: this.nodes,
						edges: this.edges,
						layout: {
							name: 'grid'
						}
					}
				});
				var _this = this;
				cy.on('tap', 'node', function(evt) {
					var node = evt.target;
					console.log('tapped ' + node.id());
					//在这里写点击展示详细信息
					_this.getDetail(node.data().label, node.data().rId);
				});
			},
			getDetail: function(label, id) {
				console.log('detail');
				if(label === "Medicine") {
					console.log('Medicine');
					this.$http.post(this.HOST + '/medicine/detail/', {
							id: id
						}, {
							emulateJSON: true
						}) //跨域加{emulateJSON: true}
						.then((response) => {
							console.log(response);
						}, (response) => {
							console.log('请求结点详情失败');
						});
				}
				
				if(label === "ProductionUnit") {
					console.log('ProductionUnit '+id);
					this.$http.post(this.HOST + '/company/detail/', {
							id: id
						}, {
							emulateJSON: true
						}) //跨域加{emulateJSON: true}
						.then((response) => {
							console.log(response);
						}, (response) => {
							console.log('请求结点详情失败');
						});
				}


			},
			getData00: function(id, map_op, ele) {
				this.$http.post(this.HOST + '/medicine/map/', {
						id: this.id,
						map_op: map_op
					}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						this.map = response.body.datum;
						console.log(this.map);
						if(response.body.datum) {
							//							this.draw(this.map, ele);
							this.getData();
						} else {
							alert("没有找到图谱信息");
						}

					}, (response) => {
						console.log('请求失败');
						alert("请求失败，请刷新重试");
					});
			},
			draw00: function(data, ele) {
				//初始数据如下：
				var width = 1000;
				var height = 1800;
				var svg = d3.select(ele)
					.append("svg")
					.attr("width", width)
					.attr("height", height);

				//定义一个力导向图的布局如下
				var force = d3.layout.force()
					.nodes(data.nodes) //指定节点数组
					.links(data.edges) //指定连线数组
					.size([width, height]) //指定作用域范围
					.linkDistance(150) //指定连线长度
					.charge([-400]); //相互之间的作用力

				force.start(); //开始作用
				//添加连线		
				var svg_edges = svg.selectAll("line")
					.data(data.edges)
					.enter()
					.append("line")
					.style("stroke", "#ccc")
					.style("stroke-width", 1);
				//添加描述线的文字
				var svg_l_texts = svg.selectAll(".linetext")
					.data(data.edges)
					.enter()
					.append("text")
					.attr("class", "linetext")
					.text(function(d) {
						return d.relation;
					});
				var color = d3.scale.category20();

				//添加节点			
				var svg_nodes = svg.selectAll("circle")
					.data(data.nodes)
					.enter()
					.append("circle")
					.attr("r", 20)
					.style("fill", function(d, i) {
						return color(i);
					})
					.on("mouseover", function(d, i) {
						console.log("mouseover");
						//显示连接线上的文字
						edges_text.style("fill-opacity", function(edge) {
							if(edge.source === d || edge.target === d) {
								return 1.0;
							}
						});
					})
					.on("mouseout", function(d, i) {
						console.log("mouseout");
						//隐去连接线上的文字
						edges_text.style("fill-opacity", function(edge) {
							if(edge.source === d || edge.target === d) {
								return 0.0;
							}
						});
					})
					.call(force.drag); //使得节点能够拖动

				//添加描述节点的文字
				var svg_n_texts = svg.selectAll("text")
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
					svg_n_texts.attr("x", function(d) {
							return d.x;
						})
						.attr("y", function(d) {
							return d.y;
						});
					//更新文字坐标
					svg_l_texts.attr("x", function(d) {
							return d.x;
						})
						.attr("y", function(d) {
							return d.y;
						});
				});
			},
			draw0: function() {
				var root = {
					"nodes": [{
							"name": "云天河",
							"image": "tianhe.png"
						},
						{
							"name": "韩菱纱",
							"image": "lingsha.png"
						},
						{
							"name": "柳梦璃",
							"image": "mengli.png"
						},
						{
							"name": "慕容紫英",
							"image": "ziying.png"
						},
						{
							"name": "云天青",
							"image": "tianqing.png"
						},
						{
							"name": "夙玉",
							"image": "suyu.png"
						},
						{
							"name": "玄霄",
							"image": "xuanxiao.png"
						},
						{
							"name": "夙瑶",
							"image": "suyao.png"
						},
						{
							"name": "太清",
							"image": "taiqing.png"
						},
						{
							"name": "宗炼",
							"image": "zonglian.png"
						},
						{
							"name": "婵幽",
							"image": "chanyou.png"
						},
						{
							"name": "奚仲",
							"image": "xizhong.png"
						},
						{
							"name": "归邪",
							"image": "guixie.png"
						}
					],
					"edges": [{
							"source": 0,
							"target": 1,
							"relation": "挚友"
						},
						{
							"source": 0,
							"target": 2,
							"relation": "挚友"
						},
						{
							"source": 0,
							"target": 3,
							"relation": "挚友"
						},
						{
							"source": 1,
							"target": 2,
							"relation": "挚友"
						},
						{
							"source": 1,
							"target": 3,
							"relation": "挚友"
						},
						{
							"source": 2,
							"target": 3,
							"relation": "挚友"
						},
						{
							"source": 0,
							"target": 4,
							"relation": "父子"
						},
						{
							"source": 0,
							"target": 5,
							"relation": "母子"
						},
						{
							"source": 4,
							"target": 5,
							"relation": "夫妻"
						},
						{
							"source": 0,
							"target": 6,
							"relation": "义兄弟"
						},
						{
							"source": 4,
							"target": 6,
							"relation": "同门"
						},
						{
							"source": 5,
							"target": 6,
							"relation": "同门"
						},
						{
							"source": 4,
							"target": 7,
							"relation": "同门"
						},
						{
							"source": 5,
							"target": 7,
							"relation": "同门"
						},
						{
							"source": 6,
							"target": 7,
							"relation": "同门"
						},
						{
							"source": 4,
							"target": 8,
							"relation": "师徒"
						},
						{
							"source": 5,
							"target": 8,
							"relation": "师徒"
						},
						{
							"source": 6,
							"target": 8,
							"relation": "师徒"
						},
						{
							"source": 7,
							"target": 8,
							"relation": "师徒"
						},
						{
							"source": 8,
							"target": 9,
							"relation": "同门"
						},
						{
							"source": 3,
							"target": 9,
							"relation": "师徒"
						},
						{
							"source": 2,
							"target": 10,
							"relation": "母子"
						},
						{
							"source": 10,
							"target": 11,
							"relation": "主臣"
						},
						{
							"source": 10,
							"target": 12,
							"relation": "主臣"
						},
						{
							"source": 11,
							"target": 12,
							"relation": "同僚"
						}
					]
				}

				var force = d3.layout.force()
					.nodes(root.nodes)
					.links(root.edges)
					.size([width, height])
					.linkDistance(200)
					.charge(-1500)
					.start();

				var edges_line = svg.selectAll("line")
					.data(root.edges)
					.enter()
					.append("line")
					.style("stroke", "#ccc")
					.style("stroke-width", 1);

				var edges_text = svg.selectAll(".linetext")
					.data(root.edges)
					.enter()
					.append("text")
					.attr("class", "linetext")
					.text(function(d) {
						return d.relation;
					});

				var nodes = svg.selectAll("image")
					.data(root.nodes)
					.enter()
					.append("image")
					.attr("width", img_w)
					.attr("height", img_h)
					//					.attr("xlink:href", function(d) {
					//						return d.image;
					//					})
					.on("mouseover", function(d, i) {
						//显示连接线上的文字
						edges_text.style("fill-opacity", function(edge) {
							if(edge.source === d || edge.target === d) {
								return 1.0;
							}
						});
					})
					.on("mouseout", function(d, i) {
						//隐去连接线上的文字
						edges_text.style("fill-opacity", function(edge) {
							if(edge.source === d || edge.target === d) {
								return 0.0;
							}
						});
					})
					.call(force.drag);

				var text_dx = -20;
				var text_dy = 20;

				var nodes_text = svg.selectAll(".nodetext")
					.data(root.nodes)
					.enter()
					.append("text")
					.attr("class", "nodetext")
					.attr("dx", text_dx)
					.attr("dy", text_dy)
					.text(function(d) {
						return d.name;
					});

				force.on("tick", function() {

					//限制结点的边界
					root.nodes.forEach(function(d, i) {
						d.x = d.x - img_w / 2 < 0 ? img_w / 2 : d.x;
						d.x = d.x + img_w / 2 > width ? width - img_w / 2 : d.x;
						d.y = d.y - img_h / 2 < 0 ? img_h / 2 : d.y;
						d.y = d.y + img_h / 2 + text_dy > height ? height - img_h / 2 - text_dy : d.y;
					});

					//更新连接线的位置
					edges_line.attr("x1", function(d) {
						return d.source.x;
					});
					edges_line.attr("y1", function(d) {
						return d.source.y;
					});
					edges_line.attr("x2", function(d) {
						return d.target.x;
					});
					edges_line.attr("y2", function(d) {
						return d.target.y;
					});

					//更新连接线上文字的位置
					edges_text.attr("x", function(d) {
						return(d.source.x + d.target.x) / 2;
					});
					edges_text.attr("y", function(d) {
						return(d.source.y + d.target.y) / 2;
					});

					//更新结点图片和文字
					nodes.attr("x", function(d) {
						return d.x - img_w / 2;
					});
					nodes.attr("y", function(d) {
						return d.y - img_h / 2;
					});

					nodes_text.attr("x", function(d) {
						return d.x
					});
					nodes_text.attr("y", function(d) {
						return d.y + img_w / 2;
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
				//		console.log(data);
				//绘制图形(line,circle,text,relation)
				//添加连线
				var edges = d3.select(ele).append("g").selectAll(".force_line")
					.data(data.edges)
					.enter()
					.append("line")
					.style("stroke", "#ccc")
					.style("stroke-width", 1)
					.on("mouseover", function(d, i) {
						//显示连接线上的文字
						relations.style("fill-opacity", function(edge) {
							if(edge.source === d.source && edge.target === d.target) {
								return 1.0;
							} else {
								return 1.0;
							}
						});
					})
					.on("mouseout", function(d, i) {
						//隐去连接线上的文字
						relations.style("fill-opacity", 1.0);
					});
				//添加关系
				var relations = d3.select(ele).append("g").selectAll(".force_relation")
					.data(data.edges)
					.enter()
					.append("text")
					.style("fill-opacity", 1.0)
					.attr("class", "force_text")
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
					.call(d3.drag()
						.on("start", dragstarted)
						.on("drag", dragged)
						.on("end", dragended));   //调用call(force.drag)后节点可被拖动，force.drag() 是一个函数，相当于将当前选择的元素    传到 force.drag()函数中
				//添加文字
				var texts = d3.select(ele).append("g").selectAll(".force_text")
					.data(data.nodes)
					.enter()
					.append("text")
					.attr("class", "force_text")
					.attr("dx", -13)
					.attr("dy", 3)
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
	
	#tabMap {
		height: 400px;
		width: 500px;
		background-color: #f9f9f9;
	}
	
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