<template>
<div class="layui-body site-demo">
<blockquote class="layui-elem-quote layui-text" >
       预定会议室
</blockquote>
<div class="layui-container">
<div class="card bg-info text-white">
    <div class="card-body">{{state}}</div>
</div>
<span>接下来可以选择</span>
</div>
<form class="layui-form" action="">
 <div class="layui-form-item">
  <div class="layui-inline">
      <label class="layui-form-label">日期选择</label>
      <div class="layui-input-block">
        <input type="text" name="date" id="date1" autocomplete="off" class="layui-input">
      </div>
  </div>
</div>
</form>
</div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      state: '已为您预定三号会议室!'
    }
  },
  mounted () {
  // window.layui.laydate.render({
  //   elem: '#date'
  // });
  }
}
</script>
<style>
.card-body{
    font-size: 30px;
}
</style>
