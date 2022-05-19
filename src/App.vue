<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Button from './components/Button.vue';
import Card from './components/Card.vue';
import catalogImg from './assets/layout-01.jpg'
</script>

<template>
  <header class="relative min-h-[75vh]">
    <Nav class="container mx-auto mt-4" />
      
    <div class="absolute h-full w-full flex items-center">
      <div class="container mx-auto">
        <h1 class="text-7xl font-bold">Tailwind based <br/> templates.</h1>
        <h2 class="mt-4 font-medium">Project template develop with tailwindcss.</h2>

        <Button class="mt-6" color="primary">Explore</Button>
      </div>
    </div>
  </header>

  <main class="bg-courious-blue-100 pt-8 pb-10 text-dark">
    <div class="flex items-center justify-center gap-x-8">
      <button type="button" class="font-bold text-courious-blue-prime">All</button>
      <button type="button" class="font-bold">Ecommerce</button>
      <button type="button" class="font-bold">Portfolio</button>
      <button type="button" class="font-bold">Company</button>
    </div>

    <div class="container mx-auto mt-9 grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Card :img-src="catalogImg" title="Ecommerce" />
      <Card :img-src="catalogImg" title="Ecommerce" />
      <Card :img-src="catalogImg" title="Ecommerce" />
      <Card :img-src="catalogImg" title="Ecommerce" />
    </div>

    <div class="mt-9 flex items-center justify-center">
      <Button color="primary">View More</Button>
    </div>
  </main>

  <Footer class="container mx-auto" />
</template>
