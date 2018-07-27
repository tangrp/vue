<template>
    <div class="navigationBar">
        <Icon class="goback-btn" @click="gobackLink" v-if="goback" type="ios-arrow-back"></Icon>
        <h3 class="title">{{this.$store.state.title}}</h3>
    </div>
</template>
<script>
    export default{
        name:'NavigationBar',
        data(){
            return {               
            }
        },
        props:{
            goback:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            gobackLink(){
                this.$router.go(-1)
            }
            
        }

    }
</script>
<style scoped>
.navigationBar{
    height: 64px;
    background:#333;
    color:#fff;
    position: relative;
}
.navigationBar .title {
    text-align: center;
    line-height: 64px;
    letter-spacing: 5px;
}
.goback-btn{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left: 16px;
    cursor: pointer;
}
</style>
