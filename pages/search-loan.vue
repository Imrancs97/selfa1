<template>
   <NuxtLayout name="main">
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6  gap-3">
     
      
      <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mt-6">
        <form @submit.prevent="searchLoans">
          <div class="mb-4">
            <label for="loanName" class="block text-sm font-medium text-gray-700">اسم السلفة</label>
            <input 
              type="text" 
              v-model="loanName" 
              id="loanName" 
              required 
              class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="أدخل اسم السلفة" 
            />
          </div>
          <div class="flex justify-center">
            <button type="submit" class="w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 transition">بحث</button>
          </div>
        </form>
      </div>
  
      <div v-if="loans.length" class="mt-6 w-full max-w-4xl">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th class="border-b-2 border-gray-300 px-4 py-2 text-left">اسم السلفة</th>
              <th class="border-b-2 border-gray-300 px-4 py-2 text-left">تاريخ السلفة</th>
              <th class="border-b-2 border-gray-300 px-4 py-2 text-left">القيمة المالية</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="loan in loans" :key="loan.id">
              <td class="border-b border-gray-300 px-4 py-2">{{ loan.name }}</td>
              <td class="border-b border-gray-300 px-4 py-2">{{ loan.date }}</td>
              <td class="border-b border-gray-300 px-4 py-2">{{ loan.amount }}</td>
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
        loanName: '',
        loans: [],
      };
    },
    methods: {
      searchLoans() {
    
        // هنا مثال على بيانات وهمية
        const sampleLoans = [
          { id: 1, name: 'سلفة 1', date: '2024-01-01', amount: 1000 },
          { id: 2, name: 'سلفة 2', date: '2024-02-15', amount: 2000 },
        ];
        
        // تصفية السلف حسب الاسم المدخل
        this.loans = sampleLoans.filter(loan => loan.name.includes(this.loanName));
      },
    },
  };
  </script>
  
  <style scoped>
  /* يمكنك إضافة أي أنماط مخصصة هنا */
  </style>
  ``
  