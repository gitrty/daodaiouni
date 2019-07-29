// import axios from "axios";
// import Vue from 'vue';
// import toyo from "vue-toyo-jsonp";
// console.info(toyo);

export default {
    increment: ({ commit, state }) => {
        commit('increment_fun');
    },
    decrement: ({ commit, state }) => {
        commit('decrement_fun');
    },
    aaa({ commit, state, getters }, data) {
        state.arr = data;
    },
    show(){
        
    }
}
// console.info(Vue.prototype);
