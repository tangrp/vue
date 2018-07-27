<template>
    <div class="container">      
        <NavigationBar />
         <div class="content">
            购物车
         </div>
        <TabBar/>   
    </div>
</template>
<script>
    import TabBar from '../components/tabbar'
    import NavigationBar from '../components/navigationbar'
    export default{
        name:'ShoppingCar',
        components:{TabBar,NavigationBar},
        data(){
            return {}
        }
    }
</script>
<style scoped>

</style>