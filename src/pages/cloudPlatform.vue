

<template>
    <div class="cloudPlatform">
        <div class="topBk"></div>
    </div>
</template>
<script>
import { reactive } from 'vue'

export default {
    name:'cloudPlatform',
    setup(){
        const data = reactive({})
        const fn = reactive({})
        const config = reactive({})
        return {
            data,
            fn,
            config,
        }
    }
}
</script>
<style lang="less" scoped>
    .cloudPlatform {
        .topBk {
            background: url(../assets/cloudPlatform/topBk1.png);
            background-size: 100% 100%;
            min-height: 477px;
        }
    }

</style>