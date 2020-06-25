<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">待参加的会议</blockquote>
    <table class="layui-table" lay-size="lg">
      <colgroup>
        <col width="150">
        <col width="200">
        <col>
      </colgroup>
      <thead>
        <tr>
          <th>时间</th>
          <th>会议室</th>
          <th>会议标题</th>
          <th>会议二维码</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="UpComing"></tbody>
    </table>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data() {
    return {
      user_id: this.$cookies.get("user_id")
    }
  },
  mounted() {
    this.UpComing();
  },
  methods: {
    UpComing: function () {
      var data = {
        user_id: this.user_id
      }
      this.$axios.post('/MeetingManager/Meetings/allMeetingInfomation.json', qs.stringify(data)
      ).then((data) => {
        console.log(data);
        for (var i = 0; i < data.data.data.length; i++) {
          $("#UpComing").append(
            "<tr>\
                 <th>"+ data.data.data[i].meeting_time_start + "</th>\
                 <th>"+ data.data.data[i].location + "</th>\
                 <th>"+ data.data.data[i].meeting_name + "</th>\
                 <th><img src="+data.data.data[i].QrCode+"></th>\
                 <th>"+ data.data.data[i].meeting_status + "</th>\
                 <th>\
                 <button class='layui-btn layui-bg-blue' onclick='CheckFile("+data.data.data[i].meeting_id+")'>查看文件</button>\
                 <button class='layui-btn layui-bg-red' id="+ data.data.data[i].meeting_id + ">请假</button></th>\
                </tr> "
          )        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.layui-table {
  width: 90%;
  margin: 0 auto;
}
</style>
