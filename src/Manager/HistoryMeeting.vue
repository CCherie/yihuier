<template>
<div class="layui-body site-demo">
<blockquote class="layui-elem-quote layui-text" >
       历史会议
</blockquote>

<table class="layui-table" lay-size="lg">
  <thead>
    <tr>
      <th>日期</th>
      <th>会议标题</th>
      <th>人数</th>
      <th>会议室</th>
      <th>会议状态</th>
    </tr>
  </thead>
  <tbody id="History"> 

  </tbody>
</table>
</div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  mounted(){
  this.AddHistoryMeeting()
  },
  methods:{
   AddHistoryMeeting :function(){
     this.$axios.post("/UserManager/Managers/allMeetings.json")
     .then((data)=>{
        for(var i=0;i<data.data.data.length;i++){
      if(data.data.data[i].meeting_status==0){
            var status = '未开始'
        $("#History").append(
         "<tr style='background-color:#66c1d4'>\
          <th>"+data.data.data[i].meeting_time_start+"</th>\
          <th>"+data.data.data[i].meeting_name+"</th>\
          <th>"+data.data.data[i].people.length+"人</th>\
          <th>"+data.data.data[i].location+"</th>\
          <th>"+status+"</th>\
         </tr>\ ")
          }
        else if(data.data.data[i].meeting_status==1){
            var status = '即将开始'
        $("#History").append(
         "<tr style='background-color:#76c176'>\
          <th>"+data.data.data[i].meeting_time_start+"</th>\
          <th>"+data.data.data[i].meeting_name+"</th>\
          <th>"+data.data.data[i].people.length+"人</th>\
          <th>"+data.data.data[i].location+"</th>\
          <th>"+status+"</th>\
         </tr>\ ")
          }
          else if(data.data.data[i].meeting_status==2){
            var status = '正在开会'
        $("#History").append(
         "<tr style='background-color:pink'>\
          <th>"+data.data.data[i].meeting_time_start+"</th>\
          <th>"+data.data.data[i].meeting_name+"</th>\
          <th>"+data.data.data[i].people.length+"人</th>\
          <th>"+data.data.data[i].location+"</th>\
          <th>"+status+"</th>\
         </tr>\ ")
          }
          else if(data.data.data[i].meeting_status==3){
            var status = '已结束'
         $("#History").append(
         "<tr>\
          <th>"+data.data.data[i].meeting_time_start+"</th>\
          <th>"+data.data.data[i].meeting_name+"</th>\
          <th>"+data.data.data[i].people.length+"人</th>\
          <th>"+data.data.data[i].location+"</th>\
          <th>"+status+"</th>\
         </tr>\ ")
          }
          else{
            var status = '已取消'
         $("#History").append(
         "<tr>\
          <th>"+data.data.data[i].meeting_time_start+"</th>\
          <th>"+data.data.data[i].meeting_name+"</th>\
          <th>"+data.data.data[i].people.length+"人</th>\
          <th>"+data.data.data[i].location+"</th>\
          <th>"+status+"</th>\
         </tr>\ ")
          }
        }
     }).catch((err)=>{

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
