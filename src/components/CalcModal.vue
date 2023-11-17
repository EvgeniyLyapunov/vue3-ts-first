<template>
	<div class="calc-widget__modal" :class="{ 'calc-widget__modal_active': modalActive }">
		<span @click="modalClose" class="calc-widget__modal-close"></span>
		<span class="calc-widget__modal-boss">Автор идеи: Виталий</span>
		<span class="calc-widget__modal-dev">Разработка: Евгений Ляпунов</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		modalActive: {
			type: Boolean,
		},
	},
	methods: {
		modalClose() {
			this.$emit('modalClose');
		},
	},
	emits: ['modalClose'],
});
</script>

<style>
.calc-widget__modal-close {
	position: absolute;
	top: 25px;
	right: 25px;
	display: block;
	width: 35px;
	height: 35px;
	background: url('../assets/x-circle.svg') center / contain no-repeat;
	transition: 0.3s transform ease-in-out;
	cursor: pointer;
}

.calc-widget__modal-close:hover {
	transform: scale(1.2);
}

.calc-widget__modal-close:active {
	transform: scale(0.2);
}
</style>
