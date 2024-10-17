<template>
    <header class="bg-indigo-600 text-white p-4 shadow">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Selfa</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><nuxt-link to="/" class="hover:underline">الرئيسية</nuxt-link></li>
            <li><nuxt-link to="/login" class="hover:underline">تسجيل الدخول</nuxt-link></li>
            <li><nuxt-link to="/register" class="hover:underline">إنشاء حساب</nuxt-link></li>
            <li>
              <button @click="logout" class="hover:underline text-red-300">
                تسجيل الخروج
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        
        console.log('تسجيل الخروج');
       
        // this.$router.push('/login'); مثال
      },
    },
  };
  </script>
  
 
  