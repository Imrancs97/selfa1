const users = []; // قاعدة بيانات وهمية

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  if (event.req.method === 'POST') {
    if (body.action === 'register') {
      const { username, password } = body;

      // تحقق مما إذا كان المستخدم موجودًا بالفعل
      const userExists = users.find(user => user.username === username);
      if (userExists) {
        return {
          statusCode: 400,
          body: { error: 'اسم المستخدم موجود بالفعل' }
        };
      }

      // إضافة المستخدم
      users.push({ username, password });
      return {
        body: { message: 'تم إنشاء الحساب بنجاح' }
      };
    } else if (body.action === 'login') {
      const { username, password } = body;

      // تحقق من معلومات الدخول
      const user = users.find(user => user.username === username && user.password === password);
      if (!user) {
        return {
          statusCode: 401,
          body: { error: 'اسم المستخدم أو كلمة المرور غير صحيحة' }
        };
      }

      return {
        body: { message: 'تسجيل الدخول بنجاح' }
      };
    }
  }

  return {
    statusCode: 405,
    body: { error: 'طلب غير صالح' }
  };
});
