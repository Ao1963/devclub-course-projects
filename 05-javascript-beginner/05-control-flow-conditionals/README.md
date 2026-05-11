# 05 - Control Flow (Conditional Logic)

Conditional statements are used to perform different actions based on different conditions. This is the foundation of decision-making in software.

### 🔑 Key Concepts:
*   **if Statement:** Executes a block of code only if a specified condition is `true`.
*   **else Statement:** Executes a block of code if the same condition is `false`.
*   **Comparison Operators:** Used within conditions (e.g., `==`, `===`, `>`, `<`, `!=`).

### 💼 Professional Insight:
Control flow is what makes an application "smart." Every user interaction—from logging in to validating a credit card—relies on well-structured conditional logic to ensure the correct path is taken.

### 🛣️ Multiple Paths: else if
When two options are not enough, we use `else if` to create complex decision trees.

*   **Sequential Evaluation:** The engine checks conditions from top to bottom.
*   **Efficiency:** Once a condition is met, the remaining checks are skipped.
*   **Default Fallback:** The final `else` ensures that the code always has a path to follow if all specific conditions fail.

### ⚖️ Comparison Operators
To drive logic, we use operators to compare values.

*   **Relational:** `>`, `<`, `>=`, `<=` (Used for numeric and sequence logic).
*   **Equality (`==` vs `===`):** 
    *   `==` (Abstract Equality): Compares values only, performs type conversion.
    *   `===` (Strict Equality): Compares both value and data type. **Professional Standard.**
*   **Assignment (`=`):** Remember that a single `=` is for assigning values, not for comparisons.
