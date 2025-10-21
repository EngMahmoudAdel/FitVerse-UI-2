# 🎨 دليل استخدام Shared Layout System

## 📚 **المحتويات**

1. [نظرة عامة](#نظرة-عامة)
2. [الملفات المتوفرة](#الملفات-المتوفرة)
3. [طريقة الاستخدام](#طريقة-الاستخدام)
4. [أمثلة عملية](#أمثلة-عملية)
5. [الأسئلة الشائعة](#الأسئلة-الشائعة)

---

## 🎯 **نظرة عامة**

### **ما هو Shared Layout System؟**

نظام موحد لإدارة الـ Navigation Bar في كل صفحات المشروع، يوفر:

✅ **سهولة التطوير** - لا حاجة لنسخ الـ navbar في كل صفحة  
✅ **سهولة الصيانة** - تحديث واحد يطبق على كل الصفحات  
✅ **كود نظيف** - تقليل التكرار والأكواد المكررة  
✅ **Auto-Highlight** - تحديد الصفحة النشطة تلقائياً  

---

## 📁 **الملفات المتوفرة**

```
FitVerse-UI/
├── layouts/
│   ├── admin-navbar.html          ← Navbar للـ Admin
│   ├── coach-navbar.html          ← Navbar للـ Coach
│   ├── client-navbar.html         ← Navbar للـ Client
│   ├── page-template-admin.html   ← Template جاهز Admin
│   ├── page-template-coach.html   ← Template جاهز Coach
│   ├── page-template-client.html  ← Template جاهز Client
│   └── README.md                  ← دليل مفصل
│
├── js/
│   └── layout-loader.js           ← Script التحميل التلقائي
│
├── example-shared-layout.html     ← مثال عملي
└── SHARED-LAYOUT-GUIDE.md         ← هذا الملف
```

---

## 🚀 **طريقة الاستخدام**

### **الطريقة الأولى: استخدام Template جاهز (موصى بها)**

#### **الخطوات:**

1. **اختر Template المناسب:**
   ```
   layouts/page-template-admin.html   → للـ Admin
   layouts/page-template-coach.html   → للـ Coach
   layouts/page-template-client.html  → للـ Client
   ```

2. **انسخ الملف وغير اسمه:**
   ```
   مثال: admin-new-feature.html
   ```

3. **عدل الـ `<body>` tag:**
   ```html
   <body data-layout="admin" data-page="new-feature">
   ```

4. **غير المحتوى:**
   - العنوان في `<title>`
   - المحتوى داخل `<div class="container-fluid">`

5. **احفظ وافتح الصفحة** ✅

**الـ Navbar سيظهر تلقائياً!**

---

### **الطريقة الثانية: تحويل صفحة موجودة**

#### **الخطوات:**

**1. استبدل الـ `<nav>` بـ:**
```html
<!-- Navbar Container (Auto-loaded) -->
<div id="navbar-container"></div>
```

**2. أضف في `<body>` tag:**
```html
<!-- للـ Admin -->
<body data-layout="admin" data-page="dashboard">

<!-- للـ Coach -->
<body data-layout="coach" data-page="exercises">

<!-- للـ Client -->
<body data-layout="client" data-page="workouts">
```

**3. أضف قبل `</body>`:**
```html
<!-- Layout Loader -->
<script src="js/layout-loader.js"></script>
```

**4. احفظ وافتح الصفحة** ✅

---

## 📋 **قائمة Page Names**

### **Admin Pages:**

| Page Name | الصفحة |
|-----------|--------|
| `dashboard` | Dashboard |
| `users` | Users |
| `coaches` | Coaches |
| `clients` | Clients |
| `equipment` | Equipment (System) |
| `exercises` | Exercises (System) |
| `anatomy` | Anatomy (System) |
| `muscles` | Muscles (System) |
| `packages` | Packages (System) |
| `specialties` | Specialties (System) |
| `payments` | Payments |
| `reports` | Reports |

### **Coach Pages:**

| Page Name | الصفحة |
|-----------|--------|
| `dashboard` | Dashboard |
| `exercises` | Exercises |
| `plans` | Plans |
| `diet-plans` | Diet Plans |
| `clients` | Clients |
| `daily-logs` | Daily Logs |
| `chat` | Chat |

### **Client Pages:**

| Page Name | الصفحة |
|-----------|--------|
| `dashboard` | Dashboard |
| `workouts` | Workouts |
| `progress` | Progress |
| `daily-log` | Daily Log |
| `chat` | Chat |

---

## 💡 **أمثلة عملية**

### **مثال 1: صفحة Admin جديدة**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistics - FitVerse Admin</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body data-layout="admin" data-page="reports">
    
    <!-- Navbar Container -->
    <div id="navbar-container"></div>

    <!-- Content -->
    <div class="container-fluid px-4 py-4">
        <h2>Statistics Dashboard</h2>
        <!-- Your content here -->
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/layout-loader.js"></script>
</body>
</html>
```

---

### **مثال 2: صفحة Coach جديدة**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Clients - FitVerse Coach</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body data-layout="coach" data-page="clients">
    
    <!-- Navbar Container -->
    <div id="navbar-container"></div>

    <!-- Content -->
    <div class="container-fluid px-4 py-4">
        <h2>My Clients</h2>
        <!-- Your content here -->
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/layout-loader.js"></script>
</body>
</html>
```

---

### **مثال 3: صفحة Client جديدة**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Workouts - FitVerse</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body data-layout="client" data-page="workouts">
    
    <!-- Navbar Container -->
    <div id="navbar-container"></div>

    <!-- Content -->
    <div class="container-fluid px-4 py-4">
        <h2>My Workouts</h2>
        <!-- Your content here -->
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/layout-loader.js"></script>
</body>
</html>
```

---

## 🔧 **التخصيص**

### **تغيير اسم المستخدم في Navbar:**

افتح الملف المناسب في `layouts/`:

```html
<!-- Admin: layouts/admin-navbar.html -->
<span>Admin</span>  ← غير هنا

<!-- Coach: layouts/coach-navbar.html -->
<span>Alex Turner</span>  ← غير هنا

<!-- Client: layouts/client-navbar.html -->
<span>Sarah Miller</span>  ← غير هنا
```

---

### **تغيير عدد الإشعارات:**

```html
<span class="notification-badge">5</span>  ← غير الرقم
```

---

### **إضافة رابط جديد للـ Navbar:**

في الملف المناسب في `layouts/`:

```html
<li class="nav-item">
    <a class="nav-link" href="new-page.html" data-page="new-page">
        <i class="bi bi-star"></i> New Feature
    </a>
</li>
```

---

## ❓ **الأسئلة الشائعة**

### **س: الـ Navbar لا يظهر؟**

✅ **الحلول:**
1. تأكد من وجود `<div id="navbar-container"></div>`
2. تأكد من إضافة `<script src="js/layout-loader.js"></script>`
3. تأكد من `data-layout` في `<body>`
4. تأكد من المسارات الصحيحة للملفات

---

### **س: الصفحة النشطة غير محددة؟**

✅ **الحل:**
تأكد من `data-page` في `<body>` يطابق القيمة في الـ Navbar

مثال:
```html
<!-- في الصفحة -->
<body data-page="dashboard">

<!-- في الـ Navbar -->
<a class="nav-link" href="..." data-page="dashboard">
```

---

### **س: كيف أضيف صفحة جديدة؟**

✅ **الخطوات:**
1. انسخ Template المناسب
2. غير `data-page` في `<body>`
3. أضف الرابط في الـ Navbar (إذا لزم الأمر)

---

### **س: هل يمكن استخدام Navbar مختلف لصفحة معينة؟**

✅ **نعم!** 
يمكنك إنشاء navbar جديد في `layouts/` واستخدامه:

```html
<body data-layout="custom-navbar" data-page="special">
```

---

### **س: كيف أحدث الـ Navbar لكل الصفحات؟**

✅ **سهل جداً!**
عدل الملف في `layouts/` فقط، وكل الصفحات ستتحدث تلقائياً!

---

## 📊 **الإحصائيات**

```
✅ 3 Navbar Components (Admin, Coach, Client)
✅ 3 Page Templates جاهزة
✅ 1 Layout Loader Script
✅ 1 Example Page
✅ 2 Documentation Files
---
📁 10 ملفات جاهزة للاستخدام!
```

---

## 🎯 **الخلاصة**

### **المميزات:**
- ⚡ **تطوير أسرع** - Templates جاهزة
- 🔧 **صيانة أسهل** - تحديث واحد للكل
- 📝 **كود أنظف** - لا تكرار
- ✅ **Auto-Highlight** - تلقائي

### **الاستخدام:**
1. استخدم Template جاهز
2. غير `data-page`
3. أضف المحتوى
4. **جاهز!** ✨

---

## 🚀 **ابدأ الآن!**

1. افتح `example-shared-layout.html` لرؤية مثال حي
2. استخدم Template من `layouts/`
3. اقرأ `layouts/README.md` للتفاصيل

**Happy Coding! 💪**
