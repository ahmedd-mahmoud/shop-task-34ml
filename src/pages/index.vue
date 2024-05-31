<script setup lang="ts">
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import sidebar from "../components/sidebar/index.vue";
import productsList from "../components/product/list.vue";
</script>

<template>
  <div class="flex flex-col w-full">
    <Header />
    <Navbar />
    <Breadcrumb />
    <main class="flex gap-10 w-full">
      <sidebar class="basis-1/5" />
      <productsList class="basis-4/5" />
    </main>
  </div>
</template>
