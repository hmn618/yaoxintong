<template>
	<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			      <span class="sr-only">Toggle navigation</span>
				  <span class="icon-bar"></span>
				  <span class="icon-bar"></span>
				  <span class="icon-bar"></span>
				</button>
				<ul id="navbar-logo" class="navbar-brand">
					<img src="../assets/img/logo.png" class="pull-left"/>
				    <p class="pull-right">可信医药导航平台</p>
				</ul>
			</div>
			
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">药品</a></li>
					<li><a href="#">药商</a></li>
					<li><a href="#">店商</a></li>
				</ul>
				<ul class="nav navbar-nav pull-right">
					<li><a href="#">登录</a></li>
					<li><a href="#">注册</a></li>
					<li><a href="#">企业入驻</a></li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
  name: 'HomeTop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#navbar-logo p{
		padding-top: 15px;
	}
	.navbar img{
		width: 60px;
		height: 60px;
	}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
