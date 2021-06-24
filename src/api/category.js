import axios from "axios";

export const reqGetCategoryList = () => {
  return axios({
    method: "GET",
    url: "/api/product/getBaseCategoryList",
  });
};
