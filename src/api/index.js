import axios from 'axios';
import { setInterceptors } from './common/interceptors';

//엑시오스 초기화 함수
function createInstance(){
    const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    });

    return setInterceptors(instance);
}

const instance = createInstance();

//회원가입 api
function registerUser(userData){
    return instance.post('signup', userData);
}

//로그인 api
function loginUser(userData){
    return instance.post('login', userData);
}

//학습노트 데이터를 조회하는 api
function fetchPosts(){
    return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };