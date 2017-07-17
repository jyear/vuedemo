<style lang="less">
        @co-red:red;
        .box{
                color:@co-red;
        }
</style>
<template>
        <div>
                <div>{{msg}}</div>
        </div>
</template>
<script>
       export default {
                data () {
                        return {
                                msg: this.$store.state.msg
                        }
                }
       }




</script>


