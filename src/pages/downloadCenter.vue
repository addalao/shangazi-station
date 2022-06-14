<template>
  <div class="downloadCenter">
    <!-- 顶部大图 -->
    <div class="topImage">
      <img src="../assets/downloadCenter.png" alt="" />
    </div>
    <!-- 下载中心 -->
    <div class="download">
      <div class="downloadTitle">
        <div class="cname">
          <span>下载</span>
          <span class="colortext">中心</span>
        </div>
        <div class="ename"> 
          <span>Download Center</span>
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
    const data = reactive({});
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
  .downloadCenter {
    .download {
      background-color: #f8f8f8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 140px;
      padding-bottom: 63px;
      border: 1px solid red;
      .downloadTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
        border: 1px solid red;
        .cname {
          font-size: 40px;
          margin-bottom: 40px;
          .colortext {
            color: rgba(77, 180, 88, 1);
          }
        }
        .ename {
          font-size: 24px;  
        }
      }
    }
  }
}
</style>