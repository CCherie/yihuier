<template>
<div>
<div class="layui-layout layui-layout-admin">
<!-- 头部导航区域-->
<div class="layui-header">
   <ul class="layui-nav">
    <li class="layui-nav-item">
      <img :src="logo">
      <span id="logo">YiHuiEr</span>
    </li>
    <li class="layui-nav-item" style="margin-left: 10%;">
      <a href="">会议控制台</a>
    </li>
    <li class="layui-nav-item" style="margin-left:45%">
      <a>你好！<span>{{nickname}}</span><img :src="headshot" class="layui-nav-img"
      style="margin-left:5px"></a>
    </li>
     <li class="layui-nav-item">
         <a @click="Exit">退出登录 </a>
     </li>
  </ul>
</div>
<!-- 左侧导航 -->
<div class="layui-side">
    <div class="layui-side-scroll">
      <ul class="layui-nav layui-nav-tree"  lay-filter="test">
        <li class="layui-nav-item">
          <a class="layui-nav-itemed" @click="company">公司管理</a>
        </li>
        <li class="layui-nav-item">
          <a class="layui-nav-itemed" @click="manager">管理员管理</a>
        </li>
         <li class="layui-nav-item">
          <a class="layui-nav-itemed" @click="advertisement">广告管理</a>
        </li>
      </ul>
    </div>
</div>
<!-- 主体内容，已继承 -->
<router-view></router-view>
<!-- 底部注释 -->
<div class="layui-footer layui-bg-gray">
  © Copyright 2019 搬砖董事局 
   <span style="float:right;margin-right:20px">一会儿智能会议管理系统</span>
</div>
</div>
</div>
</template>
<script>
//import qs from 'qs'
export default {
  name: 'Base',
  data () {
    return {
      logo: require('../../static/yihuierY.png'),
      headshot: '',
      msg: 'Welcome to Your Vue.js App',
      nickname:''
    }
  },
  mounted () {
   this.GetHeadshot()
  },
  methods: { 
    //获取用户头像昵称
     GetHeadshot : function(){
     this.$axios.post('/UserManager/SuperManager/superManagerNameAndHeaderPic.json',{
       headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
     })
    .then((data)=>{
      this.headshot = data.data.data.manager_header_pic
      this.nickname = data.data.data.manager_name
     })
    .catch((error)=>{
      console.log(error)
     })
    },
     //页面跳转逻辑 
    company () {
      this.$router.push('/supermanager/company')
    },
    manager(){
       this.$router.push('/supermanager/manager')
    },
    advertisement(){
       this.$router.push('/supermanager/advertisement')
    },
    Exit() {
       this.$router.push('/')
    }       
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layui-header{
  background-color:#3f51B5;
}
.layui-side,.layui-side-scroll,ul{
  background-color:#2f6594;
}
a{
  text-decoration: none;
}
img{
  width: 35px;
  height: 35px;
}
#logo{
  font-size: 25px;
}
</style>
