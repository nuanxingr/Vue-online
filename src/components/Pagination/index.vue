<template>
  <div>111</div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    // 中划线命名的属性，传递数据时，会自动转换小驼峰命名法
    "current-page": {
      type: Number,
      default: 1,
    },
    "page-size": {
      type: Number,
      default: 5,
    },
    "page-sizes": {
      type: Array,
      // 数组默认值，必须写成函数形式
      default: () => [5, 10, 15, 20],
    },
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="less">
    .pagination {
  display: flex;
  justify-content: center;
  button {
    outline: none;
    border: none;
    margin: 0 5px;
    width: 30px;
    height: 30px;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
    cursor: pointer;
    &.active {
      background-color: #409eff;
      color: #fff;
    }
    &.disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

</style>