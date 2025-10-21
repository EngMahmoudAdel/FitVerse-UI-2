# 🗺️ FitVerse - خريطة الموقع الكاملة

## 📊 نظرة عامة على التنقل

```
Landing Page (index.html)
    ↓
Login (login.html) → يختار الدور
    ├─ Admin → admin-dashboard.html
    ├─ Coach → coach-dashboard.html
    └─ Client → client-dashboard.html
```

---

## 🏠 **الصفحات العامة (Public Pages)**

### 1. **index.html** (الصفحة الرئيسية)
**من أين تأتي:**
- أول صفحة يراها الزائر
- الرابط الرئيسي للموقع

**إلى أين تذهب:**
- `login.html` - زر "Login" في الـ navbar
- `register.html` - زر "Get Started" / "Sign Up"
- `#features` - قسم المميزات (نفس الصفحة)
- `#pricing` - قسم الأسعار (نفس الصفحة)

**الروابط الموجودة:**
```html
Navbar:
- Home (index.html)
- Features (#features)
- Pricing (#pricing)
- Login (login.html)
- Get Started (register.html)

Hero Section:
- Start Free Trial → register.html
- Learn More → #features

Pricing Section:
- Get Started (3 buttons) → register.html

CTA Section:
- Sign Up Now → register.html
```

---

### 2. **login.html** (تسجيل الدخول)
**من أين تأتي:**
- `index.html` - زر Login
- أي صفحة - زر Logout

**إلى أين تذهب:**
- `admin-dashboard.html` - إذا كان Admin
- `coach-dashboard.html` - إذا كان Coach
- `client-dashboard.html` - إذا كان Client
- `register.html` - رابط "Create Account"

**الروابط الموجودة:**
```html
Quick Demo Buttons:
- Login as Admin → admin-dashboard.html
- Login as Coach → coach-dashboard.html
- Login as Client → client-dashboard.html

Links:
- Don't have account? → register.html
- Forgot Password? → (password-reset.html)
```

---

### 3. **register.html** (التسجيل)
**من أين تأتي:**
- `index.html` - أزرار Get Started / Sign Up
- `login.html` - رابط Create Account

**إلى أين تذهب:**
- `login.html` - بعد التسجيل الناجح
- `login.html` - رابط "Already have account"

**الروابط الموجودة:**
```html
Form:
- Register → login.html (بعد النجاح)

Links:
- Already have account? → login.html
```

---

## 👨‍💼 **قسم الـ Admin**

### **admin-dashboard.html** (لوحة التحكم)
**من أين تأتي:**
- `login.html` - تسجيل دخول كـ Admin

**إلى أين تذهب:**
```html
Navbar:
- Dashboard → admin-dashboard.html (نفس الصفحة)
- Users → admin-users.html
- Coaches → admin-coaches.html
- Clients → admin-clients.html
- System Dropdown:
  ├─ Equipment → admin-equipment.html
  ├─ Exercises → admin-exercises.html
  ├─ Anatomy → admin-anatomy.html
  ├─ Muscles → admin-muscles.html
  └─ Specialties → admin-specialties.html
- Payments → admin-payments.html
- Reports → admin-reports.html
- Notifications → notifications.html
- Profile → profile.html
- Settings → settings.html
- Logout → login.html
```

---

### **admin-users.html** (إدارة المستخدمين)
**الوظيفة:** CRUD للمستخدمين + تغيير الأدوار

**الروابط:**
- نفس الـ navbar أعلاه
- Add User → Modal (في نفس الصفحة)
- Edit User → Modal
- Delete User → تأكيد

---

### **admin-coaches.html** (إدارة المدربين)
**الوظيفة:** إضافة مدربين (مرتبطين 1:1 مع Identity)

**الروابط:**
- Add Coach → Modal (إنشاء حساب Identity جديد)
- Edit Coach → Modal
- View Clients → admin-clients.html (فلترة بالمدرب)
- Delete Coach → تأكيد

---

### **admin-clients.html** (عرض جميع العملاء)
**الوظيفة:** عرض كل العملاء مع المدربين المسؤولين عنهم

**الروابط:**
- View Profile → profile.html?user_id=X
- View Progress → client-progress.html?client_id=X
- Reassign Coach → Modal

---

### **admin-equipment.html** (إدارة المعدات)
**الوظيفة:** إضافة وتعديل معدات الجيم

**الروابط:**
- Add Equipment → Modal
- Edit → Modal
- Delete → تأكيد

---

### **admin-exercises.html** (إدارة التمارين)
**الوظيفة:** إدارة مكتبة التمارين

**الروابط:**
- Add Exercise → Modal
- Edit → Modal
- View Details → Modal
- Delete → تأكيد

---

### **admin-anatomy.html** (إدارة التشريح)
**الوظيفة:** إضافة أجزاء الجسم

**الروابط:**
- Add Body Part → Modal
- View Muscles → admin-muscles.html (فلترة)
- Edit → Modal
- Delete → تأكيد

---

### **admin-muscles.html** (إدارة العضلات)
**الوظيفة:** إضافة عضلات مرتبطة بالتشريح

**الروابط:**
- Add Muscle → Modal
- View Exercises → admin-exercises.html (فلترة)
- Edit → Modal
- Delete → تأكيد

---

### **admin-specialties.html** (إدارة التخصصات)
**الوظيفة:** تخصصات المدربين

**الروابط:**
- Add Specialty → Modal
- Edit → Modal
- Delete → تأكيد

---

### **admin-payments.html** ⭐ (لوحة المدفوعات)
**الوظيفة:** عرض الإيرادات والعمولات

**المعلومات المعروضة:**
- إجمالي الإيرادات
- حصة الـ Admin (80%)
- عمولة المدربين (20%)
- أداء الباقات (Basic $29, Pro $59, Elite $99)
- أرباح كل مدرب
- آخر المعاملات

**الروابط:**
- Export Report → تحميل PDF/Excel
- View Coach Details → admin-coaches.html

---

### **admin-reports.html** (التقارير)
**الوظيفة:** تقارير تفصيلية

**الروابط:**
- Export → تحميل
- View Details → Modals

---

## 💪 **قسم الـ Coach**

### **coach-dashboard.html** (لوحة تحكم المدرب)
**من أين تأتي:**
- `login.html` - تسجيل دخول كـ Coach

**إلى أين تذهب:**
```html
Navbar:
- Dashboard → coach-dashboard.html
- Exercises → coach-exercises.html
- Plans → coach-plans.html
- Packages → coach-packages.html
- Diet Plans → coach-diet-plans.html
- Clients → coach-clients.html
- Feedback → coach-feedback.html
- Chat → chat.html
- Notifications → notifications.html
- Profile → profile.html
- Settings → settings.html
- Logout → login.html

Quick Actions:
- Create Workout Plan → coach-plans.html
- Add Exercise → coach-exercises.html
- View Clients → coach-clients.html
```

---

### **coach-exercises.html** (مكتبة التمارين)
**الوظيفة:** إدارة تمارين المدرب

**الروابط:**
- Add Exercise → Modal
- Edit → Modal
- Use in Plan → coach-plans.html
- Delete → تأكيد

---

### **coach-plans.html** (خطط التدريب)
**الوظيفة:** إنشاء خطط تدريبية

**الروابط:**
- Create Plan → Modal
- Edit Plan → Modal
- Assign to Client → coach-clients.html
- Delete → تأكيد

---

### **coach-packages.html** ⭐ (الباقات الثلاثة)
**الوظيفة:** إدارة الباقات الثلاثة

**الباقات:**
1. **Basic - $29/mo** (عمولة $5.80)
   - Exercise Library
   - Basic Plans
   
2. **Pro - $59/mo** (عمولة $11.80)
   - Exercise Library
   - Advanced Plans
   - Chat Support
   - AI Assistance
   
3. **Elite - $99/mo** (عمولة $19.80)
   - كل ما سبق +
   - Video Calls
   - Premium Features

**الروابط:**
- Edit Package → Modal (تخصيص الوصف والمميزات)
- View Subscribers → coach-clients.html (فلترة)

---

### **coach-diet-plans.html** ⭐ (خطط التغذية)
**الوظيفة:** إنشاء خطط غذائية

**الروابط:**
- Create Diet Plan → Modal
- View Details → Modal
- Assign to Client → coach-clients.html
- Edit → Modal
- Delete → تأكيد

---

### **coach-clients.html** (إدارة العملاء)
**الوظيفة:** عرض عملاء المدرب مع جدول التقدم

**الجدول يحتوي على:**
- صورة العميل
- الاسم
- الخطة التدريبية
- تاريخ البدء
- الوزن الأولي
- الوزن الحالي
- ملاحظات العميل
- تقييم المدرب (Coach Rating) ⭐

**الروابط:**
- View Profile → profile.html?client_id=X
- Update Rating → Modal
- Chat → chat.html?client_id=X
- View Progress → client-progress.html?client_id=X

---

### **coach-feedback.html** ⭐ (الملاحظات والتقييمات)
**الوظيفة:** عرض تقييمات العملاء والرد عليها

**المعلومات:**
- التقييم الإجمالي (4.9/5)
- تفصيل النجوم (5★, 4★, 3★...)
- تعليقات العملاء
- حالة الرد (Pending/Responded)

**الروابط:**
- Respond → Modal
- Report → تبليغ
- Filter by Rating

---

## 🏃 **قسم الـ Client**

### **client-dashboard.html** (لوحة تحكم العميل)
**من أين تأتي:**
- `login.html` - تسجيل دخول كـ Client
- `client-payment.html` - بعد الدفع الناجح

**إلى أين تذهب:**
```html
Navbar:
- Dashboard → client-dashboard.html
- Coaches → client-coaches.html
- Packages → client-packages.html
- Workouts → client-workouts.html
- Progress → client-progress.html
- Daily Log → client-daily-log.html
- Chat → chat.html
- Notifications → notifications.html
- Profile → profile.html
- Settings → settings.html
- Logout → login.html

Dashboard:
- Start Workout → client-workouts.html
- Log Weight → client-progress.html
- View Full Plan → client-workouts.html
- Chat with Coach → chat.html
```

---

### **client-coaches.html** ⭐ (تصفح المدربين)
**الوظيفة:** عرض جميع المدربين المتاحين

**معلومات كل مدرب:**
- الصورة
- الاسم
- التخصص
- التقييم (★★★★★)
- عدد العملاء
- سنوات الخبرة
- نسبة النجاح

**الروابط:**
- View Packages → Modal (يعرض الباقات الثلاثة)
- Select Package → client-payment.html?package=X&coach=Y

**Flow:**
```
client-coaches.html
    ↓ (يختار مدرب)
Modal يعرض الباقات الثلاثة
    ↓ (يختار باقة)
client-payment.html
    ↓ (يدفع)
client-dashboard.html (مشترك الآن)
```

---

### **client-packages.html** (عرض الباقات)
**الوظيفة:** مقارنة الباقات

**الروابط:**
- Subscribe → client-payment.html?package=X
- View Coaches → client-coaches.html
- Upgrade → client-payment.html?package=upgrade

---

### **client-workouts.html** (تنفيذ التمارين)
**الوظيفة:** تمرين اليوم

**الروابط:**
- Mark Complete → تحديث الحالة
- Send Feedback → Modal
- Chat with Coach → chat.html

---

### **client-progress.html** (تتبع التقدم)
**الوظيفة:** رسوم بيانية للتقدم

**الروابط:**
- Log Weight → Modal
- View Daily Logs → client-daily-log.html
- Share with Coach → chat.html

---

### **client-payment.html** ⭐ (صفحة الدفع)
**من أين تأتي:**
- `client-coaches.html` - بعد اختيار باقة
- `client-packages.html` - زر Subscribe

**المعلومات المعروضة:**
- معلومات المدرب
- تفاصيل الباقة
- السعر
- نموذج الدفع (Card details)
- توزيع المبلغ:
  - 80% للـ Admin
  - 20% للـ Coach

**إلى أين تذهب:**
- Complete Purchase → Modal (نجاح)
- Go to Dashboard → client-dashboard.html
- Chat with Coach → chat.html

**Flow:**
```
1. يختار باقة من client-coaches.html
2. ينتقل لـ client-payment.html
3. يدخل معلومات الدفع
4. يضغط "Complete Purchase"
5. Modal يظهر "Payment Successful"
6. يذهب لـ client-dashboard.html
7. المدرب يستلم إشعار بعميل جديد
```

---

### **client-daily-log.html** ⭐ (السجل اليومي)
**الوظيفة:** تسجيل التقدم اليومي

**ما يسجله العميل:**
- التاريخ
- الوزن الحالي
- صورة التقدم (Progress Photo)
- الحالة المزاجية (😊😐😔)
- مستوى الطاقة (1-10)
- ملاحظات للمدرب
- هل أكمل التمرين؟

**ما يفعله المدرب:**
- يشاهد السجلات
- يقيّم التقدم (Coach Rating ⭐)
- يرد بتعليقات تحفيزية

**الروابط:**
- Save Log → حفظ
- View History → نفس الصفحة (أسفل)
- Coach Response → يظهر تلقائياً

**Flow:**
```
Client يسجل يومياً:
1. يدخل client-daily-log.html
2. يملأ النموذج (وزن، صورة، ملاحظات)
3. يضغط "Save Log"
4. يظهر في coach-clients.html
5. المدرب يشاهد ويقيّم (⭐ 1-5)
6. التقييم يظهر في جدول coach-clients.html
```

---

## 🔗 **الصفحات المشتركة (Shared)**

### **chat.html** (المحادثات)
**من أين تأتي:**
- أي navbar - زر Chat
- `coach-clients.html` - Chat button
- `client-dashboard.html` - Chat with Coach

**الوظيفة:**
- محادثة فورية بين Coach و Client
- إرسال رسائل نصية
- إرسال صور

---

### **notifications.html** (الإشعارات)
**من أين تأتي:**
- أي navbar - جرس الإشعارات

**أنواع الإشعارات:**
- عميل جديد اشترك (للمدرب)
- المدرب أضاف خطة جديدة (للعميل)
- رسالة جديدة
- تقييم جديد

---

### **profile.html** (الملف الشخصي)
**من أين تأتي:**
- أي navbar - Profile

**الوظيفة:**
- تعديل المعلومات الشخصية
- تغيير الصورة
- تغيير كلمة المرور

---

### **settings.html** (الإعدادات)
**من أين تأتي:**
- أي navbar - Settings

**الوظيفة:**
- إعدادات الإشعارات
- الخصوصية
- اللغة
- الثيم (Light/Dark)

---

## 📊 **خريطة تدفق الاشتراك الكامل**

```
1. زائر يفتح index.html
   ↓
2. يضغط "Get Started" → register.html
   ↓
3. يسجل كـ Client → login.html
   ↓
4. يسجل دخول → client-dashboard.html
   ↓
5. يضغط "Browse Coaches" → client-coaches.html
   ↓
6. يختار مدرب → Modal يعرض الباقات الثلاثة
   ↓
7. يختار باقة (Pro $59) → client-payment.html
   ↓
8. يدخل معلومات الدفع ويدفع
   ↓
9. Modal "Payment Successful" يظهر
   ↓
10. يذهب لـ client-dashboard.html (مشترك الآن)
    ↓
11. المدرب يستلم إشعار في notifications.html
    ↓
12. المدرب يفتح coach-clients.html ويشاهد العميل الجديد
    ↓
13. المدرب ينشئ خطة تدريبية في coach-plans.html
    ↓
14. المدرب يعيّن الخطة للعميل
    ↓
15. العميل يشاهد الخطة في client-workouts.html
    ↓
16. العميل ينفذ التمرين ويسجل في client-daily-log.html
    ↓
17. المدرب يشاهد التقدم في coach-clients.html
    ↓
18. المدرب يقيّم التقدم (⭐ 4/5)
    ↓
19. العميل يشاهد التقييم في client-daily-log.html
    ↓
20. يتواصلون عبر chat.html
```

---

## 🎯 **ملخص الروابط الرئيسية**

### **من Landing إلى Dashboard:**
```
index.html
  → register.html
    → login.html
      → admin-dashboard.html (Admin)
      → coach-dashboard.html (Coach)
      → client-dashboard.html (Client)
```

### **رحلة العميل الكاملة:**
```
client-dashboard.html
  → client-coaches.html (تصفح المدربين)
    → client-payment.html (الدفع)
      → client-dashboard.html (مشترك)
        → client-workouts.html (التمارين)
          → client-daily-log.html (التسجيل اليومي)
            → client-progress.html (التقدم)
              → chat.html (التواصل مع المدرب)
```

### **رحلة المدرب:**
```
coach-dashboard.html
  → coach-packages.html (إدارة الباقات)
  → coach-plans.html (إنشاء خطط)
  → coach-diet-plans.html (خطط التغذية)
  → coach-clients.html (متابعة العملاء)
  → coach-feedback.html (التقييمات)
  → chat.html (التواصل)
```

### **رحلة الـ Admin:**
```
admin-dashboard.html
  → admin-users.html (إدارة المستخدمين)
  → admin-coaches.html (إضافة مدربين)
  → admin-clients.html (عرض العملاء)
  → admin-payments.html (الإيرادات والعمولات)
  → admin-exercises.html (التمارين)
  → admin-equipment.html (المعدات)
  → admin-anatomy.html (التشريح)
  → admin-muscles.html (العضلات)
  → admin-specialties.html (التخصصات)
  → admin-reports.html (التقارير)
```

---

## ✅ **الخلاصة**

**إجمالي الصفحات: 28 صفحة**

- ✅ Public: 3 صفحات
- ✅ Admin: 11 صفحة
- ✅ Coach: 7 صفحات
- ✅ Client: 7 صفحات
- ✅ Shared: 4 صفحات

**كل صفحة مرتبطة بشكل منطقي ومتسلسل!** 🎉
