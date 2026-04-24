# Responsive Landing Page Project

This project represents the culmination of my intermediate CSS studies. It is a fully responsive landing page built to demonstrate modern layout techniques, precise positioning, and asset management.

### 🏗️ Project Structure:
* **final-solution:** The polished, production-ready version of the landing page.
* **build-steps:** A documented journey of the development process, from initial HTML structure to final styling refinements.
* **assets:** Organized repository for high-quality images and icons used in the project.

### 🛠️ Technical Features:
* **Advanced Positioning:** Mastered the use of `absolute` and `relative` containers.
* **Responsive Design:** Mobile-first approach using Media Queries to ensure a seamless experience on all screen sizes.
* **Modern CSS Functions:** Usage of `calc()` for dynamic spacing and layout consistency.

### 🚀 Challenges & Solutions (The MacBook Air Fix):
* **Problem:** During testing, I identified an overflow issue where the main image was cut off on 13" screens due to fixed margins and absolute top positioning.
* **Solution:** I refactored the layout using **Flexbox** (`justify-content: center`) for vertical alignment and applied `max-height: 80vh` to the image. This ensures the "girl-cellphone" asset is always fully visible, maintaining the visual hierarchy regardless of the browser's height.

---
*Developed as part of the DevClub Fullstack curriculum.*
