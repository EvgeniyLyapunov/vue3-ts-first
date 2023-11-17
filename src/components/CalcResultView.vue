<template>
	<div class="calc-widget__result-block">
		<button @click="clearAll" class="btn calc-widget__reset-btn">Clear All</button>
		<span class="calc-widget__result">{{ result }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		result: {
			type: Number,
			required: true,
		},
	},
	methods: {
		clearAll() {
			this.$emit('clearAll');
		},
	},
	emits: ['clearAll'],
});
</script>
