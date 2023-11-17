<template>
	<form @submit.prevent="getSum" class="calc-widget__form">
		<label class="calc-widget__form-label">
			<span class="calc-widget__form-label-text">first value</span>
			<input v-model="firstValue" class="calc-widget__form-input" type="number" />
		</label>
		<label class="calc-widget__form-label">
			<span class="calc-widget__form-label-text">second value</span>
			<input v-model="secondValue" class="calc-widget__form-input" type="number" />
		</label>
		<button class="btn calc-widget__form-btn" type="submit">Get Summa</button>
	</form>
</template>

<script lang="ts">
import { CalcValues } from '@/types/CalcValues';
import { defineComponent } from 'vue';

export default defineComponent({
	data(): CalcValues {
		return {
			firstValue: null,
			secondValue: null,
		};
	},
	methods: {
		getSum() {
			this.$emit('getSum', {
				firstValue: this.firstValue ? this.firstValue : 0,
				secondValue: this.secondValue ? this.secondValue : 0,
			});
			this.firstValue = null;
			this.secondValue = null;
		},
	},
	emits: {
		getSum: (calcValues: CalcValues) => calcValues,
	},
});
</script>
