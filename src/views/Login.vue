<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div>
        <Navbar />
         <main class="flex justify-around gap-8 p-10 mx-8 my-4 rounded-lg bg-white">
            <div class="flex w-1/2 h-[300px] justify-center">
                <img src="../assets/img/register.png" alt="register" class="object-cover">
            </div>
            <div class="w-1/2 gap-4 flex px-8 flex-col">
                <div class="flex flex-col w-full">
                    <span class="text-[#1ABA1A] text-3xl font-medium">Welcome Back</span>
                    <span class="text-xs text-[#999999]">LOGIN TO CONTINUE</span>
                </div>
                <form action="" class="w-full flex flex-col gap-4">
                    <div class="flex flex-col gap-2 text-sm">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Example@gmail.com" class="text-[#999] border w-full py-2 rounded-lg px-4 border-[#CCC]">
                    </div>
                    <div class="flex flex-col gap-2 text-sm">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="****" class="text-[#999] border w-full py-2 rounded-lg px-4 border-[#CCC]">
                        <span class="text-xs text-[#999] underline">Forget Password ?</span>
                    </div>
                    <div class="text-sm">
                        <button type="submit" class="text-white bg-[#1ABA1A] px-4 py-2 rounded-lg">LOGIN</button>
                    </div>
                    <div class="flex text-xs">
                        <span class="text-[#999]">NEW USER ?</span>
                        <button class="text-[#1ABA1A]"> SIGN UP</button>
                    </div>
                </form>
            </div>
        </main>
        <Footer />
    </div>
</template>