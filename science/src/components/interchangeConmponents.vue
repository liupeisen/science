<template>
	<el-row>
		<el-col :span="4">
			<el-menu :default-active="activeIndex1" class="el-menu-vertical-demo">
				<el-menu-item index="1">
					<span slot="title">学术交流</span>
				</el-menu-item>
			</el-menu>
		</el-col>
		<el-col :span="20" style="border-left: solid 1px #e6e6e6;">
			<div class="list">
				<ul>
					<a href="javascript:;" v-for="(item, index) in lists"><li @click="jumpToDetail(item.id)"><i class="el-icon-caret-right"></i>{{item.name}}</li></a>
				</ul>
			</div>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: 'mechanism',
	data(){
		return{
			activeIndex1:"1",
			lists:[
				{id:1,name:"马克思主义理论前沿论坛总第35期：马克思思想的当代性顺利举行"},
				{id:2,name:"学术论文大讲堂总第1期：毛殊凡研究员主讲“编辑眼中的好论文"},
				{id:3,name:"马理学科青年学者论坛第22期“我从德国归来！——‘马克思年’的德国访学见闻记”顺利举行"},
				{id:4,name:"马理学科青年学者论坛第20期“西方马克思主义与‘巴黎手稿’”学术研讨会成功举办"},
				{id:5,name:"马克思与现时代：纪念马克思诞辰200周年国际高端论坛在京举行"},
				{id:6,name:"国际学术前沿讲坛系列之“海外学者讲坛”第33期：马克思诞辰200周年系列讲座：黑格尔与马克思顺利举行"},
				{id:7,name:"马克思主义理论学科青年学者论坛第18期：编辑眼中的“好文章”顺利举行"}
			]
		}
	},
	mounted:function(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	},
	methods:{
		jumpToDetail:function(code){
			this.$router.push({path: '../detail',query: { id: code }});
		}
	}
}
</script>

<style scoped>
a{text-decoration: none;color: #000;}
.s-title{
	font-size:14px;
	width:100%;
	text-align:center;
}
.el-menu-vertical-demo{
	padding-top:2px;
}
.list{
	width: 90%;
    padding: 2% 0 0 5%;
}
.list ul{
	width: 100%;
	padding-top: 2%;
	padding-inline-start: 0;
	list-style-type: decimal;
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.list ul li{
	width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #6d6d6d;
    padding: 5px 0;
	text-align: left;
}
</style>
