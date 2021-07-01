import request from "../utils/request";
//加入购物车接口
export const reqAddCart = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};
//获取购物车接口
export const reqGetCartList = () => {
  return request({
    method: "GET",
    url: "/cart/cartList",
  });
};
//更新购物车数据
export const reqUpdateCartChecked = (skuID, isChecked) => {
  return request({
    method: "GET",
    url: `/cart/checkCart/${skuID}/${isChecked}`,
  });
};
