<template>
    <div class="btnLayout">
        <div class="btn">
            {{props.text}}
            <img class="icon" src="../assets/whiteRight.png" alt="">
        </div>
    </div>

</template>

<script>
    export default {
        name: "maxGreenBtn",
    }
</script>
<script setup>
import {defineProps} from 'vue'
    const props = defineProps({
        text: String
    })
    // console.log(props)
</script>

<style lang="less" scoped>
/*  xiao*/
@media only screen and (min-width:0px) and(max-width:1100px) {
    .max {
        display: none !important;
    }
    .btnLayout {
        display: flex;
        width: 100%;
        // justify-content: flex-end;
        .btn {
            padding:  0 6px 0 10px;
            width: 72px;
            height: 26px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: rgba(255, 255, 255, 1);
            background: #4BBC6D;
            border-radius: 5px;
            font-size: 12px;
            cursor: pointer;
            .icon {
                width: 6px;
                height: 13px;
            }
        }
    }

}

/*  da*/
@media only screen and (min-width:1101px){
    .min {
        display: none !important;
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


</style>