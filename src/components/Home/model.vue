<template>
	<div id="test">
		<top v-show="afterlogin"></top>
		<foot><foot>
	</div>
</template>

<script>
	import top from '../common/Top'
	import foot from '../common/Foot'
	export default{
		name:'test',
		data(){
			return{
				beforelogin:false,
				afterlogin:false,
				usertoken:null,
				companytoken:null
			}
		},
		components:{top,foot},
		mounted(){
			this.usertoken=$.session.get('yaoxintong_user_token'),
			this.companytoken=$.session.get('yaoxintong_business_token')
			if(this.usertoken==null&&this.companytoken==null){
				this.beforelogin:true,
				this.afterlogin:false
			}else{
				this.beforelogin:false,
				this.afterlogin:true
			}
		}
	}
</script>

<style>
</style>