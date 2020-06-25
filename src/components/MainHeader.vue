<!-- MainHeader Part -->

<template>
    <div>
        <!-- 顶部导航栏开始 -->
        <div class="heading">
            <nav
                class="head navbar navbar-expand-lg fixed-top"
                style="background-color: rgba(63, 81, 181, 0.94)"
            >
                <a class="navbar-brand" href="index.html">
                    <div class="row">
                        <img
                            class="ml-3"
                            src="../../static/img/logo.png"
                            alt="Logo"
                            style="width:40px;height: 40px;"
                        >
                        <h4 class="text-center font-weight-bold mt-2 ml-2 text-white">一会儿</h4>
                    </div>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ml-2">
                        <li class="nav-item active">
                            <router-link to="/">
                                <a class="nav-link text-white" href="#">
                                    首页
                                    <span class="sr-only">(current)</span>
                                </a>
                            </router-link>
                            <!-- </li>
                        <li class="nav-item active">
                            <router-link to="/">
                                <a class="nav-link text-white" href="#">
                                    功能介绍
                                    <span class="sr-only">(current)</span>
                                </a>
                            </router-link>
                            </li>-->
                        </li>
                        <li class="nav-item active">
                            <router-link to="/PriceList">
                                <a class="nav-link text-white" href="#">
                                    定价
                                    <span class="sr-only">(current)</span>
                                </a>
                            </router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link to="/Company">
                                <a class="nav-link text-white" href="#">
                                    合作伙伴
                                    <span class="sr-only">(current)</span>
                                </a>
                            </router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link to="/About">
                                <a class="nav-link text-white" href="#">
                                    团队介绍
                                    <span class="sr-only">(current)</span>
                                </a>
                            </router-link>
                        </li>
                    </ul>
                    <button
                        class="btn btn-outline-primary my-2 my-sm-0 mr-2 text-white"
                        type="submit"
                    >控制台</button>

                    <!-- <div class="nav-item dropdown">
                        <div class="mt-1 ml-1 mr-2" style="font-size: 24px">
                            <a
                                class="nav-link dropdown-toggle text-white"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >Hi,{{ userName }}</a>
                            <div class="wtl1 dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">我的信息</a>
                                <a class="dropdown-item" href="#">我的会议室</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" @click="quit">退出登录</a>
                            </div>
                        </div>
                    </div>-->
                    <button
                        class="btn btn-outline-success my-2 my-sm-0 text-white"
                        type="button"
                        data-toggle="modal"
                        data-target="#myModal"
                    >登录</button>
                </div>
            </nav>
        </div>
        <!-- 顶部导航栏结束 -->
    </div>
</template>

<script type="text/javascript">
export default {
    name: "MainHeader",
    data() {
        return {
            userName: "Tony"
        };
    },
    props: ["user"],
    methods: {
        quit() {
            // this.userInfo.login_state = false;
            console.log(this.user);
        }
    }
};
</script>

<style type="text/css" scoped>
</style>