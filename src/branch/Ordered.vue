<template>
<div class="layui-body site-demo">
<blockquote class="layui-elem-quote layui-text" >
       我预定的会议
</blockquote>
<table class="layui-table" lay-size="lg">
  <colgroup>
    <col width="150">
    <col width="200">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th>日期</th>
      <th>持续时间</th>
      <th>人数</th>
      <th>会议内容</th>
      <th>状态</th>
      <th>操作</th>
    </tr>
  </thead>
<tbody id="AddOrderedMeeting">
</tbody>
</table>
</div>
</template>
<script>
import qs from 'qs'
export default {
  data(){
    return {
      user_id:this.$cookies.get("user_id") 
    }   
  },
  mounted() {
    this.AddOrderedMeeting();
  },
  methods : {
    AddOrderedMeeting :function(){
      var data = {
        user_id :this.user_id
      }
      this.$axios.post('MeetingManager/Meetings/personalApplyMeetings.json',qs.stringify(data)
      ).then((data) =>{
        console.log(data);
        for (var i=0;i<data.data.data.length;i++){
            var x = JSON.stringify(data.data.data[i])
           $("#AddOrderedMeeting").append(
                "<tr>\
                 <th>"+data.data.data[i].startTime+"</th>\
                 <th>"+data.data.data[i].during_time+"分钟</th>\
                 <th>"+data.data.data[i].people.length+"</th>\
                 <th>"+data.data.data[i].meetingName+"</th>\
                 <th>状态</th>\
                 <th><button class='layui-btn layui-bg-blue' onclick =' DetailOfOrdered("+x+")'>查看</button></th>\
                </tr> ");
        }
         }).catch((err) =>{
           console.log(err)
         })
    }
 }
}
</script>
<style>
.layui-table{
       width: 90%;
       margin: 0 auto;
}
</style>
