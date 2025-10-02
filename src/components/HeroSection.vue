<template>
  <section
    class="relative overflow-hidden min-h-[570px] sm:min-h-[670px] lg:min-h-[650px] bg-gray-100 dark:bg-black dark:text-white"
  >
    <div
      class="absolute right-0 -top-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]  bg-[#fea928]/40 rotate-45 rounded-3xl"
    ></div>

    <div
      class="flex transition-transform duration-700 ease-in-out h-full absolute"
      :style="{ transform: `translateX(-${currentindex * 100}%)` }"
    >
      <!-- Single Slide -->
      <div
        v-for="(slidelist, index) in imagesList"
        :key="slidelist.id"
        class="flex flex-col lg:flex-row-reverse flex-shrink-0 w-full justify-around items-center  lg:px-20"
      >
        <!-- Image -->
        <img
          :src="slidelist.img"
          alt="slide image"
          class="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px]  mb-6 lg:mb-0"
        />

        <!-- Text Content -->
        <div class="flex flex-col justify-center max-w-sm lg:max-w-lg  w-full text-center lg:text-left">
          <h1 class="text-2xl md:text-4xl lg:text-[3rem] font-bold mb-4 leading-tight">
            {{ slidelist.title }}
          </h1>
          <p class="mb-4 text-sm md:text-base lg:text-xl">
            {{ slidelist.description }}
          </p>
          <a
            href="#"
            class="bg-[#fea928] max-w-[120px] mx-auto lg:mx-0 text-white px-4 py-2  rounded-lg hover:bg-[#e48b00] transition"
          >
            {{ slidelist.btn }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Image1 from "@/assets/women.png";
import Image2 from "@/assets/sale.png";
import Image3 from "@/assets/shopping.png";

const currentindex = ref(0);
const imagesList = [
  {
    id: 1,
    img: Image1,
    title: "Upp to 50% off on all Men's wear",
    description: `
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse dolorem blanditiis sunt earum. Eligendi voluptates consequatur laboriosam? Velit eaque fuga quas, et excepturi exercitationem non. Magni earum enim nemo!
    `,
    btn: "Order Now",
  },
  {
    id: 2,
    img: Image2,
    title: "Big Sale on Electronics!",
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse dolorem blanditiis sunt earum. Eligendi voluptates consequatur laboriosam? Velit eaque fuga quas, et excepturi exercitationem non. Magni earum enim nemo!
    
    `,
    btn: "Order Now",
  },
  {
    id: 3,
    img: Image3,
    title: "Trendy Kids Wear Collection",
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse dolorem blanditiis sunt earum. Eligendi voluptates consequatur laboriosam? Velit eaque fuga quas, et excepturi exercitationem non. Magni earum enim nemo!
    
    `,
    btn: "Order Now",
  },
];

// Auto Slide
let interval = null;
onMounted(() => {
  interval = setInterval(() => {
    nextSlide();
  }, 4000);
});
onBeforeUnmount(() => {
  clearInterval(interval);
});

// Next & Prev Slide
const nextSlide = () => {
  currentindex.value = (currentindex.value + 1) % imagesList.length;
};
const prevSlide = () => {
  currentindex.value =
    (currentindex.value - 1 + imagesList.length) % imagesList.length;
};

 nextSlide();
 prevSlide();
</script>
