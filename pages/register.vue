<template>
    <NuxtLayout name="auth">
      <div class="flex items-center justify-center h-screen bg-slate-300">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <h2 class="text-2xl font-bold text-center mb-4">إنشاء حساب جديد</h2>
          <form @submit.prevent="handleRegister">
            <div class="mb-4">
              <label for="username" class="block text-sm font-medium text-gray-700">اسم المستخدم</label>
              <input type="text" id="username" v-model="username" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2" required />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">كلمة المرور</label>
              <input type="password" id="password" v-model="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2" required />
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white p-2 rounded-md">إنشاء حساب</button>
          </form>
          <p class="mt-4 text-center">
            لديك حساب بالفعل؟ <nuxt-link to="/login" class="text-indigo-600">تسجيل الدخول</nuxt-link>
          </p>
          <div v-if="showSuccess" class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-float">
              <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        showSuccess: false,
      };
    },
    methods: {
      handleRegister() {
        
        console.log('إنشاء حساب:', this.username, this.password);
        
        // افترض أن عملية التسجيل كانت ناجحة
        const registrationSuccessful = true;
        
        if (registrationSuccessful) {
          this.showSuccess = true;
  
          // تفريغ الحقول بعد فترة قصيرة
          setTimeout(() => {
            this.username = '';
            this.password = '';
            this.showSuccess = false;
            this.$router.push('/login'); // الانتقال إلى صفحة تسجيل الدخول
          }, 2000); // مدة العرض (2000 مللي ثانية = 2 ثانية)
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .animate-float {
    animation: float 2s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  </style>
  