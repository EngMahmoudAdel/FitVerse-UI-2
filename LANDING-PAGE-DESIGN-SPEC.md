# 🎨 FitVerse Landing Page - Complete Design Specification

## 📐 Design System Reference
All components extend the existing FitVerse design system:
- **Colors**: Primary (#6366f1), Success (#10b981), Warning (#f59e0b), Danger (#ef4444)
- **Typography**: Inter font family (400, 500, 600, 700, 800)
- **Spacing**: 4px base unit (8px, 12px, 16px, 24px, 32px, 48px, 64px)
- **Border Radius**: 8px (cards), 16px (modals), 50% (avatars)
- **Shadows**: 0 4px 6px rgba(0,0,0,0.1) (default), 0 10px 25px rgba(0,0,0,0.15) (hover)

---

## 🖥️ Responsive Breakpoints
- **Desktop**: 1440px (primary design)
- **Tablet**: 768px - 1024px
- **Mobile**: 375px - 420px

---

## 📋 Section-by-Section Specifications

### 1️⃣ Hero Section
**Desktop (1440px):**
- Full-width background video (muted, loop) or parallax image
- Height: 100vh (min 600px)
- Content: Left-aligned, max-width 600px, padding-left 80px
- Headline: 64px, weight 800, line-height 1.1
- Subheadline: 20px, weight 400, line-height 1.6, opacity 0.9
- CTA spacing: 24px gap
- Trust bar: 48px margin-top, flex row with icons

**Tablet (768px):**
- Height: 80vh
- Headline: 48px
- Content padding: 40px
- CTAs stack on smaller tablets

**Mobile (375px):**
- Height: auto (min 500px)
- Headline: 36px
- Content: centered, padding 24px
- CTAs: full-width, stacked

**Animations:**
```
Headline: fade-in + slide-up, delay 0ms, duration 600ms, ease-out
Subheadline: fade-in + slide-up, delay 200ms, duration 600ms
CTA Primary: fade-in + slide-up, delay 400ms, duration 600ms
CTA Secondary: fade-in + slide-up, delay 500ms, duration 600ms
Trust bar: fade-in, delay 800ms, duration 400ms
```

**Data Mapping:**
- Stats from `dashboard_stats` table: total_clients, total_coaches, avg_satisfaction

---

### 2️⃣ Interactive Anatomy Section
**Layout:**
- Container: max-width 1200px, centered
- Two-column on desktop: SVG (60%) + Info panel (40%)
- Single column on mobile

**SVG Specifications:**
- Viewbox: 0 0 400 800 (portrait orientation)
- Each muscle = `<path>` with unique `id` matching `muscles.svg_region_id`
- Default state: fill #e5e7eb, stroke #9ca3af, stroke-width 1
- Hover state: fill #6366f1 (opacity 0.2), stroke #6366f1, stroke-width 2
- Active state: fill #6366f1 (opacity 0.3)

**Interactive States:**

**Desktop Hover:**
```css
.muscle-region:hover {
  fill: rgba(99, 102, 241, 0.2);
  stroke: #6366f1;
  stroke-width: 2;
  transition: all 240ms cubic-bezier(0.22, 0.9, 0.34, 1);
}
```

**Tooltip (Desktop):**
- Position: absolute, follows cursor with 12px offset
- Background: white, border-radius 8px, shadow
- Padding: 12px 16px
- Content:
  - Muscle name (16px, weight 600)
  - Muscle ID (12px, muted)
  - "View Exercises" link (14px, primary color)
- Animation: fade-in 180ms, translateY(-8px)

**Modal (Click/Tap):**
- Width: 600px (desktop), 90vw (mobile)
- Border-radius: 16px
- Header: muscle name + close button
- Body:
  - Muscle description (from `muscles.primary_function`)
  - Exercise grid (3 cards from `exercises` where `target_muscles` includes muscle_id)
  - Each exercise card: thumbnail, name, difficulty badge
- Animation: scale(0.98) → scale(1) + fade, 300ms

**Mobile Interaction:**
- First tap: show tooltip (sticky)
- Second tap: open modal
- First-time overlay: "Tap any muscle to explore" (dismissible)

**Keyboard Accessibility:**
```html
<path id="chest-pectoralis" 
      tabindex="0" 
      role="button"
      aria-label="Pectoralis Major - View exercises"
      data-muscle-id="1">
</path>
```

**Data Mapping:**
```javascript
// muscles table
{
  muscle_id: 1,
  muscle_name: "Pectoralis Major",
  svg_region_id: "chest-pectoralis",
  primary_function: "Arm adduction and internal rotation",
  related_exercise_ids: [12, 45, 78]
}

// exercises table
{
  exercise_id: 12,
  exercise_name: "Bench Press",
  image_url: "/exercises/bench-press.gif",
  target_muscles: [1, 5, 8],
  difficulty: "intermediate",
  equipment: "barbell"
}
```

---

### 3️⃣ Featured Exercises Section
**Grid Layout:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 24px

**Exercise Card:**
- Aspect ratio: 4:3 for thumbnail
- Border-radius: 12px
- Padding: 0 (image full-width), 16px (content)
- Shadow: default on rest, elevated on hover

**Card Structure:**
```html
<div class="exercise-card">
  <img src="{{image_url}}" loading="lazy" alt="{{exercise_name}}">
  <div class="card-content">
    <h3>{{exercise_name}}</h3>
    <div class="tags">
      <span class="badge">{{target_muscle}}</span>
      <span class="badge difficulty-{{difficulty}}">{{difficulty}}</span>
    </div>
    <button class="btn-primary-custom">Try This Exercise</button>
  </div>
</div>
```

**Hover Effect:**
```css
.exercise-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transition: all 240ms cubic-bezier(0.22, 0.9, 0.34, 1);
}
```

**Data Mapping:**
```sql
SELECT e.*, m.muscle_name 
FROM exercises e
JOIN muscles m ON e.target_muscles @> ARRAY[m.muscle_id]
WHERE e.is_featured = true
LIMIT 6
```

---

### 4️⃣ Transformation Gallery
**Layout:**
- Carousel with 3 slides visible (desktop), 1 (mobile)
- Autoplay: 5000ms, pause on hover
- Navigation: prev/next arrows + dots

**Before/After Slider:**
- Container: aspect-ratio 16:9
- Slider handle: draggable divider
- Labels: "Before" (left), "After" (right)

**Implementation:**
```html
<div class="transformation-slide">
  <div class="image-compare">
    <img src="{{before_image_url}}" class="before">
    <img src="{{after_image_url}}" class="after">
    <input type="range" min="0" max="100" value="50" class="slider">
  </div>
  <div class="caption">
    <p class="client-name">{{client_name}}</p>
    <p class="coach">Coach: {{coach_name}}</p>
    <p class="quote">"{{notes}}"</p>
  </div>
</div>
```

**Slider Interaction:**
```javascript
// twentytwenty.js or custom
const slider = document.querySelector('.slider');
slider.addEventListener('input', (e) => {
  const value = e.target.value;
  afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});
```

**Data Mapping:**
```javascript
// transformations table
{
  transformation_id: 1,
  before_image_url: "/transformations/client1-before.jpg",
  after_image_url: "/transformations/client1-after.jpg",
  client_name: "Sarah M.",
  coach_id: 5,
  notes: "Lost 25kg in 6 months with Coach Alex"
}
```

---

### 5️⃣ Coaches & Packages Section
**Grid:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

**Coach Card:**
```html
<div class="coach-card">
  <img src="{{profile_image_url}}" class="coach-avatar">
  <h3>{{name}}</h3>
  <div class="specialties">
    <span class="badge">{{specialty}}</span>
  </div>
  <div class="rating">
    <span class="stars">★★★★★</span>
    <span>{{rating}}</span>
  </div>
  <p class="bio">{{bio}}</p>
  <div class="stats">
    <span>{{client_count}} clients</span>
    <span>{{years_experience}} years</span>
  </div>
  <button class="btn-primary-custom" data-coach-id="{{coach_id}}">
    View Packages
  </button>
</div>
```

**Packages Modal:**
- Triggered by "View Packages" button
- Width: 800px (desktop), 95vw (mobile)
- Content: 3 package tiers side-by-side

**Package Card in Modal:**
```html
<div class="package-card">
  <h4>{{title}}</h4>
  <div class="price">${{price}}/mo</div>
  <p>{{description}}</p>
  <ul class="features">
    <li v-for="feature in features">✓ {{feature}}</li>
  </ul>
  <button class="btn-primary-custom">Subscribe Now</button>
</div>
```

**Data Mapping:**
```sql
-- coaches table
SELECT c.*, 
       COUNT(cl.client_id) as client_count,
       AVG(f.rating) as avg_rating
FROM coaches c
LEFT JOIN clients cl ON c.coach_id = cl.coach_id
LEFT JOIN feedback f ON c.coach_id = f.coach_id
GROUP BY c.coach_id

-- packages table
SELECT * FROM packages 
WHERE coach_id = ? 
ORDER BY price ASC
```

---

### 6️⃣ Testimonials Section
**Carousel:**
- Desktop: 3 testimonials visible
- Tablet: 2 visible
- Mobile: 1 visible
- Autoplay: 5000ms

**Testimonial Card:**
```html
<div class="testimonial-card">
  <div class="rating">★★★★★</div>
  <p class="text">"{{text}}"</p>
  <div class="client">
    <img src="{{client_image}}" alt="{{client_name}}">
    <div>
      <p class="name">{{client_name}}</p>
      <p class="role">FitVerse Client</p>
    </div>
  </div>
</div>
```

**Data Mapping:**
```javascript
// testimonials table
{
  testimonial_id: 1,
  client_name: "John D.",
  text: "Best fitness platform I've ever used!",
  rating: 5,
  client_image: "/testimonials/john-d.jpg"
}
```

---

### 7️⃣ Final CTA Section
**Layout:**
- Full-width background (gradient or image)
- Centered content, max-width 800px
- Headline: 48px, weight 700
- Subtext: 20px, weight 400
- CTAs: side-by-side (desktop), stacked (mobile)

**FAQ Accordion:**
```html
<div class="faq-accordion">
  <div class="faq-item">
    <button class="faq-question">
      Can I cancel anytime?
      <i class="bi bi-chevron-down"></i>
    </button>
    <div class="faq-answer">
      Yes, you can cancel your subscription at any time...
    </div>
  </div>
</div>
```

---

## 🎬 Animation Specifications

### Micro-interactions
```css
/* Hover Lift */
.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transition: all 240ms cubic-bezier(0.22, 0.9, 0.34, 1);
}

/* Tooltip Fade */
.tooltip {
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 180ms, transform 180ms;
}
.tooltip.show {
  opacity: 1;
  transform: translateY(0);
}

/* Modal Entrance */
.modal {
  opacity: 0;
  transform: scale(0.98);
  transition: all 300ms cubic-bezier(0.22, 0.9, 0.34, 1);
}
.modal.open {
  opacity: 1;
  transform: scale(1);
}

/* Button Ripple */
.btn-ripple {
  position: relative;
  overflow: hidden;
}
.btn-ripple::after {
  content: '';
  position: absolute;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms ease-out;
}
@keyframes ripple {
  to { transform: scale(4); opacity: 0; }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ♿ Accessibility Requirements

### Keyboard Navigation
- All interactive elements: `tabindex="0"`
- Focus visible: 2px solid #6366f1 outline
- Skip links: "Skip to main content"

### ARIA Labels
```html
<!-- Anatomy SVG -->
<svg role="img" aria-label="Interactive human anatomy">
  <path role="button" 
        aria-label="Pectoralis Major - Click to view exercises"
        tabindex="0">
  </path>
</svg>

<!-- Modal -->
<div role="dialog" 
     aria-labelledby="modal-title" 
     aria-modal="true">
</div>

<!-- Carousel -->
<div role="region" 
     aria-label="Transformation gallery"
     aria-live="polite">
</div>
```

### Color Contrast
- All text: minimum 4.5:1 (AA)
- Large text (18px+): minimum 3:1
- Interactive elements: 3:1

---

## 🌍 RTL / Arabic Support

### Layout Adjustments
```css
[dir="rtl"] .hero-content {
  padding-right: 80px;
  padding-left: 0;
  text-align: right;
}

[dir="rtl"] .tooltip {
  transform: translateX(12px); /* instead of -12px */
}

[dir="rtl"] .carousel-nav {
  flex-direction: row-reverse;
}
```

### Text Expansion
- Allow 30% more space for Arabic text
- Use `white-space: normal` for all text containers
- Test with longest translations

---

## 📦 Suggested Libraries

### Core
- **Tippy.js** (v6.3+): Accessible tooltips
- **Swiper.js** (v8+): Carousels and sliders
- **TwentyTwenty** or **img-comparison-slider**: Before/after
- **AOS** (Animate On Scroll): Scroll animations

### Optional
- **GSAP**: Advanced animations
- **Lottie**: JSON animations
- **Intersection Observer API**: Lazy loading

---

## 🚀 Performance Optimization

### Images
```html
<!-- Responsive images -->
<img src="image-800.jpg"
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     loading="lazy"
     alt="Description">

<!-- WebP with fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

### Lazy Loading
```javascript
// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### Video Optimization
```html
<video autoplay muted loop playsinline 
       poster="fallback.jpg">
  <source src="hero-video.webm" type="video/webm">
  <source src="hero-video.mp4" type="video/mp4">
</video>
```

---

## 📊 Database Schema Reference

```sql
-- muscles table
CREATE TABLE muscles (
  muscle_id SERIAL PRIMARY KEY,
  muscle_name VARCHAR(100) NOT NULL,
  svg_region_id VARCHAR(50) UNIQUE,
  primary_function TEXT,
  body_part_id INT REFERENCES body_parts(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- exercises table
CREATE TABLE exercises (
  exercise_id SERIAL PRIMARY KEY,
  exercise_name VARCHAR(150) NOT NULL,
  image_url VARCHAR(255),
  gif_url VARCHAR(255),
  target_muscles INT[] DEFAULT '{}',
  difficulty VARCHAR(20),
  duration INT,
  equipment_id INT REFERENCES equipment(id),
  is_featured BOOLEAN DEFAULT false
);

-- coaches table
CREATE TABLE coaches (
  coach_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) UNIQUE,
  name VARCHAR(100),
  specialty VARCHAR(100),
  rating DECIMAL(2,1),
  profile_image_url VARCHAR(255),
  bio TEXT,
  years_experience INT,
  client_count INT DEFAULT 0
);

-- packages table
CREATE TABLE packages (
  package_id SERIAL PRIMARY KEY,
  coach_id INT REFERENCES coaches(coach_id),
  title VARCHAR(100),
  description TEXT,
  price DECIMAL(10,2),
  features JSONB,
  tier INT CHECK (tier IN (1,2,3))
);

-- transformations table
CREATE TABLE transformations (
  transformation_id SERIAL PRIMARY KEY,
  before_image_url VARCHAR(255),
  after_image_url VARCHAR(255),
  client_name VARCHAR(100),
  coach_id INT REFERENCES coaches(coach_id),
  notes TEXT,
  is_featured BOOLEAN DEFAULT false
);

-- testimonials table
CREATE TABLE testimonials (
  testimonial_id SERIAL PRIMARY KEY,
  client_name VARCHAR(100),
  text TEXT,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  client_image VARCHAR(255),
  is_featured BOOLEAN DEFAULT false
);
```

---

## 🎨 Component Export Checklist

### SVG Assets
- [ ] anatomy-front.svg (optimized, < 50KB)
- [ ] anatomy-back.svg (optimized, < 50KB)
- [ ] icons/muscle-icon.svg
- [ ] icons/exercise-icon.svg
- [ ] icons/coach-icon.svg

### Image Placeholders
- [ ] hero-background.jpg (1920x1080)
- [ ] exercise-placeholder.jpg (800x600)
- [ ] transformation-before.jpg (800x600)
- [ ] transformation-after.jpg (800x600)
- [ ] coach-avatar.jpg (400x400)
- [ ] testimonial-avatar.jpg (200x200)

### Interaction States
- [ ] Default state
- [ ] Hover state
- [ ] Active/Focus state
- [ ] Disabled state
- [ ] Loading state

---

## ✅ Developer Handoff Checklist

- [ ] All frames labeled and organized by section
- [ ] Responsive breakpoints documented
- [ ] Animation specs with durations and easing
- [ ] Data mappings to database tables
- [ ] Accessibility notes (ARIA, keyboard, contrast)
- [ ] RTL/Arabic layout considerations
- [ ] Performance optimization notes
- [ ] Suggested libraries list
- [ ] SVG assets exported
- [ ] Image specifications documented
- [ ] Interaction prototypes functional
- [ ] Component variants created

---

**Status: Design specification complete. Ready for implementation.**
