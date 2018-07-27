<template>
    <div class="container"> 
        <NavigationBar />
            <div class="content">
            个人中心
            </div>
        <TabBar/>
    </div>
</template>
<script>
    import TabBar from '../components/tabbar'
    import NavigationBar from '../components/navigationbar'
    export default{
        name:'Mine',
        components:{TabBar,NavigationBar},
        data(){
            return {}
        }
    }
</script>
<style scoped>

</style>
