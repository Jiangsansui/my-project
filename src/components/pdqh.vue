<template>
    <div class="container">
        <div class="head"></div>
        <hr style="border:0.5px solid white;width:96%"/>
        <head-Component :num="6"></head-Component>
        <div class="el-content">
            <p class="text">温馨提示：如果你已经预约，请选择"预约取号"</p>
            <div class="list">
                <a>预约取号<img src="../assets/yuyue1.png"></a>
                <a>排队取号<img src="../assets/paidui1.png"></a>
            </div>
        </div>
        <div class="home">
            <p>海纳百川，有容乃大</p><img src="../assets/index/home.png"><p>欢迎使用智能导办系统</p>
        </div>
    </div>
</template>

<script>
import headComponent from './head'
export default {
    name: "sixth",
    data() {
        return {

        }
    },
    components: {headComponent}
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    background: url(../assets/bgt.png) center no-repeat;
    background-size: cover;
    font-size: 62.5%;
    .head {
        width: 100%;
        height: 45px;
        background: url("../assets/index/title.png") no-repeat;
        background-size: 70% 90%;
        margin-top: 20px;
    }
    .el-content {
        padding: 0 32px;
        .text {
            font-size: 36px;
            font-family: "Microsoft YaHei-BOLD";
            font-weight: bold;
            color: #FFF;
        }
        .list {
            width: 908px;
            margin: 74px auto;
            overflow: hidden;
            a {
                float: left;
                width: 318px;
                height: 252px;
                line-height: 42px;
                margin: 0 32px;
                padding: 34px 36px 51px 36px;
                background: url("../assets/yuyue.png") center no-repeat;
                background-size: cover;
                font-size: 36px;
                color: #FFF;
                position: relative;
            }
            a:last-child {
                background: url("../assets/paidui.png");
            }
            img {
                height: 120px;
                position: absolute;
                right: 36px;
                bottom: 65px;
            }
        }
        .left {
            display:flex;
            width: 40%;
            height: 150px;
            margin-top: 4rem;
            margin-left: 5%;
            background: url("../assets/yuyue.png");
            background-size: 100% 100%;
            p {
                margin-block-start: 0.5em;
                width: 100%;
                font-size: 1.1rem;
                margin-left: -2rem;
                color: white;
            }
            img {
                width: 35%;
                height: 40%;
                margin-top: 4rem;
                margin-left: -2.5rem;
            }
        }
        .right {
            display:flex;
            width: 40%;
            height: 150px;
            margin-top: 4rem;
            margin-left: 5%;
            background: url("../assets/yuyue.png");
            background-size: 100% 100%;
            p {
                margin-block-start: 0.5em;
                width: 100%;
                font-size: 1.1rem;
                margin-left: -2rem;
                color: white;
            }
            img {
                width: 35%;
                height: 40%;
                margin-top: 4rem;
                margin-left: -2.5rem;
            }
        }
    }
    .home{
        margin-top: 0.5rem;
        p {
            color: #ffe84f;
            font-size: 1rem;
            float: left;
            margin-left: 1rem;
            margin-top: 2.5rem;
            display: flex;
            flex-direction: row;
            font-family: 楷体;
        }
        p:last-child {
            float: right;
            margin-right: 1.5rem;
        }
        img {
            position: absolute;
            width: 60px;
            height: 35px;
            margin-top: 1.9rem;
            margin-left: -7.7rem;
        }
    }
}
</style>
