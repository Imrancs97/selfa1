<template>
    <NuxtLayout name="main">
      <div class="p-6 bg-gray-50 gap-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg">
            <nuxt-link to="/search-loan">
              <button class="w-full bg-gray-300 text-gray-800 rounded-md py-2 hover:bg-gray-400 transition duration-200">
                البحث 
              </button>
            </nuxt-link>
          </div>
  
          <div class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg">
            <nuxt-link to="/create-loan">
              <button class="w-full bg-gray-300 text-gray-800 rounded-md py-2 hover:bg-gray-400 transition duration-200">
                إنشاء سلفة جديدة
              </button>
            </nuxt-link>
          </div>
  
          <div class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg">
            <nuxt-link to="/ManageLoans">
              <button class="w-full bg-gray-300 text-gray-800 rounded-md py-2 hover:bg-gray-400 transition duration-200">
                إدارة السلف
              </button>
            </nuxt-link>
          </div>
  
          <div class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg">
            <button @click="trackLoans" class="w-full bg-gray-300 text-gray-800 rounded-md py-2 hover:bg-gray-400 transition duration-200">
              متابعة السلف
            </button>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script>
  export default {
    methods: {
      searchLoans() {
        console.log('البحث عن السلف');
      },
      trackLoans() {
        console.log('متابعة السلف المشتركة');
      },
      viewAllLoans() {
        console.log('عرض جميع السلف');
      },
    },
  };
  </script>
  
  
  