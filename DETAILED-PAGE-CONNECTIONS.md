# 🔗 دليل الروابط التفصيلي - كل صفحة بتوديك فين

## 📋 فهرس سريع

- [الصفحات العامة (3)](#الصفحات-العامة)
- [صفحات Admin (11)](#صفحات-admin)
- [صفحات Coach (7)](#صفحات-coach)
- [صفحات Client (7)](#صفحات-client)
- [الصفحات المشتركة (4)](#الصفحات-المشتركة)

---

## 🏠 الصفحات العامة

### **1. index.html**

**كيف توصل لها:**
- مباشرة عند فتح الموقع
- من أي صفحة → اضغط Logo "FitVerse"

**الروابط الموجودة فيها:**

| الرابط | الوجهة | الموقع |
|--------|--------|--------|
| Logo "FitVerse" | index.html | Navbar |
| Home | index.html | Navbar |
| Features | #features | Navbar |
| Anatomy | #anatomy | Navbar |
| Pricing | #pricing | Navbar |
| Login | login.html | Navbar |
| Get Started | register.html | Navbar |
| Start Free Trial | register.html | Hero Section |
| Learn More | #features | Hero Section |
| Start Training | register.html | Anatomy Section |
| Get Started (Starter) | register.html | Pricing Card 1 |
| Get Started (Pro) | register.html | Pricing Card 2 |
| Get Started (Elite) | register.html | Pricing Card 3 |
| Sign Up Now | register.html | CTA Section |

**الخلاصة:** 6 أزرار لـ register.html + 1 زر لـ login.html

---

### **2. register.html**

**كيف توصل لها:**
- من index.html → أي زر "Get Started"
- من login.html → "Don't have account? Sign Up"

**الروابط الموجودة فيها:**

| الرابط | الوجهة | الموقع |
|--------|--------|--------|
| Logo "FitVerse" | index.html | Header |
| Sign Up (Submit) | login.html | Form Button |
| Already have account? | login.html | Form Footer |

**الخلاصة:** كل الروابط تودي لـ index.html أو login.html

---

### **3. login.html**

**كيف توصل لها:**
- من index.html → زر "Login"
- من register.html → بعد التسجيل
- من أي Dashboard → "Logout"

**الروابط الموجودة فيها:**

| الرابط | الوجهة | الموقع |
|--------|--------|--------|
| Logo "FitVerse" | index.html | Header |
| Admin | admin-dashboard.html | Quick Demo |
| Coach | coach-dashboard.html | Quick Demo |
| Client | client-dashboard.html | Quick Demo |
| Sign Up | register.html | Form Footer |
| Forgot Password? | # | Form Footer |

**الخلاصة:** 3 Quick Demo Buttons + روابط للتسجيل

---

## 👨‍💼 صفحات Admin

### **Navbar موحد لكل صفحات Admin:**

| الرابط | الوجهة |
|--------|--------|
| Logo | index.html |
| Dashboard | admin-dashboard.html |
| Users | admin-users.html |
| Coaches | admin-coaches.html |
| Clients | admin-clients.html |
| System → Equipment | admin-equipment.html |
| System → Exercises | admin-exercises.html |
| System → Anatomy | admin-anatomy.html |
| System → Muscles | admin-muscles.html |
| System → Specialties | admin-specialties.html |
| Payments | admin-payments.html |
| Reports | admin-reports.html |
| 🔔 | notifications.html |
| Profile | profile.html |
| Settings | settings.html |
| Logout | login.html |

---

### **1. admin-dashboard.html**

**روابط إضافية:**
- Quick Action: Add User → admin-users.html
- Quick Action: Add Coach → admin-coaches.html
- Quick Action: View Payments → admin-payments.html
- Stats Cards → روابط لصفحات ذات صلة

---

### **2. admin-users.html**

**روابط إضافية:**
- زر Add User → Modal
- زر Edit → Modal
- زر Delete → Confirmation

---

### **3. admin-coaches.html**

**روابط إضافية:**
- زر Add Coach → Modal (1:1 with User)
- زر View Details → Modal
- زر Edit → Modal

---

### **4. admin-clients.html**

**روابط إضافية:**
- View Client Details → Modal
- View Progress → client-progress.html (يمكن)

---

### **5. admin-equipment.html**

**روابط إضافية:**
- زر Add Equipment → Modal
- زر Edit → Modal
- زر Delete → Confirmation

---

### **6. admin-exercises.html**

**روابط إضافية:**
- زر Add Exercise → Modal
- Link to Muscles → admin-muscles.html
- Link to Equipment → admin-equipment.html

---

### **7. admin-anatomy.html**

**روابط إضافية:**
- Interactive SVG → عرض تفاصيل
- Link to Muscles → admin-muscles.html

---

### **8. admin-muscles.html**

**روابط إضافية:**
- زر Add Muscle → Modal
- Link to Anatomy → admin-anatomy.html
- Link to Exercises → admin-exercises.html

---

### **9. admin-specialties.html**

**روابط إضافية:**
- زر Add Specialty → Modal
- زر Edit → Modal

---

### **10. admin-payments.html**

**روابط إضافية:**
- View Payment Details → Modal
- Filter by Date/Coach/Client
- Export Report → admin-reports.html

---

### **11. admin-reports.html**

**روابط إضافية:**
- View Charts → Interactive
- Export Data → Download
- Filter Options

---

## 💪 صفحات Coach

### **Navbar موحد لكل صفحات Coach:**

| الرابط | الوجهة |
|--------|--------|
| Logo | index.html |
| Dashboard | coach-dashboard.html |
| Exercises | coach-exercises.html |
| Plans | coach-plans.html |
| Packages | coach-packages.html |
| Diet Plans | coach-diet-plans.html |
| Clients | coach-clients.html |
| Feedback | coach-feedback.html |
| Chat | chat.html |
| 🔔 | notifications.html |
| Profile | profile.html |
| Settings | settings.html |
| Logout | login.html |

---

### **1. coach-dashboard.html**

**روابط إضافية:**
- Quick Action: Create Plan → coach-plans.html
- Quick Action: View Clients → coach-clients.html
- Quick Action: Manage Packages → coach-packages.html
- Stats Cards → روابط ذات صلة

---

### **2. coach-exercises.html**

**روابط إضافية:**
- Browse Exercise Library
- Filter by Muscle/Equipment
- View Exercise Details → Modal

---

### **3. coach-plans.html**

**روابط إضافية:**
- زر Create Plan → Modal
- Assign to Client → coach-clients.html
- زر Edit → Modal

---

### **4. coach-packages.html**

**روابط إضافية:**
- Edit Basic Package → Modal
- Edit Pro Package → Modal
- Edit Elite Package → Modal

---

### **5. coach-diet-plans.html**

**روابط إضافية:**
- زر Create Diet Plan → Modal
- Assign to Client → coach-clients.html
- زر Edit → Modal

---

### **6. coach-clients.html**

**روابط إضافية:**
- View Client Progress → Modal
- Rate Performance → Form
- Message Client → chat.html
- View Daily Logs

---

### **7. coach-feedback.html**

**روابط إضافية:**
- View Client Reviews
- Respond to Feedback → Form
- Filter by Rating

---

## 🏃 صفحات Client

### **Navbar موحد لكل صفحات Client:**

| الرابط | الوجهة |
|--------|--------|
| Logo | index.html |
| Dashboard | client-dashboard.html |
| Coaches | client-coaches.html |
| Packages | client-packages.html |
| Workouts | client-workouts.html |
| Progress | client-progress.html |
| Daily Log | client-daily-log.html |
| Chat | chat.html |
| 🔔 | notifications.html |
| Profile | profile.html |
| Settings | settings.html |
| Logout | login.html |

---

### **1. client-dashboard.html**

**روابط إضافية:**
- Today's Workout → client-workouts.html
- Browse Coaches → client-coaches.html
- Log Progress → client-daily-log.html
- Chat with Coach → chat.html
- View Progress → client-progress.html

---

### **2. client-coaches.html**

**روابط إضافية:**
- View Packages (على كل كارت مدرب) → Modal
- Select Package (في Modal) → client-payment.html
- Filter by Specialty
- Sort by Rating

**مثال:**
```
Coach Card: Alex Turner
  ↓ [View Packages]
Modal: 3 Packages (Basic $29, Pro $59, Elite $99)
  ↓ [Select Package: Pro]
client-payment.html?package=pro&coach=alex
```

---

### **3. client-packages.html**

**روابط إضافية:**
- View Current Package Details
- Upgrade Package → client-payment.html
- Downgrade Package → Confirmation

---

### **4. client-workouts.html**

**روابط إضافية:**
- View Exercise Details → Modal
- Mark as Complete → Checkbox
- Log Progress → client-daily-log.html
- View Video Tutorial → Modal/External

---

### **5. client-progress.html**

**روابط إضافية:**
- View Charts & Graphs
- Filter by Date Range
- Export Progress → Download
- Add Log → client-daily-log.html

---

### **6. client-daily-log.html**

**روابط إضافية:**
- Form: Log Weight, Photos, Mood, Notes
- View Coach Feedback
- View Rating History
- View Past Logs

---

### **7. client-payment.html**

**كيف توصل لها:**
- من client-coaches.html → Modal → Select Package

**الروابط الموجودة فيها:**

| الرابط | الوجهة | الموقع |
|--------|--------|--------|
| Logo | index.html | Header |
| Cancel | client-coaches.html | Button |
| Complete Purchase | Success Modal | Button |
| Go to Dashboard | client-dashboard.html | Success Modal |
| Chat with Coach | chat.html | Success Modal |

**Flow:**
```
client-payment.html
  ↓ [Complete Purchase]
Success Modal
  ↓ [Go to Dashboard]
client-dashboard.html ✅
```

---

## 🔗 الصفحات المشتركة

### **1. chat.html**

**كيف توصل لها:**
- من أي صفحة Coach → Navbar: Chat
- من أي صفحة Client → Navbar: Chat
- من coach-clients.html → Message Client
- من client-dashboard.html → Chat with Coach
- من client-payment.html → Success Modal

**الروابط الموجودة فيها:**
- Navbar حسب الدور (Admin/Coach/Client)
- Back to Dashboard
- View Profile (للطرف الآخر)

---

### **2. notifications.html**

**كيف توصل لها:**
- من أي صفحة → Navbar: 🔔

**الروابط الموجودة فيها:**
- Navbar حسب الدور
- روابط داخل كل إشعار (مثلاً: View Client → client-coaches.html)
- Mark as Read
- Delete Notification

---

### **3. profile.html**

**كيف توصل لها:**
- من أي صفحة → User Dropdown → Profile

**الروابط الموجودة فيها:**
- Navbar حسب الدور
- Edit Profile → Form
- Change Password → Form
- Upload Photo → Upload
- Settings → settings.html

---

### **4. settings.html**

**كيف توصل لها:**
- من أي صفحة → User Dropdown → Settings
- من profile.html → Settings Link

**الروابط الموجودة فيها:**
- Navbar حسب الدور
- Notification Settings → Form
- Privacy Settings → Form
- Language Settings → Dropdown
- Theme Settings → Toggle
- Profile → profile.html

---

## 🎯 الخلاصة السريعة

### **من أي صفحة تقدر توصل لـ:**

✅ **index.html** - اضغط Logo "FitVerse"
✅ **Dashboard** - اضغط "Dashboard" في Navbar
✅ **كل صفحات نفس الدور** - استخدم Navbar
✅ **Shared Pages** - chat, notifications, profile, settings
✅ **login.html** - اضغط "Logout"

### **الروابط الخاصة:**

✅ **index.html → register.html** (6 أزرار)
✅ **register.html → login.html** (بعد التسجيل)
✅ **login.html → Dashboards** (3 Quick Demo Buttons)
✅ **client-coaches.html → client-payment.html** (Select Package)
✅ **client-payment.html → client-dashboard.html** (بعد الدفع)

---

## 📊 إحصائيات الروابط

```
إجمالي الصفحات: 28 صفحة
  - Public: 3 صفحات
  - Admin: 11 صفحة
  - Coach: 7 صفحات
  - Client: 7 صفحات
  - Shared: 4 صفحات

إجمالي الروابط الرئيسية:
  - index.html: 13 رابط
  - Admin Navbar: 16 رابط
  - Coach Navbar: 13 رابط
  - Client Navbar: 12 رابط
```

---

**🎉 المشروع مرتبط 100% - من أي صفحة تقدر توصل لأي صفحة! 🎉**
