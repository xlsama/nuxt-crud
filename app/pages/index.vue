<script setup lang="ts">
const { data: tasks, refresh } = await useFetch('/api/tasks')

const toast = useToast()
const onCheckUpdate = async (value: boolean, id: number) => {
  await $fetch(`/api/task/${id}`, {
    method: 'PUT',
    body: {
      done: value ? 1 : 0,
    },
  })
  toast.clear()
  toast.add({
    title: 'update success',
    color: 'success',
  })
  refresh()
}

const handleDelete = async (id: number) => {
  await $fetch(`/api/task/${id}`, {
    method: 'DELETE',
  })
  refresh()
}
</script>

<template>
  <UContainer class="mt-5 space-y-5">
    <UCard
      v-for="task in tasks"
      :key="task.id"
    >
      <div class="flex justify-between items-center">
        <div class="flex gap-2 items-center">
          <UCheckbox
            :model-value="!!task.done"
            @update:model-value="value => onCheckUpdate(value as boolean, task.id)"
          />
          {{ task.content }}
        </div>
        <UButton
          icon="i-lucide-trash"
          variant="ghost"
          @click="handleDelete(task.id)"
        />
      </div>
    </UCard>
  </UContainer>
</template>
