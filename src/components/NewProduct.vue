<template>
<!-- Wrapper jo always bg-color hold karega -->
<div class="bg-white dark:bg-black ">
  <section
    class="w-full relative py-20 lg:py-28"
  >
    <!-- Background Image Layer -->
    <div
      v-if="bgImage"
      class="absolute inset-0 bg-cover bg-center"
      :style="`background-image: url(${bgImage})`"
    ></div>

    <!-- Content -->
    <div class="relative z-10 mx-auto text-center text-white px-6">
      <!-- Heading -->
      <h1 class="text-4xl md:text-4xl font-bold mb-6">
        Get Notified About New Products
      </h1>

      <!-- Input Box -->
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          class="px-4 py-3 w-full max-w-lg outline-none 
                 bg-white dark:bg-gray-900 
                 dark:text-white text-gray-800 
                 rounded-md"
        />
      </div>
    </div>
  </section>
</div>



</template>



<script setup>
import bgImage from "../assets/orange-pattern.jpg";
</script>

<style scoped>
/* Optional: Make sure text is readable on bg */
</style>
