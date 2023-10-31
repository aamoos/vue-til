<template>
  <form @submit.prevent="submitForm">
    <div>
        <label for="username">id:</label>
        <input id="username" type="text" v-model="username" />
    </div>
    <div>
        <label for="password">pw:</label>
        <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
    data(){
        return{
            username : '',
            password : '',

            //log
            logMessage : '',
        }
    },
    computed: {
        isUsernameValid(){
            return validateEmail(this.username);
        }
    },
    methods: {
        async submitForm(){
            try {
                //비즈니스 로직
                const userData = {
                    username: this.username,
                    password : this.password,
                }
                const { data } = await loginUser(userData);
                console.log(data);
                this.$store.commit('setToken', data.token);
                this.$store.commit('setUsername', data.user.username);

                //TODO 쿠키나, localstorage를 사용해서 저장
                localStorage.setItem("til_auth", data.token);
                localStorage.setItem("til_user", data.user.username);

                this.$router.push('/main');
            } catch (error) {
                //에러 핸들링할 코드
                console.log(error.response.data);
                this.logMessage = error.response.data;
            } finally {
                this.initForm();
            }
        },
        initForm(){
            this.username = '';
            this.password = '';
        }
    }
}
</script>

<style>

</style>