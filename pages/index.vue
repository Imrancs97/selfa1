<template>
  <NuxtLayout name="defult">
  <div>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-3xl font-bold">مرحبًا بك في Selfa!</h1>
    <p class="mt-4 text-lg">يرجى تسجيل الدخول أو إنشاء حساب جديد للمتابعة.</p>
    <div class="mt-6 gap-6">
      <nuxt-link to="/login" class="bg-indigo-600 text-white p-4 rounded-md mr-4 bg-clip-padding">  تسجيل الدخول  </nuxt-link>
      <nuxt-link to="/register" class="bg-gray-300 text-gray-800 p-4 rounded-md mr-4 bg-clip-padding"> إنشاء حساب جديد </nuxt-link>
    </div>
  </div> 
  </div>
</NuxtLayout>
</template>

<script lang="ts" setup>

</script>

<style>

</style>

