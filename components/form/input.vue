<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "text"
  }
})
</script>

<template>
<div>
  <div class="mt-4 w-full flex flex-col md:flex-row md:space-y-4 md:justify-center md:items-center">
    <label
        for="{{ label }}"
        class="md:w-2/12 block uppercase tracking-wide text-gray-500 text-lg font-semibold md:mb-2"
    >
      {{ label }}
    </label>
    <input
        type="{{ type }}"
        name="{{ label }}"
        id="name"
        class="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-orange-600"
    >
  </div>
</div>
</template>

<style scoped>

</style>