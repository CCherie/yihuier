<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">公司管理</blockquote>

    <table class="layui-table" lay-size="lg">
      <thead>
        <tr>
          <th>公司名称</th>
          <th>公司服务时间</th>
          <th>公司服务状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="AddCompany"></tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.AddCompany()
  },
  methods: {
    AddCompany() {
      this.$axios.post('/UserManager/SuperManager/reviewAllCompany.json')
        .then((data) => {
           if(data.data.code==1){
              this.$router.push('/')
               layer.alert("请先登录！")
           }
          for (var i = 0; i < data.data.data.length; i++) {
            if (data.data.data[i].company_status == 0) {
               var status = '已过期'
               $("#AddCompany").append(
              "<tr  style='color:red'>\
                <th>"+ data.data.data[i].company_name + "</th>\
                <th>"+ data.data.data[i].company_deadline + "</th>\
                <th>"+ status + "</th>\
                <th><button class='layui-btn layui-bg-blue' onclick='AddServeTime("+data.data.data[i].company_id+")'>延长服务时间</button></th>\
               </tr>\ " )
            } else {
              var status = '正常使用'
                if(data.data.data[i].advertisement_company==1){
                $("#AddCompany").append(
                 "<tr style='color:green'>\
                  <th>"+ data.data.data[i].company_name + "</th>\
                  <th>"+ data.data.data[i].company_deadline + "</th>\
                  <th>"+ status + "</th>\
                  <th><button class='layui-btn layui-bg-blue'  onclick='AddManager(" +data.data.data[i].company_id + ")'>添加管理员</button></th>\
                 </tr>\ " )
                }else{
                $("#AddCompany").append(
               "<tr>\
                <th>"+ data.data.data[i].company_name + "</th>\
                <th>"+ data.data.data[i].company_deadline + "</th>\
                <th>"+ status + "</th>\
                <th><button class='layui-btn layui-bg-blue'  onclick='AddManager(" +data.data.data[i].company_id + ")'>添加管理员</button></th>\
               </tr>\ " )
              }
            }
          }
          $("#AddCompany").append("<input class='layui-btn layui-bg-blue' type='button' value='添加' style='margin-top:5px' onclick=AddCompany()>")
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.layui-table {
  width: 90%;
  margin: 0 auto;
}
</style>
