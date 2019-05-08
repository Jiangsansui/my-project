<template>
  <div class="container">
    <div class="head"></div>
    <hr style="border:0.5px solid white;width:96%"/>
    <head-Component :num="4"></head-Component>
    <div class="content">
      <p>重大项目代办管理</p>
      <div class="tj">
        <p>申报条件</p>
        <p>(一)法定劳动年龄的人员;</p>
        <p>(二)法定劳动年龄的人员;</p>
        <p>(三)处于无业状态。</p>
      </div>
      <div class="tj">
        <p>适用对象说明</p>
        <p> 法定劳动年龄内,有劳动能力,有就业要求并处于无业状态的失业人员。</p>
      </div>
      <div class="tj">
        <p>法律依据</p>
        <p> (一)《中华人民共和国就业促进法》(中华人民共和国主席令第七十号) : "第四十三条国家建立劳动力调查统计制度和就业登记、失业登记制度,开展劳动力资源和就业、失业状况调查统计,并公布调查统计结果。 统计部门和劳动行政部门进行劳动力调查统计和就业、时失业登记时，用人单位和个人应当如实提供调查统计和登记所需要的
          情况”。(二)《就业服务与就业管理规定》( 2007年11月5日劳动?和社会保障部令第28号公布,根据2014年12月23日《人力资源社会保障部关于修改<就业服务与就业管理规定的决定第一次修订,根据2015年4月30日《人力资源社会保障部关于修改部分规章的决定》第二次修订,根据2018年12月14日《人力资源社会保障部关于修改部分规章的决定》第三次修订); (三)《浙江省人力资源和社会保障厅关于印发<浙江省就业和失业登记管理办法〉的通知》(浙人社发[2013] 111号) (下载网址: http://www.zjhrss.gov.cn/art/2013/5/8/art_ 1443137 7884.html)。</p>
      </div>
    </div>
    <div class="home">
      <p>海纳百川，有容乃大</p>
      <img src="../assets/index/home.png">
      <p>欢迎使用智能导办系统</p>
    </div>

  </div>
</template>

<script>
  import headComponent from './head'
    export default {
        name: "seventh",
      components:{headComponent}
    }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    display: inline-block;
    background: url(../assets/bgt.png);
    font-size: 62.5%;

    .head {
      width: 100%;
      height: 45px;
      background: url("../assets/index/title.png") no-repeat;
      background-size: 70% 90%;
      margin-top: 20px;
    }

    .content {
      margin-top: -0.5rem;
      font-family: "Microsoft YaHei";
      width: 98%;
      height: 520px;
      margin-left: 1%;
      border-radius: 3%;
      background-color: rgba(250, 250, 250, 0.4);
      padding-bottom: 30px;
      padding-top: 8px;
      p{
        font-size: 3em;
        /*font-weight: bolder;*/
        text-align: center;
        margin-block-end: 0em;
        width:100%;
      }
      .tj{
        width:90%;
        margin-left: 5%;
        display: inline-block;
        p{
          width:100%;
          text-align: left;
          font-size: 1.5em;
          line-height: 10px;
        }
        p:last-child{
          line-height: 20px;
        }
      }
    }
    .home{
      margin-top: 0.5rem;

      p{
        color: #ffe84f;
        font-size: 1rem;
        float: left;
        margin-left: 1rem;
        margin-top: 2.5rem;
        display: flex;
        flex-direction: row;
        font-family: 楷体;
      }
      p:last-child{
        float: right;
        margin-right: 1.5rem;
      }
      img{
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
