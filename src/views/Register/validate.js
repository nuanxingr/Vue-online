import { extend } from "vee-validate";

import { phoneReg, passwordReg, codeReg } from "../../utils/reqs";
//定义表单规则
extend("required", {
  validate(value) {
    //value就是校验的值
    return !!value;
  },
  message: "请输入手机号", //校验失败提示的信息
});

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
  computesRequired: true,
});

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
  computesRequired: true,
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
//手机验证码规则
extend("CodeRequired", {
  validate(value) {
    //value就是校验的值
    return !!value;
  },
  message: "手机验证码不能为空", //校验失败提示的信息
  computesRequired: true,
});

extend("code", {
  validate(value) {
    console.log(value);
    //value就是校验的值
    return codeReg.test(value);
  },
  message: "验证码输入不正确", //校验失败提示的信息
});
