# Tasks: Immersive Scroll Experience

## Phase 1: Foundation & Infrastructure

### Task 1.1: Create Animation Utilities Module
- [ ] Create `src/utils/animations.js` with centralized animation configuration
- [ ] Define animation timing constants (fast, normal, slow)
- [ ] Define easing functions (smooth, bounce, snappy)
- [ ] Define viewport thresholds for scroll triggers
- [ ] Define stagger delay configurations
- [ ] Define parallax speed configurations
- [ ] Export animation variants object (fadeIn, slideUp, slideDown, slideLeft, slideRight, scaleIn)
- [ ] Create `prefersReducedMotion()` helper function
- [ ] Add JSDoc comments for all exports

### Task 1.2: Create ScrollProgressProvider Component
- [ ] Create `src/components/animation/ScrollProgressProvider.jsx`
- [ ] Create ScrollProgressContext with React.createContext
- [ ] Implement scroll event listener with passive option
- [ ] Calculate overall scroll progress (0-1)
- [ ] Track active section based on viewport position
- [ ] Calculate section-specific progress
- [ ] Track scroll direction (up/down)
- [ ] Calculate scroll velocity
- [ ] Create `useScrollProgress` custom hook
- [ ] Add error handling for hook usage outside provider
- [ ] Optimize with useCallback and useMemo

### Task 1.3: Create ScrollReveal Component
- [ ] Create `src/components/animation/ScrollReveal.jsx`
- [ ] Use Framer Motion's `useInView` hook
- [ ] Accept variant prop (fadeIn, slideUp, slideInLeft, slideInRight, scaleIn)
- [ ] Accept delay and duration props
- [ ] Accept threshold prop for viewport trigger
- [ ] Accept once prop for one-time animation
- [ ] Implement hidden/visible state based on variant
- [ ] Add className prop for styling
- [ ] Support reduced motion preference
- [ ] Add JSDoc comments

### Task 1.4: Create ParallaxLayer Component
- [ ] Create `src/components/animation/ParallaxLayer.jsx`
- [ ] Use Framer Motion's `useScroll` and `useTransform` hooks
- [ ] Accept speed prop (0-1 range)
- [ ] Accept disabledOnMobile prop (default true)
- [ ] Implement GPU-accelerated transform (translate3d)
- [ ] Check viewport width for mobile detection
- [ ] Disable parallax on mobile for performance
- [ ] Add className prop for styling
- [ ] Add JSDoc comments

### Task 1.5: Create AnimatedSection Component
- [ ] Create `src/components/animation/AnimatedSection.jsx`
- [ ] Use Framer Motion's `useInView` hook
- [ ] Accept id prop for section identification
- [ ] Accept animation type prop
- [ ] Accept stagger prop for child animations
- [ ] Accept staggerDelay prop
- [ ] Implement container variants with stagger support
- [ ] Add className prop for styling
- [ ] Support reduced motion preference
- [ ] Add JSDoc comments

### Task 1.6: Create PageTransitionWrapper Component
- [ ] Create `src/components/animation/PageTransitionWrapper.jsx`
- [ ] Define page transition variants (initial, animate, exit)
- [ ] Set transition duration to 0.4s
- [ ] Use easeOut for enter, easeIn for exit
- [ ] Apply opacity and y transform
- [ ] Add JSDoc comments

### Task 1.7: Create Animation Components Index
- [ ] Create `src/components/animation/index.js`
- [ ] Export ScrollProgressProvider
- [ ] Export useScrollProgress hook
- [ ] Export ScrollReveal
- [ ] Export ParallaxLayer
- [ ] Export AnimatedSection
- [ ] Export PageTransitionWrapper

## Phase 2: App-Level Integration

### Task 2.1: Integrate ScrollProgressProvider in App
- [ ] Import ScrollProgressProvider in App.jsx
- [ ] Wrap Router with ScrollProgressProvider
- [ ] Ensure context is available to all child components
- [ ] Test scroll progress tracking works

### Task 2.2: Update Page Transitions in App
- [ ] Import PageTransitionWrapper in App.jsx
- [ ] Update AnimatePresence configuration
- [ ] Wrap MainLanding with PageTransitionWrapper
- [ ] Wrap Register page with PageTransitionWrapper
- [ ] Ensure smooth transitions between routes
- [ ] Test navigation transitions work correctly

### Task 2.3: Update CSS for Animation Support
- [ ] Add CSS custom properties for animation timing in index.css
- [ ] Add utility class for will-change on animated elements
- [ ] Ensure smooth scrolling is enabled
- [ ] Add reduced motion media query support
- [ ] Test CSS changes don't break existing styles

## Phase 3: Hero Section Enhancement (Home.jsx)

### Task 3.1: Add Parallax to Hero Background
- [ ] Import ParallaxLayer in Home.jsx
- [ ] Wrap hero background elements with ParallaxLayer
- [ ] Set parallax speed to 0.3 (subtle)
- [ ] Ensure parallax doesn't affect content readability
- [ ] Test parallax performance on desktop and mobile

### Task 3.2: Enhance Hero Title Animation
- [ ] Import ScrollReveal in Home.jsx
- [ ] Wrap hero title with ScrollReveal using slideUp variant
- [ ] Add stagger effect to title words if possible
- [ ] Set appropriate delay for visual hierarchy
- [ ] Test title animation on scroll

### Task 3.3: Enhance Hero Subtitle and Description
- [ ] Wrap subtitle with ScrollReveal using fadeIn variant
- [ ] Add 0.2s delay after title
- [ ] Wrap description text with ScrollReveal
- [ ] Ensure text is readable during animation
- [ ] Test animation timing feels natural

### Task 3.4: Enhance Hero CTA Buttons
- [ ] Wrap CTA buttons container with ScrollReveal
- [ ] Use scaleIn variant for buttons
- [ ] Add stagger delay between buttons
- [ ] Preserve existing hover effects
- [ ] Test button animations work with existing interactions

### Task 3.5: Enhance Countdown Timer Animation
- [ ] Wrap CountdownTimer with ScrollReveal
- [ ] Use fadeIn variant with subtle delay
- [ ] Ensure timer remains functional during animation
- [ ] Test timer updates don't cause re-animation

## Phase 4: About Section Enhancement (About.jsx)

### Task 4.1: Add Section Reveal to About Header
- [ ] Import ScrollReveal in About.jsx
- [ ] Wrap section header with ScrollReveal
- [ ] Use slideUp variant
- [ ] Set threshold to 0.2
- [ ] Test header reveals on scroll

### Task 4.2: Enhance BMSIT Section
- [ ] Wrap text content with ScrollReveal using slideInLeft variant
- [ ] Wrap image carousel with ScrollReveal using slideInRight variant
- [ ] Add appropriate delays for visual flow
- [ ] Preserve existing image carousel functionality
- [ ] Test animations don't interfere with carousel

### Task 4.3: Enhance ASTRA Expo Section
- [ ] Wrap section title with ScrollReveal
- [ ] Wrap info cards with ScrollReveal using stagger
- [ ] Add stagger delay of 0.1s between cards
- [ ] Wrap focus areas with ScrollReveal
- [ ] Test staggered reveal looks cohesive

### Task 4.4: Enhance Gallery Section
- [ ] Keep existing marquee animation (already smooth)
- [ ] Add ScrollReveal wrapper for gallery container
- [ ] Use fadeIn variant for initial reveal
- [ ] Ensure marquee continues smoothly
- [ ] Test gallery performance with new animations

### Task 4.5: Enhance Team Section
- [ ] Keep existing marquee animation for team carousel
- [ ] Add ScrollReveal wrapper for section header
- [ ] Use slideUp variant for header
- [ ] Ensure team carousel remains smooth
- [ ] Test team section animations

## Phase 5: Event Section Enhancement (Event.jsx)

### Task 5.1: Add Section Reveal to Event Header
- [ ] Import ScrollReveal in Event.jsx
- [ ] Wrap section header with ScrollReveal
- [ ] Use slideUp variant
- [ ] Test header reveals on scroll

### Task 5.2: Enhance Domain Cards
- [ ] Wrap domain cards grid with ScrollReveal
- [ ] Use stagger variant for cards
- [ ] Set stagger delay to 0.1s
- [ ] Preserve existing hover effects
- [ ] Test cards reveal smoothly

### Task 5.3: Enhance Competition/Exhibition Split
- [ ] Wrap left card with ScrollReveal using slideInLeft variant
- [ ] Wrap right card with ScrollReveal using slideInRight variant
- [ ] Add slight delay between cards
- [ ] Test split section reveals cohesively

### Task 5.4: Enhance Process Steps
- [ ] Wrap process steps grid with ScrollReveal
- [ ] Use stagger variant for steps
- [ ] Set stagger delay to 0.08s
- [ ] Test steps reveal sequentially

### Task 5.5: Enhance FAQ Section
- [ ] Wrap FAQ header with ScrollReveal
- [ ] Wrap FAQ items with ScrollReveal using stagger
- [ ] Set stagger delay to 0.1s
- [ ] Test FAQ items reveal smoothly

## Phase 6: Schedule Section Enhancement (Schedule.jsx)

### Task 6.1: Add Section Reveal to Schedule Header
- [ ] Import ScrollReveal in Schedule.jsx
- [ ] Wrap section header with ScrollReveal
- [ ] Use slideUp variant
- [ ] Test header reveals on scroll

### Task 6.2: Enhance Timeline
- [ ] Wrap timeline container with ScrollReveal
- [ ] Use stagger variant for timeline items
- [ ] Set stagger delay to 0.15s
- [ ] Consider progressive reveal as user scrolls
- [ ] Test timeline reveals progressively

### Task 6.3: Enhance Event Cards
- [ ] Wrap event cards with ScrollReveal
- [ ] Use stagger variant within each day
- [ ] Preserve existing card interactions
- [ ] Test cards reveal smoothly

## Phase 7: Guests Section Enhancement (Guests.jsx)

### Task 7.1: Add Section Reveal to Guests Header
- [ ] Import ScrollReveal in Guests.jsx
- [ ] Wrap section header with ScrollReveal
- [ ] Use slideUp variant
- [ ] Test header reveals on scroll

### Task 7.2: Enhance Guest Cards
- [ ] Wrap guest cards with ScrollReveal
- [ ] Use scaleIn variant
- [ ] Add stagger delay between cards
- [ ] Preserve existing hover effects
- [ ] Test cards reveal smoothly

### Task 7.3: Enhance Mystery Guest Element
- [ ] Keep existing pulse animation
- [ ] Add ScrollReveal wrapper
- [ ] Use fadeIn variant
- [ ] Test mystery element reveals smoothly

## Phase 8: Prizes Section Enhancement (Prizes.jsx)

### Task 8.1: Add Section Reveal to Prizes Header
- [ ] Import ScrollReveal in Prizes.jsx
- [ ] Wrap section header with ScrollReveal
- [ ] Use slideUp variant
- [ ] Test header reveals on scroll

### Task 8.2: Enhance Prize Cards
- [ ] Wrap prize cards with ScrollReveal
- [ ] Use stagger variant
- [ ] Set stagger delay to 0.1s
- [ ] Preserve existing hover effects
- [ ] Test cards reveal smoothly

## Phase 9: Sponsorship Section Enhancement (Sponsorship.jsx)

### Task 9.1: Add Section Reveal to Sponsorship Header
- [ ] Import ScrollReveal in Sponsorship.jsx
- [ ] Wrap section header with ScrollReveal
- [ ] Use slideUp variant
- [ ] Test header reveals on scroll

### Task 9.2: Enhance Sponsor Logo Grid
- [ ] Wrap logo grid with ScrollReveal
- [ ] Use stagger variant for logos
- [ ] Set stagger delay to 0.05s (fast for many items)
- [ ] Test logos reveal smoothly

### Task 9.3: Enhance Sponsorship Tiers
- [ ] Wrap tier sections with ScrollReveal
- [ ] Use slideInLeft/slideInRight variants alternately
- [ ] Test tier sections reveal cohesively

## Phase 10: Contact Section Enhancement (Contact.jsx)

### Task 10.1: Add Section Reveal to Contact Header
- [ ] Import ScrollReveal in Contact.jsx
- [ ] Wrap section header with ScrollReveal
- [ ] Use slideUp variant
- [ ] Test header reveals on scroll

### Task 10.2: Enhance Contact Form
- [ ] Wrap form with ScrollReveal
- [ ] Use stagger variant for form fields
- [ ] Set stagger delay to 0.1s
- [ ] Preserve form functionality
- [ ] Test form fields reveal smoothly

### Task 10.3: Enhance Contact Info
- [ ] Wrap contact info with ScrollReveal
- [ ] Use slideInRight variant
- [ ] Add icon animations
- [ ] Test contact info reveals smoothly

## Phase 11: Register Page Enhancement (Register.jsx)

### Task 11.1: Add Page Transition to Register
- [ ] Ensure PageTransitionWrapper is applied
- [ ] Test page transition from landing to register

### Task 11.2: Enhance Register Form
- [ ] Import ScrollReveal in Register.jsx
- [ ] Wrap form sections with ScrollReveal
- [ ] Use stagger variant for form fields
- [ ] Preserve form functionality
- [ ] Test form reveals smoothly

## Phase 12: Testing & Optimization

### Task 12.1: Test Performance on Desktop
- [ ] Use Chrome DevTools Performance tab
- [ ] Verify 60fps during scroll animations
- [ ] Check for layout thrashing
- [ ] Verify GPU acceleration is working
- [ ] Test on various desktop browsers (Chrome, Firefox, Safari, Edge)

### Task 12.2: Test Performance on Mobile
- [ ] Test on iOS Safari
- [ ] Test on Android Chrome
- [ ] Verify 30fps minimum during scroll
- [ ] Verify parallax is disabled on mobile
- [ ] Test touch scroll performance

### Task 12.3: Test Accessibility
- [ ] Test with `prefers-reduced-motion: reduce`
- [ ] Verify animations are disabled/instant
- [ ] Test keyboard navigation during animations
- [ ] Test screen reader compatibility
- [ ] Verify color contrast during transitions

### Task 12.4: Test Cross-Browser Compatibility
- [ ] Test on Chrome 90+
- [ ] Test on Firefox 88+
- [ ] Test on Safari 14+
- [ ] Test on Edge 90+
- [ ] Document any browser-specific issues

### Task 12.5: Optimize Bundle Size
- [ ] Check bundle size increase
- [ ] Ensure increase is < 50KB
- [ ] Remove unused animation code
- [ ] Consider code splitting if needed

### Task 12.6: Final Integration Testing
- [ ] Test complete user flow from hero to CTA
- [ ] Verify all sections reveal correctly
- [ ] Test navigation between pages
- [ ] Verify scroll progress tracking works
- [ ] Test all interactive elements still work

## Phase 13: Documentation & Cleanup

### Task 13.1: Add Code Comments
- [ ] Add JSDoc comments to all new components
- [ ] Document animation configuration options
- [ ] Document usage examples in comments

### Task 13.2: Update README if Needed
- [ ] Document new animation system
- [ ] Add development notes for animations
- [ ] Document browser support

### Task 13.3: Remove Unused Code
- [ ] Remove old animation code that's no longer used
- [ ] Clean up unused imports
- [ ] Remove console.log statements

### Task 13.4: Final Code Review
- [ ] Review all new files for code quality
- [ ] Ensure consistent code style
- [ ] Verify no TypeScript errors (if using TS)
- [ ] Verify no ESLint warnings
