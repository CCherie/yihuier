<template>
    <div>
        <!-- 轮播图开始 -->
        <div class="container1 mt－1">
            <div id="demo" class="carousel slide" data-ride="carousel">
                <!-- 指示符 -->
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                </ul>

                <!-- 轮播内容 -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../static/img/photo.png">
                        <div class="carousel-caption">
                            <h3>YiHuiEr一会儿智能会议室</h3>
                            <p>满足您对会议室管理的一切要求</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="bg-cover" src="../../static/img/photo2.png">
                        <div class="carousel-caption">
                            <h3>远程培训系统</h3>
                            <p>海量数据及时处理 / 简单易用 / 数据快速共享 / 成本适中</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="bg-cover" src="../../static/img/photo3.png">
                        <div class="carousel-caption">
                            <h3>丰富的会议管理功能</h3>
                            <p>多级会议管理权限、会议预定、会议录制、会议投票、会议巡场、会议文件等全方位智能会议系统</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="bg-cover" src="../../static/img/photo4.png">
                        <div class="carousel-caption">
                            <h3>专业团队竭诚为您服务</h3>
                            <p>为您的会议保驾护航</p>
                        </div>
                    </div>
                </div>

                <!-- 左右切换按钮 -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
        <!-- 轮播图结束 -->
        <!-- 三个介绍框开始 -->
        <section class="three-section py-4">
            <div class="container-three mt-3">
                <div class="row ml-5 mr-5">
                    <div class="col-md-4 text-white">
                        <div>
                            <i class="fas fa-coffee fa-5x" style="color: white"></i>
                        </div>
                        <h3>方便，快捷</h3>
                        <p>所有的操作都在一触之间所有的操作都在一触之间所有的操作都在一触之间</p>
                    </div>
                    <div class="col-md-4 text-white">
                        <div>
                            <i class="fas fa-shield-alt fa-5x" style="color: white"></i>
                        </div>
                        <h3>安全，保护</h3>
                        <p>会议资料管理安全，隐私会议资料管理安全，隐私会议资料管理安全，隐私会议资料管理安全</p>
                    </div>
                    <div class="col-md-4 text-white">
                        <div>
                            <i
                                class="fas fa-american-sign-language-interpreting fa-5x"
                                style="color: white"
                            ></i>
                        </div>
                        <h3>稳定，保障</h3>
                        <p>提供长期稳定售后保障服务</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- 三个介绍框结束 -->
        <!-- 细节介绍框1开始 -->
        <section class="container-fluid py-5 bg-light text-white" style="position:relative">
            <div class="row">
                <div
                    class="col-md-5 bg-cover"
                    style="position: absolute;top: 0;bottom: 0;
			background-image: url(../../static/img/photo5.png)"
                ></div>
            </div>
            <div class="detail-container">
                <div class="row justify-content-end text-md-dark">
                    <div class="col-md-7">
                        <h3 class="display-4 ml-3">智能、科技</h3>
                        <p
                            class="m-3 mr-4"
                            style="font-size:17px"
                        >YiHuiEr智能会议室管理系统支持支持电脑浏览器、移动端、微信小程序、手机浏览器进行预约及管理操作，会议室预约系统平台实现会议室预定申请, 会议室预定审批，会议室状态查询,会议邮件通知，会议室资源管理，会议信息发布引导,会议信息显示等功能</p>
                        <!-- <button class="btn btn-outline-info ml-3">查看更多</button> -->
                        <div class="row mt-3 ml-1">
                            <div class="col-md-6">
                                <h3 class>预定，就在弹指之间</h3>
                                <p>实现会议信息实时显示引导功能，实时动态的将会议室预定信息，传递到每个会议室门口、大厅及楼梯口等公共通道的显示屏上，实现会议信息发布引导功能，会议管理系统由系统管理软件，终端信息显示屏及网络平台等部分构成，会议室预约系统本支持多媒体信息发布管理系统功能，实现公共多媒体信息实时发布和显示</p>
                            </div>
                            <div class="col-md-6">
                                <h3>人脸识别门禁系统</h3>
                                <p>配置人脸识别门禁系统，基于虹软全球领先的视觉AI技术资自主设计的一会儿门禁系统，一眼之间，即可开启一段神奇会议之旅，节约您的宝贵时间，让会议变得高效便捷</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 细节介绍框1结束 -->
        <!-- 细节介绍框2开始 -->
        <section class="py-5">
            <div class="detail-container-2">
                <h2 class="text-center my-3">创新，领先</h2>
                <div class="row ml-5 mr-5 py-3">
                    <div class="col-md-6">
                        <div class="d-flex">
                            <div class="mr-3">
                                <img
                                    src="../../static/img/h1.png"
                                    style="width:80px;height:70px;"
                                    class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                    alt
                                >
                            </div>
                            <div>
                                <h3>企业服务器部署</h3>
                                <p>在企业内部服务器中远程部署处理系统，保障企业数据安全</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex">
                            <div class="mr-3">
                                <img
                                    src="../../static/img/h2.png"
                                    style="width:80px;height:80px;"
                                    class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                    alt
                                >
                            </div>
                            <div>
                                <h3>根据企业定制化设计</h3>
                                <p>基于不同客户的不同需求，为客户提供定制化的服务</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row ml-5 mr-5 py-5">
                    <div class="col-md-6">
                        <div class="d-flex">
                            <div class="mr-3">
                                <img
                                    src="../../static/img/h3.png"
                                    style="width:80px;height:80px;"
                                    class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                    alt
                                >
                            </div>
                            <div>
                                <h3>丰富的会议管理功能</h3>
                                <p>多级会议管理权限、会议预定、会议录制、会议投票、会议巡场、会议文件等全方位智能会议系统</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex">
                            <div class="mr-3">
                                <img
                                    src="../../static/img/h4.png"
                                    style="width:80px;height:70px;"
                                    class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                    alt
                                >
                            </div>
                            <div>
                                <h3>科学分配会议室资源</h3>
                                <p>基于智能排队算法合理分配会议室资源</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row ml-5 mr-5 py-5">
                    <div class="col-md-6">
                        <div class="d-flex">
                            <div class="mr-3">
                                <img
                                    src="../../static/img/h5.png"
                                    style="width:80px;height:70px;"
                                    class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                    alt
                                >
                            </div>
                            <div>
                                <h3>数据全方位显示</h3>
                                <p>以多元高效的方式将各项会议信息实时反馈给用户，发挥会议最大化效益</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex">
                            <div class="mr-3">
                                <img
                                    src="../../static/img/h6.png"
                                    style="width:80px;height:80px;"
                                    class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                    alt
                                >
                            </div>
                            <div>
                                <h3>专业团队在线指导</h3>
                                <p>24小时全天候的人工热线服务团队，为您的会议保驾护航</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 细节介绍框2结束 -->
        <!-- 四个小介绍框开始 -->
        <div class="container2 row mt-0">
            <div class="row">
                <div class="col-md-3">
                    <div class="ad2 card text-white bg-success">
                        <div class="card-header">安全</div>
                        <div class="card-body">
                            <h5 class="card-title">安全可靠</h5>
                            <p class="card-text">根据用户需求可将会议数据存放在企业私有服务器中，隔绝外界干扰，保护企业核心利益</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-white bg-info">
                        <div class="card-header">智能</div>
                        <div class="card-body">
                            <h5 class="card-title">一触即发</h5>
                            <p class="card-text">过高度集成化、智能化的会议预定管理系统，为日常会议提供便捷、高效的使用环境，是各大企业的需求</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-white bg-primary">
                        <div class="card-header">实惠</div>
                        <div class="card-body">
                            <h5 class="card-title">价格优势</h5>
                            <p class="card-text">在为企业节省会议室管理成本的同时，又减少了人工成本的投入，帮助企业获得利益最大化</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-white bg-danger">
                        <div class="card-header">持续</div>
                        <div class="card-body">
                            <h5 class="card-title">持久更新</h5>
                            <p class="card-text">一次购买，提供永久免费维护功能，产品更新即使推送，让管理用于处于活力状态，为您的会议保驾护航</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 四个小介绍框结束 -->
        <!-- 细节介绍框3开始 -->
        <section class="container-fluid py-5 bg-light text-white mt-5" style="position:relative">
            <div class="detail-container">
                <div class="row justify-content-end text-md-dark">
                    <div class="col-md-7">
                        <h3 class="display-4 ml-3">方便、快捷</h3>
                        <p
                            class="m-3 mr-4"
                            style="font-size:17px"
                        >通过对会议的掌控，管理者能发现组织发展的方向和趋势，进而调整决策；组织者能发掘出组织的优势与问题，进而改进方法；参与者能充分思考、大胆表达，增强组织的积极性与凝聚力</p>
                        <!-- <button class="btn btn-outline-info ml-3">查看更多</button> -->
                        <div class="row mt-3 ml-1">
                            <div class="col-md-6">
                                <h3 class>会议生态</h3>
                                <p>是为组织内会议的筹备、开展、总结、分析而服务的，是会议的管控，是会议行为的固化，是会议生态的搭建</p>
                            </div>
                            <div class="col-md-6">
                                <h3>核心管理</h3>
                                <p>将完整的会议生命周期划分为会议体系、单一会议、会议环境三大模块，识别了六大管理领域：会议计划、会前管理、会中管理、会后管理和环境与资源管理</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div
                    class="col-md-5 bg-cover"
                    style="position: absolute;top: 0;bottom: 0;
									background-image: url(../../static/img/meeting4.jpg)"
                ></div>
            </div>
        </section>
        <!-- 细节介绍狂3结束 -->
        <!-- 价格栏的开始 -->
        <div class="price pb-3" style="background-color: #3f51B5">
            <h2 class="text-center pt-5 text-white">优惠的价格</h2>
            <div class="card-deck ml-5 mr-5 my-5">
                <div class="card">
                    <img class="card-img-top" src="../../static/img/a2.png" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="price-name card-title">个人租用版</h4>
                        <h6 class="price-number mt-2">10.00¥/月</h6>
                        <p
                            class="price-content card-text"
                        >为个人用户量身定做的会议管理平台，支持个性化界面，多端多人绑定，支持私人“管家”服务，为您的会议保驾护航</p>
                    </div>
                    <div class="card-footer">
                        <router-link to="/PriceList">
                            <a href="price.html">
                                <button type="button" class="btn btn-success">查看详细</button>
                            </a>
                        </router-link>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="../../static/img/a1.png" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="price-name card-title">高校定制版</h4>
                        <h6 class="price-number mt-2">1999.00¥/套</h6>
                        <p class="price-content card-text">为学校的会议提供智能管理服务，支持校际联盟，支持会议信息公开化，支持校企互通等服务</p>
                    </div>
                    <div class="card-footer">
                        <router-link to="/PriceList">
                            <a href="price.html">
                                <button type="button" class="btn btn-success">查看详细</button>
                            </a>
                        </router-link>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="../../static/img/a3.png" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="price-name card-title">企业定制版</h4>
                        <h6 class="price-number mt-2">2499.00¥/套</h6>
                        <p
                            class="price-content card-text"
                        >为企业量身定做的高效、安全会议智能服务软件，支持功能模块易拓展化，支持会议信息可视化，支持企业私属服务器部署</p>
                    </div>
                    <div class="card-footer">
                        <router-link to="/PriceList">
                            <a href="price.html">
                                <button type="button" class="btn btn-success">查看详细</button>
                            </a>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- 价格栏的结束 -->
        <!-- 地图和联系栏开始 -->
        <div class="py-5 bg-light mt-3">
            <div class="map-container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="text-center">公司地址</div>

                        <iframe
                            class="ml-3 mr-3"
                            src="http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d202844.37779143036!2d-122.18152607818237!3d37.402993260298395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2z576O5Zu95Yqg5Yip56aP5bC85Lqa5bee56GF6LC3!5e0!3m2!1szh-CN!2scn!4v1553054746873"
                            width="100%"
                            height="100%"
                            frameborder="0"
                            style="border:0"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div class="col-md-6">
                        <h2 class="text-center mt-3">与我们联系</h2>
                        <form class="needs-validation py-3" action novalidate>
                            <div class="form-group">
                                <label for="name">贵姓*</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="请输入您的手机号"
                                    required
                                >
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                            <div class="form-group">
                                <label for="phonenumber">手机号*</label>
                                <input
                                    type="tel"
                                    class="form-control"
                                    id="phonenumber"
                                    placeholder="请输入您的手机号"
                                    required
                                >
                                <div class="valid-feedback">Looks good!</div>
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="请输入您的邮箱号"
                                >
                                <div class="invalid-feedback">Please provide a valid state.</div>
                            </div>
                            <div class="form-group">
                                <label for="type">请选择与您适应的应用场景</label>
                                <select
                                    class="type-select w-100 mr-2"
                                    id="type"
                                    style="height:30px;"
                                >
                                    <option selected>(点击选择）</option>
                                    <option value="1">企业</option>
                                    <option value="2">学校</option>
                                    <option value="3">政府</option>
                                    <option value="4">个人</option>
                                    <option value="5">其他</option>
                                </select>
                            </div>
                            <div class="text-right mr-3">
                                <button type="reset" class="btn btn-secondary">重置</button>
                                <button type="submit" class="btn btn-primary">完成</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- 地图和联系栏结束 -->
        <!-- 合作伙伴开始 -->
        <section class="py-5" style="background-color: #3f51B5">
            <div class="detail-container-2">
                <h2 class="text-center my-3 text-white">合作共赢</h2>
                <div class="row ml-5 mr-5 text-center py-4">
                    <div class="col-md-3">
                        <img src="../../static/img/hongruan.png" alt="hongruan">
                    </div>
                    <div class="col-md-3">
                        <img src="../../static/img/hongruan.png" alt="hongruan">
                    </div>
                    <div class="col-md-3">
                        <img src="../../static/img/hongruan.png" alt="hongruan">
                    </div>
                    <div class="col-md-3">
                        <img src="../../static/img/hongruan.png" alt="hongruan">
                    </div>
                </div>
            </div>
        </section>
        <!-- 合作伙伴结束 -->
        <!-- 页尾图开始 -->
        <section class="container-fluid">
            <div class="row">
                <div
                    class="col-md-6 p-5 bg-cover"
                    style="background-image:url(../../static/img/placeholder.png)"
                >
                    <div class="row">
                        <div class="col-md-9 text-white">
                            <!-- <small>加入我们</small> -->
                            <h3>加入我们</h3>
                            <!-- <p>带给你前所未有的体验带给你前所未有的体验带给你前所未有的体验带给你前所未有的体验带给你前所未有的体验带给你前所未有的体验</p> -->
                            <router-link to="/About">
                                <a href="#" class="btn btn-outline-warning">加入我们</a>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div
                    class="col-md-6 p-5 bg-cover"
                    style="background-image:url(../../static/img/placeholder.png)"
                >
                    <div class="row">
                        <div class="col-md-9 text-white">
                            <!-- <small>加入我们</small> -->
                            <h3>加入我们</h3>
                            <!-- <p>带给你前所未有的体验带给你前所未有的体验带给你前所未有的体验带给你前所未有的体验带给你前所未有的体验带给你前所未有的体验</p> -->
                            <router-link to="/About">
                                <a href="#" class="btn btn-outline-warning">加入我们</a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 页尾图结束 -->
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {};
    },
    methods: {
        click() {}
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
/* 轮播内容开始 */
.carousel-item img {
    height: 500px;
    width: 100%;
}
/* 轮播内容结束 */

/* 细节介绍框2开始 */
.container2 {
    width: 100%;
    margin-left: -100px;
}

.container2 .card {
    height: auto;
    border-radius: 0%;
}

.card {
    margin-left: 0px;
    width: 100%;
}

.bg-cover {
    background-size: cover;
    background-position: center center;
}

.carousel-caption {
    background-color: rgba(0, 0, 0, 0.6);
}
/* 细节介绍框2结束 */

/* 登录模态框开始 */
.modal-body .mb-4 {
    width: 150px;
    height: 150px;
    margin-left: 145px;
}

.modal-body .form-control {
    margin-top: 10px;
    height: 60px;
}
/* 登录模态框结束 */

/* 三个介绍框开始 */
.three-section {
    background-color: #3f51b5;
}
/* 三个介绍框结束 */

/* 详细介绍开始 */
@media (min-width: 768px) {
    .text-md-dark {
        color: #333;
    }
}
/* 详细介绍结束 */

/* 价钱开始 */
.price-name {
    float: left;
}

.price-number {
    float: right;
}

.price-content {
    clear: both;
}
/* 价钱结束 */
</style>
