<template>
    <div class="flex flex-col min-h-screen">
     

      <header class=" bg-slate-500 shadow p-4 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-indigo-400">Selfa</h1>
        <nuxt-link to="/login" @click.prevent="logout" class="bg-red-400 text-white rounded-md px-4 py-2 hover:bg-red-500 transition">تسجيل الخروج</nuxt-link>
      </header>

      <main class="flex-1 container mx-auto p-4  gap-3 ">
        
        <slot />
        
      </main>
      <footer class=" bg-slate-500 text-white text-center py-4">
        &copy; 2024 Selfa. جميع الحقوق محفوظة.
      </footer>
      
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Logic to handle logout (e.g., clearing user session, redirecting, etc.)
        // For now, just redirecting to login
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  