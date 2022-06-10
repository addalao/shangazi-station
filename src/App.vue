<template>
  <div class="appNav">
    <div class="Navbox" @mouseleave="fn.navBoxleave">
      <!-- --------大屏导航栏 -->
      <div class="logo max">
        <img src="./assets/logo1.png" alt="">
      </div>
      <!-- 头部导航栏 -->
      <div class="option max">
        <!-- 导航栏 -->
        <div 
          class="opItem" 
          v-for="(item,index) in data.navList" 
          :key="index"  
          @mouseenter="fn.navSelected(index)"
          @mouseleave="fn.navLeave"
          @click="fn.navClick(item,index)"
          :class="{navSelected:data.showIndex === index}"
        >
          <div class="name">{{item.naem}}</div>
          <div class="eName">{{item.eName}}</div>
          <!-- 二级导航栏 -->
          <div class="ChildrenBox" v-show="data.cNavindex === index">
            <div 
              class="ChildrenItem" 
              v-for="(citem,cindex) in item.children" 
              :class="{SelectedChildren:data.ChildrenshowIndex === cindex}"
              :key="cindex"
              @mouseenter="fn.navChildrenshowIndex(cindex)"
            >
              {{citem.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="loginstate max">
        <div class="login" v-if="!data.islogin">
          <div class="name">登录</div>
          <div class="eName">Login</div>
        </div>
        <div class="register"  v-if="!data.islogin">
          <div class="name">注册</div>
          <div class="eName">Registration</div>
        </div>
        <div class="LoggedIn"  v-if="data.islogin">
          <div class="name">邮箱。。</div>
          <div class="eName">会员账号已登录</div>
        </div>
      </div>
      <!-- --------- -->

      <!-- 小屏导航栏 -->
      <img @click="fn.changeNav"  src="./assets/topNavleft.png" class="leftNav mni" alt="">
      <div class="title mni">{{store.state.home.Navtitle}}</div>
      <img  src="./assets/logo1.png" class="mniLogo mni" alt="">
      <!-- 遮罩 -->
      <div @click="fn.changeNav" class="Mask" v-show="data.isShowMask"></div>
      <!-- 右侧导航栏 -->
      <div class="mniLeftNavList  mni" :class="{clickNav:data.isShowMask}">
          <div class="goBack" @click="fn.changeNav">
            <img src="./assets/back.png" alt="">
            <span>导航</span>
          </div>
          <div class="listItem" v-for="(item,index) in data.navList"  @click="fn.leftnavclick(item,index)" >
            <span>{{item.naem}}</span>
            <div class="greenBlock" v-show="data.showIndex === index"></div>
          </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive } from 'vue'
import store from './store'
import { useRouter } from 'vue-router';
export default {
  name: 'App',
  components: {
   
  },
  setup(){
    
    const router = useRouter()

    const data = reactive({
      navList:[
        {naem:'首页',eName:'Home',link:'/'},
        {
          naem:'关于我们',
          eName:'About Us',
          children:[
            {name:'联系我们'},
          ],
          link:'/aboutUs'
        },
        {naem:'新闻中心',eName:'News',link:'/News'},
        {
          naem:'产品中心',
          eName:'Product Center',
          children:[
            {name:'土地监测'},
            {name:'控制设备'},
            {name:'气象环境'},
            {name:'水产水质'},
            {name:'生长监测'},
          ],
          link:'/productCenter'
        },
        {
          naem:'农场方案',
          eName:'Farm Program',
          children:[
            {name:'智慧农场方案'},
            {name:'智慧养殖方案'},
            {name:'智慧水产方案'},
            {name:'溯源系统'},
          ],
          link:'/farmProgram'
        },
        {naem:'山嘎子生态',eName:'Ecology',link:'/ecology'},
        {naem:'智慧云平台',eName:'Cloud Platform',link:'/cloudPlatform'},
        {naem:'下载中心',eName:'Download Center',link:'downloadCenter'},
        {
          naem:'加盟合作',
          eName:'Cooperation',
          children:[
            {name:'会员中心'}
          ],
          link:'/cooperation'
        },
      ],
      //导航鼠标移入
      showIndex:0,
      //二级菜单鼠标移入
      ChildrenshowIndex:0,
      //是否已经登录
      islogin:false,
      // 遮罩是否打开
      isShowMask:false,
      cNavindex:-1,
    })
    const fn = reactive({
      //导航鼠标移入
      navSelected:(index) => {
         data.showIndex = index
         data.cNavindex = index
      },
       //导航鼠标移出
      navLeave:() => { 
        data.showIndex = store.state.home.navId   
        
      },
      navClick:(item,index) => { 
        store.commit('setNavid',index)
        router.push(item.link)
      },
       //二级菜单鼠标移入
      navChildrenshowIndex:(index) => { 
         data.ChildrenshowIndex = index
      },
      changeNav:() => { 
        data.isShowMask = !data.isShowMask
      },
      navBoxleave:() => { 
        data.cNavindex = -1
      },
      leftnavclick:(item,index) => { 
        data.showIndex = index
        data.cNavindex = index
        fn.changeNav()
        router.push(item.link)
        store.commit('setNavtitle',item.naem)
      }
    })
    //静态配置项
    const config = {}
    return {
      data,
      fn,
      config,
      store
    }
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  
}
</style>
<style lang="less" scoped>
//小屏
 @media only screen and (min-width:0px) and(max-width:1100px) {
   .max {
     display: none !important;
   }
   .appNav {
    position: relative;
    min-height: 500px;
    .Navbox {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 88px;
      background:  rgba(12, 57, 71, 0.3);
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      .leftNav {
        width: 27px;
        height: 21px;
        margin-left: 27px;
        cursor: pointer;
      }
      .title {
        font-size: 16px;
        color: white;
      }
      .mniLogo {
        width: 29px;
        height: 27px;
        margin-right: 27px;
      }
      .Mask {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(12, 57, 71, 0.6);
        backdrop-filter: blur(4px);
        z-index: 10;
      }
      .mniLeftNavList {
        position: fixed;
        width: 120px;
        display: flex;
        flex-direction: column;
        padding: 53px 20px 0 20px ;
        background: white;
        top: 0;
        bottom: 0;
        left: -180px;
        z-index: 9999;
        transition: 0.3s;
        .goBack {
          display: flex;
          align-items:center;
          color: black ;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 30px;
          cursor: pointer;
          img {
            width: 13px;
            height: 10ox;
            margin-right: 11px;
          }
        }
        .listItem {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(2, 9, 28, 0.6);
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(2, 9, 28, 0.15);
          cursor: pointer;
          .greenBlock {
            width: 10px;
            height: 10px;
            background: #4DB458;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            transform: rotate(45deg);
          }
        }
      }
      .clickNav {
         left: 0px;
      }
    }
  }
 }
 //大屏
 @media only screen and (min-width:1101px) {
   .mni {
     display: none !important;
   }
  .appNav {
    position: relative;
    min-height: 500px;
    .Navbox {
      position: absolute;
      top: 0;
      width: 100%;
      height: 98px;
      background:  rgba(12, 57, 71, 0.3);
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 392px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img {
          width: 40px;
          height: 36px;
        }
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1084px;
        .opItem {
          width: 110px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-right: 46px;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
          .name {
            margin-bottom: 10px;
            font-size: 16px;
            white-space: nowrap;
          }
          .eName {
            font-size: 12px;
            white-space: nowrap;
          }
          .ChildrenBox {
            position: absolute;
            bottom: 0;
            transform: translateY(100%);
            background:  rgba(12, 57, 71, 0.3);
            .ChildrenItem {
              width: 110px;
              height: 44px;
              font-size: 14px;
              color: rgba(255, 255, 255, 1);
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .SelectedChildren {
              background:  rgba(77, 180, 88, 0.6);
            }
          }
        }
        .navSelected {
          color: rgba(235, 255, 0, 1);
        }
      }
      .loginstate {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 57px;
        color: white;
        .login {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 48px;
          .name {
            margin-bottom: 10px;
            font-size: 16px;
            white-space: nowrap;
          }
          .eName {
            font-size: 12px;
            white-space: nowrap;
          }
        }
        .register {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          .name {
            margin-bottom: 10px;
            font-size: 16px;
            white-space: nowrap;
          }
          .eName {
            font-size: 12px;
            white-space: nowrap;
          }
        }
        .LoggedIn {
          display: flex;
          flex-direction: column;
          align-items: center;
           margin-right: 48px;
          .name {
            margin-bottom: 10px;
            font-size: 16px;
            white-space: nowrap;
          }
          .eName {
            font-size: 12px;
            white-space: nowrap;
          }
        }
      }
    }
  }
 }
  

</style>
