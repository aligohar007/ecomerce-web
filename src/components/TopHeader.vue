<template>
  <header class="flex items-center justify-between px-6 lg:px-14 md:px-20 py-2 
      bg-[#fea928]/40 text-black 
      dark:bg-black dark:text-white 
      shadow-lg transition-colors duration-300">
    <!-- Brand -->
    <div class="flex items-center gap-2">
      <img :src="logoimg" class="w-10 h-10" alt="logo">
      <span class="text-xl font-bold">Shopsy</span>
    </div>

    <div class="flex items-center gap-4">
      <!-- Search -->
      <div class="relative group hidden lg:block">
        <input type="text" placeholder="Search" class="pl-3 pr-8 py-1 w-[200px] group-hover:w-[300px] rounded-2xl 
          bg-white text-gray-800 border border-gray-300 focus:ring-2 
          focus:ring-amber-500 outline-none dark:bg-white transition-all duration-300" />
        <svg xmlns="http://www.w3.org/2000/svg"
          class="absolute top-1/2 right-2 -translate-y-1/2 text-gray-300 rounded-full cursor-pointer" width="20"
          height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor"
            d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16" />
        </svg>
      </div>

      <!-- Cart Button (Order) -->
      <button @click="showOrderForm = true"
        class="bg-[#ed8900] flex flex-row-reverse justify-center group lg:ml-0 ml-2 text-white rounded-full px-2 py-1 items-center"
        aria-label="Cart">
        <!-- Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
          aria-hidden="true">
          <path fill-rule="evenodd"
            d="M2 3a1 1 0 0 1 1-1h2a1 1 0 0 1 .997.923L6.157 5H21a1 1 0 0 1 .994 1.11l-.816 7.345a3 3 0 0 1-2.768 2.661l-10.355.74a3 3 0 0 1-3.205-2.763l-.616-8.016L4.074 4H3a1 1 0 0 1-1-1m11 5.5a1 1 0 0 1 1 1v.5h.5a1 1 0 1 1 0 2H14v.5a1 1 0 1 1-2 0V12h-.5a1 1 0 1 1 0-2h.5v-.5a1 1 0 0 1 1-1"
            clip-rule="evenodd" />
        </svg>

        <!-- Text with transition -->
        <span class="opacity-0 scale-90 max-w-0 overflow-hidden 
           group-hover:opacity-100 group-hover:scale-100 group-hover:max-w-[100px] 
           transition-all duration-300">
          Order
        </span>
      </button>

      <!-- Dark Mode Toggle -->
      <button @click="themestore.toggleTheme" class="p-2 rounded-full text-gray-900 dark:text-white transition">
        <span v-if="themestore.isDark">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" class="dark:text-white ">
            <path fill="currentColor"
              d="M12 16q-1.671 0-2.835-1.164Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12t-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.745l2.111 2.135zM18.72 19.439l-2.117-2.141l.652-.702l2.16 2.098zM16.596 6.745l2.098-2.16l.745.695l-2.135 2.111zM4.562 18.72l2.14-2.117l.664.652l-2.08 2.179z" />
          </svg>
        </span>
        <span v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-[#ed8900]">
            <path fill="currentColor"
              d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75" />
          </svg>
        </span>
      </button>
    </div>
  </header>

  <div v-if="showOrderForm" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div
      class="bg-white dark:bg-black dark:text-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 transform scale-95 animate-modal text-black">
      <h2 class="text-xl font-bold mb-4 text-center">Place Your Order</h2>

      <form @submit.prevent="submitForm" class="space-y-4 dark:text-white">
        <input type="text" v-model="form.name" placeholder="Name"
          class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" required>

        <input type="email" v-model="form.email" placeholder="Email"
          class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" required>

        <input type="tel" v-model="form.phone" placeholder="Phone Number"
          class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" required>

        <button type="submit" class="w-full bg-[#ed8900] text-white py-2 rounded-lg hover:bg-[#d97706] transition">
          Submit
        </button>
      </form>

      <!-- Close Button -->
      <button @click="showOrderForm = false"
        class="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white">
        ✖
      </button>
    </div>
  </div>
</template>

<script setup>
import logoimg from "@/assets/logo.png"
import { ref, onMounted } from "vue";
import { useThemeStore } from "../store/theme";

 const themestore = useThemeStore();
const showOrderForm = ref(false);

const form = ref({
  name: "",
  email: "",
  phone: ""
});

onMounted(() => {
  themeStore.initTheme()
})

function submitForm() {
  alert(`Order submitted!\nName: ${form.value.name}\nEmail: ${form.value.email}\nPhone: ${form.value.phone}`);
  showOrderForm.value = false;
  form.value = { name: "", email: "", phone: "" };
}

</script>

<style>
@keyframes modalPop {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-modal {
  animation: modalPop 0.3s ease-out forwards;
}
</style>
