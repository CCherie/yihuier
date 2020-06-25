<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">用户管理</blockquote>
    <div class="layui-container">
      <div class="layui-form-item">
        <input
          class="layui-btn layui-bg-blue"
          type="button"
          value="添加部门"
          style="float:right"
          onclick="AddDepartment()"
        >
      </div>
      <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">

        <ul class="layui-tab-title" id="AddDepartment">
          <li class="layui-this">{{first}}</li>
        </ul>
        <div class="layui-tab-content" style="height: 100px;" id="AddOther">
          <div class="layui-tab-item layui-show">
            <table class="layui-table" lay-size="lg">
              <thead>
                <tr>
                  <th>部门</th>
                  <th>姓名</th>
                  <th>邮箱</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody id="Add"></tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      first: ""
    }
  },
  mounted() {
    this.AddMember()
  },
  methods: {
    AddMember: function () {
      this.$axios.post('/UserManager/Managers/getPersonalCompanyUsers.json'
      ).then((data) => {
        //添加第一个部门
        this.first = data.data.data[0].department_name;
        for (var i = 0; i < data.data.data[0].users.length; i++) {
          if (data.data.data[0].users[i].user_status == 0) {
            var status = "员工账号已注销"
          }
          else if (data.data.data[0].users[i].user_status == 1) {
            var status = "员工"
          }
          else if (data.data.data[0].users[i].user_status == 2) {
            var status = "游客"
          }
          else if (data.data.data[0].users[i].user_status == 3) {
            var status = "该用户账号已冻结"
          }
          else {
            var status = "该用户信息不全"
          }
          var information = JSON.stringify(data.data.data[0].users[i])
          var z = JSON.stringify(data.data.data[0])
          $("#Add").append(
            "<tr>\
                 <th>"+ data.data.data[0].department_name + "</th>\
                 <th>"+ data.data.data[0].users[i].user_name + "</th>\
                 <th>"+ data.data.data[0].users[i].user_email + "</th>\
                 <th>"+ status + "</th>\
                 <th><button class='layui-btn layui-bg-blue' onclick='CheckPerformance("+ information + ")'>查看到勤情况</button>\
                 <button class='layui-btn layui-bg-blue' onclick='DeleteMember("+ information + ")'>删除</button></th>\
             </tr>"
          )
        }
        $("#Add").after(
          "<input class='layui-btn layui-bg-blue' type='button' value='添加' style='margin-top:5px' onclick='MAddMember(" + z + ")'>"
        )
        //添加后面的部门
        for (var i = 1; i <= data.data.data.length; i++) {
          $("#AddDepartment").append("<li>" + data.data.data[i].department_name + "</li>");
          $("#AddOther").append(
            "<div class='layui-tab-item'>\
          <table class= 'layui-table' lay - size='lg' >\
          <thead>\
            <tr>\
              <th>部门</th>\
              <th>姓名</th>\
              <th>邮箱</th>\
              <th>状态</th>\
              <th>操作</th>\
            </tr>\
          </thead>\
          <tbody id ="+ data.data.data[i].department_id + ">\
          </tbody>\
          </table>\
          </div>\ ")
          for (var j = 0; j < data.data.data[i].users.length; j++) {
            if (data.data.data[i].users[j].user_status == 0) {
              var status = "员工账号已注销"
            }
            else if (data.data.data[i].users[j].user_status == 1) {
              var status = "员工"
            }
            else if (data.data.data[i].users[j].user_status == 2) {
              var status = "游客"
            }
            else if (data.data.data[i].users[j].user_status == 3) {
              var status = "该用户账号已冻结"
            }
            else {
              var status = "该用户信息不全"
            }
            var information = JSON.stringify(data.data.data[i].users[j])
            var z = JSON.stringify(data.data.data[i])
            $("#" + data.data.data[i].department_id + "").append(
              "<tr>\
                 <th>"+ data.data.data[i].department_name + "</th>\
                 <th>"+ data.data.data[i].users[j].user_name + "</th>\
                 <th>"+ data.data.data[i].users[j].user_email + "</th>\
                 <th>"+ status + "</th>\
                 <th><button class='layui-btn layui-bg-blue' onclick='CheckPerformance("+ information + ")'>查看到勤情况</button>\
                 <button class='layui-btn layui-bg-blue' onclick = 'DeleteMember("+ information + ")'>删除</button></th>\
             </tr>"
            )
          }
          $("#" + data.data.data[i].department_id + "").after(
            "<input class='layui-btn layui-bg-blue' type='button' value='添加' style='margin-top:5px' onclick='MAddMember(" + z + ")'>"
          )
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
