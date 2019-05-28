<template>
	<div>
	<el-row>
		<el-col :span="15">
			<el-carousel trigger="click" >
				<el-carousel-item v-for="(item, index) in imageData" :key="index">
					<img :src="item.url">
				</el-carousel-item>
			</el-carousel>
		</el-col>
		<el-col :span="7" style="margin-left:5%;">
			<div class="z1">
				<div class="t1">中心简介</div>
				<div class="c1">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{content}}
				</div>
			</div>
		</el-col>
	</el-row>
	<el-row style="margin-top:5%;">
		<el-col :span="7" style="margin-left:2%;">
			<div class="ceil">
				<div class="t2">
					合作交流
					<a href="javascript:;" class="more" @click="jumpTo('../interchange')">更多<i class="el-icon-d-arrow-right"></i></a>
				</div>
				<div class="z2">
					<ul>
						<a href="javascript:;" v-for="(item, index) in list1"><li @click="jumpToDetail(item.id)">{{index+1}}.{{item.name}}</li></a>
					</ul>
				</div>
			</div>
		</el-col>
		<el-col :span="7" style="margin-left:3%;">
			<div class="ceil">
				<div class="t2">
					研究成果
					<a href="javascript:;" class="more" @click="jumpTo('../harvest')">更多<i class="el-icon-d-arrow-right"></i></a>
				</div>
				<div class="z2">
					<ul>
						<li v-for="(item, index) in list2">{{index+1}}.{{item.name}}</li>
					</ul>
				</div>
			</div>
		</el-col>
		<el-col :span="7" style="margin-left:3%;">
			<div class="ceil">
				<div class="t2">
					学者观点
				</div>
				<div class="z2">
					<ul>
						<a href="javascript:;" v-for="(item, index) in list3"><li @click="jumpToDetail(item.id)">{{index+1}}.{{item.name}}</li></a>
					</ul>
				</div>
			</div>
		</el-col>
	</el-row>
	</div>
</template>
<script>
	export default {
		name: "index",
		data(){
			return {
				imageData:[{url:require('../assets/images/001.png')}],
				content:'中国人民大学马克思主义研究院（基地）正式成立于2006年12月。经过12年、4个阶段的建设，基地建设成效较为显著，呈现良好发展势头，为进一步发展奠定了比较扎实的基础。2018年，因中国人民大学马克思主义学院领导班子调整，基地负责人和首席专家也进行了相应调整。现任基地主任为中国人民大学马克思主义学院党委书记、常务副院长，北京高校思想政治理论课高精尖创新中心常务副主任王易教授，首席专家为中国人民大学马克思主义学院郑吉伟教授。',
				list1:[
					{id:1,name:'马克思主义理论前沿论坛总第35期：马克思思想的当代性顺利举行'},
					{id:2,name:'学术论文大讲堂总第1期：毛殊凡研究员主讲“编辑眼中的好论文”'},
					{id:3,name:'马理学科青年学者论坛第22期“我从德国归来！——‘马克思年’的德国访学见闻记”顺利举行'},
					{id:4,name:'马理学科青年学者论坛第20期“西方马克思主义与‘巴黎手稿’”学术研讨会成功举办'},
					{id:5,name:'马克思与现时代：纪念马克思诞辰200周年国际高端论坛在京举行'},
					{id:6,name:'国际学术前沿讲坛系列之“海外学者讲坛”第33期：马克思诞辰200周年系列讲座：黑格尔与马克思顺利举行'},
					{id:7,name:'马克思主义理论学科青年学者论坛第18期：编辑眼中的“好文章”顺利举行'}
				],
				list2:[
					{name:'周新城：《关键是要按照马克思主义的党建理论和原则加强党的建设——吸取人道的民主社会主义摧垮苏联共产党的教训》，《文化软实力》，2018年第3期。'},
					{name:'周新城：《一部具有划时代意义的文献——读毛泽东<关于正确处理人民内部矛盾的问题>》，《中华魂》，2018年9月。'},
					{name:'刘建军：《马克思主义深刻改变了中国》，《求是》，2018年第10期。'},
					{name:'刘建军：《习近平对凝聚共识的全面论述》，《思想理论教育导刊》，2018年第9期。'},
					{name:'刘建军：《新时代思想政治工作的十大原则——习近平对思想政治工作原则的创新发展》，《学术界》，2018年第9期。'},
					{name:'刘建军：《科学社会主义基本原理的理论概括与内涵阐释》，《科学社会主义》，2018年第3期。'},
					{name:'刘建军：《论高校思想政治理论课建设的“高、精、尖”》，《思想教育研究》，2018年第4期。'}
				],
				list3:[
					{id:8,name:'新书丨刘建军：《共产党宣言》与新时代'},
					{id:9,name:'人民日报记者专访中国人民大学习近平新时代中国特色社会主义思想研究中心执行主任秦宣'}
				]
			}
		},
		methods:{
			jumpTo:function(url){
				this.$router.push({path: url});
			},
			jumpToDetail:function(code){
				this.$router.push({path: '../detail' ,query: { id: code }});
			}
			
		}
	}
</script>
<style>
	.el-carousel__container{height:350px;}
	.el-carousel__item img{width:100%;}
	.z1{width: 90%;padding: 10px 5%;border: 1px solid #a7a7a7;height: 330px;}
	.t1{font-size:16px;}
	.c1{width:100%;font-size:14px;margin-top:10px;text-align: left;}
	a{text-decoration: none;color: #000;}
	.more{
		position: absolute;
		top: 5px;
		right: 5px;
		font-size: 14px;
		color: #000;
	}
	.t2{
		width: 95%;
		padding: 5px 0 5px 5%;
		text-align: left;
		position: relative;
		background: #e4e4e4;
	}
	.z2{
		width: 94%;
		padding: 0 0 0 5%;
	}
	.z2 ul{
		width: 100%;
		padding-top: 2%;
		padding-inline-start: 0;
		list-style-type: decimal;
		margin-block-start: 0;
		margin-block-end: 0;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
	}
	.z2 ul li{
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 15px;
		color: #6d6d6d;
		padding: 3px 0;
	}
	.ceil{width:100%;border:1px solid #b1b1b1;height: 235px;}
</style>