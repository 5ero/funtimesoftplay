<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
})

const show = ref(false);

</script>

<template>
<div>
  <div
      @mouseenter="show = true"
      @mouseleave="show = false"
      data-ripple-light="true"
      data-tooltip-target="label"
      class="w-16 border-2 border-slate-400 hover:border-orange-600 rounded-md p-4 shadow m-1">
    <img :src="src" alt="rocker" class="object-cover w-full rounded" />
  </div>
  <div
      v-if="show === true"
      data-tooltip="label"
      class="uppercase absolute z-50 whitespace-normal break-words rounded-lg bg-orange-600 py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
  >
    {{ label }}
  </div>

</div>
</template>

<style scoped>

</style>