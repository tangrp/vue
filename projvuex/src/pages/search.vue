<template>
    <div class="container">    
        <NavigationBar />
        <div class="content">
            搜索
        </div>
        <TabBar/>    
    </div>
</template>
<script>
    import TabBar from '../components/tabbar'
    import NavigationBar from '../components/navigationbar'
    export default{
        name:'Search',
        components:{TabBar,NavigationBar},
        data(){
            return {}
        }
    }
</script>
<style scoped>

</style>
