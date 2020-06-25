<template>
<div class="layui-body site-demo">
<blockquote class="layui-elem-quote layui-text" >
       我的消息
</blockquote>
<div class="layui-container">

  <div  id="NotRead" >
    <blockquote class="layui-elem-quote layui-text" style="margin-top:10px;">未读消息</blockquote>
  </div>
  <div id="HaveRead">
    <blockquote class="layui-elem-quote layui-text" >已读消息</blockquote>
  </div>

</div>
</div>
</template>
<script>
import qs from 'qs'
export default {
  data(){ 
    return{
       user_id:this.$cookies.get("user_id") 
    }
  },
  mounted(){
    this.AddMessage()
  },
  methods: {
     AddMessage :function(){
        var data = {
        user_id :this.user_id
      }
      this.$axios.post('UserManager/Users/getMyMessage.json ',qs.stringify(data)
      ).then((data) =>{
         for (var i=0;i<data.data.data.length;i++){
           var id =JSON.stringify(data.data.data[i].message_id)
         if(data.data.data[i].message_read_status=='已读')
          $("#HaveRead").after(
          "<blockquote class='layui-elem-quote layui-quote-nm'>\
          "+data.data.data[i].message_content+"<br>\
          "+data.data.data[i].message_datetime+"<br>\
                    --------来自"+data.data.data[i].message_id+"\
          <button class='layui-btn layui-btn-danger layui-btn-sm'  onclick='Delete("+id+")'>删除</button>\
          </blockquote>\ "
          );
        else
           $("#NotRead").after(
          "<blockquote class='layui-elem-quote layui-quote-nm'>\
          "+data.data.data[i].message_content+"<br>\
          "+data.data.data[i].message_datetime+"<br>\
                    --------来自"+data.data.data[i].message_id+"\
          <button class='layui-btn layui-btn-sm layui-bg-blue' onclick='Read("+id+")'>标为已读</button>\
          <button class='layui-btn layui-btn-danger layui-btn-sm' onclick='Delete("+id+")'>删除</button>\
          </blockquote>\ "
          );
        }
       }).catch((err) =>{
           console.log(err)
      })
    }
   }
}
</script>