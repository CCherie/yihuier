<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">会议概览</blockquote>
    <table class="table table-bordered">
      <tbody>
        <tr>
          <td class="table-info">近一个月会议</td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>总数量</th>
          <th>待参加</th>
          <th>我预约的</th>
          <th>已结束</th>
          <th>已过期</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="blue">{{number1}}</th>
          <th class="green">{{number2}}</th>
          <th class="orange">{{number3}}</th>
          <th class="pink">{{number4}}</th>
          <th class="red">{{number5}}</th>
        </tr>
      </tbody>
    </table>

    <table class="table table-bordered" id="second">
      <tbody>
        <tr>
          <td class="table-info">即将参加
            <span style="float:right;color:#2f1e9e;">
              <a @click="upcoming">查看更多</a>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" id="Content">
    </table>

    <table class="table table-bordered" style="margin-top:15px">
      <tbody>
        <tr>
          <td class="table-info">我的到勤情况</td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>总数量</th>
          <th>准时</th>
          <th>迟到</th>
          <th>请假</th>
          <th>缺勤</th>
          <th>待参加</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="blue" id="total"></th>
          <th id="ontime" class="white"></th>
          <th id="late" class="orange"></th>
          <th id="ask_for_leave" class="pink"></th>
          <th id="absence" class="red"></th>
          <th id="not_arrived" class="green"></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      number1: '',  //总数量
      number2: '',   //待参加
      number3: '',   //我预约的
      number4: '',   //已结束
      number5: '',   //已过期
      // title1: '',
      // title2: '',
      // date1: '',
      // duration1: '',
      // location1: '',
      // meetingName1: '',
      // date2: '',
      // duration2: '',
      // location2: '',
      // meetingName2: '',
      user_id: this.$cookies.get("user_id")
      // total:'',
      // ontime:'',
      // late:'',
      // ask_for_leave:'',
      // absence:'',
      // not_arrived:'',
    }
  },
  mounted() {
    this.CheckLogin()
    this.NearTime()
    this.Number()
    this.performance()
  },
  methods: {
    CheckLogin: function () {
      var id = document.cookie;
      //  var id = this.$cookies.get("user_id");
      if (id = "") {
        // this.$router.push('/');
        alert('请先登录');
      }
    },
    //获取近两次会议
    NearTime: function () {
      var data = {
        user_id: this.user_id
      }
      this.$axios.post('/MeetingManager/Meetings/LatestMeetingInfomation.json', qs.stringify(data)
      ).then((data) => {
        if (data.data.data.length == 2) {
          $("#Content").append("<thead>\
            <tr>\
            <th>"+data.data.data[0].meeting_name+"</th>\
            <th>"+data.data.data[1].meeting_name+"</th>\
            </tr >\
            </thead >\
            <tbody>\
              <tr>\
                <th>\
                  <p>会议时间:"+data.data.data[0].meeting_time_start+"</p>\
                  <p>持续时间:"+ data.data.data[0].meeting_time+"分</p>\
                  <p>地点:"+data.data.data[0].location+"</p>\
                  <p>主要内容:"+data.data.data[0].description+"</p>\
                  <span style='float:right;color:#5758bd;'>\
                  <a>查看详情</a>\
                  </span>\
                </th>\
                <th>\
                  <p>会议时间:"+data.data.data[1].meeting_time_start+"</p>\
                  <p>持续时间:"+ data.data.data[1].meeting_time+"分</p>\
                  <p>地点:"+data.data.data[1].location+"</p>\
                  <p>主要内容:"+data.data.data[1].description+"</p>\
                  <span style='float:right;color:#5758bd;'>\
                  <a>查看详情</a>\
                  </span>\
                </th>\
              </tr>\
            </tbody>\ ")
          }else if(data.data.data.length == 1){
            $("#Content").append("<thead>\
            <tr>\
            <th>"+data.data.data[0].meeting_name+"</th>\
            </tr >\
            </thead >\
            <tbody>\
              <tr>\
                <th>\
                  <p>会议时间:"+data.data.data[0].meeting_time_start+"</p>\
                  <p>持续时间:"+ data.data.data[0].meeting_time+"分</p>\
                  <p>地点:"+data.data.data[0].location+"</p>\
                  <p>主要内容:"+data.data.data[0].description+"</p>\
                  <span style='float:right;color:#5758bd;'>\
                  <a>查看详情</a>\
                  </span>\
                </th>\
              </tr>\
            </tbody>\ ")
          }else{
             $("#Content").append("<p style='margin:10px'>最近无会议！</p>")
          }
      
      }).catch((err) => {
        console.log(err)
      })
    },
    Number: function () {
      var data = {
        userId: this.user_id
      }
      this.$axios.post('/MeetingManager/Meetings/usersRelateMeetings.json', qs.stringify(data)
      ).then((data) => {
        this.number2 = data.data.data.ready;
        this.number3 = data.data.data.appointment;
        this.number4 = data.data.data.closed;
        this.number5 = data.data.data.invalid;
        this.number1 = this.number2 + this.number3 + this.number4 + this.number5;
      }).catch((err) => {
        console.log(err)
      })
    },
    performance: function () {
      Performance(this.user_id)
      // var data = JSON.stringify([this.user_id])
      //  console.log(data)
      //  this.$axios.post('/MeetingManager/Meetings/employAttendStatus.json',qs.stringify(data),{
      //    headers: {'Content-Type': 'application/json;','processData': 'false'}}
      //   ).then((data) =>{
      //     console.log(data)
      //     this.total = data.data[0].ontime+data.data[0].late
      //     this.ontime = data.data[0].ontime
      //     this.late = data.data[0].late
      //     this.not_arrived = data.data[0].not_arrived
      //     this.ask_for_leave = data.data[0].ask_for_leave
      //     this.absence = data.data[0].absence
      //   }).catch((err) =>{
      //     console.log(err)
      //   })
    },
    upcoming() {
      this.$router.push('/index/upcoming')
    }
  }
}
</script>
<style>
@import "../../static/tycss/summarize.css";
</style>
