<template>
  <div class="spec-preview">
    <img :src="img.imgUrl" :alt="img.imgName" />
    <div class="event" @mousemove="handleMove"></div>
    <div class="big">
      <img
        :src="img.imgUrl"
        :alt="img.imgName"
        :style="{ left: bigimgLeft, top: bigimgTop }"
      />
    </div>
    <div class="mask" :style="{ left: maskLeft, top: maskTop }"></div>
  </div>
</template>

<script>
//引入节流库
// import _ from "lodash"; //完整引入 体积太大了
import { throttle } from "lodash"; //按需使用 体积小一点
export default {
  name: "Zoom",
  data() {
    return {
      maskLeft: 0,
      maskTop: 0,
      bigimgLeft: 0,
      bigimgTop: 0,
    };
  },
  props: {
    img: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    //使用节流插件库优化代码 _.throttle()
    handleMove: throttle(function (e) {
      const eventWidth = 400;
      const eventHeight = 400;

      const maskWidth = 200;
      const maskHeight = 200;
      // 计算mask的位置（左上角）
      let left = e.offsetX - maskWidth / 2;
      let top = e.offsetY - maskHeight / 2;
      //临界值判断
      if (left < 0) {
        left = 0;
      }
      if (left > eventWidth / 2) {
        left = eventWidth / 2;
      }
      if (top < 0) {
        top = 0;
      }
      if (top > eventHeight / 2) {
        top = eventHeight / 2;
      }

      //计算大图比例
      let bigimgLeft = -2 * left;
      let bigimgTop = -2 * top;

      //设置mask的位置
      this.maskLeft = left + "px";
      this.maskTop = top + "px";
      // 设置大图的位置
      this.bigimgLeft = bigimgLeft + "px";
      this.bigimgTop = bigimgTop + "px";
    }, 100 / 60),
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>