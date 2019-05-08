<template>
    <div class="container">
        <div class="head"></div>
        <hr style="border:0.5px solid white;width:96%"/>
        <head-Component :num="5"></head-Component>
        <div class="el-content">
            <p class="text">温馨提示：只能评价当前办理的业务</p>
            <div class="event"><span>身份证号:</span><input type="text" v-model="value"></div>
            <div class="number">
                <a v-for="(item,index) in num" :key="index" @click="handle(item)"><span>{{item}}</span></a>
                <a @click="de"><span>删除</span></a>
            </div>
            <div class="button">
                <!--<a>返回</a>-->
                <a>确定</a>
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
        name: "second",
        data(){
            return{
                value: '',
                num: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'X']
            }
        },
        components: {headComponent},
        methods:{
           handle(val) {
                this.value = this.value.concat(val);
           },
           de() {
                this.value = '';
           }
        }
    }
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    background: url(../assets/bgt.png) center no-repeat;
    background-size: cover;
    font-size: 62.5%;
    .head{
        width: 100%;
        height: 45px;
        background: url("../assets/index/title.png") no-repeat;
        background-size: 70% 90%;
        margin-top: 20px;
    }
    .el-content{
        padding: 0 32px;
        .text{
            font-size: 36px;
            font-family: "Microsoft YaHei-BOLD";
            font-weight: bold;
            color: #FFF;
        }
        .event{
            font-family: "Microsoft YaHei";
            width: 666px;
            height: 42px;
            line-height: 42px;
            margin: 0 auto;
            padding: 29px 32px 29px 42px;
            background: #FFF;
            border-radius: 10px;
            font-size: 36px;
            span {
                float: left;
                color: #999;
            }
            input {
                display: block;
                width: auto;
                height: 42px;
                line-height: 42px;
                margin: 0 42px 0 176px;
                border: 0;
                font-size: 36px;
            }
        }
        .number {
            width: 608px;
            height: 360px;
            margin: 40px auto 88px;
            padding: 32px 6px 0;
            background: rgba(255,255,255,0.9);
            border-radius: 10px;
            a {
                float: left;
                width: 120px;
                height: 92px;
                line-height: 92px;
                margin: 0 16px 32px;
                background: url("../assets/numbgt.png");
                color: #FFF;
                font-size: 36px;
                font-weight: bold;
                text-align: center;
            }
        }
        .button {
            width: 362px;
            margin: 0 auto;
            a {
                display: block;
                width: 362px;
                height: 100px;
                line-height: 100px;
                background: url("../assets/index/sure.png") center no-repeat;
                background-size: cover;
                font-size: 36px;
                text-align: center;
                color: #FFF;
            }
            .t {
                background: url("../assets/index/comeback.png");
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
