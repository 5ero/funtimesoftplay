<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }

})
</script>

<template>
<div>
  <div class="mx-4">
    <NuxtLink
        :to="href"
        class=" font-semibold uppercase text-slate-800 rounded p-4 hover:bg-orange-600 hover:text-white"
        :class="{'bg-orange-600 text-white': $route.path === href}"
    >
      {{ title }}
    </NuxtLink>
  </div>
</div>
</template>

<style scoped>
a {
  font-family: 'Quicksand', sans-serif;
}
</style>