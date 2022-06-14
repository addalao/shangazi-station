<template>
    <div class="farmProgram">
        <div class="topBk"></div>
        <div class="Exhibition">
            <div class="title">
                <div class="name">
                    农场<span>方案</span>
                </div>
                <div class='ename max'>Related Products</div>
            </div>
            <div class="classification">
                <swiper :pagination="config.paginations" :modules="config.modules" class="mySwiper">
                    <swiper-slide v-for="(item,index) in data.classification" :key="index">
                        <div class="listItemBox">
                            <div class="item" v-for="(citem,index) in item">
                                <img src="../assets/farmProgram/listItemImg.png" alt="">
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
        name:'farmProgram',
        components:{
            Swiper,
            SwiperSlide,
            CommodityList,
            BottomInfo
        },
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
                        
                    ],
                    [
                        
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
                    '智慧养殖方案',
                    '智慧农场方案',
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
@media only screen and (min-width:0px) and(max-width:1100px) {
    .farmProgram {
        .topBk {
            background: url(../assets/farmProgram/topBk2.png);
            background-size: 100% 100%;
            width: 100%;
            height: 211px;
            margin-bottom: 63px;
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
    .farmProgram {
        .topBk {
            background: url(../assets/farmProgram/topBk1.png);
            background-size: 100% 100%;
            width: 100%;
            height: 447px;
            margin-bottom: 63px;
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
                        grid-template-rows: repeat(2, 390px);
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