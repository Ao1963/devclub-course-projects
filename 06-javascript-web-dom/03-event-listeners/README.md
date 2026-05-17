# 03 - Modern Event Handling: addEventListener

This folder documents the transition from legacy inline HTML event handlers (like `onclick`) to the modern, professional standard of decoupling structure from behavior.

---

## 👂 The Event Listener Architecture

The `addEventListener` method acts as a dedicated observer within the DOM tree, waiting for specific user interactions without cluttering the HTML markup.

### 🔑 Core Concepts Explored:
*   **The `(event)` Parameter:** When an event fires, the browser engine automatically transmits an informational payload. Accessing `event.target` allows precise data extraction from inputs or select fields.
*   **IntelliSense/Auto-complete Behavior:** Explored why VS Code text predictors sometimes fail with dynamic JavaScript variables. Because pure JS is dynamically typed, the IDE cannot determine the element node type ahead of runtime unless explicit contexts are clear.

---

## 💸 Kick-off: The Currency Converter Project

This section also marks the architectural briefing for the upcoming practical application.

### 📋 Project Briefing Notes:
*   **Design Framework:** Spec mapped directly from the **Figma** interface layout assets.
*   **Creative Autonomy:** Encouraged to implement structural and stylistic changes freely, tailoring the CSS setup for clean visual physics on personal screens like the 13" MacBook Air.
*   **Directory Management:** Establishing rigorous development workflows by creating centralized folders like `/assets` for multimedia items (such as `logo.gif`) before typing active scripts.
