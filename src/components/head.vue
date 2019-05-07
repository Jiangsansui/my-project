<template>
    <div class="headCo">
      <div class="content">
        <ul>
          <li v-for="(item,index) in list" :key="index" @click="goto(index)">
            <img :src="item.image">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "head",
      data(){
          return{
            list:[
              {
                img:require("../assets/buttonf.png"),
                image:require("../assets/index/1.png"),
                name:"首页"
              },
              {
                img:require("../assets/buttonf.png"),
                image:require("../assets/index/2.png"),
                name:"中心简介"
              },
              {
                img:require("../assets/buttonf.png"),
                image:require("../assets/index/3.png"),
                name:"办事指南"
              },
              {
                img:require("../assets/buttonf.png"),
                image:require("../assets/index/4.png"),
                name:"办事预约"
              },
              {
                img:require("../assets/buttonf.png"),
                image:require("../assets/index/5.png"),
                name:"重大项目"
              }, {
                img:require("../assets/buttonf.png"),
                image:require("../assets/index/6.png"),
                name:"离台评价"
              },
              {
                img:require("../assets/buttonf.png"),
                image:require("../assets/index/7.png"),
                name:"排队取号"
              },
              {
                img:require("../assets/buttonf.png"),
                image:require("../assets/index/8.png"),
                name:"光荣榜"
              }
            ]
          }
      },
      methods:{
          goto(index){
            if(index===0)
            {
              this.$router.push({path:'/'})
            }else if(index===1){
              this.$router.push({path:'/zxjj'})
            }else if(index===2){
              this.$router.push({path:'/bszn'})
            }
            else if(index===3){
              this.$router.push({path:'/bsyy'})
            }
            else if(index===4){
              this.$router.push({path:'/zdxm'})
            }
            else if(index===5){
              this.$router.push({path:'/ltpj'})
            }
            else if(index===6){
              this.$router.push({path:'/pdqh'})
            }else{
                this.$router.push({path:'/grb'})
            }
          }

      }
    }
</script>

<style lang="scss" scoped>
  .headCo{
    width:100%;
    display: inline-block;
    .content{
      width: 100%;
      display: inline-block;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 1%;
      ul{
        width:98%;
        background-color: rgba(255,255,255,0.3);
        border-radius: 30px;
        display: inline-block;
        margin-left: -2%;
        padding-inline-start: 0px;
        padding-bottom:40px;
        li{
          float: left;
          width:22%;
          display: flex;
          flex-direction: row;
          background: url("../assets/buttonf.png") no-repeat;
          background-size: 100% 100%;
          height:80px;
          margin-left: 2%;
          margin-top: 2%;
          border-radius: 30px;
          img{
            height:50px;
            width:50px;
            margin-top: 15px;
            margin-left: 15%;
          }
          span{
            font-size: 4em;
            line-height: 80px;
            margin-left: 2%;
          }

        }
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
    }
    @media only screen and (max-width: 435px){
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
    }
  }
</style>
