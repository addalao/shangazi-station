<template>
  
  <div class="index">
        <!-- 轮播 -->
        <div class="banner swiper">
            <swiper
                class="img-view move"
                :modules="modules"
                :slides-per-view="1"
                :space-between="50"
                :loop="true"
                :pagination="pagination"
                :autoplay='{
                    delay: 4500,
                    disableOnInteraction: false,
                }'
                @swiper="fn.onSwiper"
                @slideChange="fn.onSlideChange"
            >
            
                <swiper-slide v-for="(item,index) in data.swiperList" :key="item.id">
                        <img   src="../assets/topBanner.png" alt="" />
                </swiper-slide>
            </swiper>
        </div>
        <!-- 三个按钮 -->
        <div class="threeBtn">
            <div class="imgbtn" v-for="item in data.threeBtnList">
                <div class="img">
                    <img src="../assets/therebtn1.png" alt="">
                    
                </div>
                <div class="text">
                    <div class="name">
                        {{item.name}}
                    </div>
                    <div class="btninfo">
                        {{item.info}}
                    </div>
                </div>
            </div>
        </div>
        <!-- 欢迎来到 -->
        <div class="welcome">
            <div class="welcomeTitle">
                <div class="cname">
                    <span>欢迎来到</span>
                    <span class="colortext">智慧农业</span>
                </div>
                <div class="ename">
                    Welcome to Smart Agriculture
                </div>
            </div>
            <div class="infoExhibition">
                <div class="img">
                    <img src="../assets/infoExhibition1.png" alt="">
                </div>
                <div class="blockCollection">
                    <div class="option">
                        <img class="optinIocn" src="../assets/optinIocn1.png" alt="">
                        <div class="optionName">丰富经验</div>
                        <div class="optionEname">Experience</div>
                        <div class="optionInfo">数十国家省市级智慧农业项目，高标准农业示范基地建设.</div>
                    </div>
                    <div class="option">
                        <img class="optinIocn" src="../assets/optinIocn1.png" alt="">
                        <div class="optionName">丰富经验</div>
                        <div class="optionEname">Experience</div>
                        <div class="optionInfo">数十国家省市级智慧农业项目，高标准农业示范基地建设.</div>
                    </div>
                    <div class="option">
                        <img class="optinIocn" src="../assets/optinIocn1.png" alt="">
                        <div class="optionName">丰富经验</div>
                        <div class="optionEname">Experience</div>
                        <div class="optionInfo">数十国家省市级智慧农业项目，高标准农业示范基地建设.</div>
                    </div>
                    <div class="option">
                        <img class="optinIocn" src="../assets/optinIocn1.png" alt="">
                        <div class="optionName">丰富经验</div>
                        <div class="optionEname">Experience</div>
                        <div class="optionInfo">数十国家省市级智慧农业项目，高标准农业示范基地建设.</div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 我们的服务 -->
        <div class="weService">
            <div class="title">
                <div class="name">
                    我们的<span>服务</span>
                </div>
                <div class='ename'>Our Services</div>
            </div>
            <!-- <img src="" alt=""> -->
            <div class="imglist">
               <div class="seizeSeat max"></div>
               <div class="imgs" v-for="(item,index) in data.ServiceList" :key="index">
                    <div class="circular">
                        <span class="name">{{item.name}}</span>
                        <span class="ename">{{item.ename}}</span>
                    </div>
                    <img src="../assets/Servicesbk1.png" alt="">
               </div>
               <img class="max" src="../assets/right.png" alt="">
            </div>
        </div>
        <!-- 农场方案 -->
        <div class="farm">
            <div class="title">
                <div class="name">
                   <span>农场</span>方案
                </div>
                <div class='ename max'>Farm Program</div>
            </div>
            <div class="imgList">
                <div class="imgBox" v-for="(item,index) in data.farmList" :key="index">
                    <img src="../assets/farmbk1.png" alt="">
                    <div class="bottomInfo">{{item.name}}</div>
                </div>
            </div>
        </div>
        <!-- 智慧云平台 -->
        <div class="cloudPlatform">
            <div class="title">
                <div class="name max">
                   智慧<span>云平台</span>
                </div>
                <div class='ename max'>Intelligent Cloud Platform</div>
            </div>
            <div class="infoBox">
                <div class="left">
                    
                    <div>
                        <img class="name" src="../assets/inco1.png" alt="">
                        <div class="platform">智慧大棚云平台</div>
                        <div class="ename">Smart Shed Cloud Platform</div>
                    </div>
                    <div class="infoText max">山嘎子智慧农业云平台通过传感设备实时采集农业环境的空气温度、空气湿度、二氧化碳、光照、土壤水分、土壤温度、棚外温度与风速等数据；将数据通过移动通讯网络传输给服务管理平台，服务服管理平台对数据进行分析处理。生产者可及时采取防控措施，降低生产风险；同时在云平台生产者可…山嘎子智慧农业云平台通过传感设备实时采集农业环境的空气温度、空气湿度、二氧化碳、光照、土壤水分.</div>
                    <div class="btnLayout">
                        <div class="btn">
                            了解更多
                            <img class="icon" src="../assets/whiteRight.png" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="right">
                    <img src="../assets/platform1.png" alt="">
                </div>
            </div>
        </div>
        <!-- 相关产品 -->
        <div class="RelatedProducts">
            <div class="title">
                <div class="name">
                   相关<span>产品</span>
                </div>
                <div class='ename max'>Related Products</div>
            </div>
            <div class="swiperBox">
                 <swiper
                    :slidesPerView="3"
                    :grid="{
                    rows: 2,
                    }"
                    :autoplay='{
                        delay: 4500,
                        disableOnInteraction: false,
                    }'
                    :spaceBetween="30"
                    :pagination="gridPagination"
                    :modules="modules"
                >
                    <swiper-slide v-for="(item,index) in data.gridswiper">
                        <img class="RelatedProducts-img" src="../assets/Products1.png" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- 为何选择 -->
        <div class="WhyChoice">
            <div class="title">
                <div class="name">
                   为什么<span>选择</span>我们
                </div>
                <div class='ename max'>Why Choose Us</div>
            </div>
            <div class="listBox">
                <!-- 小屏list -->
                <div class="mnilist min" v-for="(titem,index) in data.whyChooseList" :key="index">
                    <div class="left">
                        <img src="../assets/choseus1.png" alt="">
                    </div>
                    <div class="right">
                        <div class="name">{{titem.name}}</div>
                        <div class="info">{{titem.info}}</div>
                    </div>
                </div>
                <!-- 大屏 -->
                <div class="vertical max" v-for="(titem,index) in data.copyArr" :key="index">
                    <div class="left">
                        <div class="listItem" v-for="(citem,index) in titem">
                            <img src="../assets/choseus1.png" alt="">
                            <div class="name">{{citem.name}}</div>
                            <div class="ename">{{citem.ename}}</div>
                            <div class="info">{{citem.info}}</div>
                        </div>
                    </div>
                    <div class="right"></div>
                </div>
                
            </div>
        </div>
        <!-- 底部 -->
        <div class="bottomInfo">
            <div class="info">
                <div class="left max">
                    <div class="itemBox" v-for="(item,index) in data.bottomList">
                        <div class="title">{{item.title}}</div>
                        <div class="list" v-for="(citem,index) in item.list">{{citem.name}}</div>
                    </div>
                </div>
                <div class="minLeft min">
                    <div class="title">
                        联系我们
                    </div>
                    <div class="list">
                        山嘎子官方微信公众号
                    </div>
                    <div class="list">
                        山嘎子官方微信公众号
                    </div>
                    <div class="list">
                        山嘎子官方微信公众号
                    </div>
                </div>
                <div class="right">
                    <div class="QRCode">
                        <img  src="../assets/QRCode1.png" alt="">
                        <div class="name">山嘎子官方微信公众号</div>
                    </div>
                    <div class="QRCode">
                        <img  src="../assets/QRCode2.png" alt="">
                        <div class="name">山嘎子官方小程序</div>
                    </div>
                </div>
                
            </div>
            <div class="VersionNumber">
                ©Copyright 2017-2022   鲁ICP备1541743号-9
            </div>
        </div>
  </div>
  
</template>

<script>
import { reactive,computed } from 'vue'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/grid";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay,Grid } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
    name: "IndexView",
    components:{
        Swiper,
        SwiperSlide
    },
    props: {},
    setup() {

        // const router = useRouter()
        const data = reactive({
            navlist: [
                { name: "首页", english: "Home" },
                {
                    name: "关于我们",
                    english: "About Us",
                    children: [
                        { name: "联系我们" },
                    ]
                },
                { name: "新闻中心", english: "News" },
                {
                    name: "产品中心",
                    english: "Product Center",
                    children: [
                        { name: "土地监测" },
                        { name: "控制设备" },
                        { name: "气象环境" },
                        { name: "水产水质" },
                        { name: "生长监测" },
                    ]
                },
                {
                    name: "农场方案",
                    english: "Farm Program",
                    children: [
                        { name: "智慧农场方案" },
                        { name: "智慧养殖方案" },
                        { name: "智慧水产方案" },
                        { name: "溯源系统" },
                    ]
                },
                { name: "山嘎子生态", english: "Ecology" },
                { name: "智慧云平台", english: "Cloud Platform" },
                { name: "下载中心", english: "Download Center" },
                {
                    name: "加盟合作",
                    english: "Cooperation",
                    children: [
                        { name: "会员中心" }
                    ]
                },
            ],
            //轮播图
            swiperList: [
                { url: "../assets/topBanner.png", id: 1 },
                { url: "../assets/topBanner.png", id: 2 },
                { url: "../assets/topBanner.png", id: 3 },
                { url: "../assets/topBanner.png", id: 4 },
                { url: "../assets/topBanner.png", id: 5 },
            ],
            gridswiper:[
                {name:'',},
                {name:'',},
                {name:'',},
                {name:'',},
                {name:'',},
                {name:'',},
                {name:'',},
                {name:'',},
                {name:'',},
                {name:'',},
            ],
            threeBtnList:[
                {
                    imgpath:'../assets/therebtn1.png',
                    name:'智慧农业',
                    info:'用户可在平台上对大田区域内的作物情况进行精确管控，对农作物生产中的各要素进行全方位掌握',
                },
                {
                    imgpath:'../assets/therebtn1.png',
                    name:'智慧养殖',
                    info:'保障养殖场内的环境处于适宜动物生长的理想状态，实现精细化管理',
                },
                {
                    imgpath:'../assets/therebtn1.png',
                    name:'智慧水产',
                    info:'科学养殖农业物联网平台，能够帮助养殖户检测水质溶氧变化、防控风险、降低成本、增加效益',
                },
            ],
            ServiceList:[
                {name:'方案设计',ename:'scheme design'},
                {name:'定制开发',ename:'Custom Development'},
                {name:'项目施工',ename:'Project Construction'},
            ],
            farmList:[
                {name:'智慧农业方案'},
                {name:'智慧养殖方案'},
                {name:'智慧水产方案'},
                {name:'溯源系统'},
              
            ],
            whyChooseList:[
                {   
                    imgurl:'',
                    name:'投标协助',
                    ename:'Program Design',
                    info:'专业的项目经理提供一对一服务，为工程项目实施、管理、政府采购、招投标等提供全程辅佐及结果追踪。',
                },
                {   
                    imgurl:'',
                    name:'方案设计',
                    ename:'Program Design',
                    info:'专业的项目经理提供一对一服务，为工程项目实施、管理、政府采购、招投标等提供全程辅佐及结果追踪。',
                },
                {   
                    imgurl:'',
                    name:'研发生产',
                    ename:'Program Design',
                    info:'专业的项目经理提供一对一服务，为工程项目实施、管理、政府采购、招投标等提供全程辅佐及结果追踪。',
                },
                {   
                    imgurl:'',
                    name:'智能控制',
                    ename:'Program Design',
                    info:'专业的项目经理提供一对一服务，为工程项目实施、管理、政府采购、招投标等提供全程辅佐及结果追踪。',
                },
                {   
                    imgurl:'',
                    name:'售后服务',
                    ename:'Program Design',
                    info:'专业的项目经理提供一对一服务，为工程项目实施、管理、政府采购、招投标等提供全程辅佐及结果追踪。',
                },
                {   
                    imgurl:'',
                    name:'品类齐全',
                    ename:'Program Design',
                    info:'专业的项目经理提供一对一服务，为工程项目实施、管理、政府采购、招投标等提供全程辅佐及结果追踪。',
                },
            ],
            bottomList:[
                {
                    title:'新闻中心',
                    list:[
                        {name:'智慧农业'},
                        {name:'智慧水产养殖'},
                        {name:'植保信息化'}
                    ]
                },
                 {
                    title:'新闻中心',
                    list:[
                        {name:'智慧农业'},
                        {name:'智慧水产养殖'},
                        {name:'植保信息化'}
                    ]
                },
                 {
                    title:'新闻中心',
                    list:[
                        {name:'智慧农业'},
                        {name:'智慧水产养殖'},
                        {name:'植保信息化'}
                    ]
                },
                 {
                    title:'新闻中心',
                    list:[
                        {name:'智慧农业'},
                        {name:'智慧水产养殖'},
                        {name:'植保信息化'}
                    ]
                },
                 {
                    title:'新闻中心',
                    list:[
                        {name:'智慧农业'},
                        {name:'智慧水产养殖'},
                        {name:'植保信息化'}
                    ]
                },
            ],
        });
            
            
        const fn = {
            // 导航菜单鼠标移入事件
            Selected: (index,item) => {
                data.SelectedIndex = index;
                data.isShowChoice = false
                data.checkedTitle = item.name
            },
            maxSelected: (index) => {
                data.SelectedIndex = index;
            },
            // 导航二级菜单鼠标移入事件
            childrenSelected:(index)=>{
                data.childrenIndex = index
            },

            //轮播图
            onSlideChange: (e) => {
                // console.log(e)
            },
            //轮播图
            onSwiper: (e) => {
                // console.log(e) 
            },
            showChoice:() => { 
                data.isShowChoice = true
            },
            closeChoice:() => { 
                data.isShowChoice = false
            }
           
        };
        
/**所有数据处理在此处 */
        const newArr = [...data.whyChooseList]
        const copyArr = []
        data.whyChooseList.forEach((item) => { 
            if(newArr.length !== 0){
                copyArr.push(newArr.splice(0,2))  
            }
        })
        data.copyArr = copyArr
/********************* */
        return {
            data,
            fn,
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return "<span class=\"bottomNav  " + className + "\">" + "</span>";
                },
            },
           gridPagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return "<span class=\"gridBottomNav  " + className + "\">" + "</span>";
                },
            },
            modules: [Grid,Navigation, Pagination, Scrollbar, A11y, Autoplay],
        };
    },
    
}
</script>

<style lang="less">
/* 轮播图部分样式不能写在 scoped 中 */
/* 首页头部轮播图 */
    .swiper {
        .img-view {
            .bottomNav {
                transition: 0.5s ;
                display: inline-block;
                width: 10px;
                height: 10px;
                margin-right: 5px;
                opacity: 0.6;
                background: rgba(255, 255, 255, 1);
            }
            .swiper-pagination-bullet-active {
                border-radius: 0 ;
                width: 56px ;
                height: 10px ;
                background: #EBFF00 ;
                opacity: 1 ;
                border-radius: 50px ;
            }
          
        }
        
    }
    
/* 网格轮播 */
@media only screen and (min-width:1101px){
    .RelatedProducts {
        .swiper {
            position: static;
        }
        .swiperBox {
            position: relative;
            .swiper-pagination {
                top: 0;
                height: 12px;
                transform: translateY(-480%);
            }
            .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;
                height: calc((100% - 30px) / 2) !important;
                width: 390px;
                height: 313px;
                /* Center slide text vertically */
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .gridBottomNav {
                transition: 0.5s ;
                display: inline-block;
                width: 10px;
                height: 10px;
                margin-right: 5px;
                opacity: 0.6;
                background: rgba(75, 188, 109, 0.3);
            }
            .swiper-pagination-bullet-active {
                border-radius: 0 ;
                width: 46px ;
                height: 10px ;
                background: rgba(75, 188, 109, 1) ;
                opacity: 1 ;
                border-radius: 50px ;
            }
        }
    }
}
//小屏
 @media only screen and (min-width:0px) and(max-width:1100px){
     .RelatedProducts {
        .swiper {
            position: static;
        }
        .swiperBox {
            position: relative;
            .swiper-pagination {
                top: 0;
                height: 12px;
                transform: translateY(-380%);
            }
            .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;
                height: calc((100% - 30px) / 2) !important;
                width: 390px;
                height: 313px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .gridBottomNav {
                transition: 0.5s ;
                display: inline-block;
                width: 5px;
                height: 5px;
                margin-right: 5px;
                opacity: 0.6;
                background: rgba(75, 188, 109, 0.3);
            }
            .swiper-pagination-bullet-active {
                border-radius: 0 ;
                width: 25px ;
                height: 5px ;
                background: rgba(75, 188, 109, 1) ;
                opacity: 1 ;
                border-radius: 50px ;
            }
        }
    }
 }
    
</style>

<style scoped lang="less">
//小屏
    @media only screen and (min-width:0px) and(max-width:1100px) {
        .none {
            display: none;
        }
        .Mask {
            display: inline-block;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(12, 57, 71, 0.6);
            backdrop-filter: blur(4px);
            z-index: 4;
        }
        .max {
            display: none !important;
        }
        .index {
            .threeBtn {
                background: white;
                // height: 415px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 63px;
                margin-bottom: 35px;
                padding: 0 22px 0 22px;
                .imgbtn {
                    background: #FFFFFF;
                    box-shadow: 0px 5px 4px rgba(6, 50, 13, 0.15);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom:10px;
                    width: 100%;
                    padding: 21px 15px 5px  15px;
                    img {
                        width: 77px;
                        height: 77px;
                        margin-right: 20px;
                    }
                   .text {
                       display: flex;
                       justify-content: flex-start;
                       flex-direction: column;
                       flex: 4;
                        .name {
                        font-size: 16px;
                        color: rgba(77, 180, 88, 1);
                            
                        }
                        .btninfo {
                            font-size: 16px;
                            margin-top: 12px;
                            color: rgba(2, 9, 28, 0.3);
                        }
                   }
                }
            }
            
            .banner {
                height: 354px;
                background: linear-gradient(274.37deg, #4DB458 2.97%, #5DFCB0 100.15%);
                position: relative;
                overflow: hidden;
                .img-view {
                    display: flex;
                    height: 100%;
                    img {
                        flex: 1;
                        max-width: 100%;
                        min-width: 100%;
                        height: 100%;
                        float: left;
                    }
                }
                .move {
                    transition: 1s;
                    // transform: v-bind(text);
                }
                .notransform {
                    transition:none;
                }
                .topNav {
                    background: rgba(0, 0, 0, 0.3);
                    height: 98px;
                    display: flex;
                    align-items: center;
                    justify-content:space-between ;
                    color: rgba(2, 9, 28, 0.6);
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 99;
                    .rightIcon {
                        width: 31px;
                        height: 27px;
                        margin-right: 25px;
                    }
                    .topNavleft {
                        width: 27px;
                        height: 27px;
                        margin-left: 27px;
                        cursor: pointer;
                    }
                    .logo {
                        display: none;
                        width: 360px;
                        justify-content: flex-end;
                        img {
                            width: 40px;
                            height:36px;
                        }
                    }
                    .maxLogo {
                        display: none;
                    }
                  
                    .choice {
                        height: 100%;
                        position: fixed;
                        width: 120px;
                        padding: 0 20px 0 20px;
                        left: -200px;
                        top: 0;
                        bottom: 0;
                        background: #FFFFFF;
                        transition: 0.5s;
                        z-index: 999999;
                        .goubak {
                            display: flex;
                            align-items: center;
                            margin-top: 53px;
                            margin-bottom: 30px;
                            cursor: pointer;
                            img {
                                width: 13px;
                                height: 10px;
                                margin-right: 11.5px;
                            }
                            span {
                                font-weight: 700;
                                font-size: 18px;
                                color: rgba(9, 27, 61, 1);
                            }
                        }
                        .navOption {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding-bottom: 20px;
                            border-bottom: 1px solid rgba(2, 9, 28, 0.15);
                            margin-bottom: 20px;
                            font-size: 14px;
                            cursor: pointer;
                            
                            .name {
                                font-size: 16px;
                                white-space: nowrap;
                                align-items: center;
                                justify-content: center;
                           
                            }
                            .checkedImg {
                                width: 9px;
                                height: 9px;
                                background: rgba(77, 180, 88, 1);
                                transform: rotate(45deg);
                            }
                            .eName {
                                font-size: 12px;
                                white-space: nowrap;
                                align-items: center;
                                justify-content: center;
                            }
                        }
                        
                    .topChcked {
                        color: rgba(77, 180, 88, 1) ;
                    }
                    .navSelected {
                        color: rgba(235, 255, 0, 1);
                    }
                    
                     }
                    .choiceChecked {
                        left: 0;
                    }
                .loginBtn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .login {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin-right: 34px;
                            cursor: pointer;
                                .name {
                                    margin-bottom: 12px;
                                    font-size: 16px;
                                    white-space: nowrap;
                                }
                                .eName {
                                    font-size: 12px;
                                    white-space: nowrap;
                                }
                        }
                        .register {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin-right: 34px;
                            cursor: pointer;
                                .name {
                                    margin-bottom: 12px;
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
                .maxScreen {
                    //小屏幕时 大屏导航直接消失
                    display: none !important;
                }
            }
            .welcome {
                background:#F8F8F8 ;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 140px;
                padding-bottom: 146px;
                .welcomeTitle {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 84px;
                    .cname {
                        font-size: 40px;
                        margin-bottom: 40px;
                        .colortext {
                            color: rgba(77, 180, 88, 1);
                        }  
                    }
                    .ename {
                        display: none;
                        color: rgba(2, 9, 28, 1);
                        font-size: 24px;
                    }
                }
                .infoExhibition {
                    display: flex;
                    .img {
                        display: none;
                        width: 565px;
                        height: 608px;
                        overflow: hidden;
                        border-radius: 30px;
                        margin-right: 100px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .blockCollection {
                        height: 608px;
                        display: flex;
                        align-items: center;
                        flex-flow: row wrap;
                        .option {
                            box-sizing: border-box;
                            flex: 0 0 50%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            .optinIocn {
                                margin-bottom:23px ;
                                
                            }
                            .optionName {
                                margin-bottom:12px ;
                                font-size: 28px;
                            }
                            .optionEname {
                                margin-bottom:12px ;
                                color: rgba(75, 188, 109, 0.8);
                                font-size: 22px;
                            }
                            .optionInfo {
                                color: rgba(2, 9, 28, 0.3);
                                font-size: 16px;
                                width: 194px;
                            }
                        }
                    }
                }
            }
            .weService {
                background: white;
                padding: 136px 0 140px 0 ;
               
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 95px;
                    .name {
                        font-size: 40px;
                        margin-bottom: 40px;
                        span {
                            color: #4DB458;
                        }

                    }
                    .ename {
                        font-size: 24px;
                    }
                }
                .imglist {
                    display: flex;
                    flex-flow: row wrap;
                    overflow: hidden;
                    padding: 0 22px 0 22px;
                    .seizeSeat {
                        height: 400px;
                        background:linear-gradient(270deg, #55D681 0%, #5DF7AA 100%);
                    }
                    .imgs {
                        box-sizing: border-box;
                        flex: 0 0 50%;
                        position: relative;
                        // height: 100%;
                        img {
                            top: 0;
                            bottom: 0;
                            width: 100%;
                            // height: 100%;
                        }
                        .circular {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translateX(-50%) translateY(-50%);
                            background:  rgba(93, 248, 170, 0.6);
                            width: 70%;
                            height: 70%;
                            border-radius: 700px;
                            display: flex;
                            justify-content: center;
                            flex-direction: column;
                            align-items: center;
                            color: #FFFFFF;
                            .name {
                                font-size: 20px;
                                margin-bottom: 20px;
                            }
                            .ename {
                                font-size: 6px;
                            }
                        }
                    }
                    img {
                        flex: 1;
                        height: 100%;
                    }
                }
            }
            .farm {
                background: #F8F8F8;
                padding: 136px 0 140px 0 ; 
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 95px;
                    .name {
                        font-size: 40px;
                        margin-bottom: 40px;
                        span {
                            color: #4DB458;
                        }

                    }
                    .ename {
                        font-size: 24px;
                    }
                }
               .imgList {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-flow: row wrap;
                   .imgBox {
                       flex: 0 0 40%;
                       height: 200px;
                       overflow: hidden;
                       border-radius: 20px;
                       position: relative;
                       margin-right: 20px;
                       margin-bottom: 11px;
                       img {
                           width: 100%;
                           height: 100%;
                       }
                       .bottomInfo {
                           display: flex;
                           justify-content: center;
                           align-items: center;
                           position: absolute;
                           bottom: 0;
                           left: 0;
                           right: 0;
                           height: 40px;
                           color: white;
                           background: rgba(118, 197, 81, 0.4);
                           backdrop-filter: blur(1px);
                           font-size:14px ;
                       }
                   }
               }
            }
            .cloudPlatform {
                margin-bottom: 61px;
                padding: 44px 22px 0 22px;
                background: url('../assets/cloudPlatformbk1.png');
                background-size: 100% 100%;   
                .infoBox {
                    padding: 17px;
                    width: 62.5%;
                    background: white;
                    box-shadow: 0px 3.86167px 4.1375px 0.551667px rgba(9, 32, 41, 0.1);
                    border-radius: 5.51667px;
                    margin: auto;
                    display: flex;
                    align-items: stretch;
                    justify-content: space-between;
                    transform: translateY(31px);
                    .left {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        margin-right: 60px;
                        .name {
                            width: 56px ;
                            height: 17px;
                            margin-bottom: 15px;       
                        }
                        .platform {
                            margin-bottom: 15px;
                            font-size: 14px;
                            font-weight: 700;
                        }
                        .ename {
                            font-size: 12px;
                            color: rgba(75, 188, 109, 0.8);
                        }
                        .infoText {
                            font-size: 20px;
                            color: rgba(2, 9, 28, 0.3);
                        }
                        
                         .btnLayout {
                            display: flex;
                            width: 100%;
                           .btn {
                                width: 78px;
                                height: 26px;
                                display: flex;
                                padding:  0 6px 0 10px;
                                justify-content: space-between;
                                align-items: center;
                                color: rgba(255, 255, 255, 1);
                                background: #4BBC6D;
                                border-radius: 3px;
                                font-size: 12px;
                                cursor: pointer;
                                .icon {
                                    width: 6px;
                                    height: 13px;
                                }
                            }
                        }

                    }
                    .right {
                        flex: 1;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .RelatedProducts {
                padding-bottom: 30px;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 61px;
                    .name {
                        font-size: 16px;
                        span {
                            color: #4DB458;
                        }

                    }
                    .ename {
                        font-size: 24px;
                    }
                }
                .swiperBox {
                    position: relative;
                    .RelatedProducts-img {
                        cursor: pointer;
                    }
                    .swiper {
                        height:46vw ;
                        // width: 331px;
                        width: 88vw;
                        margin: auto;
                        
                    }
                }
            }
            .WhyChoice {
                background: #F8F8F8;
                padding-top: 87px;
                padding-bottom: 127px;
                display: flex;
                flex-direction: column;
                align-items: center;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 30px;
                    .name {
                        font-size: 16px;
                        span {
                            color: #4DB458;
                        }

                    }
                }
                .listBox {
                    .mnilist {
                        background: #FFFFFF;
                        box-shadow: 0px 5px 4px rgba(6, 50, 13, 0.15);
                        border-radius: 15px;
                        display: flex;
                        align-items: center;
                        padding: 32px 20px 32px 31px;
                        margin:  0 22px 10px 22px;
                        .left {
                            max-width: 56px;
                            height: 56px;
                            margin-right: 32px;
                            flex: 1;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .right {
                            height: 56px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            flex: 4;
                            .name {
                                font-size: 16px;
                            }
                            .info {
                                font-size: 12px;
                                color: rgba(2, 9, 28, 0.3);
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                overflow:hidden;
                                /*! autoprefixer: off */
                                -webkit-box-orient: vertical;

                            }
                        }
                    }
                }
            }
            .bottomInfo {
                width: 100%;
                height: 488px;
                background: url('../assets/bottombk2.png');
                background-size: 100% 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
               
                .info {
                    width: 62.5%;
                    display: flex;
                    border-bottom: 0.5px solid #F0F0F0;
                    padding-bottom: 30px;
                    margin-top: 81px;
                    align-items: center;
                    flex-direction: column;
                     .minLeft {
                        color: white;
                        font-size: 14px;
                        .title {
                            margin-bottom: 42px;
                        }
                        .list {
                            margin-bottom: 10px;
                        }
                        .list:last-child {
                            margin-bottom: 0px;
                        }
                    }
                    .right {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 30px;
                        .QRCode {
                            margin-right: 32px;
                            min-width: 140px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            img {
                                width: 88px;
                                height: 88px;
                            }
                            .name {
                                margin-top: 13px;
                                color: white;
                                font-size: 14px;
                            }
                                
                        }
                        .QRCode:last-child {
                            margin-right: 0;
                        }
                    }
                }
                .VersionNumber {
                    margin-top: 30px;
                    font-size: 14px;
                    color: rgba(240, 244, 249, 1);
                }
            }
         }
    }
//大屏
    @media only screen and (min-width:1101px){
        .min {
            display: none;
        }
        .index {
            .threeBtn {
                background: white;
                // height: 415px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 63px;
                margin-bottom: 35px;
                .imgbtn {
                    width: 262px;
                    margin-right:217px ;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                        width: 113px;
                        height: 113px;
                    }
                    .text {
                        .name {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-top: 28px;
                            font-size: 25px;
                            color: rgba(77, 180, 88, 1);
                        }
                        .btninfo {
                            font-size: 16px;
                            margin-top: 54px;
                            color: rgba(2, 9, 28, 0.3);
                        }
                    }
                }
                .imgbtn:last-child {
                    margin-right: 0;
                }
            }
            
            .banner {
                height: 772px;
                // position: absolute;
            
                background: linear-gradient(274.37deg, #4DB458 2.97%, #5DFCB0 100.15%);
                position: relative;
                overflow: hidden;
                .img-view {
                    display: flex;
                    height: 100%;
                    img {
                        flex: 1;
                        max-width: 100%;
                        min-width: 100%;
                        height: 100%;
                        float: left;
                    }
                }
                .move {
                    transition: 1s;
                    // transform: v-bind(text);
                }
                .notransform {
                    transition:none;
                }
                .topNav {
                    background: rgba(0, 0, 0, 0.3);
                    height: 98px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: white;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 99;
                    .logo {
                        display: flex;
                        width: 360px;
                        justify-content: flex-end;
                        img {
                            width: 40px;
                            height:36px;
                        }
                    }
                    .choice {
                        display: flex;
                        align-items: center;
                        height: 100%;
                        position: relative;
                        .navOption {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            margin-right: 34px;
                            cursor: pointer;
                            .children {
                                position: absolute;
                                background: rgba(0, 0, 0, 0.3);
                                transform: translateY(100%);
                                bottom: 0;
                                width: 110px;
                                overflow: hidden;
                                // height: 123px;
                                .children-item {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    color: white;
                                    height: 44px;
                                    font-size: 14px;
                                    transition: 0.5s;
                                    display: none;
                                }
                                .children-item-green {
                                    background:rgba(77, 180, 88, 0.6) ;
                                }
                                .open {
                                    display: flex;
                                }
                        }
                        .name {
                            margin-bottom: 12px;
                            font-size: 16px;
                            white-space: nowrap;
                            align-items: center;
                            justify-content: center;
                        }
                        .eName {
                            font-size: 12px;
                            white-space: nowrap;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    .topChcked {
                        color: rgb(235, 255, 0);
                    }
                    .navSelected {
                        color: rgba(235, 255, 0, 1);
                    }
                    
                }
                .loginBtn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .login {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin-right: 34px;
                            cursor: pointer;
                                .name {
                                    margin-bottom: 12px;
                                    font-size: 16px;
                                    white-space: nowrap;
                                }
                                .eName {
                                    font-size: 12px;
                                    white-space: nowrap;
                                }
                        }
                        .register {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin-right: 34px;
                            cursor: pointer;
                                .name {
                                    margin-bottom: 12px;
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
                .minScreen {
                    display: none !important;
                }
            }
            .welcome {
                background:#F8F8F8 ;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 140px;
                padding-bottom: 146px;
                .welcomeTitle {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 84px;
                    .cname {
                        font-size: 40px;
                        margin-bottom: 40px;
                        .colortext {
                            color: rgba(77, 180, 88, 1);
                        }  
                    }
                    .ename {
                            color: rgba(2, 9, 28, 1);
                            font-size: 24px;
                    }
                }
                .infoExhibition {
                    display: flex;
                    .img {
                        width: 565px;
                        height: 608px;
                        overflow: hidden;
                        border-radius: 30px;
                        margin-right: 100px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .blockCollection {
                        height: 608px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: row wrap;
                        // align-content: flex-start;
                        .option {
                            box-sizing: border-box;
                            flex: 0 0 50%;
                            .optinIocn {
                                margin-bottom:23px ;
                                
                            }
                            .optionName {
                                margin-bottom:12px ;
                                font-size: 28px;
                            }
                            .optionEname {
                                margin-bottom:12px ;
                                color: rgba(75, 188, 109, 0.8);
                                font-size: 22px;
                            }
                            .optionInfo {
                                color: rgba(2, 9, 28, 0.3);
                                font-size: 16px;
                                width: 194px;
                            }
                        }
                    }
                }
            }
            .weService {
                background: white;
                padding: 136px 0 140px 0 ;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 95px;
                    .name {
                        font-size: 40px;
                        margin-bottom: 40px;
                        span {
                            color: #4DB458;
                        }

                    }
                    .ename {
                        font-size: 24px;
                    }
                }
                .imglist {
                    height: 400px;
                    display: flex;
                    .seizeSeat {
                        height: 100%;
                        flex: 1;
                        background:linear-gradient(270deg, #55D681 0%, #5DF7AA 100%);
                    }
                    .imgs {
                        flex: 1;
                        position: relative;
                        height: 100%;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                        .circular {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translateX(-50%) translateY(-50%);
                            background:  rgba(93, 248, 170, 0.6);
                            width: 246px;
                            height: 246px;
                            border-radius: 700px;
                            display: flex;
                            justify-content: center;
                            flex-direction: column;
                            align-items: center;
                            color: #FFFFFF;
                            .name {
                                font-size: 30px;
                                margin-bottom: 20px;
                            }
                            .ename {
                                font-size: 16px;
                            }
                        }
                    }
                    img {
                        flex: 1;
                        height: 100%;
                    }
                }
            }
            .farm {
                background: #F8F8F8;
                padding-top: 140px;
                height: 940px;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 95px;
                    .name {
                        font-size: 40px;
                        margin-bottom: 40px;
                        span {
                            color: #4DB458;
                        }

                    }
                    .ename {
                        font-size: 24px;
                    }
                }
               .imgList {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-flow: row wrap;
                   .imgBox {
                       flex: 0 0 16%;
                       width: 285px;
                       height: 468px;
                       overflow: hidden;
                       border-radius: 20px;
                       position: relative;
                       margin-right: 20px;
                       img {
                           width: 100%;
                           height: 100%;
                       }
                       .bottomInfo {
                           display: flex;
                           justify-content: center;
                           align-items: center;
                           position: absolute;
                           bottom: 0;
                           left: 0;
                           right: 0;
                           height: 71px;
                           color: white;
                           background: rgba(118, 197, 81, 0.4);
                           backdrop-filter: blur(1px);
                           font-size:25px ;
                       }
                   }
                   .imgBox:last-child {
                       margin-right: 0;
                   }
               }
            }
            .cloudPlatform {
                padding-top: 87px;
                padding-bottom: 127px;
                background: url('../assets/cloudPlatformbk1.png');
                background-size: 100% 100%;
                // background-repeat:no-repeat;
                // height: 1080px;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 87px;
                    .name {
                        font-size: 40px;
                        margin-bottom: 40px;
                        span {
                            color: #4DB458;
                        }

                    }
                    .ename {
                        font-size: 24px;
                    }
                }
                .infoBox {
                    width: 1200px;
                    height: 680px;
                    padding: 60px;
                    background: white;
                    box-shadow: 0px 14px 15px 2px rgba(9, 32, 41, 0.3);
                    border-radius: 20px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    // height: 680px;
                    .left {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 100%;
                        margin-right: 60px;
                        .name {
                            width: 128px ;
                            height: 40px;
                            margin-bottom: 30px;
                        }
                        .platform {
                            font-size: 28px;
                            margin-bottom: 20px;
                            font-weight: 700;
                        }
                        .ename {
                            font-size: 20px;
                            color: rgba(75, 188, 109, 0.8);
                            // margin-bottom: 55px;
                        }
                        .infoText {
                            font-size: 20px;
                            color: rgba(2, 9, 28, 0.3);
                        }
                        .btnLayout {
                            display: flex;
                            width: 100%;
                            justify-content: flex-end;
                            .btn {
                                padding: 0 30px 0 32px;
                                width: 101px;
                                height: 50px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                color: rgba(255, 255, 255, 1);
                                background: #4BBC6D;
                                border-radius: 5px;
                                font-size: 20px;
                                cursor: pointer;
                                .icon {
                                    width: 9px;
                                    height: 17px;
                                }
                            }
                        }
                        

                    }
                    .right {
                        width: 100%;
                        height: 100%;
                        flex: 1;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .RelatedProducts {
                padding-top: 87px;
                padding-bottom: 127px;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 87px;
                    .name {
                        font-size: 40px;
                        margin-bottom: 40px;
                        span {
                            color: #4DB458;
                        }

                    }
                    .ename {
                        font-size: 24px;
                    }
                }
                .swiperBox {
                    .RelatedProducts-img {
                        cursor: pointer;
                    }
                     .swiper {
                        height:46vw ;
                        // width: 331px;
                        width: 88vw;
                        margin: auto;
                    }
                }
            }
            .WhyChoice {
                background: #F8F8F8;
                padding-top: 87px;
                padding-bottom: 127px;
                display: flex;
                flex-direction: column;
                align-items: center;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 87px;
                    .name {
                        font-size: 40px;
                        margin-bottom: 40px;
                        span {
                            color: #4DB458;
                        }

                    }
                    .ename {
                        font-size: 24px;
                    }
                }
                .listBox {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transform: translateX(40px);
                    .vertical {
                        height: 639px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-right: 60px;
                        .left {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            margin-right: 60px;
                            .listItem {
                                display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                                 img {
                                    width: 95px;
                                    height: 95px;
                                    margin-bottom: 32px;
                                }
                                .name {
                                    font-size: 24px;
                                    margin-bottom: 15px;
                                }
                                .ename {
                                    font-size: 16px;
                                    color: rgba(2, 9, 28, 0.3);
                                    margin-bottom: 15px;
                                }
                                .info {
                                    font-size: 18px;
                                    color: rgba(2, 9, 28, 0.3);
                                    width: 280px;
                                }
                            }
                           
                        }
                        .right {
                            height: 80%;
                            width: 1px;
                            background: rgba(2, 9, 28, 0.3);
                        }
                    }
                    .vertical:last-child {
                        margin-right: 0px;
                        .right {
                            display: none;
                        }
                    }
                  
                }
            }
            .bottomInfo {
                width: 100%;
                height: 480px;
                background: url('../assets/bottombk1.png');
                background-size: 100% 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .info {
                    width: 62.5%;
                    display: flex;
                    border-bottom: 0.5px solid #F0F0F0;
                    padding-bottom: 75px;
                    margin-top: 81px;
                    .left {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        color: white;
                        font-size: 14px;
                        width: 67%;
                        margin-right: 107px;
                        .itemBox {
                            display: flex;
                            flex-direction: column;
                            .title {
                                margin-bottom: 42px;
                            }
                            .list {
                                margin-bottom: 10px;
                                cursor: pointer;
                            }
                            .list:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }
                    .right {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        
                        .QRCode {
                            margin-right: 32px;
                            min-width: 140px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            img {
                                width: 88px;
                                height: 88px;
                            }
                            .name {
                                margin-top: 13px;
                                color: white;
                                font-size: 14px;
                            }
                                
                        }
                    }
                }
                .VersionNumber {
                    margin-top: 52px;
                    font-size: 14px;
                    color: rgba(240, 244, 249, 1);
                }
            }
         }
    }
    
</style>
