<!-- MainFooter Part -->

<template>
    <!-- 页脚开始 -->
    <footer class="bg-light py-3 mt-2" style="position:relative;bottom:0;width:100%;">
        <div class="container d-flex justify-content-between">
            <div>© Copyright 2019 搬砖董事局</div>
            <div>
                <a id="qq" href="#" data-toggle="popover" data-placement="top">
                    <i class="fab fa-qq fa-2x"></i>
                </a>
                <a id="weixin" href="#" data-toggle="popover" data-placement="top">
                    <i class="fab fa-weixin fa-2x ml-3"></i>
                </a>
                <a id="andriod" href="#" data-toggle="popover" data-placement="top">
                    <i class="fab fa-android fa-2x ml-3" data-toggle="tooltip" title></i>
                </a>
            </div>
            <div>一会儿智能会议室管理系统</div>
        </div>
    </footer>
    <!-- 页脚结束 -->
</template>

<script type="text/javascript">
// $(document).ready(function() {
//     $('[data-toggle="tooltip"]').tooltip();
// });
// $("#weixin").popover({
//     trigger: "hover",
//     html: true,
//     content: "<strong>扫一扫：微信公众号</strong><img src='../img//QR.png'>"
// });
// $("#qq").popover({
//     trigger: "hover",
//     html: true,
//     content:
//         "<strong>扫一扫：添加搬砖董事局QQ</strong><img src='../img//QR.png'>"
// });
// $("#andriod").popover({
//     trigger: "hover",
//     html: true,
//     content: "<strong>扫一扫：安卓端v1.0下载</strong><img src='../img//QR.png'>"
// });

export default {
    name: "MainFooter",
    data() {
        return {};
    }
};
</script>



<style type="text/css" scoped>
</style>