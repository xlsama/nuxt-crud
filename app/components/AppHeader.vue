<template>
  <header class="flex gap-4 justify-center items-center h-15">
    <nav class="space-x-4">
      <UButton>
        <NuxtLink to="/">Home</NuxtLink>
      </UButton>
      <UButton>
        <NuxtLink to="/create">Create Task</NuxtLink>
      </UButton>
    </nav>
    <ColorModeButton />
  </header>
</template>
