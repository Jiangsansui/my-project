<template>
  <div class="container">
    <div class="head"></div>
    <hr style="border:0.5px solid white;width:96%"/>
    <head-Component :num="0"></head-Component>
    <div class="content">
      <div class="contentOne">
        <div class="event">
          <div class="one">
            <p>受理编号:</p>
            <input type="text" @click="changeT" v-model="value">
          </div>

         <div class="two">
           <p>查询密码:</p>
           <input @click="change" type="text" v-model="psd">
         </div>
        </div>
        <div class="numbgt" v-if="isPsd">
          <ul>
            <li v-for="(item,index) in num" :key="index" @click="handle(item.name)">
              <span>{{item.name}}</span>
            </li>
            <li @click="de">
              <span>删除</span>
            </li>
          </ul>
        </div>
        <div class="numbgt" v-else >
          <ul>
            <li v-for="(item,index) in num" :key="index" @click="handleb(item.name)">
              <span>{{item.name}}</span>
            </li>
            <li @click="de">
              <span>删除</span>
            </li>
          </ul>
        </div>
        <div class="button">
          <span>查询</span>
          <img src="../assets/index/sure.png">
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item,index) in leftList" :key="index"><img :src="item.imgPath" ><span>{{item.name}}</span></li>
        </ul>
      </div>
      <div class="gs">
        <img src="../assets/jianjie.png" alt="">
        <div class="rightCon">
        <p>办件公示</p>
          <ul>
            <li v-for="(item,index) in rightList" :key="index" :style="index%2===0?bgStyle:''">
              <span>{{item.num}}</span>
              <span>{{item.status}}</span>
            </li>
          </ul>
        </div>
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
        name: "fifth",
      data(){
        return{
          isPsd:true,
          value:'',
          psd:'',
          bgStyle:{
            backgroundColor:'#f5f5f5'
          },
          num:[
            {
              name:"1"
            },
            {
              name:"2"
            },
            {
              name:"3"
            },
            {
              name:"4"
            },
            {
              name:"5"
            },
            {
              name:"6"
            },
            {
              name:"7"
            },{
              name:"8"
            },{
              name:"9"
            },
            {
              name:"0"
            },
            {
              name:"X"
            }
          ],
          leftList:[
            {imgPath:require("../assets/1.png"),name:"办事进度查询"},
            {imgPath:require("../assets/2.png"),name:"办事进度查询"},
            {imgPath:require("../assets/3.png"),name:"办事进度查询"},
            {imgPath:require("../assets/4.png"),name:"办事进度查询"},
            {imgPath:require("../assets/5.png"),name:"办事进度查询"},
            {imgPath:require("../assets/6.png"),name:"办事进度查询"},
            {imgPath:require("../assets/7.png"),name:"办事进度查询"}
          ],
          rightList:[
            {num:"办件编号",status:"状态"},
            {num:"10254510",status:"已办结"},
            {num:"10254510",status:"已办结"},
            {num:"10254510",status:"已办结"},
            {num:"10254510",status:"已办结"},
            {num:"10254510",status:"已办结"},
            {num:"10254510",status:"已办结"}
          ]
        }
      },
      components:{headComponent},
      methods:{
          changeT(){
            this.isPsd=true
          },
          change(){
            this.isPsd=false
          },
          handle(val){
          this.value=this.value.concat(val)
          },
        handleb(val){
            this.psd=this.psd.concat(val)
        },
        de(){
          this.value=''

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
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 1%;
      border-radius: 3%;
      background-color: rgba(250, 250, 250, 0.4);
      padding-bottom: 10px;
      .contentOne{
        width: 58%;
        display: inline-block;
        margin-left: 2.5%;
        .event{
          font-family: "Microsoft YaHei";
          margin-left: 2%;
          margin-top: 5%;
          width: 100%;
          height: 70px;
          background-color: white;
          border-radius: 10px;
          .one{
            width: 100%;
            height: 50%;
            p{
              color: #222a32;
              float: left;
              margin-inline-start: 0.6rem;
            }
            input{
              outline: none;
              width: 70%;
              height:96%;
              border: none;
            }
          }
          .one:after{
            content: '';
            position: absolute;
            left: 0;
            display: inline-block;
            width:233px;
            background-color: #e5e6e7;
            height:1px;
            margin-left: 20px;
            margin-top: 36px;
          }
          .two{
            width: 100%;
            height: 50%;
            p{
              color: #222a32;
              float: left;
              margin-left: -3.1rem;
            }
            input{
              outline: none;
              width: 70%;
              height:90%;
              border: none;
            }
           }
        }
        .numbgt{
          border-radius: 10px;
          width: 100%;
          height: 160px;
          background-color: rgba(255,255,255,0.8);
          margin-left: 2%;
          margin-top: 0.5rem;
          ul{
            margin-top: 3%;
            width: 98%;
            display: inline-block;
            padding-inline-start: 0px;
            li{
              list-style: none;
              float: left;
              width: 20%;
              height: 40px;
              background: url("../assets/numbgt.png");
              background-size: 100% 100%;
              margin-left: 1.5%;
              line-height: 3rem;
              padding:2% 1.5%;
            }
            span{
              font-size: 3em;
              color: #ffffff;
            }
          }
        }
        .button{
          margin-top: 0.5rem;
          span{
            position: absolute;
            color: #fefefe;
            font-size: 1rem;
            margin-left: 2.6rem;
            line-height: 30px;

          }
          img{
            width: 50%;

          }
        }
      }
      .right{
        width:35%;
        margin-left: 2.5%;
        display: inline-block;
        ul{
          padding-inline-start:0;
          width:100%;
          list-style: none;
          li{
            width:80%;
            display: flex;
            flex-direction: row;
            background-color: white;
            border-radius: 10px;
            margin-left: 10%;
            padding-left: 5px;
            padding-right: 5px;
            padding-top: 6px;
            padding-bottom: 1px;
            margin-top: 8%;
            img{
              height:20px;
              width:20px;
              margin-left: 2%;
            }
            span{
              font-size: 1.5em;
              line-height: 24px;
              margin-left: 2%;
              margin-top: -0.2rem;
            }
          }
        }
      }
      .gs{
        display: flex;
        flex-direction: row;
        width:95%;
        height: 193px;
        margin-left: 2.5%;
        background-color: white;
        img{
          width:58%;
          height:100%;
        }
        .rightCon{
          width:42%;
          display: flex;
          flex-direction: column;
          padding-top: 2px;
          p{
            color:#009ce1;
            font-weight: bolder;
            font-size: 3em;
            margin-block-start: 0;
            margin-block-end: 0;
          }
          ul{
            width:100%;
            padding-inline-start:0;
            display: inline-block;
            li{
              width:100%;
              display: flex;
              flex-direction: row;
              span{
                display: inline-block;
                width:50%;
                height:22px;

              }
            }
          }
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

    @media only screen and (max-width: 375px){
      .content{
        .contentOne{
          .event{
            .one{
              input{
                width: 66%;
                height: 86%;
                margin-top: 0.1rem;
                border-radius: 5px;
              }
            }
            .two{
              input{
                width: 66%;
                height: 86%;
                margin-top: 0.1rem;
                border-radius: 5px;
              }
            }

          }
          .numbgt{
            height: 140px;
            ul{
              margin-top: 3%;
              width: 98%;
              li{
                width: 18%;
                height: 30px;
                line-height: 2rem;
                padding:3% 2.5%;
              }
              span{
                font-size: 2.5em;
              }
            }
          }
          .button{
            span{
              margin-left: 2.3rem;
            }
          }
        }
      }
      .home{
        margin-top: -1.2rem;
        p{
          font-size: 0.8rem;
          margin-left: 2rem;
        }
        p:last-child{
          margin-right: 2rem;
        }
        img{
          width: 55px;
          height: 30px;
          margin-top: 2.4rem;
          margin-left: -6.6rem;
        }
      }
    }
  }

</style>
