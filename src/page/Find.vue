<!-- 找回密码模块 -->
<template>
    <div>
        <MainHeader></MainHeader>
        <Login></Login>
        <router-view></router-view>
        <MainFooter></MainFooter>
    </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/Mainfooter";
import Login from "@/components/Login";
import Find1 from "@/components/Find1";
import Find2 from "@/components/Find2";
import Find3 from "@/components/Find3";

export default {
    name: "Find",
    data() {
        return {
            msg: "wtl"
        };
    },
    components: {
        MainHeader: MainHeader,
        MainFooter: MainFooter,
        Login: Login,
        Find1: Find1,
        Find2: Find2,
        Find3: Find3
    },
    mounted() {
        this.userid = this.$route.params.userid;
    },
    methods: {
        login(msg) {
            console.log(msg);
        }
    }
};
</script>

<style>
</style>
