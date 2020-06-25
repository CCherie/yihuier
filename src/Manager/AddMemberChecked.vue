<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">审核会议申请</blockquote>
    <div class="layui-container">
      <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title" id="AddDepartment">
          <li class="layui-this">待审核</li>
          <li>已过期</li>
        </ul>
        <div class="layui-tab-content" style="height: 100px;">
          <div class="layui-tab-item layui-show">
            <table class="layui-table" lay-size="lg">
              <thead>
                <tr>
                  <th>会议标题</th>
                  <th>会议描述</th>
                  <th>会议室</th>
                  <th>新增人员</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody id="Add"></tbody>
            </table>
          </div>
          <div class="layui-tab-item">
            <table class="layui-table" lay-size="lg">
              <thead>
                <tr>
                  <th>会议标题</th>
                  <th>会议描述</th>
                  <th>会议室</th>
                  <th>新增人员</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody id="Pass"></tbody>
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
    }
  },
  mounted() {
    this.render()
    this.Show()
  },
  methods: {
    render(){
       window.layui.table.render();
    },
    Show: function () {
      this.$axios.post('/UserManager/Managers/allApply.json'
      ).then(function (data) {
        for (var i = 0; i < data.data.data.length; i++) {
            var information = JSON.stringify(data.data.data[i])
          if (data.data.data[i].meeting_status == 1) {
            $("#Add").append("<tr style='background-color:pink'>\
                 <th>"+ data.data.data[i].meeting_name + "</th>\
                 <th>"+ data.data.data[i].description + "</th>\
                 <th>"+ data.data.data[i].location + "人</th>\
                 <th>"+ data.data.data[i].user_name + "</th>\
                 <th><button class='layui-btn layui-bg-blue' onclick='AgreeAddMember("+information+")'>同意</button>\
                 <button class='layui-btn layui-bg-red' onclick='RefuseAddMember("+information+")'>拒绝</button></th>\
                </tr>\ ")
          } else if (data.data.data[i].meeting_status == 0) {
            $("#Add").append("<tr>\
                 <th>"+ data.data.data[i].meeting_name + "</th>\
                 <th>"+ data.data.data[i].description + "</th>\
                 <th>"+ data.data.data[i].location +"</th>\
                 <th>"+ data.data.data[i].user_name + "</th>\
                 <th><button class='layui-btn layui-bg-blue' onclick='AgreeAddMember("+information+")'>同意</button>\
                 <button class='layui-btn layui-bg-red' onclick='RefuseAddMember("+information+")'>拒绝</button></th>\
                </tr>\ ")
          } else{
               $("#Pass").append("<tr>\
                 <th>"+ data.data.data[i].meeting_name + "</th>\
                 <th>"+ data.data.data[i].description + "</th>\
                 <th>"+ data.data.data[i].location + "人</th>\
                 <th>"+ data.data.data[i].user_name + "</th>\
                 <th>会议已开始</th>\
                </tr>\ ")
          }
        }
      }).catch(function (error) {
        console.log(error);
      })
    }
  }
}
</script>

 