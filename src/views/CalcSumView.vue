<template>
	<div class="calc">
		<h1>This is a my first task page</h1>
		<div class="calc-widget">
			<span @click="showModal" class="calc-widget__about">About this Project</span>
			<CalcModal :modalActive="modalActive" @modalClose="modalClose" />
			<CalcForm @get-sum="getSum" />
			<CalcResultView :result="result" @clearAll="clearAll" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalcForm from '@/components/CalcForm.vue';
import CalcResultView from '@/components/CalcResultView.vue';
import CalcModal from '@/components/CalcModal.vue';
import { CalcValues } from '@/types/CalcValues';

interface State {
	result: number;
	modalActive: boolean;
}

export default defineComponent({
	components: { CalcForm, CalcResultView, CalcModal },
	data(): State {
		return {
			result: 0,
			modalActive: false,
		};
	},
	methods: {
		getSum(calcValues: CalcValues) {
			if (calcValues.firstValue && calcValues.secondValue) {
				this.result = calcValues.firstValue + calcValues.secondValue;
			} else {
				this.result = 0;
			}
		},
		clearAll() {
			this.result = 0;
		},
		showModal() {
			this.modalActive = true;
		},
		modalClose() {
			this.modalActive = false;
		},
	},
});
</script>
