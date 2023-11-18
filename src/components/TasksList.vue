<template>
	<ul class="task-list">
		<li v-if="taskList.length > 0" class="task-item__head">
			<span class="task-item__cell task-item__cell-id">id</span>
			<span class="task-item__cell task-item__cell-name">name</span>
			<span class="task-item__cell task-item__cell-status">status</span>
			<span class="task-item__cell task-item__cell-department">department</span>
		</li>
		<li v-for="task in taskList" :key="task.id" class="task-item">
			<span class="task-item__cell task-item__cell-id">{{ task.id }}</span>
			<span class="task-item__cell task-item__cell-name">{{ task.name }}</span>
			<span class="task-item__cell task-item__cell-status">{{ task.status }}</span>
			<span class="task-item__cell task-item__cell-department">{{ task.department }}</span>
		</li>
	</ul>
</template>

<script lang="ts">
import { ICurrentTask } from '@/types/ICurrentTask';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
	props: {
		taskList: {
			type: Array as PropType<ICurrentTask[]>,
		},
	},
});
</script>
