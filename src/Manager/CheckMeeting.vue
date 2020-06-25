<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">审核会议申请</blockquote>
    <div class="layui-container">
      <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title" id="AddDepartment">
          <li class="layui-this">待审核</li>
          <li>已通过</li>
          <li>已拒绝</li>
        </ul>
        <div class="layui-tab-content" style="height: 100px;" id="AddOther">
          <div class="layui-tab-item layui-show">
            <table class="layui-table" lay-size="lg" id="WaitForCheck">
              <thead>
                <tr>
                  <th>会议名称</th>
                  <th>会议开始时间</th>
                  <th>会议室</th>
                  <th>人数</th>
                  <th>所需硬件</th>
                  <th>备注</th>
                  <th>操作</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="layui-tab-item " >
            <table class="layui-table" lay-size="lg" id="Passed">
              <thead>
                <tr>
                  <th>会议名称</th>
                  <th>会议开始时间</th>
                  <th>会议室</th>
                  <th>人数</th>
                  <th>所需硬件</th>
                  <th>备注</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="layui-tab-item ">
            <table class="layui-table" lay-size="lg"  id="Refuse">
              <thead>
                <tr>
                  <th>会议名称</th>
                  <th>会议开始时间</th>
                  <th>会议室</th>
                  <th>人数</th>
                  <th>所需硬件</th>
                  <th>备注</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.Show()
  },
  methods: {
    Show: function () {
      var data = {
        status: 3
      }
      //待审核的请求
      this.$axios.get('/MeetingManager/Meetings/meetingApplyInfos.json?status=3'
      ).then(function (data) {
          if(data.data.code==1){
               this.$router.push('/')
               layer.alert("请先登录！")
           }
      if(data.data.data==null){
            $("#WaitForCheck").after("<p>暂无需要审核的会议</p>")
      }
      else for(var i=0;i<data.data.data.length;i++){
            var information = JSON.stringify(data.data.data[i])
             $("#WaitForCheck").append(
            "<tr>\
                 <th>"+ data.data.data[i].app_name + "</th>\
                 <th>"+ data.data.data[i].meeting_time + "</th>\
                 <th>"+ data.data.data[i].locationName + "</th>\
                 <th>"+ data.data.data[i].em_number + "</th>\
                 <th>"+ data.data.data[i].hardware + "</th>\
                 <th>"+ data.data.data[i].other + "</th>\
                 <th><button class='layui-btn layui-bg-blue' onclick='CheckMeeting("+information+")'>审核</button></th>\
             </tr>")
          }
      }).catch(function (error) {
        console.log(error);
      });
    //已通过的请求
      this.$axios.get('/MeetingManager/Meetings/meetingApplyInfos.json?status=1'
      ).then(function (data) {
          for(var i=0;i<data.data.data.length;i++)
          $("#Passed").append(
            "<tr>\
                 <th>"+ data.data.data[i].app_name + "</th>\
                 <th>"+ data.data.data[i].meeting_time + "</th>\
                 <th>"+ data.data.data[i].locationName + "</th>\
                 <th>"+ data.data.data[i].em_number + "</th>\
                 <th>"+ data.data.data[i].hardware + "</th>\
                 <th>"+ data.data.data[i].other + "</th>\
             </tr>"
          )
      }).catch(function (error) {
        console.log(error);
      });
    //已拒绝的请求
     this.$axios.get('/MeetingManager/Meetings/meetingApplyInfos.json?status=0'
      ).then(function (data) {
          for(var i=0;i<data.data.data.length;i++)
          $("#Refuse").append(
            "<tr>\
                 <th>"+ data.data.data[i].app_name + "</th>\
                 <th>"+ data.data.data[i].meeting_time + "</th>\
                 <th>"+ data.data.data[i].locationName + "</th>\
                 <th>"+ data.data.data[i].em_number + "</th>\
                 <th>"+ data.data.data[i].hardware + "</th>\
                 <th>"+ data.data.data[i].other + "</th>\
             </tr>"
          )
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

 