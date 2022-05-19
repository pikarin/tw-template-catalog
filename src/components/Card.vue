<script setup>
import Button from './Button.vue';
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="group relative drop-shadow-card rounded-xl overflow-hidden">
    <img class="w-full" :src="imgSrc" />

    <div class="
      transition-all duration-150 ease-in-out
      opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0
      bg-overlay absolute inset-0 px-4 grid place-content-center
    ">
      <Button color="primary">View</Button>
      <h4 class="absolute left-4 bottom-4 text-white text-lg font-bold">{{ title }}</h4>
    </div>
  </div>
</template>