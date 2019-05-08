<template>
    <div class="headCo">
      <div class="content">
        <ul>
          <li @click="goto(0)">
            <img src="../assets/buttonf.png" class="aImg" v-if="one">
                   <img src="../assets/index/buttont.png" class="aImg" v-else>
                  <img class="lImg" src="../assets/index/1.png">
                 <span>首页</span>
          </li>
          <li @click="goto(1)">
            <img src="../assets/buttonf.png" class="aImg" v-if="two">
            <img src="../assets/index/buttont.png" class="aImg" v-else>
            <img class="lImg" src="../assets/index/2.png">
            <span>中心简介</span>
          </li>
          <li @click="goto(2)">
            <img src="../assets/buttonf.png" class="aImg" v-if="three">
            <img src="../assets/index/buttont.png" class="aImg" v-else>
            <img class="lImg" src="../assets/index/3.png">
            <span>办事指南</span>
          </li>
          <li @click="goto(3)">
          <img src="../assets/buttonf.png" class="aImg" v-if="four">
          <img src="../assets/index/buttont.png" class="aImg" v-else>
          <img class="lImg" src="../assets/index/4.png">
          <span>办事预约</span>
        </li>
          <li @click="goto(4)">
            <img src="../assets/buttonf.png" class="aImg" v-if="five">
            <img src="../assets/index/buttont.png" class="aImg" v-else>
            <img class="lImg" src="../assets/index/5.png">
            <span>重大项目</span>
          </li>
          <li @click="goto(5)">
            <img src="../assets/buttonf.png" class="aImg" v-if="six">
            <img src="../assets/index/buttont.png" class="aImg" v-else>
            <img class="lImg" src="../assets/index/6.png">
            <span>离台评价</span>
          </li>
          <li @click="goto(6)">
            <img src="../assets/buttonf.png" class="aImg" v-if="seven">
            <img src="../assets/index/buttont.png" class="aImg" v-else>
            <img class="lImg" src="../assets/index/7.png">
            <span>排队取号</span>
          </li>
          <li @click="goto(7)">
            <img src="../assets/buttonf.png" class="aImg" v-if="eight">
            <img src="../assets/index/buttont.png" class="aImg" v-else>
            <img class="lImg" src="../assets/index/8.png">
            <span>光荣榜</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "head",
      props:["num"],
      data(){
          return{
            one:false,
            two:true,
            three:true,
            four:true,
            five:true,
            six:true,
            seven:true,
            eight:true
          }
      },
      created(){
         if(this.num===0)
         {
           this.one=false
           this.two=true
           this.three=true
           this.four=true
           this.five=true
           this.six=true
           this.seven=true
           this.eight=true
         }else if(this.num===1){
           this.one=true
           this.three=true
           this.four=true
           this.five=true
           this.six=true
           this.seven=true
           this.eight=true
           this.two=false
         }else if(this.num===2){
           this.one=true
           this.two=true
           this.three=false

         }else if(this.num===3){
           this.one=true
           this.two=true
           this.three=true
           this.four=false

         }
         else if(this.num===4){
           this.one=true
           this.two=true
           this.three=true
           this.four=true
           this.five=false

         }
         else if(this.num===5){
           this.one=true
           this.two=true
           this.three=true
           this.four=true
           this.five=true
           this.six=false

         }
         else if(this.num===6){
           this.one=true
           this.two=true
           this.three=true
           this.four=true
           this.five=true
           this.six=true
           this.seven=false

         }
         else if(this.num===7){
           this.one=true
           this.two=true
           this.three=true
           this.four=true
           this.five=true
           this.six=true
           this.seven=true
           this.eight=false
         }
      },
      methods:{
          goto(index){
            if(index===0)
            {
              this.one=!this.one
              this.$router.push({path:'/'})
            }else if(index===1){
              this.two=!this.two
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
          background-size: 100% 100%;
          height:80px;
          margin-left: 2%;
          margin-top: 2%;
          position: relative;
          .lImg{
            height:25px;
            width:25px;
            margin-top: 15px;
            margin-left: 15%;
            z-index: 999;
          }
          span{
            font-size: 2em;
            margin-left: 2%;
            z-index: 9999;
            display: inline-block;
            width:50%;
          }
          .aImg{
            width:100%;
            height:100%;
            position: absolute;
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
          padding-bottom:10px;
          padding-top: 5px;
          border-radius: 15px;
          li{
            width:22.5%;
            height:40px;
            img{
              height:20px;
              width:20px;
              margin-top: 7.5px;
              margin-left: 7%;
            }
            span{
              font-size: 1em;
              width:60%;
              height:100%;
              line-height: 50px;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 375px){
      .content{
        ul{
          margin-top: 0.2rem;
          li{

            .lImg{
              height:20px;
              width:20px;
            margin-top: 0.6em;
            }
            span{
              font-size: 1em;
              line-height: 35px;
              margin-left: 2%;
              width:100%;
            }
            .aImg{
              margin-top: -0.1rem;
              width:100%;
              height:100%;
              position: absolute;
            }
          }
        }
      }
    }


  }
</style>
