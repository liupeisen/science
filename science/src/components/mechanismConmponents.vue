<template>
	<el-row>
		<el-col :span="4">
			<el-menu :default-active="activeIndex1" class="el-menu-vertical-demo" @select="handleSelect1">
				<el-menu-item index="1">
					<span slot="title">理事会</span>
				</el-menu-item>
				<el-menu-item index="2">
					<span slot="title">学术委员会</span>
				</el-menu-item>
				<el-menu-item index="3">
					<span slot="title">研究机构</span>
				</el-menu-item>
				<el-menu-item index="4">
					<span slot="title">办事机构</span>
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
	name: 'mechanism',
	data(){
		return{
			activeIndex1:"1",
		}
	},
	mounted:function(){
		if(window.location.href.indexOf("mechanism/index") != -1)
			this.activeIndex1 = "1"
		if(window.location.href.indexOf("mechanism/science") != -1)
			this.activeIndex1 = "2"
		if(window.location.href.indexOf("mechanism/research") != -1)
			this.activeIndex1 = "3"
		if(window.location.href.indexOf("mechanism/work") != -1)
			this.activeIndex1 = "4"
	},
	methods:{
		handleSelect1:function(key, keyPath){
			switch(key){
				case "1":
					this.activeIndex1 = "1"
					break;
				case "2":
					this.activeIndex1 = "2"
					break;
				case "3":
					this.activeIndex1 = "3"
					break;
				case "4":
					this.activeIndex1 = "4"
					break;
				default:
					this.$router.push('/')
			}
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
