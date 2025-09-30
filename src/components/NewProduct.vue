<template>
  <section
    class=" w-full h-[300px] relative object-cover py-20 mb-10 mt-20"
    :style="`background-image: url(${bgImage})`"
  >
    <!-- Overlay (optional for better text visibility) -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto text-center text-white px-6">
      <!-- Heading -->
      <h1 class="text-4xl md:text-4xl font-bold mb-6">
        Get Notified About New Products
      </h1>

      <!-- Input Box -->
      <div >
        <input
          type="email"
          placeholder="Enter your email"
          class="px-4 py-3 w-full max-w-lg  outline-none bg-white text-gray-800"
        />
       
      </div>
    </div>
  </section>
</template>

<script setup>
import bgImage from "../assets/orange-pattern.jpg";
</script>

<style scoped>
/* Optional: Make sure text is readable on bg */
</style>
