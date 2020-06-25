<!-- Find2 Part -->

<template>
    <div>
        <!-- 找回密码页1开始 -->
        <section class="py-5" style="height:710px">
            <div class="detail-container-2 py-5">
                <h2 class="text-center my-3">找回密码</h2>
                <div class="progress w-50 mx-auto my-3" style="height:25px;">
                    <div class="progress-bar" style="width:33%;">1.输入账号</div>
                    <div class="progress-bar" style="width:33%;">2.填写密保信息</div>
                </div>
                <div class="content w-50 mx-auto mt-5">
                    <form class="needs-validation py-3" action novalidate>
                        <div class="form-group">
                            <label for="user-que1">密保问题一:{{question1}}</label>
                            <input
                                type="text"
                                class="form-control"
                                id="user-que1"
                                placeholder="请输入密保问题一答案"
                                v-model="answer1"
                                required
                            >
                            <div class="invalid-feedback">请填写密保问题一的答案</div>
                        </div>
                        <div class="form-group">
                            <label for="user-que2">密保问题二:{{question2}}</label>
                            <input
                                type="text"
                                class="form-control"
                                id="user-que2"
                                placeholder="请输入密保问题二答案"
                                v-model="answer2"
                                required
                            >
                            <div class="invalid-feedback">请填写密保问题二的答案</div>
                        </div>
                        <div class="form-group">
                            <label for="user-que3">密保问题三:{{question3}}</label>
                            <input
                                type="text"
                                class="form-control"
                                id="user-que3"
                                placeholder="请输入密保问题三答案"
                                v-model="answer3"
                                required
                            >
                            <div class="invalid-feedback">请填写密保问题三的答案</div>
                        </div>

                        <div class="text-left mr-3 float-left">
                            <a href="find1.html">
                                <button type="button" class="btn btn-secondary">上一步</button>
                            </a>
                        </div>
                        <div class="text-right mr-3">
                            <button type="submit" class="btn btn-success" @click="next">下一步</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/javascript">
import qs from "qs";
export default {
    name: "Find2",
    data() {
        return {
            userId: "",
            question1: "正在加载中",
            question2: "正在加载中",
            question3: "正在加载中",
            answer1: "",
            answer2: "",
            answer3: ""
        };
    },
    mounted() {
        var data = {
            user_id: this.userId
        };
        this.$axios
            .post(
                "http://39.108.10.155:8080/UserManager/Users/SecretProtectionProblems.json",
                qs.stringify(data),
                {
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }
            )
            .then(data => {
                if (data.data.status == 0) {
                    this.question1 = data.data.question1;
                    this.question2 = data.data.question2;
                    this.question3 = data.data.question3;
                    this.$router.push({ path: "" });
                } else if (data.data.status == 1) {
                }
            });
        console.log(this.$route.params.userid);
        this.userId = this.$route.params.userid;
        console.log(this.userId);
    },
    methods: {
        next() {
            if (
                this.answer1 == "" ||
                this.answer2 == "" ||
                this.answer3 == ""
            ) {
                // 如果皆为空，则返回。
                alert("请重新输入密保信息");
                return;
            }
            if (
                this.answer1 == this.question1 &&
                this.answer2 == this.question2 &&
                this.answer3 == this.question3
            ) {
                this.$router.push({
                    name: "Find3",
                    params: { userId: this.userId }
                });
            }
        }
    }
};
</script>

<style type="text/css" scoped>
</style>