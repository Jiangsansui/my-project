<template>
  <div class="container">
    <div class="head"></div>
    <hr style="border:0.5px solid white;width:96%"/>
    <head-Component></head-Component>
    <p class="text">温馨提示：您可以在5各工作日内进行预约，请点击选择</p>
    <div class="sz">
      <ul>
        <li><span>星期一</span><span>2019-1-1</span></li>
        <li><span>星期一</span><span>2019-1-1</span></li>
        <li><span>星期一</span><span>2019-1-1</span></li>
        <li><span>星期一</span><span>2019-1-1</span></li>
        <li><span>星期一</span><span>2019-1-1</span></li>

      </ul>
    </div>
    <div class="footer">
      <div class="one">
        <p>当前选中时间10:00-11:00</p>
        <div class="ww">
          <span>时间段</span>
          <span class="a">可预约人数</span>
          <span>已预约人数</span>
        </div>
      </div>
      <div class="two">
        <hr style="border:0.5px solid #ffffff;width:96%"/>
        <ul>
          <li v-for="(item,index) in date" :key="index">
            <span>{{item.date}}</span>
            <span class="spanCen">{{item.first}}</span>
            <span class="spanRig">{{item.second}}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="button">
      <div class="item">
        <span>返回</span>
      </div>
        <div class="item t">
      <span>返回</span>
    </div>
  </div>
      <img class="home" src="../assets/index/home.png">
  </div>
</template>

<script>
  import headComponent from './head'
export default {
  name: 'HelloWorld',
  data () {
    return {
      date:[
        {
          date:"09:00-10:00",
          first:"4",
          second:"2"
      },
        {
          date:"09:00-10:00",
          first:"4",
          second:"5"
        },
        {
          date:"09:00-10:00",
          first:"4",
          second:"5"
        },
        {
          date:"09:00-10:00",
          first:"4",
          second:"5"
        },
        {
          date:"09:00-10:00",
          first:"4",
          second:"5"
        }
      ]
    }
  },
  components:{headComponent}
}
</script>
<style lang="scss" scoped>
.container{
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
  .text{
    width:95%;
    margin-left: 2.5%;
    text-align: left;
    font-family:"Microsoft YaHei-BOLD";
    font-size: 36px;
    color:#ffffff;
    font-weight: bolder;
    letter-spacing: 2px;
  }
  .sz{
    width: 100%;
    display: inline-block;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 1%;
    ul{
      width:98%;
      padding-bottom: 20px;
      display: inline-block;
      margin-left: -4%;
      padding-inline-start: 0px;
      li{
        float: left;
        width:18%;
        display: flex;
        flex-direction: column;
        background: url("../assets/buttonf.png") no-repeat;
        background-size: 100% 90%;
        height:100px;
        margin-left: 2%;
        margin-top: 2%;
        span{
          font-size: 28px;
          line-height: 40px;
          margin-left: 2%;
          color:#222a32;
        }
      }
    }
  }
  .footer{
    border-radius: 25px;
    width: 98%;
    height:550px;
    margin-left: 1%;
    background-color: rgba(250,250,250,0.4);
    .one{
      display: flex;
      flex-direction: column;
      width:100%;
      p{
        text-align: left;
        text-indent: 3em;
        font-size: 4em;
      }
      .ww{
        width:100%;
        display: flex;
        flex-direction: row;
        span{
          display: inline-block;
          width:33%;
          font-size: 3em;
        }
      }
    }
    .two{
      position: absolute;
      width: 98%;
      ul{
        width: 98%;
        display: inline-block;
        margin-left: 1%;
        margin-top:-0.5rem;
        list-style: none;
        padding-inline-start: 0px;
        li{
          display: flex;
          flex-direction: row;
          width:100%;
          height:90px;
          span{
            font-size: 4em;
            display: inline-block;
            width:33%;
            text-align: left;
            text-indent: 4rem;
            margin-top: 30px;
            line-height: 2rem;
          }
          .spanCen{
             text-indent: 7rem;
          }
          .spanRig{
            text-indent: 9rem;
          }
        }
      }
    }
  }
  .button{
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
  .item{
    width:30%;
    height:100px;
    display: flex;
    flex-direction: column;
    background: url("../assets/index/comeback.png");
    background-size: 100% 100%;
    margin-left: 15%;
    span{
      line-height: 100px;
      font-size: 5em;
    }
}
    .t{
      margin-left: 10%;
    }
  }
  .sz{
    margin-top: -2rem;
  }
  .home{
    margin-top: 70px;
  }

  @media only screen and (max-width: 435px){
      .head {
        height: 50px;
      }
  .content{
    ul{
      padding-bottom:20px;
      padding-top: 10px;
      border-radius: 15px;
      li{
        width:22.5%;
        height:40px;
        img{
          height:25px;
          width:25px;
          margin-top: 7.5px;
          margin-left: 7%;
        }
        span{
          font-size: 1.5em;
          line-height: 40px;
        }
      }
    }
  }
    .text{
      font-size: 2.2em;
    }
    .sz{
      ul{
        padding-bottom:20px;
        padding-top: 10px;
        li{
          width:18%;
          height:40px;
          border-radius: 10px;
          img{
            height:25px;
            width:25px;
            margin-top: 7.5px;
            margin-left: 7%;
          }
          span{
            font-size: 1.5em;
            line-height: 20px;
          }
        }
      }
    }
    .footer{
      height:250px;
      hr{
        margin-top: -3rem;
      }
      .one{
         p{
           font-size: 2em;
         }
        .ww{
          span{
            font-size: 1.5em;
          }
        }
      }
      .two{
        margin-top: 60px;
       ul{
         li{
           height:40px;
           span{
             font-size:1.5em;
             width: 25%;
             text-indent: 1rem;
           } } } }
      .button{
        img{
          width: 100px;
          height:50px;
        }
      }
    }
    .button{
     .item{
       height:60px;
       span{
         line-height: 60px;
         font-size: 2em;
       }
     }
    }
    .home{
      height:50px;
      width:100px;
    }
  }
  @media only screen and (max-width: 375px){
    .text{
      font-size: 1.8em;
      width:100%;
    }
  }
  @media only screen and (max-width: 360px){
    .text{
      font-size: 1.3em;
    }
  }
  @media only screen and (max-width: 768px){
    .content{
      ul{
        li{
         span{
           font-size: 3em;
         }
        }
      }
    }
    .text{
      width: 100%;
      font-size: 26px;
    }
    .sz{
      ul{
        padding-bottom: 5px;
        li{
        background-size: 100% 70%;
        span{
          font-size: 24px;
        }
          span:last-child{
            margin-top: -0.5rem;
            font-size: 18px;
          }
        }
      }
    }
    .footer{
      border-radius: 20px;
.one{
  p{
    margin-left: -3rem;
  }

} }
  }
  @media only screen and (max-width: 375px){
    .content{
      ul{
        li{
          span{
            font-size: 1em;
          }
        }
      }
    }
    .text{
      width: 100%;
      font-size: 12px;
    }
    .sz{
      ul{
        padding-bottom: 5px;
        li{
          background-size: 100% 90%;
          span{
            font-size: 15px;
          }
          span:last-child{
            line-height: 2rem;
            font-size: 10px;
          }
        }
      }
    }
    .footer{
      height: 300px;
      border-radius: 15px;
      .one{
        p{
          margin-left: -1.5rem;
        }

      }

    }
      .button{
      margin-top: 20px;
      .item{
        width: 35%;
        height:50px;
        margin-left: 10%;
      }
    }
  }
  @media only screen and (max-width: 414px){
    .content{
      ul{
        li{
          span{
            font-size: 1em;
          }
        }
      }
    }
    .text{
      width: 100%;
      font-size: 1rem;
    }
    .sz{
      ul{
        padding-bottom: 5px;
        li{
          background-size: 100% 90%;
          span{
            font-size: 15px;
          }
          span:last-child{
            line-height: 2rem;
            font-size: 10px;
          }
        }
      }
    }
    .footer{
      height: 300px;
      border-radius: 15px;
      .one{
        p{
          margin-left: -1.5rem;
        }

      }

    }
  }
  @media only screen and (max-width: 414px){
    .content{
      ul{
        li{
          width:24%;
          margin-left: 1%;
        }
      }
    }
    .text{
      width: 100%;
      font-size: 0.8rem;
    }
    .sz{
      ul{
        li{
          background-size: 100% 90%;
          span{
            font-size: 12px;
          }
        }
      }
    }
    .footer{
      height: 300px;
      border-radius: 15px;
      .one{
        p{
          margin-left: -1.5rem;
        }

      }
      .two{
        ul{
          margin-left: -1rem;
          margin-top:-1.5rem;
          li{
            span{
              width: 29%;
            }
            .spanCen{
              text-indent: 4rem;
            }
            .spanRig{
              text-indent: 5rem;
            }
          }
        }
      }

    }
  }
}


</style>
