<script setup lang="ts">
import commonButton from "./common/button.vue";
import accountIcon from "../assets/icons/account.svg";
import wishlistIcon from "../assets/icons/wishlist.svg";
import cartIcon from "../assets/icons/cart.svg";

const headerButtons = [
  {
    text: "Account",
    icon: accountIcon,
  },
  {
    text: "Wishlist",
    icon: wishlistIcon,
  },
  {
    text: "Cart",
    icon: cartIcon,
  },
];
</script>

<template>
  <div class="flex w-full items-center justify-between py-5 px-6 sm:px-12">
    <p class="text-xl font-bold md:text-2xl">LOGO</p>
    <div class="flex items-center gap-3 md:gap-5">
      <div
        v-for="button in headerButtons"
        class="flex items-center gap-1 hover:cursor-pointer"
      >
        <commonButton :text="button.text" :icon="button.icon" type="link" />
      </div>
    </div>
  </div>
</template>
