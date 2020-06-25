<!-- Find3 Part -->

<template>
    <section class="py-5" style="height:710px">
        <div class="detail-container-2 py-5">
            <h2 class="text-center my-3">找回密码</h2>
            <div class="progress w-50 mx-auto my-3" style="height:25px;">
                <div class="progress-bar" style="width:33%;">1.输入账号</div>
                <div class="progress-bar" style="width:33%;">2.填写密保信息</div>
                <div class="progress-bar" style="width:34%;">3.重置密码</div>
            </div>
            <div class="content w-50 mx-auto mt-5">
                <form class="needs-validation py-3" action="index.html" novalidate>
                    <div class="form-group">
                        <label for="user-password1">新密码：</label>
                        <input
                            type="text"
                            class="form-control"
                            id="user-password1"
                            placeholder="请输入新密码"
                            v-model="oldPassword"
                            required
                        >
                        <div class="invalid-feedback">请填写新密码</div>
                    </div>
                    <div class="form-group">
                        <label for="user-password2">确认新密码</label>
                        <input
                            type="text"
                            class="form-control"
                            id="user-password2"
                            placeholder="请确认新密码"
                            v-model="newPassword"
                            required
                        >
                    </div>

                    <div class="text-right mr-3">
                        <button type="submit" class="btn btn-success" @click="finish">完成</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script type="text/javascript">
export default {
    name: "Find3",
    data() {
        return {
            userId: "",
            oldPassword: "",
            newPassword: ""
        };
    },

    mounted() {
        console.log(this.$route.params.userId);
    },

    methods: {
        finish() {
            if (this.oldPassword == "" && this.newPassword == "") {
                return;
            }
            if (this.newPassword != this.oldPassword) {
                console.log("两次密码输入不一致");
                alert("密码输入不一致，请重新输入");
                return;
            }

            var data = {
                user_id: this.userId,
                oldpassword: this.oldPassword,
                newpassword: this.newPassword
            };
            this.axios
                .post(
                    "http://39.108.10.155:8080/UserManager/Users/updatePassword.do",
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
                        this.$router.push({ path: "" });
                    } else if (data.data.status == 1) {
                    }
                });
        }
    }
};
</script>

<style type="text/css" scoped>
</style>