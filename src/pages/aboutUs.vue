<template>
    <div class="aboutUsBox">
        <div class="topbackground">
            
        </div>
        <!-- 关于我们 -->
        <div class="aboutUs">
            <div class="title">
                <div class="name">
                    关于<span>我们</span>
                </div>
                <div class="ename max">
                    About Us
                </div>
            </div>
            <div class="briefIntroduction">
                <img src="../assets/AboutUs/briefIntroduction1.png" alt="">
                <div class="text">
                    <div class="name">致力于打造全面的工业<span>物联网</span>产品与<span>解决方案</span> </div>
                    <div class="ename max">INDUSTARIAL IOT PARODUCTS AND SOLUTIONS</div>
                    <div class="info">
                        我司依托山东农业之乡的产业优势，
                        成长为一家从事智能施肥机研发与定制、水肥一体化、农业物联网、
                        灌溉自动控制、农产品安全溯源、自动环境调节等多种服务于一体的高新技术企业，
                        以服务中国现代化农业为己任，做可信赖的高端农业设备制造商。
                        专注于智慧农业的建成并落成数百个智慧农业相关项目，为用户带来一站式的智慧农业全新体验，
                        从生产到售后全面辅佐，助力农业生产标准化、规模化、现代化发展进程.
                    </div>
                </div>
            </div>
            <div class="dataExhibition">
                <img class="max" src="../assets/AboutUs/boder1.png" alt="">
                <div class="withinBox">
                    <div class="list" v-for="(item,index) in data.dataExhibitionlist" :key="index">
                        <div class="title">{{item.title}}</div>
                        <div class="name">{{item.name}} </div>
                        <div class="ename max"> {{item.ename}}</div>
                    </div>
                </div>
            </div>
            <div class="datalistItemBox min">
                <div class="itemList" v-for="(item,index) in data.demolist">
                    <img src="../assets/AboutUs/itemList1.png" alt="">
                    <div class="laoy">
                        <div class="type">
                            正式员工
                        </div>
                        <div class="number">
                            400+
                        </div>
                        
                    </div>
                    <div class="ename max">JOINTV-ENJOINTVEN</div>
                </div>
                
            </div>
            <div class="datalistItemBox max">
                <div class="itemList" v-for="(item,index) in data.demolist">
                    <img src="../assets/AboutUs/itemList1.png" alt="">
                    <div class="number">
                            400+
                        </div>
                        <div class="type">
                            正式员工
                        </div>
                    <div class="ename max">JOINTV-ENJOINTVEN</div>
                </div>
                
            </div>
            <div class="transfer">
                <img class="max" src="../assets/AboutUs/transfer1.png" alt="">
                <img class="min" src="../assets/AboutUs/minTransfer1.png" alt="">
            </div>
        </div>
        <!-- 我们的服务范围 -->
        <commodityList :List='data.whyChooseList'/>
        <!-- 我们的优势 -->
        <div class="ourStrengths">
            <div class="title">
                <div class="name">
                  我们的<span>优势</span>
                </div>
                <div class='ename max'>Our Advantages</div>
            </div>
            <div class="introduce">
                <div class="imgBox">
                    <img src="../assets/AboutUs/ourStrengths1.png" alt="">
                </div>
                <div class="info">
                    <div class="imgBox max">
                        <img src="../assets/AboutUs/ourStrengths2.png" alt="">
                    </div>
                    <div class="info">
                        高度重视产品自主产权，于济南建立研发中心，吸纳华北华中地区高层次人才，研发人员占比高达40%，
                        以研发生产超过300件产品投入市场，拥有近保重专利及软件著作权，支持特定项目解决方案及产品定制。
                        专注于农业物联网系统工程的技术研发、装备制造和应用推广，在全国各地落成数百个项目，
                        主要覆盖新疆、黑龙江、河北、山东、湖南、甘肃、宁夏、云南、贵州、海南、河南、四川等农业大省，
                        培育高科技、高品质和可持续发展的农业信息化产业体系，管理农田几十万亩，
                        使智慧农业和农业远程在线服务实时响应植物需求，改善农业土壤污染现状，
                        实现科学生产、精准管理，促进降本降耗，增产增效的目的.
                    </div>
                     <div class="minImgBox min">
                        <img src="../assets/AboutUs/ourStrengths2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 企业风采 -->
        <div class="appearance">
            <div class="title">
                <div class="name">
                  企业<span>风采</span>
                </div>
                <div class='ename max'>Enterprise style</div>
            </div>
            <swiper :navigation="true" :modules="config.modules" class="mySwiper">
                <swiper-slide>
                    <img src="../assets/AboutUs/floor1.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/AboutUs/floor1.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/AboutUs/floor1.png" alt="">
                </swiper-slide>
                <div class="title">
                    公司本部大楼
                </div>
            </swiper>
        </div>
            <bottomInfo/>
    </div>
</template>

<script>
import { reactive } from 'vue'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import bottomInfo from '@/components/bottomInfo.vue';
import commodityList from '@/components/commodityList.vue';
export default {
    
    name: "aboutUs",
    components:{
        bottomInfo,
        commodityList
    },
    props: {},
    setup(){
        const data = reactive({
            dataExhibitionlist:[
                {title:'企业文化',name:'精于产品 勇于创新',ename:'Product Excellence and Innovation'},
                {title:'企业文化',name:'精于产品 勇于创新',ename:'Product Excellence and Innovation'},
                {title:'企业文化',name:'精于产品 勇于创新',ename:'Product Excellence and Innovation'},
            ],
            demolist:[
                1,2,3,4,5
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
        })
        const fn = reactive ({

        })
        const config = reactive({
            modules: [Navigation],
        })
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
            config
        }
    }
}
</script>
<style>
/* 轮播图 */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 自定义导航 */
.swiper-button-prev:after{
    display: none;
}
.swiper-button-next:after{
    display: none;
}

.swiper-button-prev{
    width: 35px;
    height: 35px;
    background: url(../assets/AboutUs/left.png);
    background-size: 100% 100%;
    bottom: 15px;
}
.swiper-button-next{
    width: 35px;
    height: 35px;
    background:url(../assets/AboutUs/right.png);
    background-size: 100% 100%;
    bottom: 15px;
}
</style>
<style lang="less" scoped>
//小屏
    @media only screen and (min-width:0px) and(max-width:1100px){
        .max {
            display: none !important;
        }
        .aboutUsBox {
            // padding: 0 0 150px;
            .topbackground {
                height: 477px;
                margin-bottom: 30px;
                background: url('../assets/AboutUs/minTransfer1.png') no-repeat center center fixed;
                background-size:100% 100%;
              
            }
            .aboutUs {
                position: relative;
                display: flex;
                background: white;
                flex-direction: column;
                align-items: center;
                z-index: 1;
                .title {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 20px;
                    .name {
                        font-size: 16px;
                        color: black;
                        span {
                            color: rgba(77, 180, 88, 1);
                        }
                    }
                }
                .briefIntroduction {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                        width: 88%;
                        margin-right: 22px;
                        margin-bottom: 20px;
                    }
                    .text {
                         width: 88%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .name{
                            font-size: 16px;
                           margin: auto;
                            span {
                                color: rgba(77, 180, 88, 1);
                            }
                            margin-bottom: 20px;
                        }
                        .ename {
                            font-size: 16px;
                            color: rgba(2, 9, 28, 0.6);
                           
                        }
                        .info {
                            font-size: 12px;
                            color: rgba(2, 9, 28, 0.3);
                        }
                    }
                }
                .dataExhibition {
                    position: relative;
                    margin-top: 22px;
                    img {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .withinBox {
                        width: 100%;
                        height: 100%;
                        max-width: 100%;
                        max-height: 100%;
                        display: flex;
                        justify-content: center;
                        .list {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin-right: 30px;
                            .title {
                                font-size: 14px;
                                color: rgba(77, 180, 88, 1);
                                margin-bottom: 20px;
                            }
                            .name {
                                color: black;
                                margin-bottom: 30px;
                                font-size: 9px;
                            }
                            .ename {
                                font-size:16px ;
                                color: rgba(2, 9, 28, 0.3);
                                white-space:nowrap;
                            }
                        }
                       
                        .list:last-child {
                            margin-right: 0px;
                        }
                    }
                }
                .datalistItemBox {
                    width: 1200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .itemList {
                        display: flex;
                        align-items: center;
                        width: 331px;
                        height: 120px;
                        border-radius:20px;
                        overflow: hidden;
                        background: rgba(246, 255, 247, 1);
                        margin-bottom: 10px;
                        img {
                            width: 50px;
                            height: 50px;
                            margin-right: 60px;
                            margin-left: 30px;
                        }
                        .laoy {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            .type {
                                color: rgba(2, 9, 28, 0.8);
                                font-size: 20px;
                                margin-bottom:24px ;
                            }
                            .number {
                                font-size: 32px;
                                color: rgba(77, 180, 88, 1);
                            }
                            
                        }
                       
                        .ename {
                            word-break: break-all;
                            line-break: loose;
                             word-wrap:break-word;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 16px;
                            color: rgba(2, 9, 28, 0.3);
                            margin-top: 30px;
                            width: 100px;
                        }
                    }
                    .itemList:last-child {
                        margin-bottom: 0;
                    }
                    
                }
                .transfer {
                        position: relative;
                        z-index: -1;
                        width: 100%;
                        height: 521px;
                        // transform: translateY(-50%);
                        margin-top: -571px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                }
            }
            .scopeOfServices {
                background: white;
                padding-top: 87px;
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
            .ourStrengths {
                background: white;
                padding-top:30px ;
                display: flex;
                flex-direction: column;
                align-items: center;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                     margin-bottom: 30px;
                    // margin-bottom: 148px;
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
               .introduce {
                    display: flex;
                    padding: 0 22px 0 22px;
                    flex-direction: column;
                    align-items: center;
                    .imgBox {
                        flex: 1;
                        margin-bottom: 20px;
                        img {
                            width: 100%;

                        }   
                    }
                    
                    .info {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        flex-direction: column;
                        height: 100%;
                        .info {
                            flex: 7;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            font-size: 12px;
                            color:rgba(2, 9, 28, 0.4) ;
                            margin-bottom: 20px;
                        }
                        .minImgBox {
                            flex: 3;
                            width: 100%;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
            .appearance {
                background: white;
                // padding-top:139px ;
                // padding-bottom: 131px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0 22px 0 22px;
                margin-bottom: 30px;
                 .mySwiper {
                    width: 100%;
                    overflow: hidden;
                    border-radius: 20px;
                    .title {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 25px;
                        background: rgba(79, 201, 135, 0.3);
                        z-index: 999;
                        font-size: 14px;
                        color: white;
                        margin: 0;
                    }
                }
                 .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-top: 29px;
                    margin-bottom: 31px;
                    .name {
                        font-size: 16px;

                        span {
                            color: #4DB458;
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
    @media only screen and (min-width:1101px) {
        
        .min {
            display: none !important;
        }
        .aboutUsBox {
            
            .topbackground {
                height: 477px;
                margin-bottom: 63px;
                background: url('../assets/AboutUs/transfer1.png');
                background-size: 100% 100%;
              
            }
            .aboutUs {
                position: relative;
                display: flex;
                background: white;
                flex-direction: column;
                align-items: center;
                z-index: 1;
                .title {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 80px;
                    .name {
                        font-size: 40px;
                        color: black;
                        span {
                            color: rgba(77, 180, 88, 1);
                        }
                    }
                    .ename {
                        font-size: 24px;
                        margin-top: 40px;
                    }
                }
                .briefIntroduction {
                    width: 62.5%;
                    display: flex;
                    justify-content: space-between;
                    img {
                        width: 54.25%;
                        margin-right: 22px;
                    }
                    .text {
                        width: 41.7%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .name{
                            font-size: 25px;
                           
                            span {
                                color: rgba(77, 180, 88, 1);
                            }
                        }
                        .ename {
                            font-size: 16px;
                            color: rgba(2, 9, 28, 0.6);
                           
                        }
                        .info {
                            font-size: 20px;
                            color: rgba(2, 9, 28, 0.3);
                        }
                    }
                }
                .dataExhibition {
                    position: relative;
                    width: 1200px;
                    height: 380px;
                    margin-top: 136px;
                    img {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .withinBox {
                        width: 100%;
                        height: 100%;
                        max-width: 100%;
                        max-height: 100%;
                        padding: 63px 0px 0 0px;
                        display: flex;
                        justify-content: space-between;
                        .list {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .title {
                                font-size: 32px;
                                color: rgba(77, 180, 88, 1);
                                margin-bottom: 31px;
                            }
                            .name {
                                font-size: 20px;
                                color: black;
                                margin-bottom: 30px;
                            }
                            .ename {
                                font-size:16px ;
                                color: rgba(2, 9, 28, 0.3);
                                white-space:nowrap;
                            }
                        }
                        .list:first-child {
                            margin-left: 60px;
                        }
                        .list:last-child {
                            margin-right: 60px;
                        }
                    }
                }
                .datalistItemBox {
                    width: 1200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .itemList {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-right: 20px;
                        width: 224px;
                        height: 365px;
                        border-radius:20px;
                        overflow: hidden;
                        background: rgba(246, 255, 247, 1);
                        img {
                            width: 61px;
                            height: 61px;
                            margin-top: 57px;
                        }
                        .number {
                            font-size: 32px;
                            color: rgba(77, 180, 88, 1);
                            margin-top: 42px;
                        }
                        .type {
                            color: rgba(2, 9, 28, 0.8);
                            font-size: 20px;
                            margin-top: 35px;
                        }
                        .ename {
                            word-break: break-all;
                            line-break: loose;
                             word-wrap:break-word;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 16px;
                            color: rgba(2, 9, 28, 0.3);
                            margin-top: 30px;
                            width: 100px;
                        }
                    }
                    .itemList:last-child {
                        margin-right: 0;
                    }
                    
                }
                .transfer {
                        position: relative;
                        z-index: -1;
                        width: 100%;
                        height: 470px;
                        // transform: translateY(-50%);
                        margin-top: -235px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
            }
            .scopeOfServices {
                background: white;
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
            .ourStrengths {
                background: #F8F8F8;
                padding-top:139px ;
                padding-bottom: 131px;
                display: flex;
                flex-direction: column;
                align-items: center;
                 .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 148px;
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
                .introduce {
                    width: 1104px;
                    height: 560px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .imgBox {
                        margin-right: 47px;
                        flex: 1;
                        height: 100%;
                        img {
                            width: 100%;
                            height: 100%;

                        }   
                    }
                    
                    .info {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        height: 100%;
                        .imgBox {
                            flex: 3;
                            margin-bottom: 30px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .info {
                            flex: 7;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            font-size: 20px;
                            color:rgba(2, 9, 28, 0.4) ;
                        }
                        
                    }
                }
            }
            .appearance {
                background: white;
                padding-top:139px ;
                padding-bottom: 131px;
                display: flex;
                flex-direction: column;
                align-items: center;
                .mySwiper {
                    width: 1200px;
                    height: 637px;
                    overflow: hidden;
                    border-radius: 20px;
                    // margin: 0;
                    .title {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 89px;
                        background: rgba(79, 201, 135, 0.3);
                        z-index: 999;
                        margin: 0;
                        // transform: translateY(100%);
                        color: white;
                    }
                }
                 .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 81px;
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