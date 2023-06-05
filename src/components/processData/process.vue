<template>
	<div id="cy">
	</div>
</template>

<script>
	import cytoscape from 'cytoscape'
	export default {
		name: 'process',
		data() {
			return {
				medicines: [],
				rms: [],
				nodes: [],
				edges: []
			}
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData: function() {
				console.log("getData");
				var url = "http://localhost:9898/medicinekg/api/medicines/getResource/4020805";
				this.$http.get(url, {}, {
						emulateJSON: true
					}) //跨域加{emulateJSON: true}
					.then((response) => {
						console.log(response);
						var data = response.body;
						this.medicines.push(data);
						for(var i = 0; i < this.medicines.length; ++i) {
							var node1 = {
								data: {
									"id": this.medicines[i].id,
									"name":this.medicines[i].name,
									"label": "Medicine"
								}
							};
							this.nodes.push(node1);
							
							var node2 = {
								data: {
									id: this.medicines[i].dosageForm.id,
									name:this.medicines[i].dosageForm.name,
									label: "ProductionUnit"
								}
							};
							this.nodes.push(node2);
							
							var node3 = {
								data: {
									id: this.medicines[i].productionUnit.id,
									name:this.medicines[i].productionUnit.name,
									label: "DosageForm"
								}
							};
							this.nodes.push(node3);

							var edge1 = {
								data: {
									source: this.medicines[i].id,
									target: this.medicines[i].dosageForm.id,
									relationship: "剂型是"
								}
							};
							var edge2 = {
								data: {
									"source": this.medicines[i].id,
									"target": this.medicines[i].productionUnit.id,
									"relationship": "生产厂家是"
								}
							};

							this.edges.push(edge1);
							this.edges.push(edge2);

						}
						this.draw();
					}, (response) => {});
			},
			draw: function() {

				console.log(this.nodes);
				console.log(this.edges);

				var cy = cytoscape({
					container: document.getElementById('cy'),
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

			}
		}
	}
</script>

<style scoped>
	#cy {
		height: 400px;
		width: 500px;
		background-color: #f9f9f9;
	}
	
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