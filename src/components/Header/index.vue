<template>
  <div>
    <div class="header">
      <div class="header-top">
        <div class="header-user">
          <p>
            尚品汇欢迎您！请 <router-link to="/login">登录 </router-link
            ><router-link to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="header-nav">
          <ul class="header-top-nav">
            <li><router-link to="/">我的订单</router-link></li>
            <li><router-link to="/">我的购物车</router-link></li>
            <li><router-link to="/">我的尚品汇</router-link></li>
            <li><router-link to="/">尚品汇会员</router-link></li>
            <li><router-link to="/">企业采购</router-link></li>
            <li><router-link to="/">关注尚品汇</router-link></li>
            <li><router-link to="/">合作招商</router-link></li>
            <li><router-link to="/">商家后台</router-link></li>
          </ul>
        </div>
      </div>
      <div class="header-bottom">
        <h1><router-link to="/"></router-link></h1>
        <form class="header-bottom-form">
          <input type="text" class="header-bottom-input" />
          <button class="header-bottom-btn">
            <router-link to="/search" class="color">搜索</router-link>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less">
.header {
  height: 100px;
  // width: 1592.2px;
  // background-color: orange;
}
.header-top {
  display: flex;
  justify-content: space-between;
  height: 35.2px;
  background-color: rgb(234, 234, 234);

  .header-user {
    width: 184px;
    height: 15.2px;
    line-height: 15.2px;
    padding: 10px 20px;
  }
  .header-nav {
    width: 590.94px;
    height: 15.2px;
  }
  .header-nav ul {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }
  .header-top-nav li {
    border-right: 1px solid #333;
    padding-right: 3px;
    margin-left: 10px;
    height: 15px;
  }
}
.header-bottom {
  display: flex;
  justify-content: space-between;
  height: 65px;
  // background-color: pink;

  h1 {
    margin-left: 30px;
    width: 175px;
    height: 65px;
    background-image: url(../../assets/images/Logo.png);
    background-repeat: no-repeat;
  }
  .header-bottom-form {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: 20px;
    .header-bottom-input {
      width: 450px;
      border: 1px solid #ea4a36;
      outline: none;
      height: 22px;
      padding: 4px 5px;
    }
    .header-bottom-btn {
      width: 80px;
      height: 32px;
      background-color: #ea4a36;
      border: none;
      .color {
        color: #fff;
      }
    }
  }
}
</style>