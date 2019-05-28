<template>
	<el-row>
		<el-col :span="4">
			<el-menu :default-active="activeIndex1" class="el-menu-vertical-demo" @select="handleSelect1">
				<el-menu-item index="1">
					<span slot="title">学术论文</span>
				</el-menu-item>
				<el-menu-item index="2">
					<span slot="title">智库成果</span>
				</el-menu-item>
				<el-menu-item index="3">
					<span slot="title">著作</span>
				</el-menu-item>
				<el-menu-item index="4">
					<span slot="title">科研项目</span>
				</el-menu-item>
				<el-menu-item index="5">
					<span slot="title">获奖情况</span>
				</el-menu-item>
			</el-menu>
		</el-col>
		<el-col :span="20" style="border-left: solid 1px #e6e6e6;">
			<div class="list">
				<ul>
					<li v-for="(item, index) in lists"><i class="el-icon-caret-right"></i>{{item.name}}</li>
				</ul>
			</div>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: 'harvest',
	data(){
		return{
			activeIndex1:"1",
			lists:[
				{id:1,name:"周新城：《关键是要按照马克思主义的党建理论和原则加强党的建设——吸取人道的民主社会主义摧垮苏联共产党的教训》，《文化软实力》，2018年第3期"},
				{id:2,name:"周新城：《一部具有划时代意义的文献——读毛泽东<关于正确处理人民内部矛盾的问题>》，《中华魂》，2018年9月"},
				{id:3,name:"刘建军：《马克思主义深刻改变了中国》，《求是》，2018年第10期"},
				{id:4,name:"刘建军：《习近平对凝聚共识的全面论述》，《思想理论教育导刊》，2018年第9期"},
				{id:5,name:"刘建军：《新时代思想政治工作的十大原则——习近平对思想政治工作原则的创新发展》，《学术界》，2018年第9期"},
				{id:6,name:"刘建军：《科学社会主义基本原理的理论概括与内涵阐释》，《科学社会主义》，2018年第3期"},
				{id:7,name:"刘建军：《论高校思想政治理论课建设的“高、精、尖”》，《思想教育研究》，2018年第4期。"},
				{id:8,name:"王易：《<思想道德修养与法律基础>教材道德教育部分的修订与重难点解析》，《思想教育研究》，2018年第8期"},
				{id:9,name:"王易：《论新时代思想政治教育规律研究的科学化》，《重庆大学学报(社会科学版)》，2018年第24期"},
				{id:10,name:"王易：《关于加强新时代高校思想政治理论课教师队伍建设的思考》，《思想理论教育》，2018年第5期"},
				{id:11,name:"王易：《全球治理的中国方案:构建人类命运共同体》，《思想理论教育》，2018年第1期"},
				{id:12,name:"郑吉伟：《论习近平对邓小平生态思想的继承与发展》，《经济与社会发展》，2018年第16期"},
				{id:13,name:"郑吉伟：《论习近平对邓小平思想政治教育思想的继承与发展》，《思想教育研究》，2018年第3期"},
				{id:14,name:"郑吉伟：《不能将容错纠错机制与改革实践相脱离》，《人民论坛》，2017年第26期"},
				{id:15,name:"郑吉伟：《全面从严治党的核心是加强党的领导》，《人民论坛》，2017年第2期"},
				{id:16,name:"郑吉伟：《功利主义的当前表现与克服路径》，《人民论坛》，2017年第1期"},
				{id:17,name:"汪亭友：《“新时代”的政治哲学意蕴》，《人民论坛》，2018年第27期"},
				{id:18,name:"汪亭友：《依宪治国与“宪政民主”的根本区别》，《前线》，2018年第7期"},
				{id:19,name:"汪亭友：《如何认识新时代我国社会主要矛盾的转变》，《人民论坛》，2018年第11期"},
				{id:20,name:"张雷声：《改革开放以来思想政治理论课教师队伍建设论析》，《思想理论教育》，2018年第10期"},
				{id:21,name:"张雷声：《研究马克思主义整体性的三大视角》，《思想理论教育导刊》，2018年第7期"},
				{id:22,name:"张雷声：《论习近平新时代中国特色社会主义经济思想的理论创新》，《马克思主义理论学科研究》，2018年第4期"},
				{id:23,name:"张雷声：《马克思劳动价值论的逻辑整体性》，《教学与研究》，2018年第4期"},
				{id:24,name:"秦宣：《深刻把握中国特色社会主义进入新时代的依据》，《求是》,2018年第3期"},
				{id:25,name:"秦宣：《文化自信实质是中国特色社会主义自信》《求是》,2017年第4期"},
				{id:26,name:"陶文昭：《在改革开放伟大实践中检验和发展中国特色社会主义》，《红旗文稿》,2018年第12期"},
				{id:27,name:"陶文昭：《自我革命:新时代全面从严治党的关键之举》，《紫光阁》，2018第2期"},
				{id:28,name:"张云飞：《坚持用最严格制度最严密法治保护生态环境》，《先锋》，2018年第9期"},
				{id:29,name:"张云飞：《能源革命:生态文明建设的引擎》，《国家治理》，2018年第33期"},
				{id:30,name:"张世飞：《领导干部缘何要学好历史这门“必修课”》，《人民论坛》，2018年第25期"},
				{id:31,name:"张旭：《干部作用有效发挥的四大动力源》，《人民论坛》，2018年第26期"},
				{id:32,name:"王海军：《习近平新时代中国特色社会主义思想对传统文化的传承创新探析》，《思想教育研究》，2018年第6期"},
				{id:33,name:"宋少鹏：《立足问题，无关中西：在历史的内在脉络中建构的学科——对中国“妇女/性别研究”的思想史考察》，《妇女研究论丛》，2018年第5期"},
				{id:34,name:"宋友文,林聪：《以对话机制凝聚多元性——新世纪美国价值教育发展的新趋势》，《教学与研究》，2018年第9期"},
				{id:35,name:"沈江平：《论新时代中国特色社会主义的共享文化》，《理论探索》，2018年第5期"},
				{id:36,name:"郗戈：《马克思主义哲学研究的范式转换——基于<资本论>研究引发的新范式》，《哲学动态》，2018年第6期"},
				{id:37,name:"赵淑梅：《民主革命时期中国共产党对马克思主义党性观的继承与发展》，《中国高校社会科学》，2018年第5期"},
				{id:38,name:"夏璐：《重视党的政治建设是共产党历来坚持的传统》，《共产党员（河北）》，2018年第19期"},
				{id:39,name:"马慎萧：《国外左翼学者关于21世纪社会主义的三种构想》，《国外理论动态》，2018年第9期"},
			]
		}
	},
	mounted:function(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		if(window.location.href.indexOf("harvest/index") != -1)
			this.activeIndex1 = "1"
		if(window.location.href.indexOf("harvest/think") != -1)
			this.activeIndex1 = "2"
		if(window.location.href.indexOf("harvest/writings") != -1)
			this.activeIndex1 = "3"
		if(window.location.href.indexOf("harvest/scientific") != -1)
			this.activeIndex1 = "4"
		if(window.location.href.indexOf("harvest/prize") != -1)
			this.activeIndex1 = "5"
	},
	methods:{
		handleSelect1:function(key, keyPath){
			switch(key){
				case "1":
					if(window.location.href.indexOf('index') === -1){
						//this.$router.push({path: 'index'})
						this.activeIndex1 = "1";
						this.lists = [
							{id:1,name:"周新城：《关键是要按照马克思主义的党建理论和原则加强党的建设——吸取人道的民主社会主义摧垮苏联共产党的教训》，《文化软实力》，2018年第3期"},
							{id:2,name:"周新城：《一部具有划时代意义的文献——读毛泽东<关于正确处理人民内部矛盾的问题>》，《中华魂》，2018年9月"},
							{id:3,name:"刘建军：《马克思主义深刻改变了中国》，《求是》，2018年第10期"},
							{id:4,name:"刘建军：《习近平对凝聚共识的全面论述》，《思想理论教育导刊》，2018年第9期"},
							{id:5,name:"刘建军：《新时代思想政治工作的十大原则——习近平对思想政治工作原则的创新发展》，《学术界》，2018年第9期"},
							{id:6,name:"刘建军：《科学社会主义基本原理的理论概括与内涵阐释》，《科学社会主义》，2018年第3期"},
							{id:7,name:"刘建军：《论高校思想政治理论课建设的“高、精、尖”》，《思想教育研究》，2018年第4期。"},
							{id:8,name:"王易：《<思想道德修养与法律基础>教材道德教育部分的修订与重难点解析》，《思想教育研究》，2018年第8期"},
							{id:9,name:"王易：《论新时代思想政治教育规律研究的科学化》，《重庆大学学报(社会科学版)》，2018年第24期"},
							{id:10,name:"王易：《关于加强新时代高校思想政治理论课教师队伍建设的思考》，《思想理论教育》，2018年第5期"},
							{id:11,name:"王易：《全球治理的中国方案:构建人类命运共同体》，《思想理论教育》，2018年第1期"},
							{id:12,name:"郑吉伟：《论习近平对邓小平生态思想的继承与发展》，《经济与社会发展》，2018年第16期"},
							{id:13,name:"郑吉伟：《论习近平对邓小平思想政治教育思想的继承与发展》，《思想教育研究》，2018年第3期"},
							{id:14,name:"郑吉伟：《不能将容错纠错机制与改革实践相脱离》，《人民论坛》，2017年第26期"},
							{id:15,name:"郑吉伟：《全面从严治党的核心是加强党的领导》，《人民论坛》，2017年第2期"},
							{id:16,name:"郑吉伟：《功利主义的当前表现与克服路径》，《人民论坛》，2017年第1期"},
							{id:17,name:"汪亭友：《“新时代”的政治哲学意蕴》，《人民论坛》，2018年第27期"},
							{id:18,name:"汪亭友：《依宪治国与“宪政民主”的根本区别》，《前线》，2018年第7期"},
							{id:19,name:"汪亭友：《如何认识新时代我国社会主要矛盾的转变》，《人民论坛》，2018年第11期"},
							{id:20,name:"张雷声：《改革开放以来思想政治理论课教师队伍建设论析》，《思想理论教育》，2018年第10期"},
							{id:21,name:"张雷声：《研究马克思主义整体性的三大视角》，《思想理论教育导刊》，2018年第7期"},
							{id:22,name:"张雷声：《论习近平新时代中国特色社会主义经济思想的理论创新》，《马克思主义理论学科研究》，2018年第4期"},
							{id:23,name:"张雷声：《马克思劳动价值论的逻辑整体性》，《教学与研究》，2018年第4期"},
							{id:24,name:"秦宣：《深刻把握中国特色社会主义进入新时代的依据》，《求是》,2018年第3期"},
							{id:25,name:"秦宣：《文化自信实质是中国特色社会主义自信》《求是》,2017年第4期"},
							{id:26,name:"陶文昭：《在改革开放伟大实践中检验和发展中国特色社会主义》，《红旗文稿》,2018年第12期"},
							{id:27,name:"陶文昭：《自我革命:新时代全面从严治党的关键之举》，《紫光阁》，2018第2期"},
							{id:28,name:"张云飞：《坚持用最严格制度最严密法治保护生态环境》，《先锋》，2018年第9期"},
							{id:29,name:"张云飞：《能源革命:生态文明建设的引擎》，《国家治理》，2018年第33期"},
							{id:30,name:"张世飞：《领导干部缘何要学好历史这门“必修课”》，《人民论坛》，2018年第25期"},
							{id:31,name:"张旭：《干部作用有效发挥的四大动力源》，《人民论坛》，2018年第26期"},
							{id:32,name:"王海军：《习近平新时代中国特色社会主义思想对传统文化的传承创新探析》，《思想教育研究》，2018年第6期"},
							{id:33,name:"宋少鹏：《立足问题，无关中西：在历史的内在脉络中建构的学科——对中国“妇女/性别研究”的思想史考察》，《妇女研究论丛》，2018年第5期"},
							{id:34,name:"宋友文,林聪：《以对话机制凝聚多元性——新世纪美国价值教育发展的新趋势》，《教学与研究》，2018年第9期"},
							{id:35,name:"沈江平：《论新时代中国特色社会主义的共享文化》，《理论探索》，2018年第5期"},
							{id:36,name:"郗戈：《马克思主义哲学研究的范式转换——基于<资本论>研究引发的新范式》，《哲学动态》，2018年第6期"},
							{id:37,name:"赵淑梅：《民主革命时期中国共产党对马克思主义党性观的继承与发展》，《中国高校社会科学》，2018年第5期"},
							{id:38,name:"夏璐：《重视党的政治建设是共产党历来坚持的传统》，《共产党员（河北）》，2018年第19期"},
							{id:39,name:"马慎萧：《国外左翼学者关于21世纪社会主义的三种构想》，《国外理论动态》，2018年第9期"},
						]
					}
					break;
				case "2":
					if(window.location.href.indexOf('think') === -1){
						//this.$router.push({path: 'think'})
						this.activeIndex1 = "2"
						this.lists = [
							{id:40,name:"陶文昭：《新时代要有新气象 更要有新作为》，《光明日报》2018年10月25日"},
							{id:41,name:"陶文昭：《风浪面前更要保持战略定力！人大教授告诉你为什么我们不怕贸易战》，《光明日报》2018年10月18日"},
							{id:42,name:"陶文昭：《深刻把握党的政治建设的首要任务》，《人民日报》，2018年7月29日"},
							{id:43,name:"秦宣：《认识和把握我国社会发展的阶段性特征》，《人民日报》，2017年8月30日"},
							{id:44,name:"郝立新：《十八大以来我国哲学发展的成就》，《人民日报》，2017年4月24日"},
							{id:45,name:"郝立新：《核心价值观：当代中国的精神名片》，《光明日报》，2017年10月18日"},
							{id:46,name:"张雷声：《把握好中国特色社会主义政治经济学重大原则》，《人民日报》，2016年2月9日"},
							{id:47,name:"齐鹏飞：《香港回归20年的“变”与“不变”》，《光明日报》，2017年6月30日"},
							{id:48,name:"齐鹏飞：《马克思主义中国化的最新理论成果》，《光明日报》，2017年10月19日"},
							{id:49,name:"张旭：《“看得见的手”和“看不见的手”都要用好——深入学习贯彻习近平总书记关于政府和市场关系的重要论述》，《经济日报》，2017年6月9日"},
							{id:50,name:"张云飞：《环境治理 攻坚克难》，《人民日报》，2017年3月12日"},
							{id:51,name:"赵淑梅：《不断加强党的政治建设》，《光明日报》，2018年4月3日"}
						]
					}
					break;
				case "3":
					//if(window.location.href.indexOf('writings') === -1){
						//this.$router.push({path: 'writings'})
						this.activeIndex1 = "3";
						this.lists = [
							
						]
					//}
					break;
				case "4":
					//if(window.location.href.indexOf('scientific') === -1){
						//this.$router.push({path: 'scientific'})
						this.activeIndex1 = "4";
						this.lists = [
						
						]
					//}
					break;
				case "5":
					//if(window.location.href.indexOf('prize') === -1){
						//this.$router.push({path: 'prize'})
						this.activeIndex1 = "5";
						this.lists = [
						
						]
					//}
					break;
				default:
					console.log("error")
			}
		}
	},
	watch: {
		'$route' (to, from) {
			if(window.location.href.indexOf("harvest/index") != -1)
				this.activeIndex1 = "1"
			if(window.location.href.indexOf("harvest/think") != -1)
				this.activeIndex1 = "2"
			if(window.location.href.indexOf("harvest/writings") != -1)
				this.activeIndex1 = "3"
			if(window.location.href.indexOf("harvest/scientific") != -1)
				this.activeIndex1 = "4"
			if(window.location.href.indexOf("harvest/prize") != -1)
				this.activeIndex1 = "5"			
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
