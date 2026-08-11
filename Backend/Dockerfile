# استخدام نسخة خفيفة وآمنة من Node.js
FROM node:18-alpine

# تحديد مجلد العمل داخل الكونتينر
WORKDIR /app

# نسخ ملفات الاعتماد أولاً لضمان الاستفادة من الـ Caching
COPY package*.json ./

# تثبيت الحزم المطلوبة
RUN npm install

# نسخ باقي ملفات الباك إند (index.js ومجلد models)
COPY . .

# المنفذ الذي سيعمل عليه السيرفر داخل الكونتينر
EXPOSE 3000

# أمر تشغيل السيرفر
CMD ["npm", "start"]