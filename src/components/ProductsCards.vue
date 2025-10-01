<template>
  <article class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
    <!-- Image -->
    <div class="w-full h-48 sm:h-48 lg:h-40 overflow-hidden">
      <img :src="card.img" :alt="card.title"
        class="w-full h-full object-cover bg-center transform hover:scale-105 transition-transform duration-400" />
    </div>

    <!-- Content -->
    <div class="p-4">
      <h3 class="text-sm sm:text-base font-semibold mb-2 line-clamp-2">
        {{ card.title }}
      </h3>

      <p class="text-xs text-gray-500 mb-3 line-clamp-2">
        {{ card.subtext }}
      </p>

      <!-- Rating -->
      <div class="flex items-center gap-1">
        <span v-for="star in 5" :key="star">
          <!-- Filled star -->
          <svg v-if="star <= Math.round(card.rating)" class="w-4 h-4 text-amber-500" fill="currentColor"
            viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 
              0l1.18 3.63h3.813c.97 0 1.372 
              1.24.588 1.81l-3.084 2.24 1.18 
              3.63c.3.92-.755 
              1.688-1.54 1.118L10 
              12.347l-3.088 
              2.108c-.785.57-1.84-.198-1.54-1.118l1.18-3.63-3.084-2.24c-.784-.57-.382-1.81.588-1.81h3.813l1.18-3.63z" />
          </svg>
          <!-- Empty star -->
          <svg v-else class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 
              0l1.18 3.63h3.813c.97 0 1.372 
              1.24.588 1.81l-3.084 2.24 1.18 
              3.63c.3.92-.755 
              1.688-1.54 1.118L10 
              12.347l-3.088 
              2.108c-.785.57-1.84-.198-1.54-1.118l1.18-3.63-3.084-2.24c-.784-.57-.382-1.81.588-1.81h3.813l1.18-3.63z" />
          </svg>
        </span>

        <span class="text-sm font-medium ml-2">{{ card.rating }}</span>
        <span class="text-xs text-gray-400">({{ card.reviews }})</span>
      </div>
    </div>
  </article>
</template>

<script setup>

defineProps({
  card: {
    type: Object,
    required: true
  }
});

</script>
