<template>
  <div>
    <div class="controls">
      <input autocomplete="off" class="itxt" />
      <a href="javascript:" class="plus">+</a>
      <a href="javascript:" class="mins">-</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
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
