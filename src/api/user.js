import request from "../utils/request";
//发送验证码接口数据
export const reqSendCode = (phone) => {
  return request({
    method: "GET",
    url: `/user/passport/sendCode/${phone}`,
  });
};
