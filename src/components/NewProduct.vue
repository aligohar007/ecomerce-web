<template>
  <section
    class="relative bg-cover bg-center py-20"
    :style="`background-image: url(${bgImage})`"
  >
    <!-- Overlay (optional for better text visibility) -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto text-center text-white px-6">
      <!-- Heading -->
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Subscribe to Our Newsletter
      </h1>

      <!-- Input Box -->
      <div class="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          class="px-4 py-3 w-full max-w-md rounded-l-lg outline-none text-gray-800"
        />
        <button
          class="bg-[#fea928] px-6 py-3 rounded-r-lg font-semibold hover:bg-[#e48b00] transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import bgImage from "@/assets/orange-pattern.jpg";
</script>

<style scoped>
/* Optional: Make sure text is readable on bg */
</style>
```
