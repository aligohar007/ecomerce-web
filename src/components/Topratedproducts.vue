<template>
    <!-- Products header  -->
      <div class="dark:bg-black dark:text-white p-1">
    <div class="text-center mt-10 mb-10">
        <h3 class="text-[#fea928]/40">Top Rated products for you</h3>
        <h1 class="text-[2rem] font-bold">Best Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, suscipit similique delectus dignissimos
            nulla voluptatibus!</p>
    </div>

    <section class="py-3 px-14 mb-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TopratedCards v-for="(product, index) in cards" :key="product.id" :card="product" />
        </div>

       
    </section>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TopratedCards from "./TopratedCards.vue";

const cards = ref([
    {
        id: 1,
        img: new URL("../assets/shirt.png", import.meta.url).href,
        subtext: "High quality genuine leather jacket – limited stock.High quality genuine leather jacket – limited stock.",
        btn: "Order Now",
        rating: 5,
        reviews: 124
    },
    {
        id: 2,
        img: new URL("../assets/shirt2.png", import.meta.url).href,
        subtext: "High quality genuine leather jacket – limited stock.High quality genuine leather jacket – limited stock.",
        btn: "Order Now",
        rating: 4.6,
        reviews: 89
    },
    {
        id: 3,
        img: new URL("../assets/shirt3.png", import.meta.url).href,
        subtext: "High quality genuine leather jacket – limited stock.High quality genuine leather jacket – limited stock.",
        btn: "Order Now",
        rating: 4,
        reviews: 210
    },
]);
</script>
