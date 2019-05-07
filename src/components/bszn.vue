<template>
    <div class="container">
      <div class="head"></div>
      <hr style="border:0.5px solid white;width:96%"/>
      <head-Component></head-Component>
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
        <img src="../assets/index/home.png">
      </div>

    </div>
</template>

<script>
  import headComponent from './head'
    export default {
        name: "third",
      components:{headComponent},
      data(){
          return{
            showImgT:true,
            showImg:true,
            aStyle:{
              width:'93%'
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
    display: inline-block;
    background: url(../assets/bgt.png);
    font-size: 62.5%;
    .head{
      width: 100%;
      height: 50px;
      background: url("../assets/index/title.png") no-repeat;
      background-size: 70% 90%;
      margin-top: 20px;
    }
    .content{
      width: 98%;
      margin-left: 1%;
      border-radius: 3%;
      background-color: rgba(250,250,250,0.4);
      padding-top: 20px;
       .btn{
         width:100%;
         margin-left: -20%;
       .spanOne{
         display: inline-block;
         width:25%;
         height:40px;
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
           font-size: 2em;
           line-height: 40px;
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
          height:180px;
          width:45%;
          margin-left: 3%;
          background-color: white;
          position: relative;
          margin-top: 5%;
          border-radius: 10px;
          span{
            display: inline-block;
            width:100%;
            font-size: 3em;
            font-weight: bolder;
            margin-top: 5%;
           text-align: left;
            text-indent: 20px;
          }
          img{
            height:60px;
            width:60px;
            position: absolute;
            right:10px;
            bottom: 10px;
          }
        }

      }
      .more{
        width:100%;
        display: inline-block;
        height:380px;
        ul{
          width:100%;
          padding-inline-start: 0;
          height:300px;
          list-style: none;
          li{
            float: left;
            width:44%;
            height:40px;
            background-color: white;
            border-radius: 10px;
            text-align: center;
            font-size: 2em;
            margin-left: 4%;
            margin-top: 5%;
            line-height: 40px;
          }
        }
      }
  }
    .home{
      margin-top: 1rem;
      img{
        width: 20%;
      }
    }
  }

</style>
