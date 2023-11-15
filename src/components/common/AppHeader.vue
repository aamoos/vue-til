<template>
  <div>
	<header>
		<div>
			<router-link :to="logoLink" class="logo">
				TIL
			</router-link>
		</div>
		<div class="navigations">
			<template v-if="isUserLogin">
				<span>{{ $store.state.username }}</span>
				<a href="javascript:;" @click="logoutUser">Logout</a>
			</template>
			
			<template v-else>
				<router-link to="/login">로그인</router-link> |
			<router-link to="/signup">회원가입</router-link>
			</template>
		</div>
	</header>
  </div>
</template>

<script>
export default {
	computed: {
		isUserLogin(){
			return this.$store.getters.isLogin;
		},
		logoLink(){
			return this.$store.getters.isLogin ? '/main' : '/login';
		}
	},
	methods: {
		logoutUser(){
			this.$store.commit('clearUsername');
			this.$store.commit('clearToken');
			localStorage.removeItem("til_auth");
			localStorage.removeItem("til_user");
			this.$router.push('/login');
		}
	}
}
</script>

<style scoped>
.username {
	color: white;
}

</style>