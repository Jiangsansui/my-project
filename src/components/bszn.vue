<template>
    <div class="container">
      <div class="head"></div>
      <hr style="border:0.5px solid white;width:96%"/>
      <head-Component :num="2"></head-Component>
      <div class="content">
        <div class="btn">
       <span class="spanOne" @click="showMore">
         <img src="../assets/buttonf.png"  v-if="showImg">
         <img src="../assets/index/buttont.png"  v-else>
         <span>按部门</span>
       </span>
       <span class="spanOne" @click="showThree">
      <img src="../assets/index/buttont.png" v-if="showImgT">
          <img src="../assets/buttonf.png"  v-else>
         <span>按事项</span>
       </span>
     </div>
        <div class="threeChart" v-if="isShow">
          <div class="item" v-for="(item,index) in list" :key="index" :style="index===2?aStyle:''">
         <span>
           {{item.name}}
         </span>
            <img :src="item.imgPath" alt="">
          </div>
        </div>
        <div class="more" v-else>
          <ul>
            <li v-for="(item,index) in data" :key="index">{{item.name}}</li>
          </ul>
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
        name: "bszn",
      components:{headComponent},
      data(){
          return{
            showImgT:true,
            showImg:true,
            aStyle:{
              width:'87%'
            },
            list:[
              {imgPath:require("../assets/person.png"),name:"个人事项"},
              {imgPath:require("../assets/company.png"),name:"企业事项"},
              {imgPath:require("../assets/touzi.png"),name:"投资事项"}
            ],
            data:[
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"},
              {name:"公安局窗口"}

            ],
            isShow:true
          }
      },
      methods:{
        showMore(){
          this.showImgT=false
          this.showImg=!this.showImg
          this.isShow=false
        },
        showThree(){
          this.showImg=true
          this.showImgT=!this.showImgT
          this.isShow=true
        }
      }
    }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    background: url(../assets/bgt.png);
    font-size: 62.5%;
    overflow: hidden;
    .head{
      width: 100%;
      height: 130px;
      background: url("../assets/index/title.png") no-repeat;
      background-size: 70% 90%;
      margin-top: 20px;
    }
    .content{
      margin-top: 0.5rem;
      width: 98%;
      margin-left: 1%;
      border-radius: 3%;
      background-color: rgba(250,250,250,0.4);
      padding-top: 20px;
      display: inline-block;
       .btn{
         width:100%;
         margin-left: -20%;
       .spanOne{
         display: inline-block;
         width:25%;
         height:100px;
         position: relative;
         margin-left: 8%;
         img{
           width:100%;
           height:100%;
           position: absolute;
           left: 0;
         }
         span{
           display: inline-block;
           position: absolute;
           left: 0;
           width:100%;
           height:100%;
           font-size: 5em;
           line-height: 80px;
         }
       }
       }
      .threeChart{
        width:100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-bottom: 30px;
        .item{
          height:400px;
          width:40%;
          margin-left: 7%;
          background-color: white;
          position: relative;
          margin-top: 5%;
          border-radius: 30px;
          span{
            display: inline-block;
            width:100%;
            font-size: 36px;
            font-weight: bolder;
            margin-top: 5%;
            text-align: left;
            text-indent: 20px;
          }
          img{
            height:140px;
            width:140px;
            position: absolute;
            right:10px;
            bottom: 10px;
          }
        }

      }
      .more{
        width:100%;
        display: inline-block;
        padding-bottom:60px;
        ul{
          width:100%;
          padding-inline-start: 0;
          list-style: none;
          li{
            float: left;
            width:44%;
            height:90px;
            background-color: white;
            border-radius: 10px;
            text-align: center;
            font-size: 5em;
            margin-left: 4%;
            margin-top: 4%;
            line-height: 80px;
          }
        }
      }
  }
    .home{
      margin-top: 263px;
      p{
        color: #ffe84f;
        font-size: 3rem;
        float: left;
        margin-left: 1rem;
        margin-top: 3rem;
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
