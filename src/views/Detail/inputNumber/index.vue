<template>
  <div>
    <div class="controls">
      <input
        autocomplete="off"
        class="itxt"
        :value="currentValue"
        @blur="handleInput"
      />
      <a :class="{ plus: true, disabled: currentValue === max }" @click="add"
        >+</a
      >
      <a :class="{ mins: true, disabled: currentValue === min }" @click="count"
        >-</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "InputNumber",

  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  methods: {
    handleInput(e) {
      this.currentValue = e.target.value;
    },
    //判断++
    add() {
      if (this.currentValue > this.max) return;
      this.currentValue++;
    },
    //判断--
    count() {
      if (this.currentValue < this.min) return;
      this.currentValue--;
    },
  },
  watch: {
    currentValue(currentValue, oldValue) {
      const { min, max } = this;
      //用户输入的是字符串
      let value = +currentValue;
      let newVal = value;
      //输入非数字内容，就变回以前的值（oldValue是最初的值）
      if (Number.isNaN(value)) {
        this.currentValue = oldValue;
      }
      //输入最小值，就变成最小值
      if (value < min) {
        this.currentValue = min;
        return;
      }
      //输入最大值，就变成最大值
      if (value > max) {
        this.currentValue = max;
        return;
      }
      //统一更新外面的值
      this.currentValue = newVal;
      this.$emit("input", newVal);
    },
  },
};
</script>

<style lang="less">
.controls {
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;

  .itxt {
    width: 38px;
    height: 37px;
    border: 1px solid #ddd;
    color: #555;
    float: left;
    border-right: 0;
    text-align: center;
  }

  .plus,
  .mins {
    width: 15px;
    text-align: center;
    height: 17px;
    line-height: 17px;
    background: #f1f1f1;
    color: #666;
    position: absolute;
    right: -8px;
    border: 1px solid #ccc;
    cursor: pointer;
    &.disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  .mins {
    right: -8px;
    top: 19px;
    border-top: 0;
  }

  .plus {
    right: -8px;
  }
}
</style>
