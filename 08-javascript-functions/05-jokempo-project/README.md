# 🕹️ Jokempô - Modern JavaScript Game

[![License: MIT](https://shields.io)](https://opensource.org)

[![Language: JavaScript](https://shields.io)](https://mozilla.org)

A high-performance "Rock, Paper, Scissors" implementation focused on clean code, modular architecture, and modern ES6+ standards. Developed as part of the **DevClub Full Stack Journey**.

---

## 🚀 Overview

This project is a technical demonstration of DOM manipulation and functional programming in JavaScript. It features a responsive UI and an automated "Machine" opponent driven by pseudo-random algorithms.

### Key Engineering Features:

- **Modular Logic:** Separation of concerns between UI updates and game mechanics.
- **State Management:** Real-time score tracking for both Human and Machine players.
- **Type Safety (ENUM Pattern):** Implementation of a Constants Object (ENUM) to prevent syntax errors and "magic strings" across the application.
- **Responsive UX:** Optimized for high-definition displays using CSS Flexbox and dynamic backgrounds.

---

## 🛠️ Tech Stack

| Technology            | Usage                                                                    |
| :-------------------- | :----------------------------------------------------------------------- |
| **HTML5**             | Semantic structure and Unicode emoji integration.                        |
| **CSS3**              | Flexbox layout, hover transitions, and dynamic viewport scaling (100vh). |
| **JavaScript (ES6+)** | Arrow functions, callback lifecycles, and Math-based algorithms.         |

---

## 🏗️ Architecture & Logic

### The ENUM Pattern

To align with international enterprise standards (Google/Airbnb style guides), the project uses a frozen object to manage game options:

```javascript
const GAME_OPTIONS = Object.freeze({
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
});
```

### Randomization Algorithm

The Machine's AI utilizes `Math.floor(Math.random() * 3)` to ensure an unbiased selection from the options array, simulating a fair-play environment.

---

## 📥 How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd 08-javascript-functions/05-jokempo-project
    ```
3.  **Launch:**
    Open `index.html` in any modern browser (Chrome/Brave recommended).

---

## 👨‍💻 Author

**Anselmo Oliveira**
_Software Engineering Student | Industrial Production Background_

---

> _"The best part is no part. The best process is no process. It weighs nothing, costs nothing, can't go wrong."_ — **Elon Musk Philosophy applied to Clean Code.**
