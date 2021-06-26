<template>
  <div>
    <!-- 将元素改成ref选择器 这样就不会获取到3个了-->
    <div
      class="swiper-container"
      ref="swiper"
      @mouseenter="swiper.autoplay.stop()"
      @mouseleave="swiper.autoplay.start()"
    >
      <!-- 轮播图 -->
      <div class="swiper-wrapper">
        <!-- 遍历传过来的mock图片数据 -->
        <!-- 所有资源要引入才能打包 -->
        <!-- 注意这里的图片是请求过来的是异步的 webpack无法打包  -->
        <!-- 解决:将图片放到public中就可以打包了 -->
        <div class="swiper-slide" v-for="img in imageList" :key="img.id">
          <img :src="img.imgUrl" alt="img.id" />
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// 下载swiper不能下载最新版本！ npm i swiper@5
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Carousel",
  //接收mock图片数据

  props: {
    imageList: {
      type: Array,
    },
  },
  /*
      新的问题：图片是异步加载回来的，所以轮播图图片也是异步渲染好的
              mounted触发时是初始化渲染完成，
              此时请求还未完成，所以轮播图图片还未生成DOM结构
              new Swiper就没办法生成轮播图
      总结原因：new Swiper时轮播图图片还没有，没法渲染轮播图
      解决：
        1. 等异步数据imageList回来
          使用watch监视属性：一旦数据发生变化时会触发
          当imageList由空数组变成有值的时候就会触发，此时刚好就有数据了
      问题2: watch中new Swiper还是不行
      总结原因：更新DOM是异步的，数据更新了，并不代表页面也更新了
      解决：$nextTick 保证等页面更新后再触发，只会触发一次
    */
  watch: {
    imageList: {
      handler(imageList) {
        if (!imageList.length) return;
        this.$nextTick(() => {
          this.swiper = new Swiper(this.$refs.swiper, {
            cssMode: true,
            // 导航（左右箭头）
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            // 小圆点
            pagination: {
              el: ".swiper-pagination",
            },
            loop: true, //无缝轮播
            autoplay: true, //自动轮播
          });
          // console.log(swiper);
        });
      },
      immediate:true
      // $nextTick函数出发了就有值了
    },
  },
};
</script>

<style>
</style>