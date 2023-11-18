import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { isAuthenticated } from '@/store';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: {
			needAuth: true,
		},
	},
	{
		path: '/calc',
		name: 'calculater',
		component: () => import(/* webpackChunkName: "calculater" */ '../views/CalcSumView.vue'),
		meta: {
			needAuth: true,
		},
	},
	{
		path: '/tasks',
		name: 'current-tasks',
		component: () => import(/* webpackChunkName: "tasks" */ '../views/CurrentTasksView.vue'),
		meta: {
			needAuth: true,
		},
	},
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "calculater" */ '../views/LoginView.vue'),
		meta: {
			needAuth: false,
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to) => {
	if (localStorage.getItem('Authorized')) {
		isAuthenticated.value = true;
	}

	if (to.meta.needAuth && !isAuthenticated.value) {
		return { name: 'login' };
	}
});

export default router;
