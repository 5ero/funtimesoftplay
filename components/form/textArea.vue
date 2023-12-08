<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
<div>
  <div class="flex flex-row space-y-4 justify-center">
    <label
        for="{{ label }}"
        class="w-2/12 mt-4 block uppercase tracking-wide text-gray-500 text-lg font-semibold mb-2"
    >
      {{ label }}
    </label>
    <textarea
      class="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-orange-600"
      rows="5"
      placeholder="Enter your message here">
    </textarea>
  </div>
</div>
</template>

<style scoped>

</style>