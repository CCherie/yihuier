<template>
<div class="layui-body site-demo">
<blockquote class="layui-elem-quote layui-text" >
       我收藏的会议
</blockquote>
<table class="layui-table" lay-size="lg">
  <thead>
    <tr>
      <th>日期</th>
      <th>会议标题</th>
      <th>人数</th>
      <th>会议室</th>
      <th>会议内容</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody id="AddCollected">
   
  </tbody>
</table>
</div>
</template>
<script>
import qs from 'qs'
export default {
  data(){
    return {
      user_id :this.$cookies.get("user_id") 
    }   
  },
  mounted() {
    this.AddCollected();
    this.UnCollected();
  },
  methods : {
    AddCollected :function(){
      var data = {
        user_id :this.user_id
      }
      this.$axios.post('/MeetingManager/Meetings/collectionMeetings.json',qs.stringify(data)
      ).then((data) =>{
        console.log(data);
        if(data.data.data == null)
        $("#AddCollected").after(
          "<div class='card bg-info text-white'>\
             <div class='card-body'>\
             <p>亲亲，您还没有收藏的会议哦</p>\
             </div>\
         </div>\ "
        )
        else{
        for (var i=0;i<data.data.data.length;i++){
         $("#AddCollected").append(
                "<tr>\
                 <th>"+data.data.data[i].collection_time+"</th>\
                 <th>"+data.data.data[i].meeting_name+"</th>\
                 <th>"+data.data.data[i].people.length+"</th>\
                 <th>"+data.data.data[i].location+"</th>\
                 <th>"+data.data.data[i].description+"</th>\
                 <th><button class='layui-btn layui-bg-blue' id="+data.data.data[i].meeting_id+">取消收藏</button></th>\
                </tr> "
             );
          }
        }       
         }).catch((err) =>{
           console.log(err)
         })
    },
    UnCollected :function(){
        $('#AddCollected').on('click',' button',function(){
          var id = this.id;
             layer.open({
             title:'提示',
             type: 1,
             shade: 0.2,
				  	 skin: 'layui-layer-blue', //样式类名
             shadeClose: true, //开启遮罩关闭
             btn: ['确定','取消'],
             area: ['400px','180px'],
             content:  '<div style="padding: 20px 100px;">您确定要取消收藏这条会议吗？</div>',
             yes:function(){
               var data = {
                  user_id: this.user_id,
                  meeting_id: id
               }
             $.ajax({
                url:'/UserManager/Users/outOfCollectMeeting.do ',
                type:'post',
                dataType:'json',
                data:data,
                success:function(data){
                    if(data.code==0){
                        layer.alert('取消成功',function () {
                            window.location.reload();
                        });
                     }else if(data.code==1){
                        layer.alert("取消失败,请重试或联系管理员");
                    }
                   }
              });
             }     
           })
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
.card{
  margin-left: 100px;
  margin-top: 50px; 
  float :left;
}
</style>
