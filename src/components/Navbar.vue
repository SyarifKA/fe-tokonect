<script>
// import { RiArrowDropDownLine } from "oh-vue-icons/icons"
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="flex w-full p-6 justify-between">
            <div class="flex w-1/3 bg-red-500">
                <img src="../assets/img/logo.png" alt="logo-company">
            </div>
            <div class="flex w-1/3 bg-green-500 gap-2 font-semibold">
                <button class="btn-plain">
                    <span>HOMES</span>
                    <v-icon name="ri-arrow-drop-down-line" />
                </button>
                <button class="btn-plain">
                    <span>HOMES</span>
                    <v-icon name="ri-arrow-drop-down-line" />
                </button>
                <button class="btn-plain">
                    <span>HOMES</span>
                    <v-icon name="ri-arrow-drop-down-line" />
                </button>
                <button class="btn-plain">
                    <span>HOMES</span>
                    <v-icon name="ri-arrow-drop-down-line" />
                </button>
            </div>
            <div class="flex justify-between w-1/3 bg-primary">
                <div class="flex w-full gap-2 items-center">
                    <div>
                        <img src="" alt="" class="w-6 h-6 rounded-full bg-gray-200">
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs">WELCOME</span>
                        <div class="flex text-sm">
                            <button>LOGIN</button>
                            <span> / </span>
                            <button>REGISTER</button>
                        </div>
                    </div>
                </div>
                <div class="flex gap-6 w-full items-center">
                    <div class="flex py-2 relative">
                        <button class="w-8 h-8 rounded-full bg-gray-200">
                            <v-icon name="bi-cart-check"/>
                        </button>
                        <div class="flex justify-center w-6 h-6 text-sm mx-6 my-4 absolute text-white rounded-full bg-green-500">5</div>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs">CART</span>
                        <span>Rp250.000</span>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>

<style>
.btn-plain {
  all: unset; 
  cursor: pointer; 
}
</style>