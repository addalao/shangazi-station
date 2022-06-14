<template>
<!-- 竖线list -->
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
                <div class="vertical max" v-for="(titem,index) in copyArr" :key="index">
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
</template>

<script>
import { reactive,computed } from 'vue'
    export default {
        name: "commodityList",
        props:{
            List:Array
        },
        setup(props){
            // console.log(props)
            const data = reactive({
                whyChooseList:[],
            })
            data.whyChooseList  =props.List

/************************ */  
           
            // data.copyArr = copyArr
          const copyArr  =  computed(()=>{
                const newArr = [...data.whyChooseList]
                const copyArr = []
                data.whyChooseList.forEach((item) => { 
                        if(newArr.length !== 0){
                            copyArr.push(newArr.splice(0,2))  
                        }
                    })
                    return copyArr
                })
            // const computedData = {
            //     copyArr:
            // }
/************************** */  
            return {
                data,
                copyArr
            }
        }
    }
</script>


<style lang="less" scoped>
//小
@media only screen and (min-width:0px) and(max-width:1100px) {
    .max {
        display: none !important;
    }
   .WhyChoice {
                background: white;
                padding-top: 0px;
                padding-bottom: 30px;
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
}

//大
@media only screen and (min-width:1101px){
    .min {
        display: none !important;
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
}

</style>