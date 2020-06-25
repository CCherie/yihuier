<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">预定会议室</blockquote>
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <!-- 会议室地点 -->
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">会议室地点</label>
            <div class="layui-input-block">
              <input
                type="text"
                autocomplete="off"
                v-model="name"
                placeholder="请输入标题"
                class="layui-input"
              >
            </div>
          </div>
        </div>
        <!-- 会议室容量 -->
        <div class="layui-form-item">
          <div class="layui-inline-block">
            <label class="layui-form-label">会议室容量</label>
            <div class="layui-input-inline">
              <input
                type="text"
                v-model="capacity"
                autocomplete="off"
                placeholder="请输入数字"
                class="layui-input"
              >
            </div>
            <span style="line-height:38px">人</span>
          </div>
        </div>
        <!-- 会议室具有硬件 -->
        <div class="layui-form-item">
          <label class="layui-form-label">会议室硬件</label>
          <div class="layui-input-block">
            <input type="checkbox" name="need" value="白板" title="白板">
            <input type="checkbox" name="need" value="投影仪" title="投影仪" checked>
            <input type="checkbox" name="need" value="桌牌" title="桌牌">
          </div>
        </div>
        <!-- 提交按钮 -->
        <div class="layui-form-item">
          <input class="layui-btn layui-bg-blue" @click="Submit" type="button" value="提交">
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
      name: '',
      capacity: '',
      picture: ''
    }
  },
  mounted() {
    this.Detail()
  },
  methods: {
    // 渲染form表单
    Detail: function () {
      window.layui.form.render();
    },
    Submit: function () {
      var obj = $("input[name='need']");
      var hardware = ''
      for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
          if (i != obj.length - 1) {
            hardware += obj[i].value + ','
          }
          else {
            hardware += obj[i].value
          }
        }
      }
      var data = {
        room_name: this.name,
        room_capacity: this.capacity,
        room_hardware: hardware,
      }
      this.$axios.post('/UserManager/Managers/addMeetingRoom.do',qs.stringify(data)
      ).then((data) => {
        layer.alert("添加成功，请前往会议室管理查看")
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
