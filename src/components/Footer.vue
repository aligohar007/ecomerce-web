<template>
  <footer 
    class=" text-white py-12 footer-pattern "
  >
    <div class="container mx-auto px-6 md:px-8">
      <!-- Grid for columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <!-- Column 1: Logo + Text -->
        <div>
          <img src="../assets/logo.png" alt="Logo" class="w-15 mb-4" />
          <p class="text-sm leading-relaxed">
            Your company description goes here. Building trust and innovation with modern solutions.
          </p>
        </div>

        <!-- Column 2: List 1 -->
        <div class="lg:ml-20" >
          <h3 class="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul class="space-y-2 text-sm ">
            <li><a href="#" class="hover:text-gray-300">Home</a></li>
            <li><a href="#" class="hover:text-gray-300">About Us</a></li>
            <li><a href="#" class="hover:text-gray-300">Services</a></li>
            <li><a href="#" class="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        <!-- Column 3: List 2 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Resources</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-gray-300">Blog</a></li>
            <li><a href="#" class="hover:text-gray-300">FAQs</a></li>
            <li><a href="#" class="hover:text-gray-300">Support</a></li>
            <li><a href="#" class="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Column 4: Paragraph + Button -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Stay Connected</h3>
          <p class="text-sm mb-4">
            Subscribe to our newsletter and stay updated with the latest news and offers.
          </p>
          <button 
            class="px-5 py-2 bg-[#fea928] text-white cursor-pointer font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition">
            Order Now
          </button>
        </div>
      </div>

      <!-- Footer bottom -->
      <div class="mt-12 border-t border-gray-500 pt-6 text-center text-sm text-gray-300">
        © 2025 Your Company. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-pattern {
  background-image: url('src/assets/footer-pattern.jpg');
  background-size: cover;
   background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  
  /* Full viewport height */
}

</style>
<script setup>
</script>
