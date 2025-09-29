<template>
  <header class="flex items-center justify-between px-6 md:px-20 py-2 bg-[#fea928]  transition-colors duration-300">
    <!-- Brand -->
    <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" aria-hidden="true"
        class="text-gray-900 dark:text-white">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
          <path
            d="M17.915 35.5c1.35 1.135 2.81 1.655 6.085 1.655h1.66a4.897 4.897 0 0 0 4.891-4.902h0a4.897 4.897 0 0 0-4.891-4.902h-3.32a4.897 4.897 0 0 1-4.891-4.902h0a4.897 4.897 0 0 1 4.891-4.902H24c3.276 0 4.734.52 6.085 1.654m-14.099-8.017h15.577" />
          <path
            d="M23.962 43.488H11.058c-4.411.266-4.082-4.148-4.082-4.148l3.487-24.67c.266-3.614 3.344-3.482 3.344-3.482l3.718-.003s-1.267-6.421 6.27-6.684h.482h-.554h.483c7.536.263 6.269 6.683 6.269 6.683l3.718.005s3.079-.133 3.344 3.48l3.487 24.67s.33 4.415-4.082 4.15h-12.98Z" />
        </g>
      </svg>
      <span class="text-xl font-bold">Shopsy</span>
    </div>

    <div class="flex items-center gap-4">
      <!-- Search -->
      <div class="relative">
        <input type="text" placeholder="Search"
          class="pl-3 pr-8 py-1 rounded-2xl bg-white text-gray-800 border border-gray-300 
                 focus:ring-2 focus:ring-amber-500 outline-none 
                 dark:bg-white  "/>
        <svg xmlns="http://www.w3.org/2000/svg"
          class="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 "
          width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor"
            d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
        </svg>
      </div>

      <!-- Cart Button -->
      <button class="bg-[#ed8900] text-white rounded-full px-3 transition-colors" aria-label="Cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M2 3a1 1 0 0 1 1-1h2a1 1 0 0 1 .997.923L6.157 5H21a1 1 0 0 1 .994 1.11l-.816 7.345a3 3 0 0 1-2.768 2.661l-10.355.74a3 3 0 0 1-3.205-2.763l-.616-8.016L4.074 4H3a1 1 0 0 1-1-1m11 5.5a1 1 0 0 1 1 1v.5h.5a1 1 0 1 1 0 2H14v.5a1 1 0 1 1-2 0V12h-.5a1 1 0 1 1 0-2h.5v-.5a1 1 0 0 1 1-1m3 12a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5h-.01a1.5 1.5 0 0 1-1.5-1.5zM8.5 19A1.5 1.5 0 0 0 7 20.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5v-.01a1.5 1.5 0 0 0-1.5-1.5z"
            clip-rule="evenodd" />
        </svg>
      </button>

      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode"
        class="p-2 rounded-full  text-gray-900 dark:text-white transition">
        <span v-if="isDark">
          <!-- Sun Icon -->
          ☀️
        </span>
        <span v-else>
          <!-- Moon Icon -->
          🌙
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
  // check if dark mode already enabled
  isDark.value = document.documentElement.classList.contains("dark");
});

function toggleDarkMode() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
}
</script>
