<script setup lang="ts">
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import sidebar from "./components/sidebar/index.vue";
</script>

<template>
  <Suspense>
    <div class="flex flex-col">
      <Header />
      <Navbar />
      <Breadcrumb />
      <main class="flex">
        <sidebar />
      </main>
    </div>
  </Suspense>
</template>
