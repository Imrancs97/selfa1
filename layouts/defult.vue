<template>
    <div class="flex flex-col min-h-screen  bg-slate-50 ">
      <header class="bg-white shadow-md">
        <h1 class="text-2xl font-bold text-indigo-600">Selfa</h1>
      </header>
      <main class="flex-1 container mx-auto p-4  gap-3 ">
        
        <slot />
        
      </main>
      <footer class="bg-gray-800 text-white text-center py-4">
        &copy; 2024 Selfa. جميع الحقوق محفوظة.
      </footer>
      
    </div>
   
  </template>
  
  <script>
  export default {
    head() {
      return {
        title: 'Selfa',
      };
    },
  };
  </script>
  
  
  