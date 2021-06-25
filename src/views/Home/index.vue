<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
     <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
    
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import TypeNav from "../../components/typeNav/index.vue";
import Brand from "./Brand/Brand";
import Floor from "./Floor/Floor";
import Like from "./Like/Like";
import ListContainer from "./ListContainer/ListContainer";
import Rank from "./Rank/Rank";
import TodayRecommend from "./TodayRecommend/TodayRecommend";
import {reqGetFloors} from '../../api/home'
export default {
  name: "Home",
  components: {
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend,
    TypeNav,
  },
  data() {
    return {
      floors:[]
    }
  },
  mounted() {
    //发送请求
    reqGetFloors()
      .then((res) => {
        // console.log(res);
        this.floors = res;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="less" scoped>
</style>