<template>
    <div container>        
        <NavigationBar :goback="true"/>
        <div class="content">
            {{val}}
        </div>
    </div>
</template>
<script>
    import NavigationBar from '../components/navigationbar'
    export default{        
        name:'Details',
        components:{NavigationBar},
        data(){
            return {
                val:this.$route.params.msg
            }
        }
    }
</script>
<style scoped>
.content{
    height: calc(100% - 64px);
    overflow-y: scroll;
}
</style>
