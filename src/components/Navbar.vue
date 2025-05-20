<script>
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="flex w-full p-6 justify-between bg-white">
            <div class="flex w-1/3">
                <img src="../assets/img/logo.png" alt="logo-company">
            </div>
            <div class="flex w-1/3 gap-2 font-semibold">
                <button class="btn-plain">
                    <span>HOMES</span>
                    <v-icon name="ri-arrow-drop-down-line" />
                </button>
                <button class="btn-plain">
                    <span>PAGES</span>
                    <v-icon name="ri-arrow-drop-down-line" />
                </button>
                <button class="btn-plain">
                    <span>PRODUCTS</span>
                    <v-icon name="ri-arrow-drop-down-line" />
                </button>
                <button class="btn-plain">
                    <span>CONTACT</span>
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
        <div class="flex bg-[#1ABA1A] px-6 py-2 rounded-b-lg">
            <div class="flex bg-white px-4 py-2 justify-around items-center rounded-xl w-2/5">
                <button>
                    <span class="text-sm font-semibold">ALL CATEGORIES</span>
                    <v-icon name="ri-arrow-drop-down-line" />
                </button>
                <input type="text" placeholder="Search anything..">
                <v-icon name="md-search-twotone" />
            </div>
            <div class="text-sm text-white flex justify-around items-center w-3/5">
                <button>FREE SHIPPING OVER Rp150.000</button>
                <button>30 DAYS MONEY BACK</button>
                <button>100% SECURE PAYMENT</button>
            </div>
        </div>
        <div class="flex items-center bg-white gap-2 font-medium px-6 py-4 my-4 rounded-lg text-[#999999]">
            <button>Home</button>
            <span>/</span>
            <button>Page</button>
            <span>/</span>
            <button class="text-black">Register</button>
        </div>
    </div>
</template>

<style>
.btn-plain {
  all: unset; 
  cursor: pointer; 
}
</style>