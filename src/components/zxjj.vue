<template>
  <div class="container">
    <div class="head"></div>
    <hr style="border:0.5px solid white;width:96%"/>
    <head-Component :num="1"></head-Component>
    <div class="content">
    <h1>龙湾区服务中心简介</h1>
      <div class="center">
        <img src="../assets/jianjie.png">
        <div class="rightText">
          &nbsp;&nbsp;65至69周岁的退休人员每人每月再增加40元; 70至74周岁每人每月再增加50元; 75至79周岁每人每月再增加60元； 80周岁以上每人每月再增加70元。 上退休人员中缴费年限满30年的，每人每月再增加5元，以体现对退休时间早、连续工龄和缴费年限长的退休人员进一步倾斜。
        </div>
      </div>
      <div class="botText">
        时光荏苒，岁月如梭，转眼间大学四年已过去一半，象牙塔里的我们也必须一步一步走入纷繁复杂的社会。随着市场经济的发展，社会的进步，特别是经济效益观念的日益强化和“企业管理以财务管理为中心”的提出，对企业财会人员的工作要求也越来越高，因此对于我所学的理论知识能否与社会实际相结合，我始终存在疑问。带着一种矛盾的心情，于×××年×××月×××日我进入了×××公司进行社会实践，从×××年×××月×××日到×××年×××月×××日的为期××周的实习，不但使我熟练掌握了会计操作的基本技能，将会计专业理论知识和专业实践有机的结合起来，而且开阔了我的视野，增进了我对企业实践运作情况的认识，为我毕业走上工作岗位奠定坚实的基础。
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
    name: "jianjie",
    data(){
      return{

      }
    },
    components:{headComponent}
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    display: inline-block;
    background: url(../assets/bgt.png);
    font-size: 62.5%;
    overflow: hidden;
    .head {
      width: 100%;
      height: 130px;
      background: url("../assets/index/title.png") no-repeat;
      background-size: 70% 90%;
      margin-top: 20px;
    }
    .content {
      margin-top: 0.5rem;
      font-family: "Microsoft YaHei";
      width: 98%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 1%;
      border-radius: 3%;
      background-color: rgba(250, 250, 250, 0.4);
      position: relative;
      padding-bottom: 250px;
      h1{
        font-size: 3rem;
        text-align: center;
        width: 100%;
      height:30px;
      }
      .center{
        width:100%;
        display: flex;
        height:900px;
        margin-top: 60px;
        flex-direction: row;
        img{
          width:50%;
          height:500px;
          margin-left: 2.5%;
        }
        .rightText{
          font-size: 28px;
          width:40%;
          margin-left: 2.5%;
          line-height: 50px;
          text-align: justify;

        }
      }
      .botText{
        width:95%;
        margin-left: 2.5%;
        text-align: justify;
        position: absolute;
       margin-top: 700px;
        font-size: 28px;
        display: inline-block;
        line-height: 50px;
      }
    }
    .home{
      margin-top: -1rem;
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
