<!-- 主页模块 -->
<template>
    <div>
        <MainHeader></MainHeader>
        <login @userInfo="userInfo"></login>
        <router-view></router-view>
        <MainFooter></MainFooter>
    </div>
</template>

<script>
import HomePage from "@/components/HomePage";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/Mainfooter";
import Login from "@/components/Login";

 $(document.body).css({
   "overflow-x":"hidden",

 });
export default {
    name: "Home",
    data() {
        return {
            userInformation:""
        };
    },
    components: {
        MainHeader: MainHeader,
        MainFooter: MainFooter,
        HomePage: HomePage,
        Login: Login
    },
    methods: {
        userInfo(msg) {
            console.log(msg);
            this.userInformation = msg;
        }
    }
};
</script>

<style>
</style>
