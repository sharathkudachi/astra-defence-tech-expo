# Design: Immersive Scroll Experience

## System Architecture

### Component Hierarchy
```
App
├── ScrollProgressProvider (new)
│   ├── Navbar (enhanced)
│   ├── PageTransitionWrapper (new)
│   │   ├── MainLanding
│   │   │   ├── Home (enhanced)
│   │   │   ├── About (enhanced)
│   │   │   ├── Event (enhanced)
│   │   │   ├── Schedule (enhanced)
│   │   │   ├── Guests (enhanced)
│   │   │   ├── Prizes (enhanced)
│   │   │   ├── Sponsorship (enhanced)
│   │   │   └── Contact (enhanced)
│   │   └── Register (enhanced)
│   └── Footer
```

## High-Level Design

### HLD-1: Scroll Progress System

**Purpose**: Track and provide scroll progress throughout the landing page for coordinated animations.

**Components**:
- `ScrollProgressContext`: React context for sharing scroll state
- `useScrollProgress`: Custom hook for accessing scroll data
- `ScrollProgressProvider`: Provider component wrapping the app

**Data Flow**:
```
User Scroll → Scroll Event Listener → Progress Calculation → Context Update → Component Re-render
```

**State Shape**:
```typescript
interface ScrollProgress {
  progress: number;        // 0-1, overall scroll progress
  activeSection: string;   // Current section ID
  sectionProgress: number; // 0-1, progress within current section
  direction: 'up' | 'down' | null;
  velocity: number;        // Scroll speed
}
```

### HLD-2: Animation System

**Purpose**: Centralized animation configuration and reusable animation components.

**Animation Variants**:
```javascript
const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }
};
```

**Reusable Components**:
- `ScrollReveal`: Wrapper for viewport-triggered animations
- `ParallaxLayer`: Background element with parallax effect
- `StaggerContainer`: Container for staggered child animations
- `AnimatedSection`: Section wrapper with built-in animations

### HLD-3: Page Transition System

**Purpose**: Smooth transitions between routes with consistent animation language.

**Transition Configuration**:
```javascript
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: 'easeInOut' }
};
```

**Implementation**:
- Wrap route content in `PageTransitionWrapper`
- Use `AnimatePresence` with `mode="wait"`
- Shared layout animations for navigation elements

### HLD-4: Parallax System

**Purpose**: Add depth to hero and section backgrounds without performance impact.

**Layers**:
1. **Hero Background**: Hex-grid overlay with slow parallax (0.3x scroll speed)
2. **Hero Content**: No parallax (stays fixed in viewport)
3. **Section Backgrounds**: Optional subtle parallax (0.1x scroll speed)

**Performance Optimization**:
- Use `transform: translate3d()` for GPU acceleration
- Use `will-change: transform` sparingly
- Disable parallax on mobile devices
- Use `requestAnimationFrame` for smooth updates

## Low-Level Design

### LLD-1: ScrollProgressProvider Component

**File**: `src/components/animation/ScrollProgressProvider.jsx`

```jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ScrollProgressContext = createContext(null);

export const useScrollProgress = () => {
  const context = useContext(ScrollProgressContext);
  if (!context) {
    throw new Error('useScrollProgress must be used within ScrollProgressProvider');
  }
  return context;
};

export const ScrollProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [sectionProgress, setSectionProgress] = useState(0);
  const [direction, setDirection] = useState(null);
  const [velocity, setVelocity] = useState(0);

  // Implementation details...
  
  return (
    <ScrollProgressContext.Provider value={{
      progress,
      activeSection,
      sectionProgress,
      direction,
      velocity
    }}>
      {children}
    </ScrollProgressContext.Provider>
  );
};
```

### LLD-2: ScrollReveal Component

**File**: `src/components/animation/ScrollReveal.jsx`

```jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({
  children,
  variant = 'slideUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  once = true,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
    margin: '-50px'
  });

  const variants = {
    hidden: getHiddenState(variant),
    visible: {
      ...getVisibleState(variant),
      transition: { duration, delay, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Helper functions for variant states
const getHiddenState = (variant) => {
  switch (variant) {
    case 'fadeIn': return { opacity: 0 };
    case 'slideUp': return { opacity: 0, y: 40 };
    case 'slideInLeft': return { opacity: 0, x: -40 };
    case 'slideInRight': return { opacity: 0, x: 40 };
    case 'scaleIn': return { opacity: 0, scale: 0.95 };
    default: return { opacity: 0, y: 40 };
  }
};

const getVisibleState = (variant) => {
  switch (variant) {
    case 'fadeIn': return { opacity: 1 };
    case 'slideUp': return { opacity: 1, y: 0 };
    case 'slideInLeft': return { opacity: 1, x: 0 };
    case 'slideInRight': return { opacity: 1, x: 0 };
    case 'scaleIn': return { opacity: 1, scale: 1 };
    default: return { opacity: 1, y: 0 };
  }
};

export default ScrollReveal;
```

### LLD-3: ParallaxLayer Component

**File**: `src/components/animation/ParallaxLayer.jsx`

```jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxLayer = ({
  children,
  speed = 0.5,
  className = '',
  disabledOnMobile = true
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `${speed * 100}%`]
  );

  // Check if mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldParallax = !disabledOnMobile || !isMobile;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={shouldParallax ? { y } : {}}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxLayer;
```

### LLD-4: AnimatedSection Component

**File**: `src/components/animation/AnimatedSection.jsx`

```jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({
  children,
  id,
  className = '',
  animation = 'fadeSlide',
  stagger = false,
  staggerDelay = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    margin: '-100px 0px'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: stagger ? {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      } : {}
    }
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
```

### LLD-5: PageTransitionWrapper Component

**File**: `src/components/animation/PageTransitionWrapper.jsx`

```jsx
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

const PageTransitionWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
```

### LLD-6: Animation Configuration File

**File**: `src/utils/animations.js`

```javascript
// Centralized animation configuration
export const ANIMATION_CONFIG = {
  // Timing
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8
  },
  
  // Easing functions
  ease: {
    smooth: [0.25, 0.1, 0.25, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    snappy: [0.6, 0.01, 0.05, 0.9]
  },
  
  // Viewport thresholds
  threshold: {
    conservative: 0.3,
    normal: 0.2,
    aggressive: 0.1
  },
  
  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15
  },
  
  // Parallax speeds
  parallax: {
    subtle: 0.1,
    normal: 0.3,
    dramatic: 0.5
  }
};

// Animation variants for reuse
export const VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  
  slideDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }
};

// Reduced motion media query check
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
```

## Section-Specific Animation Plans

### Hero Section (Home.jsx)
- **Background**: Parallax hex-grid overlay (0.3x speed)
- **Title**: Staggered letter/word reveal
- **Subtitle**: Fade-in with 0.2s delay
- **CTA Buttons**: Scale-in with hover effects
- **Countdown Timer**: Fade-in with subtle pulse

### About Section (About.jsx)
- **Section Header**: Slide-up reveal
- **Image Carousel**: Fade transitions between images
- **Text Content**: Slide-in from left
- **Focus Areas**: Staggered card reveals
- **Team Carousel**: Continuous marquee (existing)

### Event Section (Event.jsx)
- **Section Header**: Slide-up reveal
- **Domain Cards**: Staggered grid reveal
- **Process Steps**: Sequential reveal on scroll
- **FAQ Accordion**: Slide-down on expand

### Schedule Section (Schedule.jsx)
- **Timeline**: Progressive reveal as user scrolls
- **Event Cards**: Staggered reveal per day
- **Date Headers**: Sticky with fade-in

### Guests Section (Guests.jsx)
- **Guest Cards**: Scale-in with hover lift
- **Classified Guest**: Pulse animation on mystery element
- **Section Header**: Slide-up reveal

### Sponsors Section (Sponsorship.jsx)
- **Logo Grid**: Staggered fade-in
- **Tier Headers**: Slide-in from sides
- **CTA**: Scale-in on viewport entry

### Contact Section (Contact.jsx)
- **Form Fields**: Sequential slide-in
- **Contact Info**: Fade-in with icon animations
- **Map**: Scale-in on viewport entry

## Performance Considerations

### GPU Acceleration
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width`, `height`, `margin`, `padding`
- Use `will-change: transform` only on animated elements

### Scroll Performance
- Use passive event listeners for scroll events
- Debounce scroll handlers where possible
- Use `requestAnimationFrame` for parallax updates

### Mobile Optimization
- Disable parallax on mobile devices
- Reduce animation complexity on mobile
- Use simpler transitions for touch interactions

### Accessibility
- Check `prefers-reduced-motion` media query
- Provide instant transitions when reduced motion is preferred
- Ensure animations don't cause content to shift unexpectedly

## File Structure
```
src/
├── components/
│   └── animation/
│       ├── ScrollProgressProvider.jsx
│       ├── ScrollReveal.jsx
│       ├── ParallaxLayer.jsx
│       ├── AnimatedSection.jsx
│       ├── PageTransitionWrapper.jsx
│       └── index.js
├── utils/
│   └── animations.js
└── pages/
    ├── Home.jsx (enhanced)
    ├── About.jsx (enhanced)
    ├── Event.jsx (enhanced)
    ├── Schedule.jsx (enhanced)
    ├── Guests.jsx (enhanced)
    ├── Sponsorship.jsx (enhanced)
    ├── Contact.jsx (enhanced)
    └── Register.jsx (enhanced)
```

## Integration Points

### App.jsx Changes
- Wrap app in `ScrollProgressProvider`
- Update `AnimatePresence` configuration
- Add `PageTransitionWrapper` to routes

### index.css Changes
- Add CSS custom properties for animation timing
- Add utility classes for common animations
- Ensure smooth scrolling is enabled

### Existing Component Updates
- Replace direct `motion` usage with `ScrollReveal` where appropriate
- Add `AnimatedSection` wrapper to section components
- Update animation variants to use centralized configuration
