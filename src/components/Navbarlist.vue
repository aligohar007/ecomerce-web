<template>
  <section >
    <!-- Navbar start -->
    <div class="w-full text-center  flex justify-center dark:bg-black    items-center bg-[#fea928]/40 lg:bg-white shadow-xl py-2">
      <nav class="hidden lg:block  ">
        <ul class="flex text-black  gap-10 font-semibold dark:text-white">
          <!-- Main Links -->
          <li
            v-for="(link, index) in navLinks"
            :key="index"
            class="relative group cursor-pointer flex items-center gap-1"
          >
            <span class="flex items-center gap-1">
              {{ link.name }}

              <svg
                v-if="link.dropdown"
                class="w-4 h-4 text-black dark:text-white font-semibold transition-transform duration-300 group-hover:rotate-180"
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
              v-if="link.dropdown"
              class="absolute left-0 top-full mt-4 w-48 bg-white dark:bg-black rounded-lg shadow-lg 
              opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
              transition-all duration-300 ease-out z-30"
            >
              <li
                v-for="(item, subIndex) in link.dropdown"
                :key="subIndex"
                class="px-4 py-2 hover:bg-[#fea928]/40 hover:text-white"
              >
                {{ item }}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Navbar Closed  -->
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>


<script setup>
 const navLinks = [
  { name: "Home" },
  { name: "Top Rated" },
  { name: "Kids Wear" },
  { name: "Mens Wear" },
  { name: "Electronics" },
  {
    name: "Trending Products",
    dropdown: [
      "Smartphones",
      "Laptops",
      "Shoes",
      "Accessories"
    ]
  }
];

</script>

<style scoped>
</style>
