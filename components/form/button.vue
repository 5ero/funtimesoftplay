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
  <div>
    <button
        type="{{ type }}"
        class="bg-orange-600 hover:bg-orange-500 text-white rounded-lg p-4 mt-6 md:mt-4"
    >
      {{ label }}
    </button>
  </div>
</div>
</template>

<style scoped>

</style>