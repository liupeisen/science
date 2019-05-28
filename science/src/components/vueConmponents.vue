<template>
	<el-container>
	<el-header>
		<div class="header">
		中国人民大学马克思主义研究院（基地）
		</div>
	</el-header>
	<el-row class="el-row1">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">网站首页</el-menu-item>
			<el-menu-item index="2">关于我们</el-menu-item>
			<el-menu-item index="3">机构设置</el-menu-item>
			<el-menu-item index="4">研究成果</el-menu-item>
			<el-menu-item index="5">学术交流</el-menu-item>
			<el-menu-item index="6">English</el-menu-item>
		</el-menu>
	</el-row>
	<el-main>
		<router-view></router-view>
	</el-main>
	<el-footer height="auto">
		<div class="footer">
			<div class="links">友情链接</div>
			<div class="link">
				<div v-for="item in linkData" style="margin-left:1%;display: inline-block;"><a :href="item.url" target="_blank"><el-button plain>{{item.name}}</el-button></a></div>
			</div>
		</div>
	</el-footer>
	</el-container>
</template>

<script>
export default {
	name: 'index',
	data(){
		return{
			activeIndex:'1',
			linkData:[
				{name:'中国人民大学',url:'http://www.ruc.edu.cn/home1024.html'},
				{name:'中国人民大学马克思主义学院',url:'http://marx.ruc.edu.cn'},
				{name:'中国特色社会主义理论体系研究中心',url:'http://marx.ruc.edu.cn/yjzx/'},
				{name:'中国人民大学台港澳研究中心',url:'http://news.ruc.edu.cn/tgayjzx'},
				{name:'北京高校思想政治理论课高精尖创新中心',url:'http://www.bjcipt.org/index.html'}
			]
		}
	},
	mounted:function(){
		if(window.location.href.indexOf("#/summary") != -1)
			this.activeIndex = '2';
		if(window.location.href.indexOf("#/mechanism") != -1)
			this.activeIndex = '3';
		if(window.location.href.indexOf("#/harvest") != -1)
			this.activeIndex = '4';
		if(window.location.href.indexOf("#/interchange") != -1)
			this.activeIndex = '5';
	},
	methods:{
		handleSelect:function(key, keyPath){
			switch(key){
				case "1":
					this.$router.push({path: '/'})
					break;
				case "2":
					this.$router.push({path: '../summary'})
					break;
				case "3":
					this.$router.push({path: '../mechanism'})
					break;
				case "4":
					this.$router.push({path: '../harvest'})
					break;
				case "5":
					this.$router.push({path: '../interchange'})
					break;
				case "6":
					this.$router.push({path: '../EN'})
					break;	
				default:
					this.$router.push('/')
			}
		}
	},
	watch: {
		'$route' (to, from) {
			if(window.location.href.indexOf("#/index") != -1)
				this.activeIndex = '1';
			if(window.location.href.indexOf("#/summary") != -1)
				this.activeIndex = '2';
			if(window.location.href.indexOf("#/mechanism") != -1)
				this.activeIndex = '3';
			if(window.location.href.indexOf("#/harvest") != -1)
				this.activeIndex = '4';
			if(window.location.href.indexOf("#/interchange") != -1)
				this.activeIndex = '5';
		}
	}
}
</script>

<style scoped>
.header{
	width:100%;
	font-size: x-large;
	padding: 20px 0 10px 0;
	font-weight: 600;
}
.el-row1 {
    border-bottom: solid 1px #e6e6e6;
}
.el-menu{
	width:1100px;
	margin:0 auto;
}
.el-menu-item{
	font-size:16px;
}
.el-menu.el-menu--horizontal{
	border:0;
}
.footer{
	width:100%;
}
.el-main {
	padding: 0;
    width: 70%;
    margin: 0 auto;
    min-width: 1000px;
	padding-bottom:5%;
	min-height: 430px;
}
.el-footer{
	background-color: #c7c7c7;
	overflow: hidden;
	padding-bottom:20px;
}
.footer{
	width:70%;
	min-width:1000px;
	margin: 0 auto;
	text-align: left;
	margin-top: 1%;
}
.links{
	float:left;
    border: 1px solid #6b6b6b;
    color: white;
    padding: 3px 7px;
    text-align: center;
    background-color: #6b6b6b;
    border-radius: 8px;
}
.link{
	float:left;
    text-align: left;
	width:80%;
}
.footer .el-button{
	padding: 6px 8px;
    font-size: 14px;
	margin-bottom:5px;
}
</style>
