import request from "../utils/request";
//商品详情页面请求的地址
export const reqGetGoodsDetail = (id) => {
  return request({
    method: "GET",
    url: `/item/${id}`
  });
};
