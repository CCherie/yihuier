<template>
<div class="layui-body site-demo">
<blockquote class="layui-elem-quote layui-text" >
       管理员管理
</blockquote>

<table class="layui-table" lay-size="lg">
  <thead>
    <tr>
      <th>管理员账户</th>
      <th>姓名</th>
      <th>所在公司</th>
      <th>公司性质</th>
      <th>管理员类型</th>
      <th>服务截至时间</th>
      <th>服务状态</th>
      <th>管理员状态</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody id="AddManager">

  </tbody>
</table>
</div>
</template>
<script>
export default {
    data (){
        return{
        }
    },
    mounted(){
        this.AddManager()
    },
    methods :{
      AddManager(){
      this.$axios.post('/UserManager/SuperManager/reviewAllManagers.json')
        .then((data) => {
        if(data.data.code==1){
          this.$router.push('/')
          layer.alert("请先登录！")
        }
         for(var i=0;i<data.data.data.length;i++){
           if(data.data.data[i].manager_company_property==1){
             var property = '可对外出租会议室'
           }else{
             var property = '普通公司'
           }
           if(data.data.data[i].manager_type==1){
             var manager_type='智能AI管理员'
           }else{
             var manager_type='管理员'
           }
           if(data.data.data[i].manager_status==1){
             var manager = '正常'
           }else{
             var manager = '已注销'
           }
           if(data.data.data[i].company_server_status ==1){
             var status='正常使用'
           }else{
             var status='服务已过期'
             var manager = '无法使用'
           }
           if(data.data.data[i].company_server_status ==0)
           {
                $("#AddManager").append(
                "<tr style='color:red'>\
                 <th>"+data.data.data[i].manager_account+"</th>\
                 <th>"+data.data.data[i].manager_username+"</th>\
                 <th>"+data.data.data[i].manager_belongs_company+"</th>\
                 <th>"+property+"</th>\
                 <th>"+manager_type+"</th>\
                 <th>"+data.data.data[i].company_server_time+"</th>\
                 <th>"+status+"</th>\
                 <th>"+manager+"</th>\
                 <th><button class='layui-btn layui-btn-sm layui-bg-blue' onclick='DeleteManager("+data.data.data[i].manager_id+")'>撤销管理员</button></th>\
                </tr> "
             )
           }else{
              if(data.data.data[i].manager_company_property==1){
              $("#AddManager").append(
                "<tr style='color:green'>\
                 <th>"+data.data.data[i].manager_account+"</th>\
                 <th>"+data.data.data[i].manager_username+"</th>\
                 <th>"+data.data.data[i].manager_belongs_company+"</th>\
                 <th>"+property+"</th>\
                 <th>"+manager_type+"</th>\
                 <th>"+data.data.data[i].company_server_time+"</th>\
                 <th>"+status+"</th>\
                 <th>"+manager+"</th>\
                 <th><button class='layui-btn layui-btn-sm layui-bg-blue' onclick='DeleteManager("+data.data.data[i].manager_id+")'>撤销管理员</button></th>\
                </tr> ")
               }else{
              $("#AddManager").append(
                "<tr>\
                 <th>"+data.data.data[i].manager_account+"</th>\
                 <th>"+data.data.data[i].manager_username+"</th>\
                 <th>"+data.data.data[i].manager_belongs_company+"</th>\
                 <th>"+property+"</th>\
                 <th>"+manager_type+"</th>\
                 <th>"+data.data.data[i].company_server_time+"</th>\
                 <th>"+status+"</th>\
                 <th>"+manager+"</th>\
                 <th><button class='layui-btn layui-btn-sm layui-bg-blue' onclick='DeleteManager("+data.data.data[i].manager_id+")'>撤销管理员</button></th>\
                </tr> "
             )}
           }
           
         }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.layui-table{
       width: 90%;
       margin: 0 auto;
}
</style>
