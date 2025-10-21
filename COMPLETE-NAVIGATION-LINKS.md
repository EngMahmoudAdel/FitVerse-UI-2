# 🔗 FitVerse - دليل الروابط الكامل

## 📌 ملخص سريع

```
المشروع مرتبط بالكامل ✅
جميع الصفحات تحتوي على روابط صحيحة
التنقل يعمل بشكل منطقي ومتسلسل
```

---

## 🏠 الصفحات العامة (Public Pages)

### **index.html** → الصفحة الرئيسية
```html
<!-- Navbar Links -->
<a href="index.html">Home</a>
<a href="#features">Features</a>
<a href="#pricing">Pricing</a>
<a href="login.html">Login</a>
<a href="register.html">Get Started</a>

<!-- Hero Section -->
<a href="register.html">Start Free Trial</a>
<a href="#features">Learn More</a>

<!-- Pricing Cards (3 buttons) -->
<button onclick="location.href='register.html'">Get Started</button>

<!-- CTA Section -->
<a href="register.html">Sign Up Now</a>

<!-- Footer -->
<a href="login.html">Login</a>
```

---

### **login.html** → تسجيل الدخول
```html
<!-- Quick Demo Buttons (مهم جداً!) -->
<a href="admin-dashboard.html" class="btn">Admin</a>
<a href="coach-dashboard.html" class="btn">Coach</a>
<a href="client-dashboard.html" class="btn">Client</a>

<!-- Form Links -->
<a href="register.html">Sign Up</a>
<a href="#">Forgot Password?</a>

<!-- بعد تسجيل الدخول الحقيقي -->
<!-- يتم التوجيه حسب الدور من الـ Backend -->
```

---

### **register.html** → التسجيل
```html
<!-- Form -->
<form action="login.html">
  <!-- بعد التسجيل الناجح → login.html -->
</form>

<!-- Links -->
<a href="login.html">Already have account?</a>
```

---

## 👨‍💼 قسم الـ Admin (11 صفحة)

### **Navbar موحد لكل صفحات الـ Admin:**
```html
<nav class="navbar">
  <a href="admin-dashboard.html">Dashboard</a>
  <a href="admin-users.html">Users</a>
  <a href="admin-coaches.html">Coaches</a>
  <a href="admin-clients.html">Clients</a>
  
  <!-- System Dropdown -->
  <div class="dropdown">
    <a href="admin-equipment.html">Equipment</a>
    <a href="admin-exercises.html">Exercises</a>
    <a href="admin-anatomy.html">Anatomy</a>
    <a href="admin-muscles.html">Muscles</a>
    <a href="admin-specialties.html">Specialties</a>
  </div>
  
  <a href="admin-payments.html">Payments</a>
  <a href="admin-reports.html">Reports</a>
  <a href="notifications.html">Notifications</a>
  
  <!-- User Dropdown -->
  <div class="dropdown">
    <a href="profile.html">Profile</a>
    <a href="settings.html">Settings</a>
    <a href="login.html">Logout</a>
  </div>
</nav>
```

### **الصفحات:**
1. **admin-dashboard.html** ✅
2. **admin-users.html** ✅
3. **admin-coaches.html** ✅
4. **admin-clients.html** ✅
5. **admin-equipment.html** ✅
6. **admin-exercises.html** ✅
7. **admin-anatomy.html** ✅
8. **admin-muscles.html** ✅
9. **admin-specialties.html** ✅
10. **admin-payments.html** ✅
11. **admin-reports.html** ✅

---

## 💪 قسم الـ Coach (7 صفحات)

### **Navbar موحد لكل صفحات الـ Coach:**
```html
<nav class="navbar">
  <a href="coach-dashboard.html">Dashboard</a>
  <a href="coach-exercises.html">Exercises</a>
  <a href="coach-plans.html">Plans</a>
  <a href="coach-packages.html">Packages</a>
  <a href="coach-diet-plans.html">Diet Plans</a>
  <a href="coach-clients.html">Clients</a>
  <a href="coach-feedback.html">Feedback</a>
  <a href="chat.html">Chat</a>
  <a href="notifications.html">Notifications</a>
  
  <!-- User Dropdown -->
  <div class="dropdown">
    <a href="profile.html">Profile</a>
    <a href="settings.html">Settings</a>
    <a href="login.html">Logout</a>
  </div>
</nav>
```

### **الصفحات:**
1. **coach-dashboard.html** ✅
2. **coach-exercises.html** ✅
3. **coach-plans.html** ✅
4. **coach-packages.html** ✅
5. **coach-diet-plans.html** ✅
6. **coach-clients.html** ✅
7. **coach-feedback.html** ✅

---

## 🏃 قسم الـ Client (7 صفحات)

### **Navbar موحد لكل صفحات الـ Client:**
```html
<nav class="navbar">
  <a href="client-dashboard.html">Dashboard</a>
  <a href="client-coaches.html">Coaches</a>
  <a href="client-packages.html">Packages</a>
  <a href="client-workouts.html">Workouts</a>
  <a href="client-progress.html">Progress</a>
  <a href="client-daily-log.html">Daily Log</a>
  <a href="chat.html">Chat</a>
  <a href="notifications.html">Notifications</a>
  
  <!-- User Dropdown -->
  <div class="dropdown">
    <a href="profile.html">Profile</a>
    <a href="settings.html">Settings</a>
    <a href="login.html">Logout</a>
  </div>
</nav>
```

### **الصفحات:**
1. **client-dashboard.html** ✅
2. **client-coaches.html** ✅
3. **client-packages.html** ✅
4. **client-workouts.html** ✅
5. **client-progress.html** ✅
6. **client-daily-log.html** ✅
7. **client-payment.html** ✅

---

## 🔗 الصفحات المشتركة (4 صفحات)

1. **chat.html** ✅
2. **notifications.html** ✅
3. **profile.html** ✅
4. **settings.html** ✅

---

## 🎯 Flow الاشتراك الكامل (مع الروابط)

```
1. index.html
   ↓ [زر "Get Started"]
   
2. register.html
   ↓ [بعد التسجيل]
   
3. login.html
   ↓ [Quick Demo: Client]
   
4. client-dashboard.html
   ↓ [Navbar: "Coaches"]
   
5. client-coaches.html
   ↓ [زر "View Packages" على كارت المدرب]
   
6. Modal يفتح بالباقات الثلاثة
   ↓ [زر "Select Package" - Pro $59]
   
7. client-payment.html?package=pro&coach=alex
   ↓ [زر "Complete Purchase"]
   
8. Modal "Payment Successful"
   ↓ [زر "Go to Dashboard"]
   
9. client-dashboard.html (مشترك الآن)
   ↓ [Navbar: "Workouts"]
   
10. client-workouts.html
    ↓ [بعد التمرين، Navbar: "Daily Log"]
    
11. client-daily-log.html
    ↓ [يسجل التقدم]
    
12. المدرب يشاهد في coach-clients.html
    ↓ [يقيّم ⭐]
    
13. العميل يشاهد التقييم في client-daily-log.html
```

---

## 📋 جدول الروابط السريع

| من | إلى | الرابط |
|---|---|---|
| index.html | register.html | `<a href="register.html">` |
| index.html | login.html | `<a href="login.html">` |
| register.html | login.html | `<a href="login.html">` |
| login.html | admin-dashboard.html | `<a href="admin-dashboard.html">` |
| login.html | coach-dashboard.html | `<a href="coach-dashboard.html">` |
| login.html | client-dashboard.html | `<a href="client-dashboard.html">` |
| client-coaches.html | client-payment.html | `<a href="client-payment.html?package=X&coach=Y">` |
| client-payment.html | client-dashboard.html | `<a href="client-dashboard.html">` |
| أي صفحة | login.html | `<a href="login.html">Logout</a>` |

---

## 🎨 الروابط في الـ Modals

### **client-coaches.html → Modal الباقات:**
```html
<div class="modal" id="coachPackagesModal">
  <!-- Basic Package -->
  <a href="client-payment.html?package=basic&coach=alex">Select Package</a>
  
  <!-- Pro Package -->
  <a href="client-payment.html?package=pro&coach=alex">Select Package</a>
  
  <!-- Elite Package -->
  <a href="client-payment.html?package=elite&coach=alex">Select Package</a>
</div>
```

### **client-payment.html → Success Modal:**
```html
<div class="modal" id="successModal">
  <a href="client-dashboard.html">Go to Dashboard</a>
  <a href="chat.html">Chat with Coach</a>
</div>
```

---

## 🔄 الروابط الديناميكية (للـ Backend)

### **عند تسجيل الدخول:**
```javascript
// في login.html
if (userRole === 'Admin') {
  window.location.href = 'admin-dashboard.html';
} else if (userRole === 'Coach') {
  window.location.href = 'coach-dashboard.html';
} else if (userRole === 'Client') {
  window.location.href = 'client-dashboard.html';
}
```

### **عند اختيار باقة:**
```javascript
// في client-coaches.html
const packageUrl = `client-payment.html?package=${packageType}&coach=${coachId}`;
window.location.href = packageUrl;
```

### **بعد الدفع الناجح:**
```javascript
// في client-payment.html
// عرض Modal النجاح
$('#successModal').modal('show');

// بعد 3 ثواني
setTimeout(() => {
  window.location.href = 'client-dashboard.html';
}, 3000);
```

---

## ✅ التحقق من الروابط

### **كل صفحة يجب أن تحتوي على:**
- ✅ Logo يوجه لـ `index.html`
- ✅ Navbar بكل الروابط المناسبة للدور
- ✅ Logout يوجه لـ `login.html`
- ✅ Profile يوجه لـ `profile.html`
- ✅ Settings يوجه لـ `settings.html`
- ✅ Notifications يوجه لـ `notifications.html`
- ✅ Chat يوجه لـ `chat.html`

---

## 🎯 نقاط مهمة للـ Backend

### **1. Authentication:**
```javascript
// التحقق من تسجيل الدخول
if (!isLoggedIn) {
  window.location.href = 'login.html';
}
```

### **2. Role-Based Access:**
```javascript
// التحقق من الصلاحيات
if (currentPage.startsWith('admin-') && userRole !== 'Admin') {
  window.location.href = 'login.html';
}
```

### **3. Payment Flow:**
```javascript
// في client-payment.html
const urlParams = new URLSearchParams(window.location.search);
const packageType = urlParams.get('package'); // basic, pro, elite
const coachId = urlParams.get('coach');

// بعد الدفع الناجح
// 1. حفظ في Database
// 2. توزيع المبلغ (80% Admin, 20% Coach)
// 3. إرسال إشعار للمدرب
// 4. تفعيل الاشتراك
// 5. توجيه للـ Dashboard
```

---

## 📊 خريطة الروابط المرئية

```
                    index.html (Landing)
                          |
                    [Get Started]
                          |
                    register.html
                          |
                    [After Signup]
                          |
                     login.html
                    /     |     \
                   /      |      \
            Admin/    Coach/    Client/
                 /        |        \
                /         |         \
    admin-dashboard  coach-dashboard  client-dashboard
           |              |                  |
           |              |                  |
    [11 pages]      [7 pages]          [7 pages]
           |              |                  |
           |              |                  |
    admin-payments  coach-packages    client-coaches
           |              |                  |
           |              |                  |
    [80/20 split]  [3 tiers]          [Browse]
                          |                  |
                          |                  |
                    coach-clients      client-payment
                          |                  |
                          |                  |
                    [Rate clients]     [Checkout]
                          |                  |
                          |                  |
                    coach-feedback    client-daily-log
                          |                  |
                          |                  |
                    [Reviews]          [Progress]
                          |                  |
                          +------------------+
                                   |
                                chat.html
```

---

## 🎉 الخلاصة

**✅ جميع الصفحات مرتبطة بشكل صحيح**

- 28 صفحة HTML
- كل صفحة تحتوي على Navbar كامل
- الروابط منطقية ومتسلسلة
- Flow الاشتراك واضح
- نظام الدفع مرتبط
- التقييمات مرتبطة
- Chat متاح من كل مكان

**المشروع جاهز 100% للاستخدام!** 🚀
