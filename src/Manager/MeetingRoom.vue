<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">会议室管理</blockquote>
    <div class="layui-container">
      <div id="AddMeetingRooml">
        <blockquote class="layui-elem-quote layui-text">可用会议室</blockquote>
      </div>
      <div id="AddMeetingRoomr">
          <blockquote class="layui-elem-quote layui-text">不可用会议室</blockquote>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data() {
    return {
      //manager_id: this.$cookies.get("manager_id")
    }
  },
  mounted() {
    this.AddMeetingRoom();
  },
  methods: {
    AddMeetingRoom: function () {
      this.$axios.post('/UserManager/Managers/RoomsManager.json').then((data) => {
        if(data.data.code==1){
          this.$router.push('/')
          layer.alert("请先登录！")
        }
        for (var i = 0; i < data.data.data.length; i++) {
          var check = JSON.stringify(data.data.data[i]);
          if (data.data.data[i].room_status==1)
            $("#AddMeetingRooml").append(
              "<blockquote class='layui-elem-quote layui-quote-nm' style='height:100px'>\
            <div style='float:left;width:60%;'>\
         <img style='width:160px;height:80px' src="+ data.data.data[i].room_pic_url + ">\
            </div>\
           <div style='float:left;width:40%;'>\
           会议室："+ data.data.data[i].room_name + "<br>\
          <button class='layui-btn layui-btn-nomal layui-btn-sm' onclick='MDetailOfRoom("+check+ ")'>查看</button>\
          <button class='layui-btn layui-btn-danger layui-btn-sm' onclick='MDeleteRoom("+check+ ")'>删除</button>\
           </div>\
          </blockquote>\ "
            )
          else
            $("#AddMeetingRoomr").append(
              "<blockquote class='layui-elem-quote layui-quote-nm' style='height:100px'>\
            <div style='float:left;width:60%;'>\
         <img style='width:160px;height:80px' src="+ data.data.data[i].room_pic_url + ">\
            </div>\
           <div style='float:left;width:40%;'>\
           会议室："+ data.data.data[i].room_name + "<br>\
          <button class='layui-btn layui-btn-nomal layui-btn-sm'  onclick='MDetailOfRoom("+check+ ")'>查看</button>\
          <button class='layui-btn layui-btn-danger layui-btn-sm' onclick='MDeleteRoom("+check+")'>恢复使用</button>\
           </div>\
          </blockquote>\ "
            )
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.layui-table {
  width: 80%;
  margin: 0 auto;
}
#AddMeetingRooml {
  width: 45%;
  float: left;
}
#AddMeetingRoomr {
  width: 45%;
  float: right;
}
.layui-input{
    width: 100%;
}
.layui-form-select .layui-edge {
    right:10px;
}
.layui-form-select{
  width: 260px;
}
</style>
