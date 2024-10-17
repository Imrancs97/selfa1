<template>
    <NuxtLayout name="auth">
      <div class="flex items-center justify-center h-screen bg-slate-300">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-bold text-center mb-4">تسجيل الدخول</h2>
          <form @submit.prevent="handleLogin">
            <div class="mb-4">
              <label for="username" class="block text-sm font-medium text-gray-700">اسم المستخدم</label>
              <input type="text" id="username" v-model="username" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2" required />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">كلمة المرور</label>
              <input type="password" id="password" v-model="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2" required />
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white p-2 rounded-md">تسجيل الدخول</button>
          </form>
          <p class="mt-4 text-center">
            لا تمتلك حسابًا؟ <nuxt-link to="/register" class="text-indigo-600">إنشاء حساب جديد</nuxt-link>
          </p>
          <p class="mt-4 text-center">
            <nuxt-link to="/home" class="text-indigo-600 underline">العودة إلى الصفحة الرئيسية</nuxt-link>
          </p>
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
      };
    },
    methods: {
      handleLogin() {
       
        console.log('تسجيل الدخول:', this.username, this.password);
        
        // افترض أنك قمت بالتحقق من بيانات الاعتماد بنجاح
        const loginSuccessful = true; // 
        
        if (loginSuccessful) {
          // home
          this.$router.push('/home');
        }
      },
    },
  };
  </script>
  
 
  