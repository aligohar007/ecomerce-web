<template>
  <header class="flex items-center justify-between px-6 md:px-20 py-2 bg-[#fea928]  transition-colors duration-300">
    <!-- Brand -->
    <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512">
        <path fill="#ed8900"
          d="M388.5 104.1c-.2-1.1-.7-2.1-1.5-2.8s-1.8-1.2-2.9-1.2c-2 0-37.2-.8-37.2-.8s-21.6-20.8-29.6-28.8v432.7L443 472s-54-365.5-54.4-367.9zm-99.6-33.6c-1.9-6.1-4.3-11.9-7.2-17.6c-10.4-20-26-30.9-44.4-30.9c-1.3 0-2.7.1-4 .4c-.4-.8-1.2-1.2-1.6-2c-8-8.8-18.4-12.8-30.8-12.4c-24 .8-48 18-67.2 48.8c-13.6 21.6-24 48.8-26.8 70.1c-27.6 8.4-46.8 14.4-47.2 14.8c-14 4.4-14.4 4.8-16 18c-1.2 10-38 291.8-38 291.8L308.3 504V65.7c-1.5.1-2.9.2-4.4.4c0 0-5.6 1.6-14.8 4.4zm-55.3 17.2c-16 4.8-33.6 10.4-50.8 15.6c4.8-18.8 14.4-37.6 25.6-50c4.4-4.4 10.4-9.6 17.2-12.8c6.8 14.4 8.4 34 8 47.2m-32.8-63.3c5-.2 10 1.1 14.4 3.6c-6.4 3.2-12.8 8.4-18.8 14.4c-15.2 16.4-26.8 42-31.6 66.5c-14.4 4.4-28.8 8.8-42 12.8c8.8-38.4 41.2-96.4 78-97.2zm-46.4 220.2c1.6 25.6 69.2 31.2 73.2 91.7c2.8 47.6-25.2 80.1-65.6 82.5c-48.8 3.2-75.6-25.6-75.6-25.6l10.4-44s26.8 20.4 48.4 18.8c14-.8 19.2-12.4 18.8-20.4c-2-33.6-57.2-31.6-60.8-86.9c-3.2-46.4 27.2-93.3 94.5-97.7c26-1.6 39.2 4.8 39.2 4.8l-15.2 57.6s-17.2-8-37.6-6.4c-29.6 2-30 20.8-29.6 25.6zm95.2-161.7c0-12-1.6-29.2-7.2-43.6c18.4 3.6 27.2 24 31.2 36.4q-10.8 3-24 7.2" />
      </svg>
      <span class="text-xl font-bold">Shopsy</span>
    </div>

    <div class="flex items-center gap-4">
      <!-- Search -->
      <div class="relative">
        <input type="text" placeholder="Search" class="pl-3 pr-8 py-1  rounded-2xl bg-white text-gray-800 border border-gray-300 
                 focus:ring-2 focus:ring-amber-500 outline-none 
                 dark:bg-white  " />
        <svg xmlns="http://www.w3.org/2000/svg"
          class="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 cursor-pointer" width="20" height="20"
          viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor"
            d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
        </svg>
      </div>

      <!-- Cart Button -->
      <button class="bg-[#ed8900] text-white rounded-full px-3 transition-colors" aria-label="Cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
          aria-hidden="true">
          <path fill-rule="evenodd"
            d="M2 3a1 1 0 0 1 1-1h2a1 1 0 0 1 .997.923L6.157 5H21a1 1 0 0 1 .994 1.11l-.816 7.345a3 3 0 0 1-2.768 2.661l-10.355.74a3 3 0 0 1-3.205-2.763l-.616-8.016L4.074 4H3a1 1 0 0 1-1-1m11 5.5a1 1 0 0 1 1 1v.5h.5a1 1 0 1 1 0 2H14v.5a1 1 0 1 1-2 0V12h-.5a1 1 0 1 1 0-2h.5v-.5a1 1 0 0 1 1-1m3 12a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5h-.01a1.5 1.5 0 0 1-1.5-1.5zM8.5 19A1.5 1.5 0 0 0 7 20.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5v-.01a1.5 1.5 0 0 0-1.5-1.5z"
            clip-rule="evenodd" />
        </svg>
      </button>

      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode" class="p-2 rounded-full  text-gray-900 dark:text-white transition">
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
