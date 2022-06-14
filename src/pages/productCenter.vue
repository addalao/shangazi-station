<template>
<div class="productCenter">
    <div class="topBk"></div>
    <div class="product">
        <div class="title">
            <div class="name">
                <span>产品</span>中心
            </div>
            <div class='ename max'>Product Center</div>
        </div>
        <div class="briefIntroduction">
            <img src="../assets/productCenter/infoimg1.png" alt="">
            <div class="text">
                <div class="name">
                    “<span>产品</span>+<span>数据</span>+<span>技术</span>+<span>服务</span>”
                </div>
                <div class="ename max">"Product + Data + Technology + Service"</div>
                <div class="info">
                   专业的智慧农业物联网、数据、技术服务公司，公司始终坚持“产品+数据+技术+服务”的发展模式，
                   公司围绕数字农业、智慧农业、智能农业、农业物联网开展服务，产品包括智能大棚、智能温室
                   ，也包括农产品安全溯源平台，以及土壤传感器、新兴的水肥一体化、智能灌溉、农业气象站、虫
                   情监测、孢子监测、智慧畜牧养殖、智慧水产养殖、农机信息化管理平台、智慧农业大数据平台等
                   领域.
                </div>
            </div>
        </div>
    </div> 
    <div class="Exhibition">
        <div class="title">
            <div class="name">
                <span>产品</span>展示
            </div>
            <div class='ename max'>Related Products</div>
        </div>
        <div class="classification">
            <swiper :pagination="config.paginations" :modules="config.modules" class="mySwiper">
                <swiper-slide v-for="(item,index) in data.classification" :key="index">
                    <div class="listItemBox">
                        <div class="item" v-for="(citem,index) in item">
                            <img src="../assets/productCenter/listItemImg.png" alt="">
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <CommodityList :List='data.whyChooseList'/>
    <BottomInfo/>
</div>
</template>

<script>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import CommodityList from '../components/commodityList.vue'
import BottomInfo from '@/components/bottomInfo.vue';
export default {
    components:{
        Swiper,
        SwiperSlide,
        CommodityList,
        BottomInfo
    },
    name:'productCenter',
    setup(){
        const data = reactive({
            classification:[
                [
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                ],
                [
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                    {name:'智壤仪'},
                ],
            ],
            swiperNavbar:[
                '全部',
                '土壤检查',
                '气象检查',
                '水产水质',
                '控制设备',
                '生长监测',
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
            
        })
        const fn = reactive({

        })
        const config = reactive({
            paginations: {
                clickable: true,
                renderBullet: function (index, className) {
                return `<span class="classificationSwiperNav ${className} ">` + (data.swiperNavbar[index]) + "</span>";
                },
            },
            modules: [Pagination],
        })
        return {
            data,
            fn,
            config
        }
    }
}
</script>



<style>

    .swiper {
        width: 100%;
        height: 100%;
        position: static;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
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

    .swiper-pagination-bullet {
        font-size: 14px;
        padding: 10px 20px 10px 20px;
        color: rgba(2, 9, 28, 0.6);
        transition: 0.5s;
        background: white;
        opacity: 1;
        width: auto;
        height: auto;
    }

    .swiper-pagination-bullet-active {
        color: rgba(77, 180, 88, 1);
        background: #DFFFE3;
        border-radius: 15px;

    }
    .swiper-wrapper {
        position: static !important;
    }
    .swiper-pagination {
        position: absolute;
        top: 0;
        height: 44px;
        transform: translateY(-100%);
        z-index: 99;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        padding-bottom: 30px;
        max-width: 331px;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    ::-webkit-scrollbar {
        /*隐藏滚轮*/
        display: none;
    }
/* 大 */
@media  screen and (min-width:1101px) {
.swiper {
    width: 100%;
    height: 100%;
    position: static;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
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

    .swiper-pagination-bullet {
        font-size: 20px;
        padding: 13px 20px 12px 20px;
        color: rgba(2, 9, 28, 0.8);
        transition: 0.5s;
        background: white;
        opacity: 1;
        width: auto;
        height: auto;
    }

    .swiper-pagination-bullet-active {
        color: rgba(77, 180, 88, 1);
        background: #DFFFE3;
        border-radius: 15px;

    }
    .swiper-wrapper {
        position: static !important;
    }
    .swiper-pagination {
        position: absolute;
        top: 0;
        height: 44px;
        transform: translateY(-100%);
        z-index: 99;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        padding-bottom: 62px;
    }
}



</style>



<style lang="less" scoped>
//小
@media only screen and (min-width:0px) and(max-width:1100px){
    .productCenter {
        .topBk {
            height: 211px;
            background: url(../assets/productCenter/topbk2.png);
            background-size: 100% 100%;
            
        }
        .product {  
            // padding-top: 63px;
            margin-top: 25px;
            // padding-bottom: 127px;
            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;
                .name {
                    font-size: 16px;
                    margin-bottom: 0px;
                    span {
                        color: #4DB458;
                    }

                }
                .ename {
                    font-size: 24px;
                }
            }
            .briefIntroduction {
                margin: auto;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0 22px 0 22px;
                box-sizing: border-box;
                margin-bottom: 30px;
                img {
                    max-width: 100%;
                    
                }
                .text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .name{
                        font-size: 16px;
                        display: flex;
                        justify-content: center;
                        margin-top: 20px;
                        margin-bottom: 20px;
                        span {
                            color: rgba(77, 180, 88, 1);
                        }
                    }
                    
                    .info {
                        font-size: 12px;
                        color: rgba(2, 9, 28, 0.3);
                    }
                }
            }
            
        }
        .Exhibition {
            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .name {
                    font-size: 16px;
                    margin-bottom: 93px;
                    span {
                        color: #4DB458;
                    }

                }
                .ename {
                    font-size: 24px;
                }
            }
            .classification {

                box-sizing: border-box;
                position: relative;
                margin-bottom: 100px;
                border:1px solid transparent;
                
                .mySwiper {
                    //导航栏每一个的样式
                    // .classificationSwiperNav{
                    //     // min-width: 120px;
                    
                    // }   
                    .listItemBox {
                        display: grid;
                        
                        grid-template-rows: repeat(3, 141px);
                        grid-template-columns: repeat(2, 160px);
                        grid-row-gap: 15px;
                        grid-column-gap: 15px;
                        .item {
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
    }

    .max {
        display: none !important;
    }
}
//大
@media only screen and (min-width:1101px) {
    
    .productCenter {
        .topBk {
            height: 477px;
            background: url(../assets/productCenter/topbk1.png);
            background-size: 100% 100%;
            
        }
        .product {  
            padding-top: 63px;
            // padding-bottom: 127px;
            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 80px;
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
            .briefIntroduction {
                margin: auto;
                width: 62.5%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 156px;
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
            
        }
        .Exhibition {
            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 142px;
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
            .classification {
                // height: 1445px;
                margin:  0 360px 0 360px;
                position: relative;
                margin-bottom: 100px;
                border:1px solid transparent;
                // position: absolute;
                .mySwiper {
                    //导航栏每一个的样式
                    .classificationSwiperNav{
                        min-width: 120px;
                    
                    }   
                    .listItemBox {
                        display: grid;
                        grid-template-rows: repeat(3, 390px);
                        grid-template-columns: repeat(3, 350px);
                        grid-row-gap: 15px;
                        grid-column-gap: 15px;
                        .item {
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
}

    

</style>