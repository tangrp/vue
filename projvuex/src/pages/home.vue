<template>
    <div class="container">            
        <NavigationBar />
        <div class="content">
            <Input v-model="val"  class="inputtxt" placeholder="Enter something..." clearable style="width: 200px" />        
            <Button @click="detailsto" >前往详细页</Button>
        </div>
        <TabBar/>
    </div>
</template>
<script>
    import TabBar from '../components/tabbar'
    import NavigationBar from '../components/navigationbar'
    export default{
        name:'Home',
        data(){
            return {
                val:'粒'
            }
        },
        components:{TabBar,NavigationBar},
        methods:{
            detailsto(){
           
            this.$router.push({
                name:"details",
                params:{msg:this.val}
            })
            }
        }
    }
</script>
<style scoped>
.inputtxt{
    display: block;
    margin: 50px auto; 
}
</style>
