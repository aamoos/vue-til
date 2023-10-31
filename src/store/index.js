import Vue from 'vue';;
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: localStorage.getItem('til_user') || '',
        token: localStorage.getItem('til_auth') || '',
    },
    getters:{
        isLogin(state){
            return state.username !== '';
        }
    },
    mutations: {
        setUsername(state, username){
            state.username = username;
        },
        clearUsername(state){
            state.username = '';
        },
        setToken(state, token){
            state.token = token;
        }
    },
})