<template>
    <div class="container">
      <div class="head"></div>
      <hr style="border:0.5px solid white;width:96%"/>
      <head-Component></head-Component>
      <div class="content">
         <div class="jt" v-for="(item,index) in list" :key="index">
            <p>{{item.name}}</p>
             <div class="one">
               <ul>
                <li v-for="(j,index) in item.content" :key="index">
                   <span>{{j.num}}</span>
                   <span class="a">{{j.name}}</span>
                </li>
               </ul>
         </div>
        </div>
        <div class="jtt" v-for="item in text" >
               <p>{{item.name}}</p>
          <div class="two">
<ul>
  <li v-for="(t,index) in item.text" :key="index">
    <p>{{t.name}}</p>
    <p>{{t.addr}}</p>
  </li>
</ul>
          </div>
        </div>
      </div>
      <img class="home" src="../assets/index/home.png">
    </div>
</template>

<script>
  import headComponent from './head'
    export default {
        name: "fourth",
      data(){
          return{
            list:[
              {
                name:"2018年8月标兵窗口",
                content:[
                  {
                    num:"TOP1",
                    name:"商务局"
                  },
                  {
                    num:"TOP2",
                    name:"商务局",
                  },
                  {
                    num:"TOP2",
                    name:"商务局"
                  },
                  {
                    num:"TOP2",
                    name:"商务局"
                  },
                  {
                    num:"TOP2",
                    name:"商务局"
                  }

                ]
              },
              {
                name:"2018年8月先进窗口",
                content:[
                  {
                    num:"TOP1",
                    name:"商务局"
                  },
                  {
                    num:"TOP2",
                    name:"商务局",
                  },
                  {
                    num:"TOP2",
                    name:"商务局"
                  },
                  {
                    num:"TOP2",
                    name:"商务局"
                  },
                  {
                    num:"TOP2",
                    name:"商务局"
                  }

                ]
              }
            ],
            text:[
              {
                name:"2018年8月服务标兵",
                text:[
                  {
                    name:"清大科技",
                    addr:"市场监督局"
                  },
                  {
                    name:"清大科技",
                    addr:"市场监督局"
                  },
                  {
                    name:"清大科技",
                    addr:"市场监督局"
                  },
                  {
                    name:"清大科技",
                    addr:"市场监督局"
                  }
                ]
              },
              {
                name:"2018年8月优秀员工",
                text:[
                  {
                    name:"清大科技",
                    addr:"市场监督局"
                  },
                  {
                    name:"清大科技",
                    addr:"市场监督局"
                  },
                  {
                    name:"清大科技",
                    addr:"市场监督局"
                  },
                  {
                    name:"清大科技",
                    addr:"市场监督局"
                  }
                ]
              }
            ]
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
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 1%;
      border-radius: 3%;
      background-color: rgba(250, 250, 250, 0.4);
      padding-bottom: 30px;
      .jt {
        width:45%;
        display: inline-block;
        margin-left: 3%;
        p {
          font-size: 1.2rem;
          margin-left: 0.4rem;
        }
        .one {
          width: 100%;
          height: 200px;
          margin-left: 1%;
          border-radius: 10px;
          background-color: #ffffff;
          ul {
            margin-top: -0.5rem;
            width: 76%;
            height: 20px;
            margin-left: 1%;
            list-style: none;

            li {
              margin-top: 1rem;
              font-family: "Microsoft YaHei-BOLD";
              color: #efb54d;
              float: left;
              width: 100%;
              display: flex;
              flex-direction: row;

              span {
                font-size: 1rem;
                margin-left: -2rem;
              }

              .a {
                margin-left: 1rem;
              }
            }
          }
        }
      }
    }
    .jtt {
      width: 100%;
      display: inline-block;
      margin-left: 3%;

      p {
        font-size: 1.2rem;
        float: left;
        margin-left: 0.4rem;
      }

      .two {
        width: 100%;
        ul{
          list-style: none;
          width: 98%;
          height: 100px;
          margin-top: 3rem;
          border-radius: 8px;
          display: flex;
          flex-direction: row;
          padding-inline-start: 0px;
          li{
            font-family: "Microsoft YaHei-BOLD";
            color: #efb54d;
            background-color: #ffffff;
            width:22%;
            border-radius: 5px;
            margin-left: 2%;
            p{
              margin-top: 2rem;
              font-size: 1rem;
              line-height: 1rem;
              color: #222a32;
            }
            p:last-child{
              margin-top: -0.5rem;
              font-size:0.5rem;
              color: #9b9c9d;
            }
          }
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
