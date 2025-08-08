<script setup lang="ts">
import z from 'zod'

const schema = z.object({
  content: z.string().min(1, 'Content is required'),
})

type Schema = z.infer<typeof schema>

const state = ref<Schema>({
  content: '',
})

const onSubmit = async () => {
  await $fetch('/api/task', {
    method: 'POST',
    body: state.value,
  })
  state.value.content = ''
  navigateTo('/')
}
</script>

<template>
  <UContainer class="mt-5">
    <UCard>
      <template #header>
        Create Task
      </template>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField
          name="content"
          label="Content"
        >
          <UInput v-model="state.content" />
        </UFormField>

        <UButton type="submit">
          Save
        </UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>
