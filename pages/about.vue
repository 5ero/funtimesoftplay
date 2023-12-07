<script setup lang="ts">

import Layout from "~/layouts/layout.vue";
</script>

<template>
  <Layout>
    <div>
      <Header />
      <HeroAbout />
      <div class="mb-10">
        <div class="max-w-7xl mx-auto mt-10">
            <div class="grid grid-cols-3 gap-4">
              <div class="p-4 bg-white rounded">
                <img src="/img/about/about_1.jpg" class="object-cover" alt="">
              </div>
              <div class="p-4 bg-white rounded">
                <img src="/img/about/about_2.jpg" class="object-cover" alt="">
              </div>
              <div class="p-4 bg-white rounded">
                <img src="/img/about/about_3.jpg" class="object-cover" alt="">
              </div>

            </div>
        </div>
      </div>
      <Footer />
    </div>
  </Layout>
</template>

<style scoped>

</style>