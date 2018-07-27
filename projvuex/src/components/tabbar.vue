<template>
    <div class="tabBar">
            <!-- 游标 -->
        <div class="cursor" :style="{'left':this.$store.state.left}">
            
        </div>
        <!-- 菜单栏 -->
        <ul class="tabBar-list">           
            <li class="item" v-for="(item, index) in links" :key="index">                 
                <router-link :to="item.href"><Icon class="icon" :type="item.icon"  color="#fff" />{{item.title}}</router-link>                 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      links: [
        { title: "主页", href: "/", icon: "ios-home" },
        { title: "搜索", href: "/search", icon: "ios-search-strong" },
        { title: "购物车", href: "/shoppingcar", icon: "ios-cart" },
        { title: "个人中心", href: "/mine", icon: "ios-person" }
      ]
      
    };
  },
};
</script>
<style scoped>

.tabBar,.tabBar-list {
  height: 49px;
  box-sizing: border-box;
  position: relative;
  background: #333;
}
/* .tabBar-list-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
} */
.tabBar-list .item {
  width: 25%;
  height: 100%;
  background: transparent;
  color: #fff;
  cursor: pointer;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 7px 0;
}
.tabBar-list .item a {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  z-index: 101;
  /* z-index: 10; */
}
.icon{
    /* z-index: 9; */
    display: block;
}
.router-link-active {
  color: orange;
}
.cursor{
    width:25%;
    height: 49px;
    position: absolute;
    top:0;
    background: purple;
    z-index: 100;  
    transition: all .3s linear;
}
</style>
