import { reqGetGoodsDetail } from "../../api/detail";

const state = {
  goods: {
    categoryView:{},
    skuInfo:{},
    spuSaleAttrList:[]
  },

};

const actions = {
  //发送请求
  async getGoodsDetail({ commit }, id) {
    try {
      const goods = await reqGetGoodsDetail(id);
      commit('GET_GOODS_DETAIL', goods);
    } catch (error) {
      console.log(error);
    }
  },
};
//把数据传到state中
const mutations = {
  GET_GOODS_DETAIL(state, goods) {
    state.goods = goods;
  },
};
export default {
  namespaced:true,
  state,
  actions,
  mutations,
};
