<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>
<template>
  <div>
    <Navbar />
    <main class="flex flex-col w-full px-2 mb-4">
      <div class="flex gap-2 w-full mb-4">
        <div class="flex w-1/5 flex-col gap-2 bg-white rounded-lg text-xs px-4 py-2">
          <span class="font-semibold text-red-500">SALE 40% OFF</span>
          <span>Laptops</span>
          <span>PC & Computers</span>
          <span>Cell Phones</span>
          <span>Tablets</span>
          <span>Gaming & VR</span>
          <span>Networking</span>
          <span>Cameras</span>
          <span>Sounds</span>
          <span>Office</span>
          <span>Strorage, USB</span>
          <span>Accesories</span>
          <span>Clearence</span>
        </div>
        <div class="flex flex-col w-3/5 gap-2 justify-start items-start">
        <div class="flex flex-col gap-4 py-4 px-16 bg-[url('/img/hero-headphone.png')] bg-cover bg-no-repeat bg-center rounded-lg w-full h-60 text-white">
          <div class="flex flex-col">
            <span class="font-bold text-3xl">Noise Cancelling</span>
            <span class="text-3xl">Headphone</span>
          </div>
          <div class="flex flex-col text-sm ml-4">
            <span>Boso Over-Ear Headphone</span>
            <span>Wifi, Voice Assistant,</span>
            <span>Low latency game mode</span>
          </div>
          <div class="text-black text-sm">
            <button class="p-2 bg-white rounded-lg">BUY NOW</button>
          </div>
        </div>
        <div class="flex gap-4 w-full">
          <div class="flex flex-col justify-between py-2 px-4 bg-[url('/img/ps.png')] bg-cover bg-no-repeat bg-center rounded-lg w-1/2 h-20">
            <div class="flex flex-col text-sm">
              <span>Sono Playgo 5</span>
              <span>From <span class="text-[#1ABA1A]">Rp7.999.000</span></span>
            </div>
            <div class="text-xs underline">DISCOVER NOW</div>
          </div>
          <div class="flex flex-col justify-between py-2 px-4 text-white bg-[url('/img/keyboard.png')] bg-cover bg-no-repeat bg-center rounded-lg w-1/2 h-20">
            <div class="flex flex-col text-sm">
              <span>Logitek Bluetooth</span>
              <span class="text-orange-400">Keyboard</span>
            </div>
            <div class="text-xs">Best for all device</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-1/5 gap-4">
        <div class="flex justify-end bg-[url('/img/smartwatch.png')] bg-cover bg-no-repeat bg-center rounded-lg w-full h-40">
          <div class="flex flex-col gap-2 w-1/2 py-4 px-4">
            <div class="flex flex-col">
              <span class="text-xs">XIAOMI</span>
              <span class="font-semibold">Sport Water Resistance Watch</span>
            </div>
            <button class="text-white text-xs p-2 rounded-lg bg-black">SHOP NOW</button>
          </div>
        </div>
        <div class="flex bg-[url('/img/gopro.png')] bg-cover bg-no-repeat bg-center rounded-lg w-full h-40">
          <div class="flex flex-col px-4 py-4 justify-between w-1/2">
            <div class="flex flex-col text-white">
              <span class="font-semibold">OKODO</span>
              <span class="text-sm">HERO 11+ BLACK</span>
            </div>
            <div class="flex flex-col">
              <span class="text-gray-400">FROM</span>
              <span class="text-[#1ABA1A]">Rp2.199.000</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="flex gap-4">
        <div class="w-1/2 flex flex-col gap-4 px-6 py-4 bg-white rounded-lg">
          <div class="flex justify-between">
            <span class="font-semibold">FEATURED BRANDS</span>
            <span class="text-[#666666] text-xs">View All</span>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <img src="/img/digitek.png" alt="digitek">
            <img src="/img/grafbase.png" alt="digitek">
            <img src="/img/jamx.png" alt="digitek">
            <img src="/img/msi.png" alt="digitek">
            <img src="/img/oab.png" alt="digitek">
            <img src="/img/ohbear.png" alt="digitek">
            <img src="/img/snyk.png" alt="digitek">
            <img src="/img/sonex.png" alt="digitek">
            <img src="/img/stropi.png" alt="digitek">
            <img src="/img/tekreact.png" alt="digitek">
          </div>
        </div>
                <div class="w-1/2 flex flex-col gap-4 px-6 py-4 bg-white rounded-lg">
          <div class="flex justify-between">
            <span class="font-semibold">TOP CATEGORIES</span>
            <span class="text-[#666666] text-xs">View All</span>
          </div>
          <div class="flex justify-around items-center">
            <div class="flex flex-col items-center">
              <img src="/img/monitor.png" alt="digitek" class="w-12">
              <span>Monitors</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="/img/cpu.png" alt="digitek" class="w-12">
              <span>PC Gaming</span>
            </div>
            <div class="flex flex-col items-center">  
              <img src="/img/headphone.png" alt="digitek" class="w-12">
              <span>Headphones</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="/img/laptop.png" alt="digitek" class="w-12 h-12">
              <span>Laptops</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>


<style scoped>
</style>
