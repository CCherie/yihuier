<template>
  <div class="layui-body site-demo">
    <blockquote class="layui-elem-quote layui-text">会议室广告管理</blockquote>
    <div class="layui-container">
      <div id="Left">
       
      </div>
      <div id="LeftM">
       
      </div>
      <div id="RightM">
       
      </div>
      <div id="Right">
       
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
    this.LoadPicture()
  },
  methods: {
    LoadPicture: function () {
      this.$axios.post('/UserManager/SuperManager/reviewAllAdvertisementMeetingroom.json')
        .then((data) => {
           if(data.data.code==1){
              this.$router.push('/')
               layer.alert("请先登录！")
           }
          for (var i = 0; i < data.data.data.length; i++) {
              var x = JSON.stringify(data.data.data[i])
            if (i % 4 == 0) {
            if(data.data.data[i].room_advertisement==2){
              $("#Left").append(
               "<div id='img' onclick='Change("+x+")' onmouseover='Shadow(this)' onmouseout='Removeshawdow(this)' style='background-image: url("+ data.data.data[i].room_pic_url+")'> \
                 <span id='notes'>"+data.data.data[i].room_belong_company+"---"+data.data.data[i].room_name+"</span>\
               </div>\ " )
                }else{
               $("#Left").append(
               "<div id='img' onclick='Change("+x+")' onmouseover='Shadow(this)' onmouseout='Removeshawdow(this)' style='background-image: url("+ data.data.data[i].room_pic_url+");opacity:0.2;'> \
                 <span id='notes'>"+data.data.data[i].room_belong_company+"---"+data.data.data[i].room_name+"</span>\
               </div>\ " )      
                }
            } else if (i % 4 == 1) {
              if(data.data.data[i].room_advertisement==2){
              $("#LeftM").append(
               "<div id='img' onclick='Change("+x+")' onmouseover='Shadow(this)' onmouseout='Removeshawdow(this)' style='background-image: url("+ data.data.data[i].room_pic_url+")'> \
                 <span id='notes'>"+data.data.data[i].room_belong_company+"---"+data.data.data[i].room_name+"</span>\
               </div>\ " )
                }else{
               $("#LeftM").append(
               "<div id='img' onclick='Change("+x+")' onmouseover='Shadow(this)' onmouseout='Removeshawdow(this)' style='background-image: url("+ data.data.data[i].room_pic_url+") ;opacity:0.2;'> \
                 <span id='notes'>"+data.data.data[i].room_belong_company+"---"+data.data.data[i].room_name+"</span>\
               </div>\ " )      
                }
            }
            else if (i % 4 == 2) {
              if(data.data.data[i].room_advertisement==2){
              $("#RightM").append(
               "<div id='img' onclick='Change("+x+")' onmouseover='Shadow(this)' onmouseout='Removeshawdow(this)' style='background-image: url("+ data.data.data[i].room_pic_url+")'> \
                 <span id='notes'>"+data.data.data[i].room_belong_company+"---"+data.data.data[i].room_name+"</span>\
               </div>\ " )
                }else{
               $("#RightM").append(
               "<div id='img' onclick='Change("+x+")' onmouseover='Shadow(this)' onmouseout='Removeshawdow(this)' style='background-image: url("+ data.data.data[i].room_pic_url+") ;opacity:0.2;'> \
                 <span id='notes'>"+data.data.data[i].room_belong_company+"---"+data.data.data[i].room_name+"</span>\
               </div>\ " )      
                }
            } else {
             if(data.data.data[i].room_advertisement==2){
              $("#Right").append(
               "<div id='img' onclick='Change("+x+")' onmouseover='Shadow(this)' onmouseout='Removeshawdow(this)' style='background-image: url("+ data.data.data[i].room_pic_url+")'> \
                 <span id='notes'>"+data.data.data[i].room_belong_company+"---"+data.data.data[i].room_name+"</span>\
               </div>\ " )
                }else{
               $("#Right").append(
               "<div id='img' onclick='Change("+x+")' onmouseover='Shadow(this)' onmouseout='Removeshawdow(this)' style='background-image: url("+ data.data.data[i].room_pic_url+") ;opacity:0.2;'> \
                 <span id='notes'>"+data.data.data[i].room_belong_company+"---"+data.data.data[i].room_name+"</span>\
               </div>\ " )      
                }
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
#Left,
#LeftM,
#Right,
#RightM {
  width: 24%;
  float: left;
  margin: 5px;
}
#img {
  height: 175px;
  width: 100%;
  position: relative;
  /* box-shadow: 2px 2px 10px #909090; */
  margin: 10px;
  /* background-color: #909090; */
}
#notes {
  position: absolute;
  bottom: 10px;
  font-family: "LiSu";
  color: #f8f9fa;
  font-size: 20px;
}
</style>
