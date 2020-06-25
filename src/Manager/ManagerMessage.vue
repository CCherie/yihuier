<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">我发送的消息</blockquote>
    <div class="layui-container" id="MessageToUser">
      <button type="button" class="layui-btn layui-bg-blue" style="margin:5px" @click="PostMassage">
        <i class="layui-icon layui-icon-add-circle"></i>
      </button>
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
    this.AddMessage()
  },
  methods: {
    PostMassage: function () {
      layer.open({
        type: 1,
        skin: 'layui-layer-blue', // 样式类名
        shadeClose: true,
        // 开启遮罩关闭
        title: '发送消息',
        btn: ['ok'],
        area: ['450px', '600px'],
        content:
         '<div style = "padding:10px">\
           <form class="layui-form layui-form-pane" action="">\
            <div class="layui-form-item">\
                 <textarea placeholder="请输入要发送的简讯..." id="content" class="layui-textarea"></textarea>\
                  <span>选择收件人</span>\
            </div>\
            <div class="layui-form-item" id="department">\
            </div>\
           </form>\
           </div>\ ' , 
        success: function () {
          layui.form.render();
        },
         yes: function (index, layero) {
          var obj = $("input[name='member']");
          var member = new Array()
          var j = 0
          for (var i = 0; i < obj.length; i++) {
            if (obj[i].checked) {
              member[j] = obj[i].value;
              j++;
            }
          }
          var data = JSON.stringify({
            message_content :$("#content").val(),
            user_ids: member
          })
          MPostMeaaage(data);
          layer.close(index);
        }
      })
       this.$axios.post('/UserManager/Managers/getPersonalCompanyUsers.json')
          .then((data) => {
          for (var i = data.data.data.length - 1; i >= 0; i--) {
            $("#department").after(
              "<div class='layui-form-item'>\
                   <label class='layui-form-label'>"+ data.data.data[i].department_name + "</label>\
                  <div class='layui-input-block' id="+ data.data.data[i].department_id + "></div>\
                </div>\ ");
            for (var j = 0; j < data.data.data[i].users.length; j++) {
              var user_name = data.data.data[i].users[j].user_name
              var user_id = data.data.data[i].users[j].user_id
              $("#" + data.data.data[i].department_id).append(
                "<input type='checkbox' name='member' value=" + user_id + " title=" + user_name + ">");
              layui.form.render();
           }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    AddMessage: function () {
      this.$axios.post('/UserManager/Managers/allMessagesSendFromMe.json')
        .then((data) => {
          for (var i = 0; i < data.data.data.length; i++) {
            if (data.data.data[i].message_read_status == 1)
              $("#MessageToUser").append(
                "<blockquote class='layui-elem-quote layui-quote-nm'>\
           To:<span style='color:#5fa6b8'>"+ data.data.data[i].message_to_user + "</span><br>\
          <span style='text-indent:2em'>"+ data.data.data[i].message_content + "\
          "+ data.data.data[i].message_datetime + " <i class='layui-icon layui-icon-ok-circle ' style='font-size:30px; color:green;'></i><br></span>\
          </blockquote>\ "
              );
            else
              $("#MessageToUser").append(
                "<blockquote class='layui-elem-quote layui-quote-nm'>\
           To:<span style='color:#5fa6b8'>"+ data.data.data[i].message_to_user + "</span><br>\
          <span style='text-indent:2em'>"+ data.data.data[i].message_content + "\
          "+ data.data.data[i].message_datetime + "&nbsp;<span style='color:red;font-family:LiSu'>对方未读</span><br></span>\
          </blockquote>\ "
              );
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>