<template>
  <section>
    <!-- Navbar -->
    <div class="w-full flex justify-center items-center bg-white relative z-10 shadow-xl">
      <nav>
        <ul class="flex text-black gap-10 font-semibold">
          <li>Home</li>
          <li>Top Rated</li>
          <li>Kids Wear</li>
          <li>Mens Wear</li>
          <li>Electronics</li>

          <li class="relative group cursor-pointer flex items-center gap-1">
            <span class="flex items-center gap-1">
              Trending Products
              <!-- Down Arrow Icon -->
              <svg
                class="w-4 h-4 text-black font-semibold transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <!-- Dropdown Menu -->
            <ul
              class="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg 
              opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
              transition-all duration-300 ease-out"
            >
              <li class="px-4 py-2 hover:bg-[#fea928] hover:text-white">Smartphones</li>
              <li class="px-4 py-2 hover:bg-[#fea928] hover:text-white">Laptops</li>
              <li class="px-4 py-2 hover:bg-[#fea928] hover:text-white">Shoes</li>
              <li class="px-4 py-2 hover:bg-[#fea928] hover:text-white">Accessories</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
