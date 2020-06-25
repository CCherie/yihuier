<template>
  <div>
    <div class="layui-layout layui-layout-admin">
      <!-- 头部导航区域-->
      <div class="layui-header">
        <form>
          <ul class="layui-nav">
            <li class="layui-nav-item">
              <img :src="logo">
              <span id="logo">YiHuiEr</span>
            </li>

            <li class="layui-nav-item" style="margin-left: 10%;">
              <a href>会议控制台</a>
            </li>

            <li class="layui-nav-item">
              <input
                type="text"
                lay-verify="required"
                placeholder="请输入"
                autocomplete="off"
                class="layui-input"
                v-model="content"
              >
            </li>
            <li class="layui-nav-item">
              <input
                class="layui-btn .layui-btn-normal"
                type="button"
                value="提交"
                @click="SearchMeeting"
              >
            </li>

            <li class="layui-nav-item" style="margin-left:30%;">
              <a @click=" message ">消息</a>
            </li>

            <li class="layui-nav-item">
              <span>你好！</span>
              <span>{{nickname}}</span>
              <img
                :src="headshot"
                class="layui-nav-img"
                style="margin-left:5px"
                @click="ChangeHeadShot"
              >
            </li>
            <li class="layui-nav-item">
              <a @click="Exit">退出登录</a>
            </li>
          </ul>
        </form>
      </div>
      <!-- 左侧导航 -->
      <div class="layui-side">
        <div class="layui-side-scroll">
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="summarize">会议概览</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="order">预定会议室</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="attend">历史会议</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="ordered">我预定的会议</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="collection">我收藏的会议</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="upcoming">待参加的会议</a>
            </li>
            <li class="layui-nav-item">
              <a class="layui-nav-itemed" @click="message">我的消息</a>
            </li>
            <li class="layui-nav-item">
             <a class="layui-nav-itemd"  @click="blank">会议室状态全览</a>
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
import qs from 'qs'
import { constants } from 'fs';
export default {
  name: 'Base',
  data() {
    return {
      logo: require('../../static/yihuierY.png'),
      headshot: '',
      msg: 'Welcome to Your Vue.js App',
      nickname: '',
      user_id: this.$cookies.get("user_id"),
      content: ''
    }
  },
  mounted() {
    this.CheckLogin();
    this.GetHeadshot();
  },
  methods: {
    //获取用户头像昵称
    CheckLogin: function () {
      var id = document.cookie;
      ///   var id = this.$cookies.get("user_id");
      if (id == "") {
        this.$router.push('/');
        layer.alert('请先登录');
      }
    },
    GetHeadshot: function () {
      var data = {
        user_id: this.user_id
      }
      this.$axios.post('/UserManager/Users/userHeaderPic.json', qs.stringify(data), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      })
        .then((data) => {
          this.headshot = data.data.data.user_headpic_dir
          this.nickname = data.data.data.user_name
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //页面跳转
    summarize() {
      this.$router.push('/index/summarize')
    },
    order() {
      this.$router.push('/index/order')
    },
    ordered() {
      this.$router.push('/index/ordered')
    },
    collection() {
      this.$router.push('/index/collection')
    },
    message() {
      this.$router.push('/index/message')
    },
    attend() {
      this.$router.push('/index/attend')
    },
    upcoming() {
      this.$router.push('/index/upcoming')
    },
    meetingroom() {
      this.$router.push('/index/meetingroom')
    },
    Exit() {
      this.$cookies.remove('user_id');
      this.$router.push('/');
    },
    blank() {
      this.$router.push('/index/meetingroomsstatus')
    },
    //查询会议
    SearchMeeting: function () {
      var data = {
        content: this.content,
        user_id: this.user_id
      }
      var id = this.user_id;
      this.$axios.post('/MeetingManager/Meetings/searchRoomsOrMeetings.json', qs.stringify(data), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      })
        .then((data) => {
          if (data.data.data.length == 0) {
            layer.alert('暂无查询结果');
          }
          else {
            layer.open({
              title: '提示',
              type: 1,
              shade: 0.2,
              skin: 'layui-layer-blue', //样式类名
              shadeClose: true, //开启遮罩关闭
              btn: ['确定', '取消'],
              area: ['400px', '500px'],
              content: " <div style='padding: 20px 100px;' id='result'>\
             为您搜索到以下结果<br>\
             </div>\ "
            })
            for (var i = 0; i < data.data.data.length; i++) {
              var data1 = {
                id: id,
                type: data.data.data[i].type
              }
              var data2 = JSON.stringify(data1)
              if (data.data.data[i].type == 1)
                $("#result").after(
                  "<blockquote class='layui-elem-quote layui-quote-nm'>\
              会议室："+ data.data.data[i].name + "<br>\
            <button class='layui-btn layui-btn-danger layui-btn-sm' onclick='DetailOfBase("+ data2 + ")'>详情</button>\
            </blockquote>\ "
                )
              else {
                $("#result").after(
                  "<blockquote class='layui-elem-quote layui-quote-nm'>\
              会议："+ data.data.data[i].name + "<br>\
            <button class='layui-btn layui-btn-danger layui-btn-sm' onclick='DetailOfBase("+ data2 + ")'>查看</button>\
            </blockquote>\ "
                )              }
            }
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    //修改头像
    ChangeHeadShot: function () {
      var x = this.headshot
      var y = this.user_id
      layer.open({
        type: 1,
        skin: 'layui-layer-blue', // 样式类名
        shadeClose: true,
        // 开启遮罩关闭
        title: '修改头像',
        btn: ['ok'],
        area: ['400px', '500px'],
        content: " <div style = 'padding:10px'>\
        <div id='changeHeadshot'style='margin-left:90px'></div>\
        </div>\ ",
        choose: function (obj) {
          console.log(obj)
        },
        success: function () {
          $("#changeHeadshot").append("<img style='width:200px;height:200px;border:1px solid grey' src='" + x + "'>\
        <div class='layui-upload' style='margin-top:10px'>\
        <button type='button' class='layui-btn layui-btn-normal' id='test8' onclick='uploadHeadShot("+ y + ")'>选择图片</button>\
        <button type='button' class='layui-btn' id='test9'>开始上传</button>\
        </div>\ ")
        }
      });
    }
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
.layui-input {
  /* margin-left: 20px; */
  display: inline;
}
.layui-btn {
  background-color: #5887aa;
}
</style>
