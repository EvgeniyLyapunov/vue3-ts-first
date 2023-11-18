<template>
	<div class="c-tasks">
		<h2 class="c-tasks__title">Current tasks</h2>
		<form @submit.prevent="submitFile" class="c-tasks__form">
			<input class="c-tasks__input" type="file" id="file" @change="uploadFile" />
			<button class="c-tasks__submit" type="submit">Upload file</button>
		</form>
		<TasksList :taskList="this.currentTasks" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { XMLParser } from 'fast-xml-parser';
import { ICurrentTask } from '@/types/ICurrentTask';
import TasksList from '@/components/TasksList.vue';

interface State {
	file: File | string;
	currentTasks: ICurrentTask[];
}

export default defineComponent({
	components: {
		TasksList,
	},
	data(): State {
		return {
			file: '',
			currentTasks: [],
		};
	},
	methods: {
		uploadFile(event: Event) {
			if ((event.target as HTMLInputElement).files) {
				this.file = (event.target as HTMLInputElement).files[0];
			}
		},
		submitFile() {
			if (!this.file) {
				return;
			}

			const reader = new FileReader();

			reader.onload = (event: Event) => {
				const xmlText = (event.target as FileReader).result as string;
				const parser = new XMLParser();
				const jObj = parser.parse(xmlText);
				this.currentTasks = jObj.currentTasks.task;
			};

			reader.readAsText(this.file);
		},
	},
});
</script>
