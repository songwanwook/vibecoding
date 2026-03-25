# Lotto Number Generator Blueprint

## Overview
A modern, responsive web application that generates random lotto numbers (1-45) and displays them with a beautiful UI. It includes features like theme switching (Dark/Light mode) and persistent user preferences.

## Features
- **Random Number Generation:** Generates 6 unique numbers from 1 to 45.
- **Sorted Display:** Numbers are displayed in ascending order.
- **Color Coding:** Traditional lotto ball colors based on number ranges (1-10: Yellow, 11-20: Blue, 21-30: Red, 31-40: Gray, 41-45: Green).
- **Theme Switching:** Toggle between Dark and Light modes.
- **Partnership Inquiry:** A contact form powered by Formspree for business inquiries.
- **Persistence:** Remembers the user's theme preference using `localStorage`.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Design
- **Typography:** Expressive 'Helvetica Neue' font.
- **Visual Effects:**
    - Subtle pop-in animations for number balls.
    - Deep, multi-layered shadows for a lifted card effect.
    - Glassmorphism-inspired container transitions.
- **Interactivity:**
    - Animated theme toggle button.
    - Hover and active states for the generation button.

## Technical Details
- **Architecture:** Framework-less (Vanilla HTML, CSS, JavaScript).
- **Theming:** Implemented using CSS Variables (`:root`) and the `data-theme` attribute.
- **Performance:** Optimized for speed and minimal asset usage.
- **Deployment:** Integrated with GitHub for continuous delivery.

## Plan & Steps
### Phase 1: Initial Implementation (Completed)
1. Setup basic HTML/CSS/JS structure.
2. Implement lotto logic and color coding.
3. Apply modern aesthetics and animations.

### Phase 2: Theme Support (Completed)
1. Add theme toggle button to `index.html`.
2. Refactor `style.css` to use CSS Variables for all colors.
3. Implement `[data-theme="dark"]` overrides.
4. Add theme toggle logic and `localStorage` persistence to `main.js`.
5. Deploy changes to GitHub.

### Phase 3: Partnership Inquiry (Completed)
1. Add Formspree integration to `index.html`.
2. Style the contact form to match Dark/Light themes in `style.css`.
3. Update `blueprint.md` and deploy to GitHub.

### Phase 4: Disqus Integration (Completed)
1. Add the Disqus thread container to `index.html`.
2. Insert the Disqus embed script at the bottom of the body.
3. Apply styling to the Disqus container in `style.css` for better integration.
4. Update `blueprint.md` to reflect completion.
