<template>
    <div class="news">
        <div class="topBk"></div>
        <div class="context ">
            <div class="newInfo max">
                <img src="../assets/news/Negotiation.png" alt="">
                <div class="text">
                    <div class="layout">
                        <div class="title">农业自动灌溉系统解决方案洽谈会</div>
                        <div class="time"><span>2022-6-1  09:16</span><span>发布者：山嘎子</span></div>
                        <div class="info">
                            我司依托山东农业之乡的产业优势，成长为一家从事智能施肥机研发与定制、
                            水肥一体化、农业物联网、灌溉自动控制、农产品安全溯源、
                            自动环境调节等多种服务于一体的高新技术企业，
                            以服务中国现代化农业为己任，做可信赖的高端农业设备制造商。
                            专注于智慧农业的建成并落成数百个智慧农业相关项目，
                            为用户带来一站式的智慧农业全新体验，
                            从生产到售后全面辅佐，助力农业生产...
                        </div>
                    </div>
                    <maxGreenBtn text="了解更多"></maxGreenBtn>
                </div>
            </div>
            <div class="maxList">
                <div class="listBox">
                    <div class="right min">
                        <img src="../assets/news/listItemImg.png" alt="">
                    </div>
                    <div class="left">
                        <div class="title">植保信息化检测系统解决方案洽谈会</div>
                        <div class="time">
                            <span>2022-6-1  09:16</span>
                            <span>发布者：山嘎子</span>
                        </div>
                        <div class="info">
                            在农林业种植上，一些病虫害的发生总是无法避免，
                            虽然预防方法多种多样，但常常因为不科学的做法而收效甚微。
                            植保信息化监控预警系统由远程拍照式虫情测报灯、远程拍照式孢子捕捉仪、
                            无线远程拍照式孢子捕捉仪、无线远程自动气象站、远程......
                        </div>
                    </div>
                    <div class="right max">
                        <img src="../assets/news/listItemImg.png" alt="">
                    </div>
                </div>
            </div>
            <div class="page">
                <Pagination @change-page='fn.changePage' :pagesize='data.pageSize' :total='data.total' :page='1'/>
            </div>
            
            <bottomInfo/>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
// import maxGreenBtn from '../components/maxGreenBtn'
import maxGreenBtn from '@/components/maxGreenBtn.vue'
import Pagination from '@/components/Pagination.vue'
import bottomInfo from '@/components/bottomInfo.vue'
    export default {
    
    name: "news",
    components:{
        maxGreenBtn,
        Pagination,
        bottomInfo
    },
    props: {},
    setup(){
        const data = reactive({
            total:24,
            pageSize:4
        })
        const fn = reactive({
            changePage:(page) => { 
                // 修改分页参数，重新调用接口即可
                console.log(page)
             }
        })
        const config = reactive({

        })
        return {
            data,
            fn,
            config
        }
    }
}
</script>

<style lang="less" scoped>
//小屏
    @media only screen and (min-width:0px) and(max-width:1100px) {
        .max {
            display: none !important;
        }
        .news {
            
            .topBk {
                height: 211px;
                background: url(../assets/news/topbk2.png);
                background-size: 100% 100%;
                margin-bottom: 30px;
            }
            .context {
                display:flex;
                flex-direction: column;
                align-items: center;
                // padding:  0 22px 100px 22px;
                .newInfo {
                    width: 1120px;
                    max-width: 1120px;
                    display: flex;
                    img {
                        height: 447px;
                        width: 564px;
                        margin-right: 50px;
                    }
                    .text{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    .layout{
                            .title {
                                font-size: 30px;
                                margin-bottom: 25px;
                            }
                            .time {
                                font-size: 16px;
                                color: rgba(2, 9, 28, 0.6);
                                margin-bottom: 25px;
                                span {
                                    margin-right: 60px;
                                }
                                span:last-child {
                                    margin-right: 0;
                                }
                            }
                            .info {
                                font-size: 20px;
                                color: rgba(2, 9, 28, 0.3);
                            }
                        }
                    }
                }
                .maxList {
                   box-sizing: border-box;
                    .listBox {
                        box-sizing: border-box;
                        background: #FFFFFF;
                        box-shadow: -4px 5px 13px rgba(6, 50, 13, 0.15);
                        border-radius: 15px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 121px;
                        margin: 0 22px 0 22px;
                        padding: 15px 10px 15px 10px ;
                        .left {
                            flex: 1;
                            // margin-right: 47px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            height: 100%;
                            .title {
                                font-size: 14px;

                            }
                            .time {
                                font-size: 12px;
                                color: rgba(2, 9, 28, 0.6);
                            }
                            .info {
                                font-size: 12px;
                                color: rgba(2, 9, 28, 0.6);
                                overflow:hidden;
                                text-overflow:ellipsis;
                                display:-webkit-box;
                                -webkit-box-orient:vertical;
                                -webkit-line-clamp:3;
                            }
                        }
                        .right {
                            height: 100%;
                            margin-right: 10px;
                            img {
                                height: 100%;
                                // width: 100%;
                            }
                        }
                    }
                }
                .page {
                    // width: 1120px;
                    // max-width: 1120px;
                    // display: flex;
                    margin: 30px 0 30px 0 ;
                }
            }
            
        }
    }
//大屏
    @media only screen and (min-width:1101px) {
        .min {
            display: none !important;
        }
        .news {
            
            .topBk {
                height: 477px;
                background: url(../assets/news/topbk1.png);
                background-size: 100% 100%;
                margin-bottom: 80px;
            }
            .context {
                display:flex;
                flex-direction: column;
                align-items: center;
                // padding-bottom: 100px;
                .newInfo {
                    width: 1120px;
                    max-width: 1120px;
                    display: flex;
                    img {
                        height: 447px;
                        width: 564px;
                        margin-right: 50px;
                    }
                    .text{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    .layout{
                            .title {
                                font-size: 30px;
                                margin-bottom: 25px;
                            }
                            .time {
                                font-size: 16px;
                                color: rgba(2, 9, 28, 0.6);
                                margin-bottom: 25px;
                                span {
                                    margin-right: 60px;
                                }
                                span:last-child {
                                    margin-right: 0;
                                }
                            }
                            .info {
                                font-size: 20px;
                                color: rgba(2, 9, 28, 0.3);
                            }
                        }
                    }
                }
                .maxList {
                    margin-top: 76px;
                    .listBox {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 1120px;
                        max-width: 1120px;
                        height: 192px;
                        padding: 48px 0 50px 0 ;
                        border-top: 2px solid rgba(49, 104, 61, 0.3);
                        .left {
                            flex: 1;
                            margin-right: 47px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            height: 100%;
                            .title {
                                font-size: 25px;

                            }
                            .time {
                                font-size: 16px;
                                color: rgba(2, 9, 28, 0.6);
                            }
                            .info {
                                font-size: 20px;
                                color: rgba(2, 9, 28, 0.6);
                            }
                        }
                        .right {
                            height: 100%;
                            width: 305px;
                            img {
                                width: 100%;
                            }
                        }
                    }
                    .listBox:last-child {
                        border-bottom: 2px solid rgba(49, 104, 61, 0.3);;
                    }
                }
                .page {
                    width: 1120px;
                    max-width: 1120px;
                    display: flex;
                    margin: 50px 0 60px 0 ;
                }
                
            }
            
        }
    }
    

</style>