<script setup lang="ts">

import Layout from "~/layouts/layout.vue";
import Input from "~/components/form/input.vue";
import TextArea from "~/components/form/textArea.vue";
import Button from "~/components/form/button.vue";
</script>

<template>
  <Layout>
    <div>
      <Header />
      <HeroContact />
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row mt-12">
          <div class="w-full md:w-2/3">
            <h1 class="text-slate-600 text-4xl m-8">
              Contact us
            </h1>
            <div class="p-8">
              <form action="">
                <Input label="name" />
                <Input label="email" />
                <Input label="phone" />
               <TextArea label="message" />
               <Button label="Submit" type="submit" class="ml-28" />
              </form>
            </div>
          </div>
          <div>
            <h1 class="text-slate-600 text-4xl m-8">Contact information</h1>
            <ul class="m-8 text-slate-600 text-lg space-y-4">
              <li>
                Phone: <a href="tel:+447942386386">07942 386386</a>
              </li>
              <li>
                email: hello@funtimesoftplay.co.uk
              </li>
              <li>
                Social media:
                <p>
                  <a href="https://www.instagram.com/love_balloons_bedfordshire_/?hl=en">
                    <img src="/img/social/Instagram_Glyph_Black.png" class="w-8 h-8 inline-block mt-4">
                  </a>
                </p>

              </li>
            </ul>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  </Layout>
</template>

<style scoped>

</style>