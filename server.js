const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// استخدام CORS للسماح بالوصول من تطبيقات أخرى
app.use(cors());

// استخدام body-parser لتحليل JSON
app.use(bodyParser.json());

// مصفوفة لتخزين البيانات المدخلة
let dataStore = [];

// نقطة النهاية لاستقبال البيانات
app.post('/send', (req, res) => {
    const newEntry = req.body;

    // إضافة الإدخال الجديد إلى المصفوفة
    dataStore.push(newEntry);
    console.log('تم استلام البيانات:', newEntry);

    // إرسال استجابة بنجاح
    res.json({ message: 'البيانات تم استلامها بنجاح', data: newEntry });
});

// نقطة النهاية لاسترجاع جميع البيانات (اختياري)
app.get('/data', (req, res) => {
    res.json(dataStore);
});

// بدء السيرفر
app.listen(PORT, () => {
    console.log(`السيرفر يعمل على http://localhost:${PORT}`);
});
