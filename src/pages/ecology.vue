<template>
    <div class="ecologyBox">
        <div class="topBk"></div>
    </div>
</template>
<script>
import { reactive } from 'vue'

export default {
    name:'ecologyBox',
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
    .ecologyBox {
        .topBk {
            background: url(../assets/ecology/topBk1.png);
            background-size: 100% 100%;
            min-height: 477px;
        }
    }

</style>