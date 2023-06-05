<template>
	<div>
		<div class="columns" style="margin-top: 0px; background-color: #FFFFFF;">
			<div class="column is-8 is-offset-2">
				<img src="../../assets/headimg.jpg" style="width: 100%;height: 40px;">
				<br><br>
				<div class="columns">
					<div class="column is-2" style="margin-left: 20px;">
						<img src="../../assets/biglogo.png">
					</div>
					<div class="column is-6 is-offset-3">
						<p class="control has-addons" style="margin-top: 20px;">
							<input class="input" v-model="search_words" type="text" placeholder="搜索商品">
							<a class="button" @click="search">
								<i class=" fa fa-search"></i>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'innerHead',
		data() {
			return {
				search_words: null
			}
		},
		methods: {
			search: function() {
				if(!this.search_words) {
					alert("请输入关键字！");
				} else {
					var url = '/#/nav/medicine/4/' + this.search_words;
					console.log(url);
					window.location.href = url;
				}
			}
		}
	}
</script>

<style>

</style>