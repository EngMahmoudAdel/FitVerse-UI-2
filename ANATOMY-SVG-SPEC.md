# 🫀 Interactive Anatomy SVG - Technical Specification

## SVG Structure

### File: anatomy-front.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 400 800" 
     role="img" 
     aria-label="Interactive human anatomy - front view">
  
  <!-- Base body outline (non-interactive) -->
  <g id="body-outline" fill="none" stroke="#cbd5e1" stroke-width="2">
    <path d="M200,50 ... Z"/>
  </g>
  
  <!-- Interactive muscle regions -->
  <g id="muscles" class="interactive-muscles">
    
    <!-- Chest - Pectoralis Major -->
    <path id="chest-pectoralis" 
          class="muscle-region"
          data-muscle-id="1"
          data-muscle-name="Pectoralis Major"
          data-function="Arm adduction, internal rotation"
          tabindex="0"
          role="button"
          aria-label="Pectoralis Major - Click to view exercises"
          d="M180,120 C170,130 160,150 160,170 L160,200 C160,210 170,220 180,220 L220,220 C230,220 240,210 240,200 L240,170 C240,150 230,130 220,120 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <!-- Abs - Rectus Abdominis -->
    <path id="abs-rectus"
          class="muscle-region"
          data-muscle-id="2"
          data-muscle-name="Rectus Abdominis"
          data-function="Trunk flexion"
          tabindex="0"
          role="button"
          aria-label="Rectus Abdominis - Click to view exercises"
          d="M170,240 L170,350 L230,350 L230,240 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <!-- Biceps -->
    <path id="arms-biceps-left"
          class="muscle-region"
          data-muscle-id="3"
          data-muscle-name="Biceps Brachii"
          data-function="Elbow flexion"
          tabindex="0"
          role="button"
          aria-label="Biceps Brachii - Click to view exercises"
          d="M120,180 C115,190 110,210 110,230 L110,280 L130,280 L130,230 C130,210 125,190 120,180 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <path id="arms-biceps-right"
          class="muscle-region"
          data-muscle-id="3"
          data-muscle-name="Biceps Brachii"
          data-function="Elbow flexion"
          tabindex="0"
          role="button"
          aria-label="Biceps Brachii - Click to view exercises"
          d="M280,180 C285,190 290,210 290,230 L290,280 L270,280 L270,230 C270,210 275,190 280,180 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <!-- Quadriceps -->
    <path id="legs-quadriceps-left"
          class="muscle-region"
          data-muscle-id="4"
          data-muscle-name="Quadriceps Femoris"
          data-function="Knee extension"
          tabindex="0"
          role="button"
          aria-label="Quadriceps Femoris - Click to view exercises"
          d="M150,400 L150,550 L180,550 L180,400 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <path id="legs-quadriceps-right"
          class="muscle-region"
          data-muscle-id="4"
          data-muscle-name="Quadriceps Femoris"
          data-function="Knee extension"
          tabindex="0"
          role="button"
          aria-label="Quadriceps Femoris - Click to view exercises"
          d="M220,400 L220,550 L250,550 L250,400 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <!-- Add more muscles: Deltoids, Obliques, Calves, etc. -->
    
  </g>
</svg>
```

### File: anatomy-back.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 400 800" 
     role="img" 
     aria-label="Interactive human anatomy - back view">
  
  <!-- Base body outline -->
  <g id="body-outline" fill="none" stroke="#cbd5e1" stroke-width="2">
    <path d="M200,50 ... Z"/>
  </g>
  
  <!-- Interactive muscle regions -->
  <g id="muscles" class="interactive-muscles">
    
    <!-- Trapezius -->
    <path id="back-trapezius"
          class="muscle-region"
          data-muscle-id="5"
          data-muscle-name="Trapezius"
          data-function="Shoulder elevation, scapular retraction"
          tabindex="0"
          role="button"
          aria-label="Trapezius - Click to view exercises"
          d="M150,80 L200,60 L250,80 L250,150 L200,140 L150,150 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <!-- Latissimus Dorsi -->
    <path id="back-lats"
          class="muscle-region"
          data-muscle-id="6"
          data-muscle-name="Latissimus Dorsi"
          data-function="Shoulder adduction, extension"
          tabindex="0"
          role="button"
          aria-label="Latissimus Dorsi - Click to view exercises"
          d="M140,160 L140,300 L180,320 L200,310 L220,320 L260,300 L260,160 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <!-- Triceps -->
    <path id="arms-triceps-left"
          class="muscle-region"
          data-muscle-id="7"
          data-muscle-name="Triceps Brachii"
          data-function="Elbow extension"
          tabindex="0"
          role="button"
          aria-label="Triceps Brachii - Click to view exercises"
          d="M110,180 L110,280 L130,280 L130,180 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <!-- Glutes -->
    <path id="legs-glutes"
          class="muscle-region"
          data-muscle-id="8"
          data-muscle-name="Gluteus Maximus"
          data-function="Hip extension"
          tabindex="0"
          role="button"
          aria-label="Gluteus Maximus - Click to view exercises"
          d="M150,340 L150,400 L250,400 L250,340 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <!-- Hamstrings -->
    <path id="legs-hamstrings-left"
          class="muscle-region"
          data-muscle-id="9"
          data-muscle-name="Hamstrings"
          data-function="Knee flexion, hip extension"
          tabindex="0"
          role="button"
          aria-label="Hamstrings - Click to view exercises"
          d="M150,410 L150,550 L180,550 L180,410 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          stroke-width="1"/>
    
    <!-- Add more muscles: Erector Spinae, Calves, etc. -->
    
  </g>
</svg>
```

## CSS Styling

```css
/* anatomy.css */

.muscle-region {
  cursor: pointer;
  transition: all 240ms cubic-bezier(0.22, 0.9, 0.34, 1);
}

.muscle-region:hover {
  fill: rgba(99, 102, 241, 0.2);
  stroke: #6366f1;
  stroke-width: 2;
}

.muscle-region:focus {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
  fill: rgba(99, 102, 241, 0.15);
}

.muscle-region.active {
  fill: rgba(99, 102, 241, 0.3);
  stroke: #6366f1;
  stroke-width: 2;
}

/* Tooltip */
.muscle-tooltip {
  position: absolute;
  background: white;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  pointer-events: none;
  z-index: 1000;
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 180ms, transform 180ms;
}

.muscle-tooltip.show {
  opacity: 1;
  transform: translateY(0);
}

.muscle-tooltip h4 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #1e293b;
}

.muscle-tooltip p {
  font-size: 12px;
  margin: 0 0 8px 0;
  color: #64748b;
}

.muscle-tooltip a {
  font-size: 14px;
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
}

.muscle-tooltip a:hover {
  text-decoration: underline;
}
```

## JavaScript Implementation

```javascript
// anatomy.js

class AnatomyViewer {
  constructor(svgElement) {
    this.svg = svgElement;
    this.tooltip = this.createTooltip();
    this.modal = document.getElementById('muscleModal');
    this.currentView = 'front'; // 'front' or 'back'
    this.init();
  }
  
  init() {
    const muscles = this.svg.querySelectorAll('.muscle-region');
    
    muscles.forEach(muscle => {
      // Mouse events
      muscle.addEventListener('mouseenter', (e) => this.showTooltip(e));
      muscle.addEventListener('mouseleave', () => this.hideTooltip());
      muscle.addEventListener('mousemove', (e) => this.moveTooltip(e));
      muscle.addEventListener('click', (e) => this.openMuscleModal(e));
      
      // Keyboard events
      muscle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openMuscleModal(e);
        }
      });
      
      // Touch events (mobile)
      let tapCount = 0;
      let tapTimer;
      
      muscle.addEventListener('touchstart', (e) => {
        tapCount++;
        
        if (tapCount === 1) {
          // First tap: show tooltip
          this.showTooltip(e);
          tapTimer = setTimeout(() => {
            tapCount = 0;
          }, 300);
        } else if (tapCount === 2) {
          // Second tap: open modal
          clearTimeout(tapTimer);
          tapCount = 0;
          this.openMuscleModal(e);
        }
      });
    });
  }
  
  createTooltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'muscle-tooltip';
    tooltip.setAttribute('role', 'tooltip');
    document.body.appendChild(tooltip);
    return tooltip;
  }
  
  showTooltip(event) {
    const muscle = event.currentTarget;
    const muscleName = muscle.dataset.muscleName;
    const muscleId = muscle.dataset.muscleId;
    const muscleFunction = muscle.dataset.function;
    
    this.tooltip.innerHTML = `
      <h4>${muscleName}</h4>
      <p class="text-muted mb-0">ID: ${muscleId}</p>
      <p class="mb-2">${muscleFunction}</p>
      <a href="#" onclick="return false;">View Exercises →</a>
    `;
    
    this.tooltip.classList.add('show');
    this.moveTooltip(event);
  }
  
  hideTooltip() {
    this.tooltip.classList.remove('show');
  }
  
  moveTooltip(event) {
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;
    
    this.tooltip.style.left = (x + 12) + 'px';
    this.tooltip.style.top = (y - 12) + 'px';
  }
  
  async openMuscleModal(event) {
    const muscle = event.currentTarget;
    const muscleId = muscle.dataset.muscleId;
    const muscleName = muscle.dataset.muscleName;
    
    this.hideTooltip();
    
    // Fetch related exercises
    const exercises = await this.fetchExercises(muscleId);
    
    // Populate modal
    document.getElementById('modalMuscleTitle').textContent = muscleName;
    document.getElementById('modalMuscleFunction').textContent = 
      muscle.dataset.function;
    
    const exerciseGrid = document.getElementById('modalExerciseGrid');
    exerciseGrid.innerHTML = exercises.map(ex => `
      <div class="col-md-4">
        <div class="exercise-card">
          <img src="${ex.image_url}" alt="${ex.exercise_name}" loading="lazy">
          <h5>${ex.exercise_name}</h5>
          <span class="badge badge-${ex.difficulty}">${ex.difficulty}</span>
        </div>
      </div>
    `).join('');
    
    // Open modal
    const bsModal = new bootstrap.Modal(this.modal);
    bsModal.show();
  }
  
  async fetchExercises(muscleId) {
    // Replace with actual API call
    const response = await fetch(`/api/exercises?muscle_id=${muscleId}&limit=6`);
    return await response.json();
  }
  
  switchView(view) {
    this.currentView = view;
    // Load appropriate SVG
    const svgContainer = document.getElementById('anatomySvgContainer');
    svgContainer.innerHTML = ''; // Clear
    
    const svgPath = view === 'front' ? 
      '/assets/anatomy-front.svg' : 
      '/assets/anatomy-back.svg';
    
    fetch(svgPath)
      .then(res => res.text())
      .then(svgContent => {
        svgContainer.innerHTML = svgContent;
        this.svg = svgContainer.querySelector('svg');
        this.init(); // Re-initialize listeners
      });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const svg = document.querySelector('#anatomySvgContainer svg');
  if (svg) {
    new AnatomyViewer(svg);
  }
  
  // View toggle buttons
  document.getElementById('btnFrontView')?.addEventListener('click', () => {
    anatomyViewer.switchView('front');
  });
  
  document.getElementById('btnBackView')?.addEventListener('click', () => {
    anatomyViewer.switchView('back');
  });
});
```

## HTML Integration

```html
<!-- Anatomy Section -->
<section id="anatomy" class="py-5">
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="section-title">Explore Human Anatomy</h2>
      <p class="section-subtitle">Click on any muscle to discover targeted exercises</p>
    </div>
    
    <div class="row align-items-center">
      <!-- SVG Container -->
      <div class="col-lg-7">
        <div class="anatomy-viewer-container">
          <!-- View Toggle -->
          <div class="view-toggle mb-3 text-center">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-primary-custom active" id="btnFrontView">
                Front View
              </button>
              <button type="button" class="btn btn-outline-custom" id="btnBackView">
                Back View
              </button>
            </div>
          </div>
          
          <!-- SVG -->
          <div id="anatomySvgContainer" class="text-center">
            <!-- SVG will be loaded here -->
            <object data="/assets/anatomy-front.svg" type="image/svg+xml" 
                    style="max-width: 100%; height: auto;">
            </object>
          </div>
          
          <!-- Mobile hint (first-time only) -->
          <div class="mobile-hint d-md-none text-center mt-3" id="mobileHint">
            <small class="text-muted">
              <i class="bi bi-hand-index"></i> Tap any muscle to explore
            </small>
          </div>
        </div>
      </div>
      
      <!-- Info Panel -->
      <div class="col-lg-5">
        <div class="card-custom p-4">
          <h3 class="fw-bold mb-3">Interactive Anatomy Guide</h3>
          <p class="text-muted mb-4">
            Explore the human muscular system and discover exercises 
            tailored to each muscle group.
          </p>
          
          <div class="feature-list">
            <div class="d-flex align-items-start mb-3">
              <i class="bi bi-check-circle-fill text-success me-3 fs-5"></i>
              <div>
                <h6 class="fw-semibold mb-1">24 Major Muscle Groups</h6>
                <small class="text-muted">Comprehensive coverage of all major muscles</small>
              </div>
            </div>
            
            <div class="d-flex align-items-start mb-3">
              <i class="bi bi-check-circle-fill text-success me-3 fs-5"></i>
              <div>
                <h6 class="fw-semibold mb-1">328+ Targeted Exercises</h6>
                <small class="text-muted">Exercises mapped to specific muscle groups</small>
              </div>
            </div>
            
            <div class="d-flex align-items-start">
              <i class="bi bi-check-circle-fill text-success me-3 fs-5"></i>
              <div>
                <h6 class="fw-semibold mb-1">Expert Guidance</h6>
                <small class="text-muted">Proper form and technique for each exercise</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Muscle Detail Modal -->
<div class="modal fade" id="muscleModal" tabindex="-1" aria-labelledby="muscleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content" style="border-radius: 16px; border: none;">
      <div class="modal-header" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; border: none;">
        <h5 class="modal-title fw-bold" id="modalMuscleTitle">Muscle Name</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body p-4">
        <p id="modalMuscleFunction" class="text-muted mb-4"></p>
        
        <h6 class="fw-bold mb-3">Recommended Exercises</h6>
        <div class="row g-3" id="modalExerciseGrid">
          <!-- Exercises will be populated here -->
        </div>
      </div>
    </div>
  </div>
</div>
```

## Database Queries

```sql
-- Get muscle with related exercises
SELECT 
  m.muscle_id,
  m.muscle_name,
  m.svg_region_id,
  m.primary_function,
  json_agg(
    json_build_object(
      'exercise_id', e.exercise_id,
      'exercise_name', e.exercise_name,
      'image_url', e.image_url,
      'difficulty', e.difficulty
    )
  ) as exercises
FROM muscles m
LEFT JOIN exercises e ON m.muscle_id = ANY(e.target_muscles)
WHERE m.muscle_id = $1
GROUP BY m.muscle_id;
```

## Optimization

- SVG file size: < 50KB each
- Use `<use>` for repeated elements
- Inline critical SVG in HTML
- Lazy load modal content
- Cache muscle data in localStorage

## Accessibility Testing

```javascript
// Test keyboard navigation
document.querySelectorAll('.muscle-region').forEach((muscle, index) => {
  console.log(`Muscle ${index}: tabindex=${muscle.tabIndex}, aria-label=${muscle.getAttribute('aria-label')}`);
});

// Test screen reader
// Use NVDA or JAWS to verify:
// - Each muscle is announced correctly
// - Tooltips are read
// - Modal content is accessible
```

---

**Status**: SVG specification complete. Ready for asset creation.
