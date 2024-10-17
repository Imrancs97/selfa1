<template>
  <NuxtLayout name="main">
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white  rounded-lg p-6 w-full max-w-md">
        <div class="flex justify-start mb-4">
          <div class="back-button-container">
            <nuxt-link to="/home" class="back-button">Back</nuxt-link>
          </div>
        </div>


              <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 class="text-2xl font-bold mb-4 text-center">إنشاء سلفة جديدة</h2>

       

        <form @submit.prevent="submitLoan">
          <div class="mb-4">
            <label for="loanId" class="block text-sm font-medium text-gray-700">  ID </label>
            <input
              type="text"
              v-model="loanId"
              id="loanId"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="أدخل اسم السلفة أو ID"
            />
          </div>

          <div class="mb-4">
            <label for="amount" class="block text-sm font-medium text-gray-700">قيمة السلفة المالية</label>
            <input
              type="number"
              v-model="amount"
              id="amount"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="أدخل القيمة المالية"
            />
          </div>

          <div class="mb-4">
            <label for="duration" class="block text-sm font-medium text-gray-700">الفترة الزمنية</label>
            <input
              type="number"
              v-model="duration"
              id="duration"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="أدخل عدد الأشهر"
            />
          </div>

          <div class="mb-4">
            <label for="participants" class="block text-sm font-medium text-gray-700">عدد المشتركين</label>
            <input
              type="number"
              v-model="participants"
              id="participants"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="أدخل عدد المشتركين"
            />
          </div>

          <div class="flex justify-center">
            <button type="submit" class="w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 transition">إنشاء السلفة</button>
          </div>
        </form>
      </div>
    </div></div>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      loanId: '',
      amount: '',
      duration: '',
      participants: '',
    };
  },
  methods: {
    submitLoan() {
      console.log('سلفة جديدة:', {
        loanId: this.loanId,
        amount: this.amount,
        duration: this.duration,
        participants: this.participants,
      });

      // مسح المدخلات بعد الإرسال
      this.loanId = '';
      this.amount = '';
      this.duration = '';
      this.participants = '';
    },
  },
};
</script>

<style scoped>
.back-button-container {
  margin-bottom: 1rem; /* */
}

.back-button {
  display: inline-block;
  padding: 10px 15px;
  background-color: #4f46e5; 
  color: white; 
  border-radius: 5px; 
  text-decoration: none; 
  font-weight: bold; 
}

.back-button:hover {
  background-color: #4338ca; /* لون عند المرور */
}
</style>
