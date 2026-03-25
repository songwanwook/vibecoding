# Animal Face Test Blueprint (Dog vs. Cat)

## Overview
A modern, AI-powered web application that analyzes user photos to determine if they have "Dog-like" or "Cat-like" facial features using a Google Teachable Machine model.

## Features
- **AI Image Analysis:** Uses a pre-trained model (from Teachable Machine) to classify images.
- **Image Upload & Drag-and-Drop:** Intuitive file input with a preview of the uploaded image.
- **Real-time Results:** Displays the probability (percentage) of each animal feature.
- **Visual Feedback:** Dynamic progress bars and expressive results (e.g., "You are more like a Dog!").
- **Theme Support:** Fully compatible with Dark and Light modes.
- **Partnership & Comments:** Retains the contact form and Disqus integration.

## Design
- **Typography:** Expressive 'Helvetica Neue' with bold headers for results.
- **Visual Effects:**
    - Glassmorphism containers for a premium feel.
    - Soft, deep shadows and glowing progress bars for results.
    - Smooth transitions between upload and result states.
- **Interactivity:**
    - Interactive upload area with hover effects.
    - Animated progress bars for AI classification results.

## Technical Details
- **Libraries:**
    - TensorFlow.js (`@tensorflow/tfjs`)
    - Teachable Machine Image Library (`@teachablemachine/image`)
- **Model URL:** `https://teachablemachine.withgoogle.com/models/u1XRiEMcN/`
- **Architecture:** Vanilla JS with ES Modules.

## Plan & Steps
### Phase 1-4: Foundation & Legacy Features (Completed)
1. Setup basic project structure, theme support, partnership form, and Disqus integration.

### Phase 5: Animal Face Test UI (Completed)
1. Replace Lotto UI with a dedicated "Animal Face Test" upload container in `index.html`.
2. Add necessary scripts for TensorFlow.js and Teachable Machine in `index.html`.
3. Style the upload area and result displays in `style.css`.

### Phase 6: AI Integration (Completed)
1. Implement model loading logic in `main.js`.
2. Add image processing and prediction functions.
3. Display results dynamically with animated progress bars.

### Phase 7: Polish & Refactoring (Completed)
1. Ensure the theme toggle works seamlessly with the new UI.
2. Clean up old Lotto-related code.
3. Final verification and deployment.
