# 💸 Currency Converter Project (DevClub Convert Money)

This repository contains a fully responsive and dynamic currency converter, built from Figma specifications. I am leveraging my autonomy and creative freedom to design a unique layout and physical arrangement for this application.

### 🔑 Architectural Standards Implemented:
*   **Semantic HTML5 Bones:** Using `<main>`, `<section>`, and explicit labels to ensure layout accessibility and proper browser node traversal.
*   **Asset Organization:** Structured folder hierarchies separating business logic (`script.js`), visual presentation (`style.css`), and media components inside the `assets/` directory.
*   **Creative Freedom:** Tailoring custom styles and positions to sharpen front-end design skills on a 13-inch screen workspace environment.

---
*Status: Structural architecture completely mapped out. Ready for CSS implementation.*

---

## 🎨 CSS Architecture & UI Customization

This section marks the visual implementation phase, applying absolute positioning, user-feedback states, and multi-palette color exploration based on custom creative benchmarks.

### 🔑 Core Properties & Fixes:
*   **The Clock Effect Parsing:** Understanding padding value placement maps out strictly as Top, Right, Bottom, and Left sequentially.
*   **Kebab-Case Correction:** Resolving standard properties such as `margin-bottom` and text node targeting via the `color` attribute instead of background highlights.
*   **Visual States Hooks:** Implementing smooth responsive feedback on input actions using `:hover` and `:active` pseudo-classes to enhance UX.
*   **Layout Centering Behavior:** Utilizing `margin: 0 auto` combined with an explicit `display: block` conversion to shift default inline image elements into structured, center-aligned block nodes.

---

## 🧮 Implementation: Calculation Engine & Scope Resolution

This section logs the successful connection between user interface inputs and the computational logic layer, handling data formatting and scoping bugs.

### 🔑 Engineering Milestones:
*   **Target Scope Isolation:** Resolved selector collisions by refactoring elements into specific structural nodes (`.currency-value-to-convert` and `.currency-value`).
*   **Data Normalization:** Implemented `.replace(",", ".")` string filtering to ensure compatibility with JavaScript's floating-point math engine regardless of regional user input habits.
*   **International Formatting:** Leveraged the native `Intl.NumberFormat` API to render localized currencies (BRL and USD) dynamically based on professional compliance standards.
