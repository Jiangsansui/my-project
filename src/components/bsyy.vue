<template>
  <div class="container">
    <div class="head"></div>
    <hr style="border:0.5px solid white;width:96%"/>
    <head-Component :num="3"></head-Component>
    <p class="text">温馨提示：您可以在5各工作日内进行预约，请点击选择</p>
    <div class="sz">
      <ul>
        <li><span>星期一</span><span>2019-1-1</span></li>
        <li><span>星期二</span><span>2019-1-1</span></li>
        <li><span>星期三</span><span>2019-1-1</span></li>
        <li><span>星期四</span><span>2019-1-1</span></li>
        <li><span>星期五</span><span>2019-1-1</span></li>

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
        <hr style="border:0.5px solid #ffffff;width:96%;margin-top: 2rem"/>
        <ul>
          <li v-for="(item,index) in date" :key="index">
            <span>{{item.date}}</span>
            <span>{{item.first}}</span>
            <span >{{item.second}}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="button">
      <div class="item">
        <span>返回</span>
      </div>
        <div class="item t">
      <span>确定</span>

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
  overflow: hidden;
  .head{
    width: 100%;
    height: 130px;
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
    padding-bottom: 20px;
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
          font-size: 34px;
          line-height: 40px;
          margin-left: 2%;
          color:#222a32;
        }
        span:last-child{
          font-size:28px;
        }
      }
    }
  }
  .footer{
    border-radius: 25px;
    width: 98%;
    height:650px;
    margin-left: 1%;
    background-color: rgba(250,250,250,0.4);
    .one{
      display: flex;
      flex-direction: column;
      width:100%;
      p{
        color:#009ce1;
        text-align: left;
        text-indent: 3em;
        font-size: 30px;
        margin-left: -4rem;
      }
      .ww{
        width:100%;
        display: flex;
        flex-direction: row;
        span{
          display: inline-block;
          width:33%;
          font-size: 30px;
          text-align: center;
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
            font-size: 30px;
            display: inline-block;
            width:33%;
            text-align: center;
            margin-top: 30px;
            line-height: 2rem;
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
      background: url("../assets/index/sure.png");
      margin-left: 10%;
      background-size: 100% 100%;
    }
  }
  .sz{
    margin-top: -2rem;
  }
  .home{
    margin-top: 232px;

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
