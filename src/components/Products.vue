<template>
    <!-- Products header  -->
    <div class="text-center mt-10 mb-10">
        <h3 class="text-[#fea928]/40">Top Selling products for you</h3>
        <h1 class="text-[2rem] font-bold">Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, suscipit similique delectus dignissimos
            nulla voluptatibus!</p>
    </div>

    <section class="py-3 px-14">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <ProductsCards v-for="(product, index) in cards" :key="product.id" :card="product" />
        </div>

        <div class="flex items-center justify-center mt-10 mb-10 cursor-pointer">
            <a class="bg-[#fea928] text-white py-2 px-5 rounded-sm">
                View All products
            </a>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import ProductsCards from "../components/ProductsCards.vue";

const cards = ref([
    {
        id: 1,
        img: new URL("../assets/women4.jpg", import.meta.url).href,
        title: "Classic Leather Jacket",
        subtext: "High quality genuine leather jacket – limited stock.",
        rating: 2,
        reviews: 124
    },
    {
        id: 2,
        img: new URL("../assets/women.png", import.meta.url).href,
        title: "Casual Sneakers",
        subtext: "Comfortable and stylish sneakers for everyday use.",
        rating: 4.6,
        reviews: 89
    },
    {
        id: 3,
        img: new URL("../assets/women2.jpg", import.meta.url).href,
        title: "Smartwatch Series 5",
        subtext: "Track your fitness and notifications on the go.",
        rating: 3,
        reviews: 210
    },
    {
        id: 4,
        img: new URL("../assets/women3.jpg", import.meta.url).href,
        title: "Elegant Handbag",
        subtext: "Premium material, ideal for office & travel.",
        rating: 4.5,
        reviews: 64
    },
    {
        id: 5,
        img: new URL("../assets/women4.jpg", import.meta.url).href,
        title: "Kids Playset",
        subtext: "Safe and fun playset for children ages 3+.",
        rating: 4.4,
        reviews: 37
    }
]);
</script>
