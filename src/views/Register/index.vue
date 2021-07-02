<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="register" @submit.prevent="handleSubmit(submit)">
        <h3>
          注册新用户
          <span class="go"
            >我有账号，去
            <router-link to="/login" target="_blank">登陆</router-link>
          </span>
        </h3>
        <ValidationProvider
          class="content"
          rules="required|phone"
          v-slot="{ errors }"
          tag="div"
        >
          <label>手机号:</label>
          <input
            type="text"
            placeholder="请输入你的手机号"
            v-model="user.phone"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="content">
          <label>验证码:</label>
          <input type="text" placeholder="请输入验证码" v-model="user.code" />
          <button>发送验证码</button>
          <span class="error-msg">错误提示信息</span>
        </div>
        <ValidationProvider
          class="content"
          rules="passwordRequired|password"
          v-slot="{ errors }"
          tag="div"
        >
          <label>登录密码:</label>
          <input
            type="text"
            placeholder="请输入你的登录密码"
            v-model="user.password"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="content"
          :rules="`rePasswordRequired|rePassword:${user.password}`"
          v-slot="{ errors }"
          tag="div"
        >
          <label>确认密码:</label>
          <input
            type="text"
            placeholder="请输入确认密码"
            v-model="user.rePassword"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="controls">
          <input name="m1" type="checkbox" />
          <span>同意协议并注册《尚品汇用户协议》</span>
          <span class="error-msg">错误提示信息</span>
        </div>
        <div class="btn">
          <button type="submit">完成注册</button>
        </div>
      </form>
    </ValidationObserver>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
/*  
  vee-validate
  1. 文档
    https://vee-validate.logaretm.com/v3/guide/forms.html#basic-example
  2. 下载
    npm i vee-validate
  3. 使用
    - 定义表单校验规则
      import { extend } from 'vee-validate';
      extend('规则名称', {
        validate(value) {
          // value就是校验的值
          return xxx; // 返回值true校验成功，反之校验失败
        },
        message: 'xxx' // 校验失败提示的错误信息
      });
    - 校验表单
      注册两个组件 ValidationObserver ValidationProvider
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          校验表单
            rules 表单校验规则
            v-slot="{ errors }" 通过作用域插槽得到校验失败的错误 errors
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <input v-model="email" type="email">
            <span>{{ errors[0] }}</span>
          </ValidationProvider> 
          ...
        </form>  
      </ValidationObserver>  
*/

import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
//定义表单规则
extend("required", {
  validate(value) {
    //value就是校验的值
    return !!value;
  },
  message: "请输入手机号", //校验失败提示的信息
});
const phoneReg = /^1[0-9]{10}$/;

extend("phone", {
  validate(value) {
    console.log(value);
    //value就是校验的值
    return phoneReg.test(value);
  },
  message: "请输入合法手机号", //校验失败提示的信息
});

// 密码校验规则
extend("passwordRequired", {
  validate(value) {
    //value就是校验的值
    return !!value;
  },
  message: "请输入密码", //校验失败提示的信息
});
const passwordReg = /^[0-9]{6,18}$/;

extend("password", {
  validate(value) {
    console.log(value);
    //value就是校验的值
    return passwordReg.test(value);
  },
  message: "请输入六位数以上且只能为数字", //校验失败提示的信息
});

// 确认密码校验
extend("rePasswordRequired", {
  validate(value) {
    //value就是校验的值
    return !!value;
  },
  message: "请输入密码", //校验失败提示的信息
});

extend("rePassword", {
  //结构密码{ password }才能拿到密码
  validate(rePassword, { password }) {
    //判断密码是否相等
    return rePassword === password;
  },
  message: "两次密码不一致", //校验失败提示的信息
  params: ["password"], //声明接收参数
});
export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "",
        code: "",
        password: "",
        rePassword: "",
      },
    };
  },
  methods: {
    //
    submit() {
      console.log("校验成功");
    },
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>