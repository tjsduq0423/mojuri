import * as reportApi from "@/api/report";

export default {
  namespaced: true,
  state: {
    list: [],
    listCount: 0,
    _list: [],
  },
  mutations: {
    setList(state, data) {
      const data2 = data.sort(
        (a, b) => new Date(b.report_date) - new Date(a.report_date)
      );
      console.log(data2);
      state._list = data2;
      let arr = [];
      data2.forEach((value, index) => {
        if (index % 20 == 0) arr.push(data2.slice(index, index + 20));
      });
      state.list = arr;
    },
    setListCount(state, data) {
      state.listCount = data;
    },
    filter(state, data) {
      if (data == 0) {
        let arr = [];
        state._list.forEach((value, index) => {
          if (index % 20 == 0) arr.push(state._list.slice(index, index + 20));
        });
        state.list = arr;
        state.listCount = state._list.length;
      } else {
        const data3 = state._list.filter((v) => v.cla_no == data);
        let arr = [];
        data3.forEach((value, index) => {
          if (index % 20 == 0) arr.push(data3.slice(index, index + 20));
        });
        state.list = arr;
        state.listCount = data3.length;
      }
    },
    IncreaseSort(state) {
      state._list.sort((a, b) => b.report_upside - a.report_upside);
      let arr = [];
      state._list.forEach((value, index) => {
        if (index % 20 == 0) arr.push(state._list.slice(index, index + 20));
      });
      state.list = arr;
    },
  },
  actions: {
    async callData({ commit }) {
      const response = await reportApi.report();
      console.log(response);
      commit("setList", response.data.data);
      commit("setListCount", response.data.data.length);
    },
    async callCorporationData({ commit }) {
      const response = await reportApi.CorporationReport();
      console.log(response);
      commit("setList", response.data.data);
      commit("setListCount", response.data.data.length);
    },
    async callIndustryData({ commit }) {
      const response = await reportApi.IndustryReport();
      console.log(response);
      commit("setList", response.data.data);
      commit("setListCount", response.data.data.length);
    },
    async callMarketData({ commit }) {
      const response = await reportApi.MarketReport();
      console.log(response);
      commit("setList", response.data.data);
      commit("setListCount", response.data.data.length);
    },
    async callSearchData({ commit }, payload) {
      const response = await reportApi.SearchReport(payload);
      console.log(response);
      commit("setList", response.data.data);
      commit("setListCount", response.data.data.length);
    },
    async callLikeData({ commit }, payload) {
      const response = await reportApi.callLikeReport(payload);
      console.log(response.data.rows02);
      commit("setList", response.data.rows02);
      commit("setListCount", response.data.rows02.length);
    },
    async callInterestCorporationData({ commit }, payload) {
      const response = await reportApi.callInterestCorporationData(payload);
      console.log(response);
      commit("setList", response.data.rows3);
      commit("setListCount", response.data.rows3.length);
    },
    async callInterestIndustryData({ commit }, payload) {
      const response = await reportApi.callInterestIndustryData(payload);
      console.log(response);
      commit("setList", response.data.rows3);
      commit("setListCount", response.data.rows3.length);
    },
  },
};
