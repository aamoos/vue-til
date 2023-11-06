import Vue from 'vue';;
import Vuex from 'vuex';
import { loginUser } from '@/api/index';

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
    actions: {
        async LOGIN({ commit }, userData){
            const { data } = await loginUser(userData);
            console.log(data);
            commit('setToken', data.token);
            commit('setUsername', data.user.username);

            //TODO 쿠키나, localstorage를 사용해서 저장
            localStorage.setItem("til_auth", data.token);
            localStorage.setItem("til_user", data.user.username);
            return data;
        }
    }
})