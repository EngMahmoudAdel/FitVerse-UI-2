# 🗺️ الخريطة المرئية الكاملة للموقع

## 🎯 Flow الرئيسي

```
                    🌐 الزائر يفتح الموقع
                              |
                              ↓
                    ┌─────────────────┐
                    │  index.html     │
                    │  (Landing Page) │
                    └─────────────────┘
                              |
                    ┌─────────┴─────────┐
                    |                   |
              [Get Started]         [Login]
                    |                   |
                    ↓                   ↓
            ┌──────────────┐    ┌──────────────┐
            │ register.html│    │  login.html  │
            │  (التسجيل)   │    │ (تسجيل دخول) │
            └──────────────┘    └──────────────┘
                    |                   |
                    └─────────┬─────────┘
                              |
                    ┌─────────┴─────────┐
                    |         |         |
                 [Admin]   [Coach]   [Client]
                    |         |         |
                    ↓         ↓         ↓
```

---

## 👨‍💼 قسم Admin

```
┌────────────────────────────────────────────────────────┐
│              admin-dashboard.html                      │
│                 (لوحة التحكم)                          │
└────────────────────────────────────────────────────────┘
                         |
        ┌────────────────┼────────────────┐
        |                |                |
        ↓                ↓                ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ admin-users  │  │admin-coaches │  │admin-clients │
│   (Users)    │  │  (Coaches)   │  │  (Clients)   │
└──────────────┘  └──────────────┘  └──────────────┘
        |                |                |
        ↓                ↓                ↓
    [CRUD]           [Add 1:1]        [View All]
                         |
        ┌────────────────┼────────────────┐
        |                |                |
        ↓                ↓                ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│admin-        │  │admin-        │  │admin-        │
│equipment     │  │exercises     │  │anatomy       │
└──────────────┘  └──────────────┘  └──────────────┘
        |                |                |
        ↓                ↓                ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│admin-muscles │  │admin-        │  │admin-        │
│              │  │specialties   │  │payments      │
└──────────────┘  └──────────────┘  └──────────────┘
                                            |
                                            ↓
                                    ┌──────────────┐
                                    │admin-reports │
                                    │  (Analytics) │
                                    └──────────────┘
```

---

## 💪 قسم Coach

```
┌────────────────────────────────────────────────────────┐
│              coach-dashboard.html                      │
│                 (لوحة التحكم)                          │
└────────────────────────────────────────────────────────┘
                         |
        ┌────────────────┼────────────────┐
        |                |                |
        ↓                ↓                ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│coach-        │  │coach-plans   │  │coach-        │
│exercises     │  │ (Training)   │  │packages      │
└──────────────┘  └──────────────┘  └──────────────┘
        |                |                |
        ↓                ↓                ↓
   [Browse]          [Create]      [3 Tiers: $29/$59/$99]
        |                |                |
        └────────────────┼────────────────┘
                         |
        ┌────────────────┼────────────────┐
        |                |                |
        ↓                ↓                ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│coach-        │  │coach-clients │  │coach-        │
│diet-plans    │  │ (My Clients) │  │feedback      │
└──────────────┘  └──────────────┘  └──────────────┘
        |                |                |
        ↓                ↓                ↓
  [Nutrition]      [Track & Rate]    [Reviews]
                         |
                         ↓
                  ┌──────────────┐
                  │  chat.html   │
                  │ (Message)    │
                  └──────────────┘
```

---

## 🏃 قسم Client

```
┌────────────────────────────────────────────────────────┐
│             client-dashboard.html                      │
│                 (لوحة التحكم)                          │
└────────────────────────────────────────────────────────┘
                         |
        ┌────────────────┼────────────────┐
        |                |                |
        ↓                ↓                ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│client-       │  │client-       │  │client-       │
│coaches       │  │packages      │  │workouts      │
└──────────────┘  └──────────────┘  └──────────────┘
        |                |                |
        ↓                ↓                ↓
   [Browse]         [View Current]   [Today's Plan]
        |                                 |
        ↓                                 ↓
┌──────────────┐                  ┌──────────────┐
│ Modal:       │                  │client-       │
│ View Packages│                  │progress      │
└──────────────┘                  └──────────────┘
        |                                 |
        ↓                                 ↓
┌──────────────┐                  ┌──────────────┐
│ Select:      │                  │client-       │
│ Pro $59      │                  │daily-log     │
└──────────────┘                  └──────────────┘
        |                                 |
        ↓                                 ↓
┌──────────────┐                  [Log Weight,
│client-       │                   Photos, Mood]
│payment       │                         |
└──────────────┘                         ↓
        |                         ┌──────────────┐
        ↓                         │ Coach Rates  │
┌──────────────┐                  │  ⭐⭐⭐⭐    │
│ Success!     │                  └──────────────┘
│ [Go to       │                         |
│  Dashboard]  │                         ↓
└──────────────┘                  ┌──────────────┐
        |                         │  chat.html   │
        ↓                         │ (Message)    │
┌──────────────┐                  └──────────────┘
│client-       │
│dashboard     │
│ (Subscribed!)│
└──────────────┘
```

---

## 🔗 الصفحات المشتركة

```
                    ┌─────────────────┐
                    │  Shared Pages   │
                    └─────────────────┘
                            |
        ┌───────────────────┼───────────────────┐
        |                   |                   |
        ↓                   ↓                   ↓
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  chat.html   │    │notifications │    │ profile.html │
│ (Messages)   │    │   .html      │    │ (Account)    │
└──────────────┘    └──────────────┘    └──────────────┘
        |                   |                   |
        ↓                   ↓                   ↓
  [Real-time]         [Alerts]            [Edit Info]
                                                |
                                                ↓
                                        ┌──────────────┐
                                        │settings.html │
                                        │ (Preferences)│
                                        └──────────────┘
```

---

## 🎯 Flow الاشتراك الكامل (مفصل)

```
الخطوة 1: الوصول للموقع
┌─────────────────────────────────────────┐
│ الزائر يفتح → index.html               │
│ • يشاهد Hero Section                   │
│ • يقرأ Features (6 مميزات)             │
│ • يجرب Interactive Anatomy (SVG)       │
│ • يقارن Pricing (3 باقات)              │
└─────────────────────────────────────────┘
                  ↓
الخطوة 2: التسجيل
┌─────────────────────────────────────────┐
│ يضغط "Get Started" → register.html     │
│ • Name: Sarah Miller                   │
│ • Email: sarah@example.com             │
│ • Password: ********                   │
│ • Role: Client                         │
└─────────────────────────────────────────┘
                  ↓
الخطوة 3: تسجيل الدخول
┌─────────────────────────────────────────┐
│ بعد التسجيل → login.html               │
│ • Email: sarah@example.com             │
│ • Password: ********                   │
│ • [Login] أو [Quick Demo: Client]      │
└─────────────────────────────────────────┘
                  ↓
الخطوة 4: Dashboard
┌─────────────────────────────────────────┐
│ client-dashboard.html                   │
│ • Welcome Sarah! 👋                     │
│ • Today's Workout: Not assigned yet    │
│ • Quick Actions: Browse Coaches        │
└─────────────────────────────────────────┘
                  ↓
الخطوة 5: تصفح المدربين
┌─────────────────────────────────────────┐
│ Navbar: Coaches → client-coaches.html   │
│                                         │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│ │ Alex    │ │ Maria   │ │ John    │   │
│ │ Turner  │ │ Garcia  │ │ Smith   │   │
│ │ ⭐ 4.9  │ │ ⭐ 4.8  │ │ ⭐ 4.7  │   │
│ │[View Pkg]│ │[View Pkg]│ │[View Pkg]│   │
│ └─────────┘ └─────────┘ └─────────┘   │
└─────────────────────────────────────────┘
                  ↓
الخطوة 6: عرض الباقات
┌─────────────────────────────────────────┐
│ Modal: Alex Turner's Packages           │
│                                         │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│ │ Basic   │ │ Pro ⭐  │ │ Elite   │   │
│ │ $29/mo  │ │ $59/mo  │ │ $99/mo  │   │
│ │[Select] │ │[Select] │ │[Select] │   │
│ └─────────┘ └─────────┘ └─────────┘   │
└─────────────────────────────────────────┘
                  ↓
الخطوة 7: صفحة الدفع
┌─────────────────────────────────────────┐
│ client-payment.html                     │
│                                         │
│ Order Summary:                          │
│ • Coach: Alex Turner                    │
│ • Package: Pro ($59/mo)                 │
│ • Discount: -$9.80 (First Month)        │
│ • Total: $49.20                         │
│                                         │
│ Payment Info:                           │
│ • Card: **** **** **** 1234             │
│ • [Complete Purchase]                   │
└─────────────────────────────────────────┘
                  ↓
الخطوة 8: تأكيد الدفع
┌─────────────────────────────────────────┐
│ Success Modal                           │
│ ✅ Payment Successful!                  │
│                                         │
│ Your subscription is now active.        │
│                                         │
│ [Go to Dashboard] [Chat with Coach]     │
└─────────────────────────────────────────┘
                  ↓
الخطوة 9: Dashboard (مشترك!)
┌─────────────────────────────────────────┐
│ client-dashboard.html                   │
│ • Welcome Sarah! 👋                     │
│ • Coach: Alex Turner ⭐ 4.9            │
│ • Package: Pro ($59/mo)                 │
│ • Today's Workout: Chest & Triceps      │
│ • [Start Workout]                       │
└─────────────────────────────────────────┘
                  ↓
الخطوة 10: التمرين
┌─────────────────────────────────────────┐
│ client-workouts.html                    │
│                                         │
│ Today: Chest & Triceps                  │
│ ☑ Bench Press 3x10                      │
│ ☑ Dumbbell Flyes 3x12                   │
│ ☐ Tricep Dips 3x15                      │
│                                         │
│ [Mark as Complete]                      │
└─────────────────────────────────────────┘
                  ↓
الخطوة 11: تسجيل التقدم
┌─────────────────────────────────────────┐
│ client-daily-log.html                   │
│                                         │
│ Log Your Progress:                      │
│ • Weight: 72.5 kg                       │
│ • Photo: [Upload]                       │
│ • Mood: 😊 Excellent                    │
│ • Energy: ⚡⚡⚡⚡⚡ (5/5)              │
│ • Notes: "Great workout! Felt strong."  │
│                                         │
│ [Save Log]                              │
└─────────────────────────────────────────┘
                  ↓
الخطوة 12: المدرب يشاهد
┌─────────────────────────────────────────┐
│ coach-clients.html (Alex's View)        │
│                                         │
│ Sarah Miller                            │
│ • Weight: 72.5 kg (↓ 0.5 kg)           │
│ • Mood: 😊 Excellent                    │
│ • Notes: "Great workout! Felt strong."  │
│                                         │
│ Rate Progress:                          │
│ ⭐⭐⭐⭐ (4/5)                          │
│ Feedback: "Excellent progress! Keep it  │
│            up! 💪"                      │
│                                         │
│ [Save Rating]                           │
└─────────────────────────────────────────┘
                  ↓
الخطوة 13: العميل يشاهد التقييم
┌─────────────────────────────────────────┐
│ client-daily-log.html (Sarah's View)    │
│                                         │
│ Recent Logs:                            │
│ • Today - 72.5 kg                       │
│   Coach Rating: ⭐⭐⭐⭐ (4/5)          │
│   Feedback: "Excellent progress!        │
│              Keep it up! 💪"            │
│                                         │
│ [Continue Training]                     │
└─────────────────────────────────────────┘
```

---

## 📊 خريطة الروابط الشاملة

```
                        index.html
                             |
        ┌────────────────────┼────────────────────┐
        |                    |                    |
   register.html        login.html           #sections
        |                    |
        └────────────────────┤
                             |
        ┌────────────────────┼────────────────────┐
        |                    |                    |
   admin-dashboard      coach-dashboard     client-dashboard
        |                    |                    |
        |                    |                    |
   [11 pages]           [7 pages]            [7 pages]
        |                    |                    |
        ├─ users             ├─ exercises         ├─ coaches
        ├─ coaches           ├─ plans             ├─ packages
        ├─ clients           ├─ packages          ├─ workouts
        ├─ equipment         ├─ diet-plans        ├─ progress
        ├─ exercises         ├─ clients           ├─ daily-log
        ├─ anatomy           ├─ feedback          ├─ payment
        ├─ muscles           └─ chat              └─ chat
        ├─ specialties
        ├─ payments
        └─ reports
                             |
        ┌────────────────────┼────────────────────┐
        |                    |                    |
    chat.html          notifications        profile.html
                            .html
                                                  |
                                            settings.html
```

---

## ✅ الخلاصة

**من أي صفحة تقدر توصل لـ:**
- ✅ الصفحة الرئيسية (Logo)
- ✅ Dashboard (Navbar)
- ✅ كل صفحات نفس الدور (Navbar)
- ✅ الصفحات المشتركة (Navbar)
- ✅ تسجيل الخروج (Logout)

**Flow الاشتراك: 13 خطوة من الزيارة للتقييم!**

**المشروع مرتبط 100%!** 🚀
