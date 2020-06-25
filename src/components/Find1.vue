<!-- Find1 Part -->

<template>
    <div>
        <section class="py-5" style="height:710px;">
            <div class="detail-container-2 py-5">
                <h2 class="text-center my-3">找回密码</h2>
                <div class="progress w-50 mx-auto my-3" style="height:25px;">
                    <div class="progress-bar" style="width:33%;">1.输入账号</div>
                </div>
                <div class="content w-50 mx-auto mt-5">
                    <form class="needs-validation py-3" action novalidate>
                        <div class="form-group">
                            <label for="user-id">账号ID：</label>
                            <input
                                type="text"
                                class="form-control"
                                id="user-id"
                                placeholder="请输入您的账号"
                                required
                                v-model="userId"
                            >
                            <div class="valid-feedback">Looks good!</div>
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
export default {
    name: "Find1",
    data() {
        return {
            flag: true,
            login_state: true,
            user_name: "Tony",
            userId: "",
            userPassword: ""
        };
    },
    methods: {
        next() {
            if (this.userId == "") {
                // 如果皆为空，则返回。
                return;
            }
            var data = {
                userId: this.userId
            };
            // this.$router.push({ name: "Find2" });
            this.$router.push({
                name: "Find2",
                params: { userid: this.userId }
            });
        }
    }
};
</script>

<style type="text/css" scoped>
</style>