<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

const route = useRoute();
onMounted(() => {
	console.log('hi!');
	console.log(route.meta);
});

defineComponent({
	name: 'HomeView',
	components: {
		HelloWorld,
	},
});
</script>
