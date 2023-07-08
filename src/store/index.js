import { createStore } from "vuex";

export const store = createStore({
  state: {
    lists: [
      { name: "List1", checked: false },
      { name: "List2", checked: false },
      { name: "List3", checked: false },
    ],
    items: [
      [
        { id: 0, name: "Item_1", count: 10, color: "#ff4040", checked: false },
        { id: 1, name: "Item_2", count: 10, color: "#ffa700", checked: false },
        { id: 2, name: "Item_3", count: 11, color: "#ce6ef1", checked: false },
        { id: 3, name: "Item_4", count: 12, color: "#5757ff", checked: false },
        { id: 4, name: "Item_5", count: 13, color: "#ffcb12", checked: false },
        { id: 5, name: "Item_6", count: 14, color: "#33ffaa", checked: false },
        { id: 6, name: "Item_7", count: 15, color: "#e66465", checked: false },
        { id: 7, name: "Item_8", count: 16, color: "#33eeff", checked: false },
      ],
      [
        { id: 0, name: "Item_1", count: 10, color: "#1372ab", checked: false },
        { id: 1, name: "Item_2", count: 10, color: "#ab1326", checked: false },
        { id: 2, name: "Item_3", count: 11, color: "#9813ab", checked: false },
        { id: 3, name: "Item_4", count: 12, color: "#4e13ab", checked: false },
        { id: 4, name: "Item_5", count: 13, color: "#3388ff", checked: false },
        { id: 5, name: "Item_6", count: 14, color: "#ab9a13", checked: false },
        { id: 6, name: "Item_7", count: 15, color: "#ab1324", checked: false },
      ],
      [
        { id: 0, name: "Item_1", count: 10, color: "#ecd811", checked: false },
        { id: 1, name: "Item_2", count: 10, color: "#1192ec", checked: false },
        { id: 2, name: "Item_3", count: 11, color: "#11ec6a", checked: false },
        { id: 3, name: "Item_4", count: 12, color: "#ec8211", checked: false },
        { id: 4, name: "Item_5", count: 13, color: "#e9ec11", checked: false },
      ],
    ],
  },
  mutations: {
    changeCount(state, payload) {
      state.items[payload[0]].forEach((element) => {
        element.id == payload[1] ? (element.count = payload[2]) : element;
      });
    },
    changeColor(state, payload) {
      state.items[payload[0]].forEach((element) => {
        element.id == payload[1] ? (element.color = payload[2]) : element;
      });
    },
    changeCheckedList(state, payload) {
      state.lists[payload[0]].checked = payload[2];
      payload[2] == true
        ? state.items[payload[0]].forEach((element) => (element.checked = true))
        : state.items[payload[0]].forEach(
            (element) => (element.checked = false)
          );
    },
    changeCheckedItem(state, payload) {
      state.items[payload[0]].forEach((item) => {
        item.id === payload[1] ? (item.checked = payload[2]) : item;
      });
      if (
        state.items[payload[0]].findIndex((el) => el.checked === false) == -1
      ) {
        state.lists[payload[0]].checked = true;
      } else {
        state.lists[payload[0]].checked = false;
      }
    },
    sliceElement(state, payload) {
      state.items[payload[0]].forEach((el) => {
        el.id === payload[1] ? (el.count = el.count - 1) : el;
      });
    },
    changeCountItem(state, payload) {
      state.items[payload[0]].forEach((el) => {
        el.id === payload[1] ? (el.count = parseInt(payload[2])) : el;
      });
    },
  },
  actions: {
    changeCount({ commit }, payload) {
      commit("changeCount", payload);
    },
    changeColor({ commit }, payload) {
      commit("changeColor", payload);
    },
    changeCheckedList({ commit }, payload) {
      commit("changeCheckedList", payload);
    },
    changeCheckedItem({ commit }, payload) {
      commit("changeCheckedItem", payload);
    },
    sliceElement({ commit }, payload) {
      commit("sliceElement", payload);
    },
    changeCountItem({ commit }, payload) {
      commit("changeCountItem", payload);
    },
  },
  getters: {
    getList(state) {
      return state.lists;
    },
    getItem(state) {
      return state.items;
    },
  },
});
