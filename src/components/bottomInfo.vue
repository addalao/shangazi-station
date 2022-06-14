<template>
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
</template>

<script>
import { reactive } from 'vue'
    export default {
        name: "bottomInfo",
        setup(){
            const data = reactive({
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
            return {
                data
            }
        }
    }
</script>


<style lang="less" scoped>
//小
@media only screen and (min-width:0px) and(max-width:1100px) {
    .max {
        display: none !important;;
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

//大
@media only screen and (min-width:1101px){
    .min {
        display: none !important;;
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

</style>