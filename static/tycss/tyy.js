//我参加的会议详情
function DetailOfAttend(a) {
  var people = ''
  for (var i = 0; i < a.users.length; i++) {
    people += a.users[i].user_name + ' '
  }
  layer.open({
    type: 1,
    skin: 'layui-layer-blue', // 样式类名
    shadeClose: true,
    // 开启遮罩关闭
    title: '会议详情',
    btn: ['ok'],
    area: ['450px', '600px'],
    content: " <div style = 'padding:10px'>\
            <form class='layui-form layui-form-pane'>\
                 <div class='layui-form-item'>\
                    <label class='layui-form-label'>会议标题</label>\
                    <div class='layui-input-block'>\
                      <input type='text'  autocomplete='off' class='layui-input' value=" + a.meeting_name + ">\
                      </div>\
                 </div>\
                <div class='layui-form-item'>\
                    <label class='layui-form-label'>会议简介</label>\
                    <div class='layui-input-block'>\
                      <input type='text' autocomplete='off' class='layui-input' value=" + a.description + ">\
                    </div>\
                </div>\
                <div class='layui-form-item'>\
                    <label class='layui-form-label'>会议时间</label>\
                    <div class='layui-input-block'>\
                      <input type='text' autocomplete='off' class='layui-input'  value='" + a.startTime + "'>\
                    </div>\
                </div>\
                <div class='layui-form-item'>\
                    <label class='layui-form-label'>持续时间</label>\
                    <div class='layui-input-block'>\
                      <input type='text' id='duration' autocomplete='off' class='layui-input'  value=" + a.meeting_time + ">\
                    </div>\
                </div>\
                 <div class='layui-form-item'>\
                    <label class='layui-form-label'>会议成员</label>\
                    <div class='layui-input-block'>\
                      <input type='text' id='people' autocomplete='off' class='layui-input' value='" + people + "'>\
                    </div>\
                 </div>\
                 <div class='layui-form-item'>\
                 <label class='layui-form-label'>到勤情况</label>\
                 <div class='layui-input-block'>\
                   <input type='text' id='people' autocomplete='off' class='layui-input' value='" + a.attendence_status + "'>\
                 </div>\
              </div>\
              </form>\
              </div>\ "
  })
}
//我预定的会议细节
function DetailOfOrdered(a) {
  var hardware = ''
  for (var i = 0; i < a.hardware.length; i++) {
    hardware += a.hardware[i] + ' '
  }
  var people = ''
  for (i = 0; i < a.people.length; i++) {
    people += a.people[i] + ' '
  }
  layer.open({
    type: 1,
    skin: 'layui-layer-blue', // 样式类名
    shadeClose: true, // 开启遮罩关闭
    title: '会议详情',
    btn: ['ok'],
    area: ['450px', '600px'],
    content:
      // eslint-disable-next-line no-multi-str
      "<div style = 'padding:10px'>\
   <form class='layui-form layui-form-pane' action=''>\
      <div class='layui-form-item'>\
         <label class='layui-form-label'>会议标题</label>\
         <div class='layui-input-block'>\
           <input type='text' value=" + a.meetingName + " autocomplete='off' class='layui-input'>\
         </div>\
     </div>\
     <div class='layui-form-item'>\
         <label class='layui-form-label'>会议简介</label>\
         <div class='layui-input-block'>\
           <input type='text' value=" + a.scribe + " autocomplete='off' class='layui-input'>\
         </div>\
     </div>\
     <div class='layui-form-item'>\
         <label class='layui-form-label'>会议时间</label>\
         <div class='layui-input-block'>\
           <input type='text  autocomplete='off' class='layui-input' value='" + a.startTime + "' >\
         </div>\
     </div>\
     <div class='layui-form-item'>\
         <label class='layui-form-label'>持续时间</label>\
         <div class='layui-input-block'>\
           <input type='text'value='" + a.during_time + "'分钟 autocomplete='off' class='layui-input'>\
         </div>\
     </div>\
     <div class='layui-form-item'>\
         <label class='layui-form-label'>所需硬件</label>\
         <div class='layui-input-block'>\
           <input type='text' value = '" + hardware + "'  autocomplete='off' class='layui-input'>\
         </div>\
     </div>\
      <div class='layui-form-item'>\
         <label class='layui-form-label'>会议成员</label>\
         <div class='layui-input-block'>\
           <input type='text' value='" + people + "'autocomplete='off' class='layui-input'>\
         </div>\
     </div>\
     <div class='layui-form-item'>\
         <label class='layui-form-label'>备注</label>\
         <div class='layui-input-block'>\
           <textarea type='text' class='layui-textarea class='remarks'>"+ a.remarks + "</textarea>\
         </div>\
      </div>\
     </form>\
    </div>\ "
  })
}
// 标为已读
function Read(x) {
  var data = {
    message_id: x
  }
  $.ajax({
    url: 'http://sylardaemon.tech/UserManager/Users/updateMessageReadStatus.do',
    type: 'post',
    dataType: 'json',
    data: data,
    success: function (data) {
      if (data.code == 0) {
        layer.alert('设置成功', function () {
          window.location.reload();
        });
      } else if (data.code == 1) {
        layer.alert("设置失败,请重试或联系管理员");
      }
    }
  });
}
//收藏会议
function Collect(x) {
  $.ajax({
    url: 'http://sylardaemon.tech/UserManager/Users/collectMeeting.do ',
    type: 'post',
    dataType: 'json',
    data: x,
    success: function (data) {
      if (data.code == 0) {
        layer.alert('收藏成功', function () {
          window.location.reload();
        });
      } else if (data.code == 1) {
        layer.alert("收藏失败,请重试或联系管理员");
      }
    }
  });
}
//关键字查找
function DetailOfBase(x) {
  $.ajax({
    url: 'http://sylardaemon.tech/MeetingManager/MeetingAndRooms/searchDetail.json',
    type: 'post',
    dataType: 'json',
    data: x,
    success: function (data) {
      if (data.code == 0) {
        if (x.type == 2) {
          var people = ""
          for (var i = 0; i < data.data.users.length; i++)
            people += data.data.users[i].user_name + " "
          layer.open({
            type: 1,
            skin: 'layui-layer-blue', // 样式类名
            shadeClose: true, // 开启遮罩关闭
            title: '会议详情',
            btn: ['ok'],
            area: ['450px', '600px'],
            content:
              // eslint-disable-next-line no-multi-str
              "<div style = 'padding:10px'>\
           <form class='layui-form layui-form-pane' action=''>\
              <div class='layui-form-item'>\
                 <label class='layui-form-label'>会议标题</label>\
                 <div class='layui-input-block'>\
                   <input type='text' value=" + data.data.meeting_name + " autocomplete='off' class='layui-input'>\
                 </div>\
              </div>\
             <div class='layui-form-item'>\
                 <label class='layui-form-label'>会议简介</label>\
                 <div class='layui-input-block'>\
                   <input type='text' value=" + data.data.description + " autocomplete='off' class='layui-input'>\
                 </div>\
             </div>\
             <div class='layui-form-item'>\
                 <label class='layui-form-label'>会议地点</label>\
                 <div class='layui-input-block'>\
                   <input type='text' value=" + data.data.location + " autocomplete='off' class='layui-input'>\
                 </div>\
             </div>\
              <div class='layui-form-item'>\
                 <label class='layui-form-label'>会议成员</label>\
                 <div class='layui-input-block'>\
                   <input type='text' value='" + people + "' autocomplete='off' class='layui-input'>\
                 </div>\
             </div>\
           </form>\
           </div>\ "
          })
        }
        else {
          var hardware = ""
          for (var i = 0; i < data.data.room_hardware.length; i++)
            hardware += data.data.room_hardware[i] + " "
          layer.open({
            type: 1,
            skin: 'layui-layer-blue', // 样式类名
            shadeClose: true, // 开启遮罩关闭
            title: '会议详情',
            btn: ['ok'],
            area: ['450px', '600px'],
            content:
              // eslint-disable-next-line no-multi-str
              "<div style = 'padding:10px'>\
         <form class='layui-form layui-form-pane' action=''>\
            <div class='layui-form-item'>\
               <label class='layui-form-label'>会议室地点</label>\
               <div class='layui-input-block'>\
                 <input type='text' value=" + data.data.room_name + " autocomplete='off' class='layui-input'>\
               </div>\
            </div>\
           <div class='layui-form-item'>\
               <label class='layui-form-label'>会议室容量</label>\
               <div class='layui-input-block'>\
                 <input type='text' value=" + data.data.room_capacity + " autocomplete='off' class='layui-input'>\
               </div>\
           </div>\
            <div class='layui-form-item'>\
               <label class='layui-form-label'>会议室设备</label>\
               <div class='layui-input-block'>\
                 <input type='text' value='" + hardware + "' autocomplete='off' class='layui-input'>\
               </div>\
           </div>\
           <div class='layui-form-item'>\
              <label class='layui-form-label'>会议室照片</label>\
               <img style=' width: 375px; height: 125px; margin-left: 10px' src="+ data.data.room_pic_url + ">\
           </div>\
       <input class='layui-btn .layui-btn-normal' type='button' value='预定该会议室' onclick='OrderThisManage("+ data.data.room_name + ")'>\
         </form>\
        </div>\ "
          })
        }
      } else if (data.code == 1) {
        layer.alert("查询失败");
      }
    }
  });
}
//预定会议室
function Submit(x) {
  var obj1 = $("input[name='need']")       //获取选择硬件的checkbox值
  var hardware = new Array();
  var j = 0;
  for (var i = 0; i < obj1.length; i++) {
    if (obj1[i].checked) {
      hardware[j] = obj1[i].value;
      j++;
    }
  }
  $("#submit").click(function () {
    var data = {
      meetingName: $("#meetingName").val(),
      description: $("#scribe").val(),
      startDay: $("#date").val(),
      startTime: $("#startTime").val(),
      lastTime: $("#duration").val(),
      other: $("#other").val(),
      hardware: hardware,
      isIntellgence: $('input:radio:checked').val(),
      people: x.people,
      user_id: x.user_id,
      room_id: $("#MeetingRoom").val()
    }
    $.ajax({
      type: "post",
      url: "http://sylardaemon.tech/MeetingManager/Meetings/bookMeeting.do",
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify(data),
      success: function (data) {
        layer.alert(data.message)
        console.log(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  }
  )
}
//删除消息
function Delete(x) {
  var data = {
    message_id: x
  }
  $.ajax({
    url: 'http://sylardaemon.tech/UserManager/Users/deleteMessageReadStatus.do',
    type: 'post',
    dataType: 'json',
    data: data,
    success: function (data) {
      if (data.code == 0) {
        layer.alert('删除成功', function () {
          window.location.reload();
        });
      } else if (data.code == 1) {
        layer.alert("删除失败,请重试或联系管理员");
      }
    }
  });
}
//查看文件
function CheckFile(x) {
  layer.open({
    type: 1,
    skin: 'layui-layer-blue', // 样式类名
    shadeClose: true,
    // 开启遮罩关闭
    title: '查看文件',
    btn: ['ok'],
    area: ['450px', '500px'],
    content: " <div style = 'padding:10px' id='File'>\
    </div>\ "
  });
  var data = {
    meeting_id: x
  }
  $.ajax({
    url: 'http://sylardaemon.tech/MeetingManager/Meetings/MeetingFiles.json',
    type: 'post',
    dataType: 'json',
    data: data,
    success: function (data) {
      if (data.code == 0) {
        for (var i = 0; i < data.data.length; i++) {
          $("#File").append("<div style='margin:10px'>\
          <div class='layui-input-inline' style='width:80%'>\
            <input type='text' lay-verify='title' autocomplete='off'class='layui-input' value='"+ data.data[i].file_name + "'>\
          </div>\
          <a href='/Common/download/getFile.file?data_id="+ data.data[i].data_id + "' download='" + data.data[i].file_name + "'>\
          <button class='layui-btn layui-bg-blue'>下载</button>\
          </a>\ ")
        }
        $("#File").append("<div class=layui-upload'>\
        <button type='button' class='layui-btn layui-btn-normal' id='test8' onclick='upload("+x+ ")'>选择文件</button>\
        <button type='button' class='layui-btn' id='test9'>开始上传</button>\
        </div>\ ")
        if (data.code == 1) {
          layer.alert("添加失败")
        }
      }
      window.layui.upload.render()
    }
  })
}
//下载文件
function DownloadFile(x) {
  var data = {
    data_id: x
  }
  console.log(data)
  $.ajax({
    url: 'http://sylardaemon.tech/Common/download/getFile.file?data_id=' + x,
    type: 'get',
    success: function (data) {
      if (data.code == 0) {
        layer.alert("下载完成")
      }
      if (data.code == 1) {
        layer.alert("添加失败")
      }
    }
  });
}
//上传文件
function upload(x){
  console.log(x)
  layui.use('upload', function () {
    var $ = layui.jquery
    , upload = layui.upload;
    upload.render({
      elem: '#test8'
      ,url: '/Common/FileUpload/upload.do'
      ,auto: false
      ,data: {
        id: x,
        type:'meeting_file'
      }
      //,multiple: true
      ,bindAction: '#test9'
      ,done: function(res){
        console.log(res)
        layer.alert("上传成功");
      }
    });
  })
}
//上传图片
function uploadHeadShot(x){
  console.log(x)
//  window.layui.upload.render();
    layui.upload.render({
      elem: '#test8'
      ,bindAction: '#test9'
      ,url: '/Common/FileUpload/upload.do'
      ,auto: true
      ,data: {
        id: x,
        type:'user_header_pic'
      }
      ,multiple: false
      // ,choose(obj){
      //   console.log(obj)
      //   obj.preview(function(index, file, result){		//在当前ID为“demo2”的区域显示图片
      //      console.log(result)
      //     });
      //  }
      ,done: function(res){
       $("#changeHeadshot").children().removeAttr('src');
       $("#changeHeadshot").children().attr('src',res.data)
        console.log(res)
      }
    });
}
//我的到勤情况
function Performance(x){
  var data = JSON.stringify([x])
  $.ajax({
    url: 'http://sylardaemon.tech/MeetingManager/Meetings/employAttendStatus.json',
    // xhrFields: {
    //       withCredentials: true
    // },
    crossDomain: true,
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    data:data,
    success: function (data) {
      if (data.code == 1) {
        layer.alert("添加失败")
      }  
      if(data.data.length==1){
        var total = data.data[0].ontime+data.data[0].late
        if (data.code == 0) {
          $("#total").append(total)
          $("#ontime").append(data.data[0].ontime)
          $("#late").append(data.data[0].late)
          $("#not_arrived").append(data.data[0].not_arrived)
          $("#ask_for_leave").append(data.data[0].ask_for_leave)
          $("#absence").append(data.data[0].absence)
          }
      }
    }
    });
}
//预定此会议室
// function OrderThisManage(x) {
//    console.log(x)
//   // this.$router.push('/index/order');
//   // window.location.href('/?#/index/order');
//     window.open('/?#/index/order?value='+x+'');
//     $("#MeetingRoom").val(x);
// }