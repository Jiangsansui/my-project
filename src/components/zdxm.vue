<template>
    <div class="container">
        <div class="head"></div>
        <hr style="border: 0.5px solid white; width:96%"/>
        <head-Component :num="4"></head-Component>
        <div class="el-content">
            <div class="title">重大项目代办管理</div>
            <div class="tj">
                <div class="tit">申报条件</div>
                <div>(一)法定劳动年龄的人员;</div>
                <div>(二)法定劳动年龄的人员;</div>
                <div>(三)处于无业状态。</div>
            </div>
            <div class="tj">
                <div class="tit">适用对象说明</div>
                <div class="tit">法定劳动年龄内,有劳动能力,有就业要求并处于无业状态的失业人员。</div>
            </div>
            <div class="tj">
                <div class="tit">法律依据</div>
                <div>( 一 ) 《中华人民共和国就业促进法》 ( 中华人民共和国主席令第七十号 ) ： "第四十三条国家建立劳动力调查统计制度和就业登记、失业登记制度，
                    开展劳动力资源和就业、 失业状况调查统计，并公布调查统计结果。 统计部门和劳动行政部门进行劳动力调查统计和就业、时失业登记时，用人单位和个人
                    应当如实提供调查统计和登记所需要的 情况”。 ( 二 ) 《就业服务与就业管理规定》 ( 2007年11月5日劳动和社会保障部令第28号公布，根据2014年12月23
                    日《人力资源社会保障部关于修改<就业服务与就业管理规定>的决定》第一次修订，根据2015年4月30日《人力资源社会保障部关于修改部分规章的决定》第二
                    次修订，根据2018年12月14日 《人力资源社会保障部关于修改部分规章的决定》第三次修订 ) ； ( 三 ) 《浙江省人力资源和社会保障厅关于印发<浙江省就
                    业和失业登记管理办法〉的通知》 ( 浙人社发[2013] 111号 ) ( 下载网址: http://www.zjhrss.gov.cn/art/2013/5/8/art_ 1443137 7884.html )。
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
    name: "seventh",
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
        padding: 0 40px;
        .title {
            line-height: 36px;
            padding: 36px 0 40px;
            font-size: 36px;
            text-align: center;
            font-weight: bold;
        }
        .tj {
            line-height: 44px;
            margin-bottom: 44px;
            font-size: 26px;
            .tit {
                padding: 0 0 16px;
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
    @media screen and(max-width: 384px){
       .content{
            height:550px;
       }
    }
    @media screen and(max-width: 320px){
      .content{
            height:600px;
      }
    }
    @media screen and(max-width: 375px){

    }
}
</style>
