<template>
    <NuxtLayout name="main">
      <div class="p-6 bg-gray-50">
        <div class="flex justify-start mb-4">
          <div class="back-button-container  bg-indigo-600 text-slate-50">
            <nuxt-link to="/home" class="back-button">Back</nuxt-link>
          </div>
        </div>
        <h2 class="text-2xl font-bold mb-4 text-center">إدارة السلف</h2>
  
        <div v-if="loans.length === 0" class="text-center text-gray-600">
          لا توجد سلفات متاحة.
        </div>
  
        <div v-else>
          <table class="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-2 px-4 border-b">اسم السلفة</th>
                <th class="py-2 px-4 border-b">قيمة السلفة</th>
                <th class="py-2 px-4 border-b">الفترة الزمنية (شهر)</th>
                <th class="py-2 px-4 border-b">عدد المشتركين</th>
                <th class="py-2 px-4 border-b">التفاصيل</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(loan, index) in loans" :key="index" class="hover:bg-gray-50">
                <td class="py-2 px-4 border-b">{{ loan.loanId }}</td>
                <td class="py-2 px-4 border-b">{{ loan.amount }} دينار عراقي</td>
                <td class="py-2 px-4 border-b">{{ loan.duration }}</td>
                <td class="py-2 px-4 border-b">{{ loan.participants }}</td>
                <td class="py-2 px-4 border-b">
                  <button @click="openLoan(loan)" class="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 transition">
                    فتح
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loans: [
          { loanId: 'سلفة 1', amount: 1000, duration: 6, participants: 2 },
          { loanId: 'سلفة 2', amount: 2000, duration: 12, participants: 3 },
          { loanId: 'سلفة 3', amount: 1500, duration: 8, participants: 1 },
        ],
      };
    },
    methods: {
      openLoan(loan) {
        console.log('فتح السلفة:', loan);
        // You can navigate to a detailed loan page here
        // this.$router.push(`/loan-details/${loan.loanId}`);
      },
    },
  };
  </script>
  
  
  