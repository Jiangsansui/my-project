<template>
  <div class="container">
    <div class="head"></div>
    <hr style="border:0.5px solid white;width:96%"/>
    <head-Component></head-Component>
    <div class="content">
      <p class="text">温馨提示：如果你已经预约，请选择"预约取号"</p>
       <div class="left">
         <p>预约取号</p>
         <img src="../assets/yuyue1.png">
       </div>
      <div class="right">
        <p>排队取号</p>
        <img src="../assets/paidui1.png">
      </div>

    </div>
    <div class="home">
      <img src="../assets/index/home.png">
    </div>

  </div>
</template>

<script>
  import headComponent from './head'
  export default {
    name: "sixth",
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

    .head {
      width: 100%;
      height: 45px;
      background: url("../assets/index/title.png") no-repeat;
      background-size: 70% 90%;
      margin-top: 20px;
    }
    .content {
      font-family: "Microsoft YaHei";
      width: 98%;
      height: 400px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 1%;
      border-radius: 3%;
      background-color: rgba(250, 250, 250, 0.4);
      padding-bottom: 30px;
      .text{
        margin-left: 1rem;
        position: absolute;
        font-size: 2.5em;
        font-family: "Microsoft YaHei-BOLD";
        color: #feffff;
      }
      .left{
        display:flex;
        width: 40%;
        height: 150px;
        margin-top: 4rem;
        margin-left: 5%;
        background: url("../assets/yuyue.png");
        background-size: 100% 100%;
        p{
          margin-block-start: 0.5em;
          width: 100%;
          font-size: 1.1rem;
          margin-left: -2rem;
          color: white;
        }
        img{
          width: 35%;
          height: 40%;
          margin-top: 4rem;
          margin-left: -2.5rem;
        }

      }
      .right{
        display:flex;
        width: 40%;
        height: 150px;
        margin-top: 4rem;
        margin-left: 5%;
        background: url("../assets/yuyue.png");
        background-size: 100% 100%;
        p{
          margin-block-start: 0.5em;
          width: 100%;
          font-size: 1.1rem;
          margin-left: -2rem;
          color: white;
        }
        img{
          width: 35%;
          height: 40%;
          margin-top: 4rem;
          margin-left: -2.5rem;
        }

      }

    }
    .home {
      margin-top: 0;
      img {
        width: 80px;
        height: 40px;
      }
    }
  }

</style>
