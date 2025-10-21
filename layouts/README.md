# 🎨 FitVerse Shared Layout System

نظام Layout موحد لتسهيل تطوير وصيانة صفحات FitVerse

---

## 📁 **هيكل الملفات**

```
layouts/
├── admin-navbar.html          # Navbar للـ Admin
├── coach-navbar.html          # Navbar للـ Coach
├── client-navbar.html         # Navbar للـ Client
├── page-template-admin.html   # Template جاهز للـ Admin
├── page-template-coach.html   # Template جاهز للـ Coach
├── page-template-client.html  # Template جاهز للـ Client
└── README.md                  # هذا الملف

js/
└── layout-loader.js           # Script لتحميل الـ Navbar تلقائياً
```

---

## 🚀 **طريقة الاستخدام**

### **الطريقة 1: استخدام Template جاهز (الأسهل)**

1. انسخ الـ Template المناسب:
   - `page-template-admin.html` للـ Admin
   - `page-template-coach.html` للـ Coach
   - `page-template-client.html` للـ Client

2. غير الاسم للصفحة الجديدة (مثلاً: `admin-new-page.html`)

3. عدل الـ attributes في `<body>`:
   ```html
   <body data-layout="admin" data-page="new-page">
   ```

4. غير المحتوى داخل الصفحة حسب احتياجك

**✅ الـ Navbar سيتم تحميله تلقائياً!**

---

### **الطريقة 2: إضافة Shared Layout لصفحة موجودة**

#### **الخطوة 1: إضافة Navbar Container**

استبدل الـ `<nav>` الموجود بـ:

```html
<!-- Navbar Container (Auto-loaded) -->
<div id="navbar-container"></div>
```

#### **الخطوة 2: إضافة Data Attributes**

أضف في `<body>` tag:

```html
<!-- للـ Admin -->
<body data-layout="admin" data-page="dashboard">

<!-- للـ Coach -->
<body data-layout="coach" data-page="exercises">

<!-- للـ Client -->
<body data-layout="client" data-page="workouts">
```

#### **الخطوة 3: إضافة Layout Loader Script**

قبل إغلاق `</body>`:

```html
<!-- Layout Loader -->
<script src="js/layout-loader.js"></script>
```

---

## 📋 **قائمة الـ Page Names**

### **Admin Pages:**
- `dashboard` - Dashboard
- `users` - Users
- `coaches` - Coaches
- `clients` - Clients
- `equipment` - Equipment (System)
- `exercises` - Exercises (System)
- `anatomy` - Anatomy (System)
- `muscles` - Muscles (System)
- `packages` - Packages (System)
- `specialties` - Specialties (System)
- `payments` - Payments
- `reports` - Reports

### **Coach Pages:**
- `dashboard` - Dashboard
- `exercises` - Exercises
- `plans` - Plans
- `diet-plans` - Diet Plans
- `clients` - Clients
- `daily-logs` - Daily Logs
- `chat` - Chat

### **Client Pages:**
- `dashboard` - Dashboard
- `workouts` - Workouts
- `progress` - Progress
- `daily-log` - Daily Log
- `chat` - Chat

---

## 🎯 **مثال كامل**

### **صفحة Admin جديدة:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Feature - FitVerse Admin</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body data-layout="admin" data-page="dashboard">
    
    <!-- Navbar Container -->
    <div id="navbar-container"></div>

    <!-- Your Content -->
    <div class="container-fluid px-4 py-4">
        <h2>My New Page</h2>
        <p>Content goes here...</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/layout-loader.js"></script>
</body>
</html>
```

---

## ✨ **المميزات**

### **1. Auto-Highlight للصفحة النشطة**
الـ Navbar يتعرف تلقائياً على الصفحة الحالية ويضيف class `active`

### **2. سهولة التحديث**
عند تحديث الـ Navbar، كل الصفحات تتحدث تلقائياً

### **3. كود أقل**
لا حاجة لنسخ الـ Navbar في كل صفحة

### **4. صيانة أسهل**
تعديل واحد في `layouts/` يطبق على كل الصفحات

---

## 🔧 **تخصيص الـ Navbar**

### **تغيير اسم المستخدم:**

في ملف الـ Navbar المناسب، عدل:

```html
<!-- Admin -->
<img src="https://ui-avatars.com/api/?name=Admin&background=6366f1&color=fff" alt="Admin" class="user-avatar">
<span>Admin</span>

<!-- Coach -->
<img src="https://ui-avatars.com/api/?name=Alex+Turner&background=10b981&color=fff" alt="Coach" class="user-avatar">
<span>Alex Turner</span>

<!-- Client -->
<img src="https://ui-avatars.com/api/?name=Sarah+Miller&background=6366f1&color=fff" alt="Client" class="user-avatar">
<span>Sarah Miller</span>
```

### **تغيير عدد الإشعارات:**

```html
<span class="notification-badge">5</span>
```

---

## 🎨 **إضافة صفحة جديدة للـ Navbar**

### **مثال: إضافة "Settings" للـ Admin**

في `layouts/admin-navbar.html`:

```html
<li class="nav-item">
    <a class="nav-link" href="admin-settings.html" data-page="settings">
        <i class="bi bi-gear"></i> Settings
    </a>
</li>
```

---

## 📊 **الإحصائيات**

```
✅ 3 Navbar Components (Admin, Coach, Client)
✅ 3 Page Templates جاهزة
✅ 1 Layout Loader Script
✅ Auto-highlight للصفحة النشطة
✅ سهولة الصيانة والتحديث
```

---

## 🚨 **ملاحظات مهمة**

1. **تأكد من المسارات الصحيحة:**
   - الـ Navbar files في `layouts/`
   - الـ Script في `js/`

2. **استخدم الـ `data-page` الصحيح:**
   - يجب أن يطابق القيمة في الـ Navbar

3. **للصفحات في System Dropdown:**
   - استخدم `data-page="system"` للـ dropdown نفسه
   - استخدم page-specific name للـ items

---

## 💡 **نصائح**

### **للتطوير السريع:**
1. استخدم Template جاهز
2. غير `data-page` فقط
3. ركز على المحتوى

### **للصيانة:**
1. عدل الـ Navbar في `layouts/` فقط
2. كل الصفحات ستتحدث تلقائياً
3. لا حاجة لتعديل كل صفحة

---

## 🎉 **الخلاصة**

**نظام Shared Layout يوفر:**
- ⏱️ وقت التطوير
- 🔧 سهولة الصيانة
- 🎯 كود موحد ونظيف
- ✅ تحديثات تلقائية

**ابدأ الآن باستخدام Templates الجاهزة!** 🚀
