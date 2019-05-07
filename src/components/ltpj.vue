<template>
  <div class="container">
    <div class="head"></div>
    <hr style="border:0.5px solid white;width:96%"/>
    <head-Component></head-Component>
    <div class="content">
    <p class="text">温馨提示：只能评价当前办理的业务</p>
   <div class="event">
     <p >身份证号:</p>
     <input type="text" v-model="value">
   </div>
      <div class="numbgt">
        <ul>
          <li v-for="(item,index) in num" :key="index" @click="handle(item.name)">
            <span>{{item.name}}</span>
          </li>
          <li @click="de">
            <span>删除</span>
          </li>
        </ul>
      </div>
      <div class="button">
        <div class="item">
          <span>返回</span>
        </div>
        <div class="item t">
          <span>确定</span>
        </div>
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
        name: "second",
      data(){
          return{
            value:'',
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
            ]
          }
      },
      components:{headComponent},
     methods:{
       handle(val){
         this.value=this.value.concat(val)
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
    .head{
      width: 100%;
      height: 50px;
      background: url("../assets/index/title.png") no-repeat;
      background-size: 70% 90%;
      margin-top: 20px;
    }
.content{
  width: 98%;
  height: 450px;
  margin-left: 1%;
  border-radius: 3%;
  background-color: rgba(250,250,250,0.4);
  .text{
    position: absolute;
    font-size: 2.5em;
    font-family: "Microsoft YaHei-BOLD";
    color: #feffff;
  }
  .event{
    font-family: "Microsoft YaHei";
    position: absolute;
    margin-left: 10%;
    margin-top: 15%;
    width: 80%;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    p{
      color: #999999;
      float: left;
      margin-inline-start: 5px;
      line-height: 25px;
    }
    input{
      outline: none;
      width: 75%;
      height: 95%;
      border: none;
    }
  }
  .numbgt{
    border-radius: 10px;
    position: absolute;
    width: 70%;
    height: 200px;
    background-color: rgba(255,255,255,0.8);
    margin-top: 10rem;
    margin-left: 15%;
ul{
  width: 98%;
  display: inline-block;
  padding-inline-start: 0px;
  li{
    list-style: none;
    float: left;
    width: 23%;
    height: 50px;
    background: url("../assets/numbgt.png");
    background-size: 100% 100%;
    margin-left: 1.5%;
    line-height: 3rem;
    margin-top: 0.5rem;
}
  span{
    font-size: 4em;
    color: #ffffff;

  }
}
  }
  .button{
    position: absolute;
    margin-top: 380px;
    width: 100%;
    display: flex;
    flex-direction: row;
    .item{
      width:40%;
      height:50px;
      display: flex;
      flex-direction: column;
      background: url("../assets/index/comeback.png");
      background-size: 100% 100%;
      margin-left: 5%;
      span{
        line-height: 60px;
        font-size: 3em;
      }
    }
    .t{
      background-size: 100% 100%;
      background: url("../assets/index/sure.png");
      margin-left: 10%;
      border-radius: 17px;
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
