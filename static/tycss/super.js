//添加管理员
function AddManager(x){
    var data = {
        company_id:x
      }
    console.log(data)
      $.ajax({
        url: '/UserManager/SuperManager/beforeAddManager.json',
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
                          <input type='text' id='name'  autocomplete='off' class='layui-input' placeholder='填写管理员姓名并提交即可'>\
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
                  company_id :x,
                  manager_username: $("#name").val(),
                  manager_account: $("#account").val()
                }
                console.log(data)
                $.ajax({
                  url: '/UserManager/SuperManager/addManager.do',
                  type: 'post',
                  dataType: 'json',
                  data: data,
                  success: function (data) {
                    console.log(data)
                    if (data.code == 0) {
                      layer.alert("添加成功，请前往查看管理员页面核对")
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
//添加公司
function AddCompany(){
    layer.open({
        type: 1,
        skin: 'layui-layer-blue', // 样式类名
        shadeClose: true,
        // 开启遮罩关闭
        title: '添加新用户',
        btn: ['ok'],
        area: ['450px', '400px'],
        content: 
        "<form class='layui-form layui-form-pane'>\
               <div class='layui-form-item' style='margin:10px'>\
                  <label class='layui-form-label'>公司名称</label>\
                  <div class='layui-input-block'>\
                    <input type='text' id='name'  autocomplete='off' class='layui-input' placeholder='请填写公司完整名称'>\
                  </div>\
               </div>\
               <div class='layui-form-item' style='margin:10px'>\
                  <label class='layui-form-label'>截止日期</label>\
                  <div class='layui-input-block'>\
                  <input type='text' id='date' autocomplete='off' class='layui-input'>\
                  </div>\
               </div>\
               <div class='layui-form-item' style='margin:10px'>\
                 <label class='layui-form-label'>公司性质</label>\
                 <div class='layui-input-inline'>\
                   <select id ='status' lay-verify='required' style='width:200px'>\
                   <option value='1'>普通公司</option>\
                  <option value='0'>可外租会议室</option>\
                  </select>\
               </div>\
        </form>\ ",
        success: function () {
          var layui = window.layui;
          var laydate = layui.laydate;
          var form = layui.from;
          layui.form.render();
          layui.laydate.render({
            elem: '#date', //渲染日历
            type: 'datetime',
            min: 0,
            btns: ['confirm'],
            calendar: true,
            theme: "#1E9FFF"
          });
        },
        yes: function (index, layero) {
            var data = {
                company_name : $("#name").val(),
                company_deadline :$("#date").val(),
                advertisement_company :$("#status").val()
              }
              console.log(data)
              $.ajax({
                url: '/UserManager/SuperManager/addServerCompany.do',
                type: 'post',
                dataType: 'json',
                data: data,
                success: function (data) {
                  console.log(data)
                  if (data.code == 0) {
                    layer.alert("添加成功!")
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
//选择广告
function Change(x){
    var y =(x.room_advertisement==2?1:2);
    var data={
        room_id:x.room_id,
        room_advertisement:y
    }
    if(x.room_advertisement==1)
    var z=-1
    else
    var z=1
    console.log(data)
    $.ajax({
      url: '/UserManager/SuperManager/chooseAdvertisementRoom.do',
      type: 'post',
      dataType: 'json',
      data: data,
      success: function (data) {
        console.log(data)
        var need = 4-data.data+z
        if (data.code == 0) {
             if(need==0)
                layer.alert("广告位已满！",function(){
                    window.location.reload();
                })  
             else
                layer.alert("您还可以选择"+need+"个广告位",function(){
                    window.location.reload();
                })
        }
        if (data.code == 1) {
          layer.alert("广告位已满！",function(){
            window.location.reload();
          })
        }
      }
    });
}
//阴影
function Shadow(x){
    x.style.boxShadow = "4px 4px 25px #909090";
}
function Removeshawdow(x){
    x.style.boxShadow = "";
}
//延长服务时间
function AddServeTime(x){
    layer.open({
        type: 1,
        skin: 'layui-layer-blue', // 样式类名
        shadeClose: true,
        // 开启遮罩关闭
        title: '修改服务截止时间',
        btn: ['ok'],
        area: ['450px', '200px'],
        content: 
        "<form class='layui-form layui-form-pane'>\
               <div class='layui-form-item' style='margin:10px'>\
                  <label class='layui-form-label'>重新选择时间</label>\
                  <div class='layui-input-block'>\
                  <input type='text' id='date' autocomplete='off' class='layui-input'>\
                  </div>\
               </div>\
        </form>\ ",
        success: function () {
          var layui = window.layui;
          var laydate = layui.laydate;
          var form = layui.from;
          layui.form.render();
          layui.laydate.render({
            elem: '#date', //渲染日历
            type: 'datetime',
            min: 0,
            btns: ['confirm'],
            calendar: true,
            theme: "#1E9FFF"
          });
        },
        yes:function(index, layero){
            var data= {
                company_deadline: $("#date").val(),
                company_id :x
            }
            console.log(data)
            $.ajax({
                url: '/UserManager/SuperManager/setCompanyServerTime.do',
                type: 'post',
                dataType: 'json',
                data: data,
                success: function (data) {
                  console.log(data)
                  if (data.code == 0) {
                  layer.alert("添加成功",function(){
                     window.location.reload();
                  })
                  }
                  if (data.code == 1) {
                    layer.alert("添加失败，请稍后重试")
                  }
                }
              });
            layer.close(index);
        }
    })
}
//撤销管理员
function DeleteManager(x){
  console.log(x)
  layer.alert("你确定要撤销这位管理员吗",function(){
    var data={
      manager_id:x,
      manager_status:0
     }
    $.ajax({
      url: '/UserManager/SuperManager/setManagerStatus.do',
      type: 'post',
      dataType: 'json',
      data: data,
      success: function (data) {
        console.log(data)
        if (data.code == 0) {
        layer.alert("操作成功",function(){
          window.location.reload(); 
        })
        }
        if (data.code == 1) {
        layer.alert("操作失败，请稍后重试")
        }
      }
    });
  })
}