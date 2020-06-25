<!-- Login Part -->

<template>
    <!-- 登录模态框开始 -->
    <!-- 模态框 -->
    <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- 模态框头部 -->
                <div class="modal-header" style="background-color: rgba(63, 81, 181, 0.959)">
                    <h4 class="modal-title text-white">登录</h4>
                    <button type="button" class="close text-white" data-dismiss="modal">&times;</button>
                </div>

                <!-- 模态框主体 -->
                <div class="modal-body">
                    <form class="needs-validation form-signin" novalidate>
                        <img class="mb-4" src="../../static/img/logo.png" alt="YiHuiEr">
                        <div class="form-group">
                            <input
                                type="number"
                                name="user-id"
                                id="inputEmail"
                                class="form-control"
                                placeholder="请输入登录账号"
                                v-model="userId"
                                minlength="5"
                                required
                                autofocus
                            >
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">输入登录账号有误</div>
                        </div>
                        <div class="form-group">
                            <input
                                type="password"
                                name="user-password"
                                id="inputPassword"
                                class="form-control"
                                placeholder="请输入密码"
                                v-model="userPassword"
                                required
                            >
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">请输入密码</div>
                        </div>
                        <div class="checkbox">
                            <label>
                                <div class="row">
                                    <div class="col">
                                        <input class="mt-0" type="checkbox" value="remember-me">
                                        记住密码
                                    </div>
                                    <button
                                        type="button"
                                        class="close mb-2"
                                        style="font-size:16px"
                                        data-dismiss="modal"
                                        @click="forget"
                                    >忘记密码</button>
                                </div>
                            </label>
                        </div>

                        <button type="button" class="btn btn-lg btn-secondary btn-block">游客登录</button>
                        <button
                            type="button"
                            class="btn btn-lg btn-primary btn-block"
                            @click="login"
                        >登录</button>
                    </form>
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 登录模态框结束 -->
</template>

<script type="text/javascript">
import axios from "axios";
import qs from "qs";
export default {
    name: "Login",
    data() {
        return {
            userId: "",
            userPassword: ""
        };
    },
    methods: {
        login() {
            if (this.userId == "" && this.userPassword == "") {
                // 如果皆为空，则返回。
                return;
            }

            // this.$emit("userInfo", {
            //     userId: this.userId,
            //     userName: "Wtl",
            //     login_state: true
            // });

            var data = {
                username: parseInt(this.userId),
                password: parseInt(this.userPassword),
                type: "account"
            };
            this.$axios
                .post("/UserManager/Users/login.do", qs.stringify(data), {
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                })
                .then(data => {
                    $("#myModal").modal("hide"); //手动关闭
                    if(data.data.code==1){
                        alert('用户名或密码错误！')
                    }
                    else if(data.data.data.type==1){
                            this.$router.push('/indexmanager');
                            this.$cookies.remove('manager_id')
                            // this.$cookies.set('manager_id', data.data.data.manager_id,'/indexmanager');
                         }
                    else if(data.data.data.type==2){
                         this.$router.push('/index');
                         this.$cookies.remove('user_id')
                         this.$cookies.set('user_id', data.data.data.user_id,'/index');
                        }
                        else{
                            this.$router.push('/supermanager');
                        }
                    }
                    // this.$router.push({
                    //     name: "",
                    //     params: {}
                    // });  
                )},

        // 找回密码跳转
        forget() {
            this.$router.push({
                name: "Find1",
                params: {
                    userid: 123
                }
            });
        }
    }
};
</script>

<style type="text/css" scoped>
</style>