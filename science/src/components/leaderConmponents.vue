<template>
	<el-row>
		<div class="i-title">领导团队</div>
		<div class="interduce">
			<p>院长、基地主任：</p>
			<div class="name">王  易</div>
			<p>副院长、基地副主任：</p>
			<div class="name">郑吉伟&nbsp;&nbsp;&nbsp;&nbsp;汪亭友&nbsp;&nbsp;&nbsp;&nbsp;赵淑梅&nbsp;&nbsp;&nbsp;&nbsp;邱海平&nbsp;&nbsp;&nbsp;&nbsp;臧峰宇</div>
			<p>首席专家：</p>
			<div class="name">郑吉伟</div>
			<p>学院联系领导：</p>
			<div class="name">赵淑梅</div>
			<p>科研秘书：</p> 
			<div class="name">秦  睿</div>
		</div>
	</el-row>
</template>

<script>
export default {
  name: 'leader',
}
</script>

<style scoped>
.i-title{
	width: 100%;
    text-align: center;
    padding: 20px 0 0;
    font-size: 22px;
}
.interduce{
	width: 90%;
    padding: 0 5%;
    text-align: left;
    font-size: 18px;
    line-height: 32px;
    margin-top: 2%;
}
.interduce p{
	width:90%;
	text-align:left;
	padding-left:10%;
}
.interduce .name{
	width:80%;
	text-align:left;
	padding-left:20%;
}
</style>
