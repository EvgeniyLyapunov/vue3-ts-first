<template>
	<div class="login">
		<form @submit.prevent="onLogin" class="login-form">
			<h1 class="login-form__title">Пожалуйста, авторизуйтесь</h1>
			<input v-model="login" class="login-form__input" type="text" placeholder="login" />
			<input v-model="password" class="login-form__input" type="text" placeholder="password" />
			<button class="login-form__submit" type="submit">Авторизоваться</button>
		</form>
	</div>
</template>

<script lang="ts" setup>
import { isAuthenticated } from '@/store';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let login = '';
let password = '';

function onLogin() {
	if (login === 'admin' && password === 'admin') {
		localStorage.setItem('Authorized', 'true');
		isAuthenticated.value = true;
		router.push({ name: 'home' });
	}
}
</script>
