<template>
<div class="layui-body site-demo">
<blockquote class="layui-elem-quote layui-text" >
        历史会议
</blockquote>
<ul class="layui-timeline" style="margin-left:2%;" id="Attend">
   
</ul>
</div>
</template>
<script>
import qs from 'qs'

export default {
  name: 'Attend',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user_id :this.$cookies.get("user_id")
    }
  },
  mounted (){
   this.AddAttend();
  },
  methods: {
    AddAttend: function(){
         var data = {
           user_id :this.user_id
         }
        this.$axios.post('/MeetingManager/Meetings/relateToMeMeetings.json',qs.stringify(data)
        ).then((data)=>{
          for(var i=0;i<data.data.data.length;i++){
            var data2 = JSON.stringify(data.data.data[i]);
            var collect = {
                meeting_id :data.data.data[i].meeting_id,
                user_id :this.user_id
            }
            var data1 = JSON.stringify(collect)

            if(data.data.data[i].meeting_colletion_status==0)
            {
            $("#Attend").append(
             "<li class='layui-timeline-item'>\
                <i class='layui-icon layui-timeline-axis'></i>\
             <div class='layui-timeline-content layui-text'>\
               <h3 class='layui-timeline-title'>"+data.data.data[i].startTime+"</h3>\
               <p>"+data.data.data[i].meeting_name+"</p>\
                 <ul>\
                   <li>"+data.data.data[i].location+"</li>\
                   <li>人数："+data.data.data[i].users.length+"</li>\
                   <li>...</li>\
                   <li><p onclick='Collect("+data1+")'>\
                   收藏会议</p></li>\
                   <li><p onclick='DetailOfAttend("+data2+")'>\
                   查看详情</p></li>\
                 </ul>\
              </div>\
             </li> \ ")
            }else{
               $("#Attend").append( "<li class='layui-timeline-item'>\
                <i class='layui-icon layui-timeline-axis'></i>\
               <div class='layui-timeline-content layui-text'>\
                <h3 class='layui-timeline-title'>"+data.data.data[i].startTime+"</h3>\
                <p>"+data.data.data[i].meeting_name+"</p>\
                  <ul>\
                   <li>"+data.data.data[i].location+"</li>\
                   <li>人数："+data.data.data[i].users.length+"</li>\
                   <li>...</li>\
                   <li><p onclick='Collect("+data1+")'>\
                   会议已收藏</p></li>\
                   <li><p onclick='DetailOfAttend("+data2+")'>\
                   查看详情</p></li>\
                 </ul>\
              </div>\
             </li> \ ",)
            }
         }
        }).catch((err)=>{
          console.log(err)
        })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
