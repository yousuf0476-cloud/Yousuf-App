const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// تحديد مكان ملفات الواجهات EJS
app.set('view engine', 'ejs');

// الـ Route الأساسي للفرونت إند
app.get('/', (async (req, res) => {
    try {
        // هنا نقدر نمرر بيانات تجريبية أو نستقبلها من الـ Backend لاحقاً
        res.render('numbers', { 
            name: "Yousef", 
            numbers: "100" 
        });
    } catch (err) {
        res.status(500).send("Error loading frontend");
    }
}));

app.listen(PORT, () => {
    console.log(`Frontend service running on port ${PORT}`);
});