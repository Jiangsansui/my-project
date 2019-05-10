<template>
    <div class="container">
        <div class="head"></div>
        <hr style="border:0.5px solid white;width:96%"/>
        <head-Component :num="7"></head-Component>
        <div class="el-content">
            <div class="el-list" v-for="(item,index) in lists" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="list">
                    <div class="li" v-for="(j,index) in item.list" :key="index" :class="index === 0 ? 'orange' : ''">
                        <span>{{j.num}}</span><div>{{j.name}}</div>
                    </div>
                </div>
            </div>
            <div class="el-text" v-for="item in text">
                <div class="name">{{item.name}}</div>
                <div class="list">
                    <div class="li" v-for="(t,index) in item.list" :key="index">
                        <img src="../assets/head.png">
                        <div style="font-size: 30px; color: #000">{{t.name}}</div><div>{{t.local}}</div>
                    </div>
                </div>
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
    name: "fourth",
    data() {
        return{
            lists: [
                {
                    name: "2018年8月标兵窗口",
                    list: [
                        {num:"TOP1", name:"商务局"},
                        {num:"TOP2", name:"商务局",},
                        {num:"TOP2", name:"商务局"},
                        {num:"TOP2", name:"商务局"},
                        {num:"TOP2", name:"商务局"}
                    ]
                },
                {
                name: "2018年8月先进窗口",
                    list: [
                        {num:"TOP1", name:"商务局"},
                        {num:"TOP2", name:"商务局",},
                        {num:"TOP2", name:"商务局"},
                        {num:"TOP2", name:"商务局"},
                        {num:"TOP2", name:"商务局"}
                    ]
                }
            ],
            text: [
                {
                    name: "2018年8月服务标兵",
                    list: [
                        {name:"清大科技", local:"市场监督局"},
                        {name:"清大科技", local:"市场监督局"},
                        {name:"清大科技", local:"市场监督局"},
                        {name:"清大科技", local:"市场监督局"}
                    ]
                },
                {
                    name: "2018年8月优秀员工",
                    list: [
                        {name:"清大科技", local:"市场监督局"},
                        {name:"清大科技", local:"市场监督局"},
                        {name:"清大科技", local:"市场监督局"},
                        {name:"清大科技", local:"市场监督局"}
                    ]
                }
            ]
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
      overflow: hidden;
    .head {
        width: 100%;
        height: 130px;
        background: url("../assets/index/title.png") no-repeat;
        background-size: 70% 90%;
        margin-top: 20px;
    }
    .el-content {
        height:1300px;
        .name {
            height: 60px;
            line-height: 60px;
            padding: 20px 22px;
            font-size: 32px;
            font-weight: bold;
            -webkit-text-stroke: 1.5px #FFF;
        }
        .el-list {
            display: inline-block;
            margin-bottom: 10px;
            .list {
                width: 463px;
                height: 456px;
                margin: 0 22px;
                background: linear-gradient(#FFF, #d5e9fa);
                border-radius: 10px;
                box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
                .li {
                    height: 90px;
                    line-height: 90px;
                    margin: 0 20px;
                    padding: 0 6px;
                    border-bottom: 1px solid #FFF;
                    font-size: 30px;
                    color: #009ce1;
                    span {
                        float: left;
                    }
                    div {
                        margin-left: 118px;
                    }
                }
                .li:last-child {
                    border-bottom: 0;
                }
            }
        }
        .el-text {
            .list {
                height: 260px;
                margin: 0 12px 10px;
                .li {
                    float: left;
                    width: 220px;
                    height: 256px;
                    margin: 0 12px;
                    background: linear-gradient(#FFF, #d5e9fa);
                    border-radius: 10px;
                    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
                    img {
                        display: block;
                        margin: 30px auto 20px;
                    }
                    div {
                        line-height: 32px;
                        margin-bottom: 12px;
                        text-align: center;
                        color: #999;
                        font-size: 24px;
                    }
                }
                .li:last-child {
                    border-bottom: 0;
                }
            }
        }
    }
 .home{
     margin-top:-0.3rem;
      p{
        color: #ffe84f;
        font-size: 3rem;
        float: left;
        margin-left: 1rem;
        margin-top: 2.8rem;
        display: flex;
        flex-direction: row;
        font-family: 楷体;
      }
      p:last-child{
        float: right;
        margin-right: 1.2rem;
      }
      img{
        position: absolute;
        width: 150px;
        height: 80px;
        margin-top: 4rem;
        margin-left: -20rem;
      }
    }
}
</style>
