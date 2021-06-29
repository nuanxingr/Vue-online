import { reqSearchGoodsList } from "../../api/search";

const state = {
  trademarkList: [], //品牌列表
  goodsList: [], //商品列表
  attrsList: [], //属性列表

  total: 0, //总数
};
const actions = {
  //发送请求
  async searchGoodsList({ commit }, options) {
    console.log("+", options);

    const res = await reqSearchGoodsList( options );
    console.log("@", res);
    commit("SEARCH_GOODS_LIST", res);
  },
};
//直接更新到state数据中
const mutations = {
  SEARCH_GOODS_LIST(state, res) {
    state.trademarkList = res.trademarkList;
    state.goodsList = res.goodsList;
    state.attrsList = res.attrsList;
    state.total = res.total;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
