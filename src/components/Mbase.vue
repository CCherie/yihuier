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
            <a href>会议控制台</a>
          </li>
          <li class="layui-nav-item" style="margin-left: 45%;">
            <a @click="managemessage">消息</a>
          </li>
          <li class="layui-nav-item">
            <a>你好！
              <span>{{nickname}}</span>
              <img :src="headshot" class="layui-nav-img" style="margin-left:5px">
            </a>
          </li>
          <li class="layui-nav-item">
            <a @click="Exit">退出登录</a>
          </li>
        </ul>
      </div>
      <!-- 左侧导航 -->
      <div class="layui-side">
        <div class="layui-side-scroll">
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="history">历史会议</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="meetingroom">会议室管理</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="add">添加会议室</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="member">用户管理</a>
            </li>
            <!-- <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="performance">员工考勤记录</a>
            </li> -->
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="check">审核会议申请</a>
            </li>
            <li class="layui-nav-item">
               <a class="layui-nav-itemed" @click="checkmember">审核新增人员</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="managemessage">我的消息</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="meetingroomstatus">会议室状态全览</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 主体内容，已继承 -->
      <router-view></router-view>
      <!-- 底部注释 -->
      <div class="layui-footer layui-bg-gray">© Copyright 2019 搬砖董事局
         <span style="float:right;margin-right:20px">一会儿智能会议管理系统</span>
      </div>
    </div>
  </div>
</template>
<script>
//import qs from 'qs'
export default {
  name: 'Base',
  data() {
    return {
      logo: require('../../static/yihuierY.png'),
      headshot: '',
      msg: 'Welcome to Your Vue.js App',
      nickname: ''
    }
  },
  mounted() {
    //     this.setCookie()
    this.GetHeadshot()
  },
  methods: {
    //获取用户头像昵称
    GetHeadshot: function () {
      this.$axios.post('/UserManager/Managers/managerNameAndHeaderPic.json', {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      })
        .then((data) => {
          this.headshot = data.data.data.manager_header_pic
          this.nickname = data.data.data.manager_name
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //页面跳转逻辑 
    history() {
      this.$router.push('/indexmanager/HistoryMeeting')
    },
    member() {
      this.$router.push('/indexmanager/member')
    },
    meetingroom() {
      this.$router.push('/indexmanager/MeetingRoom')
    },
    managemessage() {
      this.$router.push('/indexmanager/Message')
    },
    check() {
      this.$router.push('/indexmanager/check')
    },
    add() {
      this.$router.push('/indexmanager/add')
    },
    checkmember(){
     this.$router.push('/indexmanager/checkmember')
    },
    meetingroomstatus() {
      this.$router.push('/indexmanager/meetingroomstatus')
    },
    // performance() {
    //   this.$router.push('/indexmanager/performance')
    // },
    Exit() {
      this.$router.push('/')
    }
    // setCookie: function (){ 
    //   this.$cookies.remove('user_id')
    //   this.$cookies.set('manager_id',1 ,'/indexmanager');
    //   var x = this.$cookies.get("manager_id") 
    //   console.log(x)
    // }                                  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layui-header {
  background-color: #3f51b5;
}
.layui-side,
.layui-side-scroll,
ul {
  background-color: #2f6594;
}
a {
  text-decoration: none;
}
img {
  width: 35px;
  height: 35px;
}
#logo {
  font-size: 25px;
}
</style>
