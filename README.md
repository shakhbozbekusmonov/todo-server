// har qanday requestda headers ni ichida { Authorization: sizningTokeningiz } bo'lishi shart

// http://192.168.0.106:5000/user/register -> registratsiya qilish uchun -> user_name,phone,email,password lar bo'lishi shart

// http://192.168.0.106:5000/user/login -> login qilish uchun -> email, password lar bo'lishi shart

// http://192.168.0.106:5000/todo - todo yaratish -> { text: todoning matni } -> body qismi shu ko'rinishda bo'lishi shart

// http://192.168.0.106:5000/todo/:id - todoni delete, edit, delete qilish

// authorization

// http://localhost:5000/todo/edit/:id -> todo ni completed property sini o'zgartirish. Hech qanday body kerak emas faqat url da todoning id sini berib yuborish shart