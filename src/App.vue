<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
//
</script>

<template>
  <header class="relative min-h-[75vh]">
    <Nav class="container mx-auto" />
      
    <div class="absolute h-full w-full flex items-center">
      <div class="container mx-auto">
        <h1 class="text-7xl font-bold">Tailwind based <br/> templates.</h1>
        <h2 class="mt-4 font-medium">Project template develop with tailwindcss.</h2>

        <button class="mt-6 bg-courious-blue-prime py-3 px-6 font-bold rounded-lg">Explore</button>
      </div>
    </div>
  </header>

  <main>
    <div>
      <button>All</button>
      <button>Ecommerce</button>
      <button>Portfolio</button>
      <button>Company</button>
    </div>

    <div>
      <div>Image1</div>
      <div>Image2</div>
      <div>Image3</div>
      <div>Image4</div>
    </div>

    <div>
      <button>View More</button>
    </div>
  </main>

  <Footer class="container mx-auto" />
</template>
