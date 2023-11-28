<script setup lang="ts">

const showMobileNav = ref(false);
</script>

<template>
  <div class="md:fixed w-full border-b-2 border-slate-500 bg-slate-50 shadow-xl">
    <div class="max-w-7xl mx-auto flex flex-row items-center justify-between">
      <div class="p-4">
        <img src="/img/logo/funtime-softplay-logo-trans.png" alt="" class="w-32 md:w-44">
      </div>
      <div class="hidden md:flex flex-row items-center justify-end w-full">
        <nav-item title="Home" href="/landing" />
        <nav-item title="About" href="/about" />
        <nav-item title="Gallery" href="/gallery" />
        <nav-item title="Contact" href="/contact" />
      </div>
      <div>
        <!-- mobile nav -->
        <div class="md:hidden flex flex-row items-center">
          <button class="p-4" @click="showMobileNav = !showMobileNav">
            <svg class="w-12 h-8 text-slate-500 hover:text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        <div>
          <transition name="slide">
            <div v-if="showMobileNav" class="md:hidden absolute w-1/2 top-0 left-0 min-h-screen flex flex-col items-center bg-orange-600 space-y-10 pt-20">
              <nav-item title="Home" href="/landing" />
              <nav-item title="About" href="/about" />
              <nav-item title="Gallery" href="/gallery" />
              <nav-item title="Contact" href="/contact" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>