<template>
	<el-row>
		<el-col :span="4">
			<el-menu :default-active="activeIndex1" class="el-menu-vertical-demo" @select="handleSelect1">
				<el-menu-item index="1">
					<span slot="title">机构简介</span>
				</el-menu-item>
				<el-menu-item index="2">
					<span slot="title">领导团队</span>
				</el-menu-item>
				<el-menu-item index="3">
					<span slot="title">研究人员</span>
				</el-menu-item>
				<el-menu-item index="4">
					<span slot="title">联系我们</span>
				</el-menu-item>
			</el-menu>
		</el-col>
		<el-col :span="20" style="border-left: solid 1px #e6e6e6;">
			<router-view></router-view>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: 'summarys',
	data(){
		return{
			activeIndex1:"1",
		}
	},
	mounted:function(){
		if(window.location.href.indexOf("summary/index") != -1)
			this.activeIndex1 = "1"
		if(window.location.href.indexOf("summary/leader") != -1)
			this.activeIndex1 = "2"
		if(window.location.href.indexOf("summary/study") != -1)
			this.activeIndex1 = "3"
		if(window.location.href.indexOf("summary/contact") != -1)
			this.activeIndex1 = "4"
	},
	methods:{
		handleSelect1:function(key, keyPath){
			switch(key){
				case "1":
					this.$router.push({path: 'index'})
					break;
				case "2":
					this.$router.push({path: 'leader'})
					break;
				case "3":
					this.$router.push({path: 'study'})
					break;
				case "4":
					this.$router.push({path: 'contact'})
					break;
				default:
					this.$router.push('/')
			}
		}
	},
	watch: {
		'$route' (to, from) {
			if(window.location.href.indexOf("summary/index") != -1)
				this.activeIndex1 = "1"
			if(window.location.href.indexOf("summary/leader") != -1)
				this.activeIndex1 = "2"
			if(window.location.href.indexOf("summary/study") != -1)
				this.activeIndex1 = "3"
			if(window.location.href.indexOf("summary/contact") != -1)
				this.activeIndex1 = "4"
		}
	}
}
</script>

<style scoped>
.s-title{
	font-size:14px;
	width:100%;
	text-align:center;
}
.el-menu-vertical-demo{
	padding-top:2px;
}
</style>
