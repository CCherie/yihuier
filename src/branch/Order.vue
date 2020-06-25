<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">预定会议室</blockquote>
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <!-- //会议标题 -->
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">会议标题</label>
            <div class="layui-input-block">
              <input
                type="text"
                autocomplete="off"
                id="meetingName"
                placeholder="请输入标题"
                class="layui-input"
              >
            </div>
          </div>
        </div>
        <!-- 会议简介 -->
        <div class="layui-form-item">
          <div class="layui-inline-block">
            <label class="layui-form-label">会议简介</label>
            <div class="layui-input-block">
              <input
                type="text"
                id="scribe"
                autocomplete="off"
                placeholder="请输入会议大概内容"
                class="layui-input"
              >
            </div>
          </div>
        </div>
        <!-- 会议室选择 -->
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">会议室</label>
            <div class="layui-input-inline">
              <select name="modules" lay-verify="required" id="MeetingRoom" lay-search >
                <option>如果开启智能调配，可不填</option>
              </select>
            </div>
          </div>
        </div>
        <!-- 选择会议日期 -->
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">日期选择</label>
            <div class="layui-input-block">
              <input type="text" id="date" autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>
        <!-- 选择会议开始时间和持续时间 -->
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">开始时间</label>
            <div class="layui-input-inline" style="width: 100px;">
              <input type="text" id="startTime" placeholder autocomplete="off" class="layui-input">
            </div>
            <label class="layui-form-label">持续时间</label>
            <div class="layui-input-inline" style="width: 100px;">
              <input
                type="text"
                id="duration"
                placeholder
                autocomplete="off"
                class="layui-input"
                style="display:inline"
              >
            </div>
            <span style="line-height:38px">分</span>
          </div>
        </div>
        <!-- 选择会议所需硬件 -->
        <div class="layui-form-item">
          <label class="layui-form-label">所需硬件</label>
          <div class="layui-input-block">
            <input type="checkbox" name="need" value="白板" title="白板">
            <input type="checkbox" name="need" value="投影仪" title="投影仪" checked>
            <input type="checkbox" name="need" value="桌牌" title="桌牌">
          </div>
        </div>
        <!-- 备注 -->
        <div class="layui-form-item">
          <label class="layui-form-label">备注</label>
          <div class="layui-input-block">
            <textarea placeholder="请输入内容" id="other" class="layui-textarea"></textarea>
          </div>
        </div>
        <!-- 选择与会人员 -->
        <div class="layui-form-item">
          <label class="layui-form-label">添加成员</label>
          <div class="layui-input-block">
            <input
              class="layui-btn layui-bg-blue"
              type="button"
              @click="AddMember"
              id="UsersHeadshot"
              value="添加"
            >
          </div>
        </div>
        <!-- 选择是否智能调配 -->
        <div class="layui-form-item">
          <label class="layui-form-label">智能调配</label>
          <div class="layui-input-block">
            <input type="radio" name="intelligence" value="1" title="开启智能" checked>
            <input type="radio" name="intelligence" value="0" title="关闭">
          </div>
        </div>
        <!-- 提交按钮 -->
        <div class="layui-form-item">
          <input class="layui-btn layui-bg-blue" id="submit" type="button" value="提交">
        </div>
      </form>
      <div></div>
    </div>
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
    this.Details();
    this.MeetingRoom();
   // this.GetValue();
  },
  methods: {
    // GetValue (){
    // var a = ''
    // for(var i = 0;i <location.hash.length;i++)  {
    //   if(location.hash[i]=='='){
    //     for(var j=i+1;j<location.hash.length;j++){
    //       a+=location.hash[j]
    //     }
    //   }
    // }
    // console.log(a)
    // // $("#MeetingRoom").val(a)
    // },
    MeetingRoom (){
       var data = {
         user_id:this.user_id
       }
        this.$axios.post('/MeetingManager/MeetingAndRooms/getAllMeetingRoom.json', qs.stringify(data), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      })
        .then((data) => {
          for(var i=0;i<data.data.data.length;i++){
            $("#MeetingRoom").append(
              "<option value="+data.data.data[i].room_id+">"+data.data.data[i].room_name+"</option>"
              )
            window.layui.form.render();
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 渲染form表单
    Details: function () {
      var layui = window.layui;
      var laydate = layui.laydate;
      var form = layui.from;
      layui.form.render();
      layui.laydate.render({
        elem: '#date', //渲染日历
        type: 'date',
        min: 0,
        btns: ['confirm'],
        calendar: true,
        theme: "#1E9FFF"
      });
      layui.laydate.render({
        elem: '#startTime', //渲染时间选择器
        type: 'time',
        format: 'HH:mm',
        theme: "#1E9FFF",
        btns: ['confirm'],
      });
      layui.upload.render({
        elem: '#test8'
        , url: '/upload/'
        , auto: false
        , done: function (res) {
          console.log(res)
        }
      });
    },
    // 获取后台人员列表
    AddMember: function () {
      var id = this.user_id
      layer.open({
        type: 1,
        skin: 'layui-layer-blue', //样式类名
        shadeClose: false, //开启遮罩关闭
        title: '添加与会成员',
        btn: ['ok'],
        area: ['450px', '600px'],
        content:
          '<div style = "padding:10px">\
           <form class="layui-form layui-form-pane" action="">\
              <div class="layui-form-item" id="department">\
             </div>\
           </form>\
           </div>\ ' ,
        success: function () {
          layui.form.render();
        },
        yes: function (index, layero) {
          var obj2 = $("input[name='member']");
          var member = new Array()
          var j = 0
          for (var i = 0; i < obj2.length; i++) {
            if (obj2[i].checked) {
              member[j] = obj2[i].value;
              j++;
            }
          }
          var data = {
            user_id: id,
            people: member
          }
          Submit(data);
          layer.close(index);
        }
      })
      var data = {
        user_id: this.user_id
      }
      console.log(data)

      this.$axios.post('/UserManager/Users/getPersonalCompanyUsers.json', qs.stringify(data), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      })
        .then((data) => {
          console.log(data);
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
                "<input type='checkbox' name='member' value=" + user_id + " id='1' title=" + user_name + ">");
              layui.form.render();
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
