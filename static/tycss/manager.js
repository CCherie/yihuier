//会议室详情
function MDetailOfRoom(x) {
 // console.log(x);
  var hardware = '';
  for (var i = 0; i < x.room_hardware.length; i++)
    hardware += x.room_hardware[i] + ' '
  layer.open({
    type: 1,
    skin: 'layui-layer-blue', // 样式类名
    shadeClose: true,
    // 开启遮罩关闭
    title: '会议室详情',
    btn: ['ok'],
    area: ['450px', '600px'],
    content: " <div style = 'padding:10px'>\
            <form class='layui-form layui-form-pane'>\
                 <div class='layui-form-item'>\
                    <label class='layui-form-label'>会议室名称</label>\
                    <div class='layui-input-block'>\
                      <input type='text' id='name'  autocomplete='off' class='layui-input' value="+ x.room_name + " style='display: inline; padding-left: 10px; width :85%'>\
                      <button style='display:inline' class='layui-btn layui-btn-sm layui-bg-blue' id= 'room_name'>\
                       <i class='layui-icon'>&#xe642</i>\
                      </button>\
                      </div>\
                 </div>\
                <div class='layui-form-item'>\
                    <label class='layui-form-label'>会议室容量</label>\
                    <div class='layui-input-block'>\
                      <input type='text' id='capacity' autocomplete='off' class='layui-input' value='"+ x.room_capacity + "人'  style='display: inline; padding-left: 10px; width :85%'>\
                       <button style='display:inline' class='layui-btn layui-btn-sm layui-bg-blue' id='room_capacity'>\
                        <i class='layui-icon'>&#xe642</i>\
                       </button>\
                    </div>\
                </div>\
                <div class='layui-form-item'>\
                    <label class='layui-form-label'>会议室设备</label>\
                    <div class='layui-input-block'>\
                     <input type='text' id='hardware' autocomplete='off' class='layui-input' value='"+ hardware + "' style='display: inline; padding-left: 10px; width :85%'>\
                     <button style='display:inline;' class='layui-btn layui-btn-sm layui-bg-blue'>\
                       <i class='layui-icon'>&#xe642</i>\
                      </button>\
                     </div>\
                </div>\
                <div class='layui-form-item'>\
                    <label class='layui-form-label'>门禁状态</label>\
                    <div class='layui-input-inline'>\
                     <select id ='lock' lay-verify='required' style='width:200px'>\
                      <option value='1'>开启门禁</option>\
                      <option value='0'>无门禁</option>\
                     </select>\
                    </div>\
                    <button style='display:inline;margin-left: 65px;' class='layui-btn layui-btn-sm layui-bg-blue' id='room_capacity'>\
                    <i class='layui-icon'>&#xe642</i>\
                   </button>\
                </div>\
                <div class='layui-form-item'>\
                    <label class='layui-form-label'>是否被绑定</label>\
                    <div class='layui-input-inline'>\
                    <select id='band' lay-verify='required'>\
                      <option value='1'>已绑定</option>\
                      <option value='0'>未绑定</option>\
                    </select>\
                    </div>\
                    <button style='display:inline;margin-left: 65px;' class='layui-btn layui-btn-sm layui-bg-blue' id='room_capacity'>\
                    <i class='layui-icon'>&#xe642</i>\
                    </button>\
                </div>\
                <div class='layui-form-item'>\
                   <label class='layui-form-label'>状态</label>\
                  <div class='layui-input-inline'>\
                    <select  lay-verify='required' id='states'>\
                     <option value='1'>正常使用</option>\
                     <option value='0'>待维修</option>\
                    </select>\
                  </div>\
                    <button style='display:inline;margin-left: 65px;' class='layui-btn layui-btn-sm layui-bg-blue' id='room_states'>\
                       <i class='layui-icon'>&#xe642</i>\
                   </button>\
                </div>\
                <div class='layui-form-item'>\
                 <div class='layui-input-block'>\
                   <img style=' width: 375px; height: 125px;margin-left:-90px' src="+ x.room_pic_url + ">\
                 </div>\
               </div>\
              </form>\
              </div>\ ",
    success: function () {
      var layui = window.layui;
      var laydate = layui.laydate;
      var form = layui.from;
      $('#name').attr("disabled", true)
      $('#capacity').attr("disabled", true)
      $('#hardware').attr("disabled", true)
      $("#lock").attr("disabled", "disabled");
      $("#states").attr("disabled", "disabled");
      $("#band").attr("disabled", "disabled");
      //不可编辑
      $('#lock').val(x.room_lock.ac_open_accesscontrol)  //门禁
      $('#states').val(x.room_parentstatus);    // 正常使用/待维修
      $('#band').val(x.room_if_occupy);  //是否绑定

      layui.form.render();
      $("#room_name").click(function () {
        $('#name').attr("disabled", false)   //修改名称
      })
      $("#room_capacity").click(function () {
        $('#capacity').attr("disabled", false) //修改容量
      })
      $("#room_states").click(function () {
        $('#states').removeAttr("disabled") //修改状态
        layui.form.render();
      })
    },
    yes: function (index, layero) {
      //修改会议名称
      if ($("#name").is(":disabled") == false) {
        var data = {
          room_id: x.room_id,
          room_name: $("#name").val()
        }
    //    console.log(data)
        $.ajax({
          url: 'http://sylardaemon.tech/UserManager/Managers/updateRoomName.do',
          type: 'post',
          dataType: 'json',
          data: data,
          success: function (data) {
         //   console.log(data)
            if (data.code == 0) {
           //   console.log("修改名称成功")
            }
            if (data.code == 1) {
              layer.alert("该会议室已被注销")
            }
          }
        });
      }
      //修改会议容量
      if ($("#capacity").is(":disabled") == false) {
        var data = {
          room_id: x.room_id,
          room_name: $("#capacity").val()
        }
      //  console.log(data)
        $.ajax({
          url: 'http://sylardaemon.tech/UserManager/Managers/updateRoomName.do',
          type: 'post',
          dataType: 'json',
          data: data,
          success: function (data) {
           // console.log(data)
            if (data.code == 0) {
            //  console.log("修改会议室容量成功")
            }
            if (data.code == 1) {
              layer.alert("该会议室已被注销")
            }
          }
        });
      }
      if ($("#states").is(":disabled") == false) {
        var data = {
          room_id: x.room_id,
          room_parentstatus: $('#states').val()
        }
        $.ajax({
          url: 'http://sylardaemon.tech/UserManager/Managers/updateRoomParentstatus.do',
          type: 'post',
          dataType: 'json',
          data: data,
          success: function (data) {
            if (data.code == 0) {
             // console.log("修改会议室状态成功")
            }
            if (data.code == 1) {
              layer.alert("该会议室已被注销")
            }
          }
        });
      }
      parent.layer.close(index);		//关闭窗口
    }
  })
}
//改变会议室可用与不可用状态
function MDeleteRoom(x) {
  console.log(x);
  if (x.room_status == 0)
    var y = 1
  else
    var y = 0
  var data = {
    room_id: x.room_id,
    room_status: y
  }
  layer.confirm('你确定要执行此操作吗', function (index) {
    $.ajax({
      url: 'http://sylardaemon.tech/UserManager/Managers/updateRoomStatus.do',
      type: 'post',
      dataType: 'json',
      data: data,
      success: function (data) {
        if (data.code == 0) {
          window.location.reload();
        }
        if (data.code == 1) {
          layer.alert("该会议室已被注销")
        }
      }
    });
    layer.close(index);
  });
}
//注销员工账号
function DeleteMember(x) {
  console.log(x)
  var data = {
    user_id: x.user_id
  }
  layer.confirm('你确定要删除吗', function (index) {
    $.ajax({
      url: 'http://sylardaemon.tech/UserManager/Managers/deleteUser.do',
      type: 'post',
      dataType: 'json',
      data: data,
      success: function (data) {
        console.log(data)
        if (data.code == 0) {
          location.reload();
        }
        if (data.code == 1) {
          layer.alert("该会议室已被注销")
        }
      }
    });
    layer.close(index);
  });
}
//添加新员工账号
function MAddMember(x) {
  var data = {
    department_id: x.department_id
  }
  $.ajax({
    url: 'http://sylardaemon.tech/UserManager/Managers/addAccountInfomation.json',
    type: 'post',
    dataType: 'json',
    data: data,
    success: function (data) {
      console.log(data)
      if (data.code == 0) {
        layer.open({
          type: 1,
          skin: 'layui-layer-blue', // 样式类名
          shadeClose: true,
          // 开启遮罩关闭
          title: '添加新用户',
          btn: ['ok'],
          area: ['450px', '300px'],
          content: "<form class='layui-form layui-form-pane'>\
                 <div class='layui-form-item' style='margin:10px'>\
                    <label class='layui-form-label'>用户姓名</label>\
                    <div class='layui-input-block'>\
                      <input type='text' id='name'  autocomplete='off' class='layui-input' placeholder='填写用户姓名并提交即可'>\
                    </div>\
                 </div>\
                 <div class='layui-form-item' style='margin:10px'>\
                    <label class='layui-form-label'>用户账号</label>\
                    <div class='layui-input-block'>\
                      <input type='text' id='account'  autocomplete='off' class='layui-input'>\
                      </div>\
                 </div>\
                 <div class='layui-form-item' style='margin:10px'>\
                    <label class='layui-form-label'>用户密码</label>\
                    <div class='layui-input-block'>\
                      <input type='text' id='password'  autocomplete='off' class='layui-input'>\
                      </div>\
                 </div>\
              </form>\ ",
          success: function () {
            var layui = window.layui;
            var laydate = layui.laydate;
            var form = layui.from;
            $("#account").val(data.data)
            $("#password").val(data.data)
            $('#account').attr("disabled", true)
            $('#password').attr("disabled", true)
          },
          yes: function (index, layero) {
            var data = {
              department_id: x.department_id,
              user_name: $("#name").val(),
              user_account: $("#account").val()
            }
            console.log(data)
            $.ajax({
              url: 'http://sylardaemon.tech/UserManager/Managers/addUser.do',
              type: 'post',
              dataType: 'json',
              data: data,
              success: function (data) {
                console.log(data)
                if (data.code == 0) {
                  location.reload();
                }
                if (data.code == 1) {
                  layer.alert("添加失败")
                }
              }
            });
            layer.close(index);
          }
        })
      }
      if (data.code == 1) {
        layer.alert("请求失败")
      }
    }
  });
}
//添加新部门
function AddDepartment() {
  layer.open({
    type: 1,
    skin: 'layui-layer-blue', // 样式类名
    shadeClose: true,
    // 开启遮罩关闭
    title: '添加新部门',
    btn: ['ok'],
    area: ['250px', '170px'],
    content: " <div style = 'padding:10px'>\
      <form class= 'layui-form'>\
      <div class='layui-form-item'>\
          <div class='layui-input-inline'>\
            <input type='text' lay-verify='title' autocomplete='off' placeholder='请输入部门名称' class='layui-input' id='newname'>\
          </div>\
      </div>\
      </form>\
      </div>\ ",
    yes: function () {
      if ($("#newname").val() == "") {
        layer.close(index);
      } else {
        var data = {
          department_name: $("#newname").val()
        }
        $.ajax({
          url: 'http://sylardaemon.tech/UserManager/Managers/addDepartment.do',
          type: 'post',
          dataType: 'json',
          data: data,
          success: function (data) {
            if (data.code == 0) {
              layer.alert("添加成功", function () {
                location.reload();
              })
            }
            if (data.code == 1) {
              layer.alert("添加失败")
            }
          }
        });
      }
    }
  })
}
//管理员发送消息
function MPostMeaaage(x) {
  console.log(x)
  $.ajax({
    url: 'http://sylardaemon.tech/UserManager/Managers/sendMessage.do',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    data: x,
    success: function (data) {
      if (data.code == 0) {
        layer.alert("发送成功", function () {
          location.reload();
        })
      }
      if (data.code == 1) {
        layer.alert("添加失败")
      }
    }
  });
}
//查看到勤情况
function CheckPerformance(x) {
  layer.open({
    type: 1,
    skin: 'layui-layer-blue', // 样式类名
    shadeClose: true,
    // 开启遮罩关闭
    title: '查看用户到勤情况',
    btn: ['ok'],
    area: ['280px', '520px'],
    content: " <div style = 'padding:10px'>\
    <form class= 'layui-form'>\
    <div class='layui-form-item'>\
       <div class= 'layui-inline' >\
         <label style='width:100px ; margin-right:10px' class='layui-form-label' id='total'>总参会次数</label>\
       </div >\
    </div>\
    <div class='layui-form-item'>\
     <div class= 'layui-inline' >\
      <label style='width:100px; margin-right:10px' class='layui-form-label' id='ontime'>准时次数</label>\
    </div >\
     </div>\
     <div class='layui-form-item'>\
     <div class= 'layui-inline' >\
      <label style='width:100px;margin-right:10px' class='layui-form-label' id='late'>迟到次数</label>\
    </div >\
     </div>\
    <div class='layui-form-item'>\
   <div class= 'layui-inline' >\
     <label style='width:100px;margin-right:10px' class='layui-form-label' id='ask_for_leave'>请假次数</label>\
   </div >\
   </div>\
    <div class='layui-form-item'>\
     <div class= 'layui-inline' >\
       <label style='width:100px;margin-right:10px' class='layui-form-label' id='absence'>缺勤次数</label>\
     </div >\
    </div>\
    <div class='layui-form-item'>\
     <div class= 'layui-inline' >\
       <label style='width:100px;margin-right:10px' class='layui-form-label' id='not_arrived'>待参加</label>\
     </div >\
    </div>\
   </form >\
  </div >\ ",
   success:function(){
    var data = JSON.stringify([x.user_id])
    console.log(data)
    $.ajax({
      url: 'http://sylardaemon.tech/MeetingManager/Meetings/employAttendStatus.json',
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      data:data,
      success: function (data) {
        var total = data.data[0].ontime+data.data[0].late
        if (data.code == 0) {
          $("#total").after("<span style='font-size:35px;color:red;'>"+total+"</span>")
          $("#ontime").after("<span style='font-size:35px'>"+data.data[0].ontime+"</span>")
          $("#late").after("<span style='font-size:35px;color:red;'>"+data.data[0].late+"</span>")
          $("#not_arrived").after("<span style='font-size:35px'>"+data.data[0].not_arrived+"</span>") 
          $("#ask_for_leave").after("<span style='font-size:35px'>"+data.data[0].ask_for_leave+"</span>")  
          $("#absence").after("<span style='font-size:35px;color:red;'>"+data.data[0].absence+"</span>")
          }
         if (data.code == 1) {
          layer.alert("添加失败")
        }  
      }
      });
    }
  })
}
//同意新添加人员
function AgreeAddMember(x){
  var data = {
    user_id:x.user_id,
    meeting_id:x.meeting_id,
    status:1
  }
  $.ajax({
    url: 'http://sylardaemon.tech/UserManager/Managers/checkApply.do',
    type: 'post',
    dataType: 'json',
    data: data,
    success: function (data) {
      if (data.code == 0) {
        layer.alert("添加成功", function () {
          location.reload();
        })
      }
      if (data.code == 1) {
        layer.alert("添加失败")
      }
    }
  });
}
//拒绝新添加人员
function RefuseAddMember(x){
  var data = {
    user_id:x.user_id,
    meeting_id:x.meeting_id,
    status:3
  }
  layer.alert("您确定要拒绝此次申请吗",function(){
    $.ajax({
      url: 'http://sylardaemon.tech/UserManager/Managers/checkApply.do',
      type: 'post',
      dataType: 'json',
      data: data,
      contentType: 'application/json',
      processData: false,
      success: function (data) {
        if (data.code == 0) {
          layer.alert("操作成功", function () {
            location.reload();
          })
        }
        if (data.code == 1) {
          layer.alert("添加失败")
        }
      }
    });
  })
}
//审核会议申请
function CheckMeeting(x){
  var thisOne=JSON.stringify(x)
  var data = JSON.stringify({
    em_num:x.em_number,
    hardware:x.hardware
  })
  $.ajax({
    url: 'http://sylardaemon.tech/MeetingManager/Meetings/gearAndSizeFitRoom.json',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    data: data,
    success: function (data) {
      if (data.code == 0) {
       var time = x.meeting_time.slice(0,10)
       if(time == ""){
         var mydate = new Date();
         var year = mydate.getFullYear()
         var month = mydate.getMonth()+1
         var day = mydate.getDate()+1
         time = year+"-"+month+"-"+day
       }
       var m = JSON.stringify(time)
        layer.open({
          type: 1,
          skin: 'layui-layer-blue', // 样式类名
          shadeClose: true,
          // 开启遮罩关闭
          title: '会议室详情',
          btn: ['ok'],
          area: ['900px', '500px'],
          content: "<div style='margin:10px'>\
          <p>"+time+"</p>\
          <table class='layui-table' lay-size='lg' id='WaitForCheck'>\
          <thead>\
            <tr id='LocationList'>\
              <th style='background-color:#e6e6e6;'></th>\
            </tr>\
          </thead>\
          <tbody>\
            <tr id='EIGHT'>\
              <th>8:00~10:00</th>\
            </tr>\
            <tr id='TEN'>\
              <th>10:00~12:00</th>\
            </tr>\
            <tr id='TWELVE'>\
              <th>14:00~16:00</th>\
            </tr>\
            <tr id='FOURTEEN'>\
              <th>16:00~18:00</th>\
            </tr>\
          </tbody>\
          </table>\
          <button class='layui-btn layui-bg-blue' style='margin:10px' onclick='RefuseThis("+thisOne+")'>拒绝</button>\
          </div>\ ",
          success:function(){
            var z=new Object
            var room_time_request = []
            for(var i=0;i<data.data.length;i++){
              $("#LocationList").append("<th>"+data.data[i].room_name+"</tn>")
               room_time_request[i]={
               room_id:data.data[i].room_id,
		           startDay:time
              }
            }
            z={room_time_request} 
            $.ajax({
              url: 'http://sylardaemon.tech/MeetingManager/Meetings/roomUsingStatus.json',
              type: 'post',
              dataType: 'json',
              data:JSON.stringify(z),
              contentType: 'application/json',
              processData: false,
              success: function (data) {
                if (data.code == 0) {
                 for(var i=0;i<data.data.length;i++){
                   if(data.data[i].timeCheck["8:00"]==true){
                      $("#EIGHT").append("<th><button class='layui-btn layui-btn-xs layui-bg-blue' onclick='CheckThis("+thisOne+",8,"+data.data[i].room_id+","+m+")'>选中</button></th>")
                   }else{
                      $("#EIGHT").append("<th style='background-color:#e75555;'></th>")
                   }
                   if(data.data[i].timeCheck["10:00"]==true){
                    $("#TEN").append("<th><button class='layui-btn layui-btn-xs layui-bg-blue' onclick='CheckThis("+thisOne+",10,"+data.data[i].room_id+","+m+")'>选中</button></th>")
                   }else{
                    $("#TEN").append("<th style='background-color:#e75555;'></th>")
                   }
                   if(data.data[i].timeCheck["14:00"]==true){
                    $("#TWELVE").append("<th><button class='layui-btn layui-btn-xs layui-bg-blue' onclick='CheckThis("+thisOne+",14,"+data.data[i].room_id+","+m+")'>选中</button></th>")
                   }else{
                    $("#TWELVE").append("<th style='background-color:#e75555;'></th>")
                   }
                   if(data.data[i].timeCheck["16:00"]==true){
                    $("#FOURTEEN").append("<th><button class='layui-btn layui-btn-xs layui-bg-blue' onclick='CheckThis("+thisOne+",16,"+data.data[i].room_id+","+m+")'>选中</button></th>")
                   }else{
                    $("#FOURTEEN").append("<th style='background-color:#e75555;'></th>")
                   }
                 }
                }
                if (data.code == 1) {
                  layer.alert("添加失败")
                }
              }
            });
          }
        })
      }
      if (data.code == 1) {
     //   layer.alert("添加失败")
      }
    }
  });
}
//选中
function CheckThis(x,y,z,m){
  var time = m
  if(y==8){
    time+=" 8:00:00"
  }else if(y==10){
    time+=" 10:00:00"
  }else if(y==14){
    time+=" 14:00:00"
  }else{
    time+=" 16:00:00"
  }
  var list = ''
  for (var i=0;i<x.em_list.length;i++){
    list+=x.em_list[i]
    if(i<x.em_list.length-1)
    list+=','
  }
   var data = {
    app_meeting_id:x.app_meeting_id,
    app_name:x.app_name,
    app_description:x.app_description,
    meeting_time:time,
    during_time:x.during_time,
    location:z,
    em_number:x.em_number,
    em_list:list,
    status:1,
    applicant:x.applicant,
    hardware_applicant:x.hardware,
    isIntelligence_allocation:x.isIntelligence_allocation,
    other:x.other
   }
   $.ajax({
    url: 'http://sylardaemon.tech/MeetingManager/Meetings/auditMeetingApply.do',
    type: 'post',
    dataType: 'json',
    data: JSON.stringify(data),
    contentType: 'application/json',
    processData: false,
    success: function (data) {
      if (data.code == 0) {
         layer.alert("分配成功",function(){
           window.layui.layer.close()
           location.reload();
         })
      }
      if (data.code == 1) {
     //   layer.alert("操作失败")
      }
    }
  });
}
//拒绝
function RefuseThis(x){
  var list = ''
  for (var i=0;i<x.em_list.length;i++){
    list+=x.em_list[i]
    if(i<x.em_list.length-1)
    list+=','
  }
  var data = {
    app_meeting_id:x.app_meeting_id,
    app_name:x.app_name,
    app_description:x.app_description,
    meeting_time:x.meeting_time,
    during_time:x.during_time,
    location:x.location,
    em_number:x.em_number,
    em_list:list,
    status:3,
    applicant:x.applicant,
    hardware_applicant:x.hardware,
    isIntelligence_allocation:x.isIntelligence_allocation,
    other:x.other
   }
   layer.alert("您确定拒绝此次请求吗",function(){
    $.ajax({
      url: 'http://sylardaemon.tech/MeetingManager/Meetings/auditMeetingApply.do',
      type: 'post',
      dataType: 'json',
      data: JSON.stringify(data),
      contentType: 'application/json',
      processData: false,
      success: function (data) {
        if (data.code == 0) {
           layer.alert("操作成功",function(){
             location.reload();
           })
        }
        if (data.code == 1) {
      //    layer.alert("操作失败,请稍后再试")
        }
      }
    });
   })
}