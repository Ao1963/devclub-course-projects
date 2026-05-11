# 03 - Variables & Primitive Types

This section covers how JavaScript stores data in memory and the fundamental types of information used in programming.

### 🔑 Variables: const vs. let
I have implemented the modern standards for variable declaration:
*   **const:** Used for values that remain constant throughout the execution.
*   **let:** Used for values that need to be reassigned during the program's flow.
*   **Best Practice:** Applied *CamelCase* for naming variables to ensure code readability (e.g., `userName`, `totalPrice`).

### 🧬 Primitive Data Types:
I explored the core data types that form the building blocks of JavaScript:
*   **Strings:** Textual data handled with single quotes (' '), double quotes (" "), or backticks (` `).
*   **Numbers:** Integers and floating-point values for mathematical operations.
*   **Booleans:** Logical values representing `true` or `false`—essential for decision-making.
*   **Template Strings:** Utilizing backticks for clean string interpolation and multi-line text.

### 🔢 Numbers & Mathematical Logic
*   **Type Precision:** Numbers must be declared without quotes. Using quotes (e.g., `"10"`) transforms the data into a **String**, creating a "fake number" that cannot perform mathematical operations correctly.
*   **Boolean Logic:** Introduction to binary values (**true** / **false**). Derived from Boolean Algebra, this type is the foundation for decision-making and conditional flow in software.

### 🚥 Boolean Logic (True/False)
Booleans are the "light switches" of programming, representing only two states: `true` or `false`.

*   **Decision Making:** They are the foundation of conditional logic (if/else).
*   **Comparison Operations:** Booleans are often the result of comparisons. 
    *   Example: `10 > 5` results in `true`.
*   **Critical Note:** Never use quotes for Booleans. Using `"true"` creates a **String**, which breaks the logical evaluation in JavaScript (the "fakeBoolean" issue).
