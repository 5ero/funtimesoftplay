<script setup lang="ts">

import Button from "~/components/form/button.vue";
</script>

<template>
<div>
  <div class="bg-amber-50 md:pt-44">
    <div class="flex flex-col items-center">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row rounded-lg p-8 ">
        <div class="w-full md:w-1/3">
          <h1 class="text-6xl font-bold">Soft play areas for <span class="text-orange-600">kids</span></h1>
          <div class="md:hidden"><img src="/img/displays/PhotoRoom_20231123_153629.png" alt=""></div>
          <p class="prose text-xl leading-relaxed md:mt-4 text-gray-600">
            <span class="font-semibold text-2xl">Funtime Softplay</span> offer a vibrant and engaging environment designed to ignite the imagination and energy of young ones. These playgrounds are a haven of padded structures, ball pits, and bouncy castles, all carefully crafted to encourage exploration, social interaction, and physical activity.
          </p>

          <div class="order-last">
            <Button label="View Gallery" />
          </div>

        </div>
        <div class="hidden md:block w-2/3 pl-8 h-[700px] ml-8" style="background-position-y: -100px; background-size: cover; background-repeat: no-repeat; background-image: url('/img/displays/PhotoRoom_20231123_153629.png')"></div>

    </div>
  </div>
  </div>
</div>
</template>

<style scoped>

</style>