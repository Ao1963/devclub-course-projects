# 02 - Content & Property Manipulation

This section covers how to modify elements in real-time using JavaScript. I am learning how to change texts, HTML structures, and CSS properties dynamically.

### 🔑 Key Learning Pillars:
*   **Text Updates:** Exploring the differences between `textContent`, `innerText`, and `innerHTML`.
*   **Style Modification:** Accessing the `.style` property to dynamically alter CSS properties from code.
*   **Structural Changes:** Injecting new HTML markup directly into existing DOM nodes.

---

## 👁️ Overview: Dynamic Page Interaction

This introductory section demonstrated the capabilities of JavaScript when interacting with an active user interface, bridging data input with real-time visual output.

### 🧱 Core Concepts Explored:
*   **Input Capture:** Reading raw user data directly from input fields in real-time.
*   **Structural Mutation:** Injecting external media assets (like image nodes) directly into the layout from the script.
*   **Console Verification:** Utilizing the Browser Developer Tools to inspect and verify newly appended DOM objects.

*Next Milestone: Diving into specific text and HTML manipulation properties.*

---

## 🔀 Text, CSS, and Event Manipulation

This section details the properties used to modify content, apply style changes dynamically, and hook functions onto user-driven events.

### 🔑 Technical Breakdown:
*   **Content Tools:** `textContent` handles plain text efficiently; `innerText` respects CSS styling and visibility; `innerHTML` forces the browser to parse strings as real HTML tags (ideal for component injection).
*   **CSS via JS (camelCase):** Inline style modifications require switching from kebab-case (`background-color`) to camelCase (`backgroundColor`) due to JavaScript language syntax rules.
*   **Event Binding:** Connecting the interface with scripts using inline handlers like `onclick` and `oninput` to trigger pre-declared functional blocks.

### 📋 Homework Assignment:
*   **Objective:** Capture an input field value upon a button click event and dynamically output it inside a brand-new paragraph node.
*   **Solution:** Successfully implemented a combination of `input.value`, event triggers, and `innerHTML` template literals to update the UI instantly without page reloads.
