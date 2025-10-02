<template>
    <div class="dark:bg-black dark:text-white dark:p-1 dark:pt-10">
   <div class="text-center">
        <h3 class="text-[#fea928]/40">Top Selling products for you</h3>
        <h1 class="text-[2rem] font-bold mb-5">Testimonial</h1>
        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, suscipit similique delectus dignissimos
            nulla voluptatibus!</p>
    </div>
  <div 
    class="relative w-full max-w-[95%] mx-auto overflow-hidden mt-20 lg:mt-20 mb-20 lg:mb-40 "
    @mouseenter="pauseSlider"
    @mouseleave="startSlider"
  >
    <!-- Slides -->
    <div 
      class="flex transition-transform duration-700 ease-in-out mb-10"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(group, gIndex) in groupedTestimonials"
        :key="gIndex"
        class="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 "
      >
        <div
          v-for="card in group"
          :key="card.id"
          class="bg-[#fea928]/10 p-6 rounded-xl shadow-xl/30 text-center relative"
        >
          <div v-html="card.icon" class="absolute right-3 text-gray-200">
            
          </div>
          <!-- Image -->
          <img 
            :src="card.img" 
            alt="profile" 
            class="w-24 h-24 mx-auto rounded-full object-cover shadow-lg"
          />
          <!-- Text -->
          <p class="mt-4 text-gray-600 italic">"{{ card.text }}"</p>
          <!-- Name -->
          <h3 class="mt-2 font-semibold text-gray-800">{{ card.name }}</h3>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="absolute bottom-0 left-1/2  transform -translate-x-1/2 flex gap-2">
      <span
        v-for="(dot, index) in groupedTestimonials"
        :key="index"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="index === currentIndex ? 'bg-[#fea928]' : 'bg-gray-300'"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted, computed } from "vue";
import { testimonials } from "../data/testinomail";

const currentIndex = ref(0);
const chunkSize = ref(3);
 let interval = null;

const updateChunkSize = ()=>{
          if(window.innerWidth < 768){
            chunkSize.value = 1;
          }
          else if(window.innerWidth < 1024){
            chunkSize.value = 2;
          }
          else {
               chunkSize.value = 3;
          }

 }

const groupedTestimonials = computed(()=>{
    let result = []
     for(let i  = 0 ; i < testimonials.length; i += chunkSize.value){
        result.push(testimonials.slice(i, i + chunkSize.value))
     }
     return result;
});

 

const startSlider = ()=>{
        interval = setInterval(()=>{
       currentIndex.value = (currentIndex.value + 1) % groupedTestimonials.value.length;
        },4000)
}
const pauseSlider = ()=>{
    clearInterval(interval);
}

const goToSlide = (index)=>{
   currentIndex.value = index
}

onMounted(()=>{
     updateChunkSize();
      startSlider();
      window.addEventListener("resize", updateChunkSize);
})

onUnmounted(()=>{
    clearInterval(interval)
    window.removeEventListener("resize" , updateChunkSize)
})

</script>

