<template>
  <div class="cooperation">
    <!-- 顶部大图 -->
    <div class="topImage">
      <img src="../assets/joinUs.png" alt="" />
    </div>
    <!-- 联系我们 -->
    <div class="ContactUs">
      <div class="contactUsTitle">
        <div class="cname">
          <span class="colortext">联系我们</span>
        </div>
        <div class="ename">
          <span>Contact Us</span>
        </div>
      </div>
      <div class="ContactBox">
        <div class="box" v-for="(item, index) in data.boxList" :key="index">
          <div class="left">
            <img src="../assets/reception.png" alt="" />
          </div>
          <div class="right">
            <span class="title">{{ item.title }}</span>
            <span class="content">{{ item.content }}</span>
          </div>
        </div>
      </div>
      <div class="Partner">
        <div class="partnerTitle">
          <div class="cname">
            <span class="colortext">合作伙伴</span>
          </div>
          <div class="ename">
            <span>Partner</span>
          </div>
        </div>
        <div class="partnerIcon">
          <div class="squareIcon">
            <div class="oneline">
              <img src="../assets/partner1.png" alt="" />
              <img src="../assets/partner1.png" alt="" />
              <img src="../assets/partner1.png" alt="" />
              <img src="../assets/partner1.png" alt="" />
            </div>
            <div class="oneline">
              <img src="../assets/partner1.png" alt="" />
              <img src="../assets/partner1.png" alt="" />
              <img src="../assets/partner1.png" alt="" />
              <img src="../assets/partner1.png" alt="" />
            </div>
          </div>

          <div class="circularIcon">
            <div class="oneline">
              <img src="../assets/collage.png" alt="" />
              <img src="../assets/collage.png" alt="" />
              <img src="../assets/collage.png" alt="" />
              <img src="../assets/collage.png" alt="" />
              <img src="../assets/collage.png" alt="" />
            </div>
            <div class="oneline">
              <img src="../assets/collage.png" alt="" />
              <img src="../assets/collage.png" alt="" />
              <img src="../assets/collage.png" alt="" />
              <img src="../assets/collage.png" alt="" />
              <img src="../assets/collage.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "downloadCenter",
  components: {},
  props: {},
  setup() {
    const data = reactive({
      boxList: [
        {
          title: "山嘎子前台",
          content: "191-0631-7893",
          iconUrl: "../assets/reception.png",
        },
        {
          title: "采购合作",
          content: "wangjy@jxctdzkj.com",
          iconUrl: "../assets/reception.png",
        },
        {
          title: "战略合作",
          content: "191-0631-7893 张经理",
          iconUrl: "../assets/reception.png",
        },
        {
          title: "投诉建议",
          content: "complaint@jxctdzkj.com",
          iconUrl: "@/assets/reception.png",
        },
      ],
    });
    const fn = reactive({});
    const config = reactive({});
    return {
      data,
      fn,
      config,
    };
  },
};
</script>

<style lang="less" scoped>
// 大屏
@media only screen and (min-width: 1101px) {
  .cooperation {
    .topImage {
      img {
        width: 1920px;
        height: 477px;
      }
    }
    .ContactUs {
      background-color: #f8f8f8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 140px;
      padding-bottom: 63px;
      //   border: 1px solid red;
      .contactUsTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 63px;
        // border: 1px solid red;
        .cname {
          font-family: "PingFang HK";
          font-style: normal;
          font-weight: 500;
          font-size: 40px;
          line-height: 39px;
          margin-bottom: 40px;
          .colortext {
            color: rgba(77, 180, 88, 1);
          }
        }
        .ename {
          font-family: "PingFang TC";
          font-style: normal;
          font-weight: 200;
          font-size: 24px;
          line-height: 23px;
          color: #02091c;
        }
      }
      .ContactBox {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        width: 1200px;
        height: 447px;
        .box {
          width: 576px;
          height: 200px;
          margin-bottom: 47px;
          background: rgba(77, 180, 88, 0.1);
          border-radius: 10px;
          display: flex;
          .left {
            padding: 42px;
            width: 120px;
            // border: 1px solid green;
            img {
              width: 116px;
              height: 116px;
            }
          }
          .right {
            // border: 1px solid red;
            margin-left: 37px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .title {
              width: 100%;
              font-family: "PingFang HK";
              font-style: normal;
              font-weight: 600;
              font-size: 36px;
              line-height: 50px;
              color: rgba(2, 9, 28, 0.8);
              margin-bottom: 9px;
            }
            .content {
              width: 100%;
              font-family: "PingFang HK";
              font-style: normal;
              font-weight: 400;
              font-size: 24px;
              line-height: 34px;
              color: rgba(2, 9, 28, 0.3);
            }
          }
        }
      }
      .Partner {
        width: 1200px;
        display: flex;
        flex-direction: column;
        margin-top: 136px;
        .partnerTitle {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 80px;
          .cname {
            font-family: "PingFang HK";
            font-style: normal;
            font-weight: 500;
            font-size: 40px;
            line-height: 39px;
            text-align: center;
            margin-bottom: 40px;
            .colortext {
              color: #4db458;
            }
          }

          .ename {
            font-family: "PingFang TC";
            font-style: normal;
            font-weight: 200;
            font-size: 24px;
            line-height: 23px;
            text-align: center;
          }
        }
        .partnerIcon {
          .squareIcon {
            margin-bottom: 101px;
            .oneline {
              display: flex;
              justify-content: space-between;
              margin-bottom: 123px;
              img {
                width: 266px;
                height: 79px;
              }
            }
          }
          .circularIcon {
            .oneline {
              display: flex;
              justify-content: space-between;
              margin-bottom: 79px;
              img {
                width: 130px;
                height: 130px;
              }
            }
          }
        }
      }
    }
  }
}

//小屏
@media only screen and (min-width: 0px) and(max-width:1100px) {
  .cooperation {
    .topImage {
      background: #f8f8f8;
      img {
        width: 849.31px;
        height: 211px;
        margin-left: -226px;
      }
    }
    .ContactUs {
      background-color: #f8f8f8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 30px;
      padding-bottom: 63px;
      //   border: 1px solid red;
      .contactUsTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        // border: 1px solid red;
        .cname {
          font-family: "PingFang HK";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 15px;
          margin-bottom: 30px;
          .colortext {
            color: rgba(77, 180, 88, 1);
          }
        }
        .ename {
          display: none;
        }
      }
      .ContactBox {
        display: flex;
        flex-direction: column;
        .box {
          width: 331px;
          height: 120px;
          margin-bottom: 15px;
          background: rgba(77, 180, 88, 0.1);
          border-radius: 10px;
          display: flex;
          .left {
            padding: 30px;
            width: 70px;
            // border: 1px solid green;
            img {
              width: 60px;
              height: 60px;
            }
          }
          .right {
            // border: 1px solid red;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .title {
              width: 100%;
              font-family: "PingFang HK";
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 15px;
              margin-bottom: 28px;
            }
            .content {
              // width: 100%;
              font-family: "PingFang HK";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 15px;
              color: rgba(2, 9, 28, 0.3);
            }
          }
        }
      }
      .Partner {
        // width: 1200px;
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        .partnerTitle {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
          .cname {
            font-family: "PingFang HK";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 15px;
            .colortext {
              color: #4db458;
            }
          }

          .ename {
            display: none;
          }
        }
        .partnerIcon {
          width: 330px;
          .squareIcon {
            margin-bottom: 28px;
            .oneline {
              display: flex;
              justify-content: space-between;
              margin-bottom: 30px;
              img {
                width: 73px;
                height: 24px;
              }
            }
          }
          .circularIcon {
            .oneline {
              display: flex;
              justify-content: space-between;
              margin-bottom: 22px;
              img {
                width: 35px;
                height: 35px;
              }
            }
          }
        }
      }
    }
  }
}
</style>