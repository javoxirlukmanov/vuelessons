import Vuex from "vuex";
export default new Vuex.Store({
  state: {
    menubar: false,
  },

  mutations: {
    setMenubar: (state) => {
      state.menubar = !state.menubar;
      console.log(state.menubar);
    },
  },
  getters: {
    getMenubar: (state) => state.menubar,
  },
});
