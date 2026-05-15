console.clear(); // Clears the browser console on every reload for clean debugging

// =========================================================================
// 🎯 TOPIC 01: Selecting Elements by ID (Unique Components)
// =========================================================================
// getElementById targets a single, specific node within the DOM tree.
const pageTitle = document.getElementById("main-title");
console.log("ID Selection (Title):", pageTitle);

const statusParagraph = document.getElementById("status-text");
console.log("ID Selection (Status):", statusParagraph);

// =========================================================================
// 👥 TOPIC 02: Selecting Elements by Class Name (Grouped Components)
// =========================================================================
// getElementsByClassName targets all nodes sharing the same class and
// returns a live HTMLCollection (array-like structure).
const jsParagraphs = document.getElementsByClassName("paragraph-js");
console.log("Class Selection (Collection):", jsParagraphs);

/* 
   RECRUITER NOTE: 
   Both methods co-exist in this script to showcase dynamic DOM querying. 
   Variable names are carefully distinct to prevent scope collision (SyntaxError).
   All outputs can be inspected directly in the Browser Console (Cmd + Option + J).
*/

// =========================================================================
// 🏷️ TOPIC 03: Selecting Elements by Tag Name (HTML Elements)
// =========================================================================
// getElementsByTagName targets elements by their HTML tag (e.g., button, input, div).
// It also returns an HTMLCollection.
const allButtons = document.getElementsByTagName("button");
console.log("Tag Selection (Buttons):", allButtons);

/*
   NOTE: Even if there is only ONE button on the page, this method 
   will still return a collection (list) containing that single item.
*/

// =========================================================================
// 📇 TOPIC 04: Selecting Elements by Name (Form Inputs)
// =========================================================================
// getElementsByName targets elements by their HTML 'name' attribute.
// It returns a NodeList instead of an HTMLCollection.
const inputByName = document.getElementsByName("username");
console.log("Name Selection (Inputs):", inputByName);

/*
   NOTE: getElementsByName outputs a NodeList. 
   NodeLists are highly useful in modern JS because they support native 
   iteration methods like forEach() directly out of the box.
*/

// =========================================================================
// 🎯 TOPIC 05: Selecting the First Match (querySelector)
// =========================================================================
// querySelector uses CSS selectors syntax and returns ONLY the first element found.
const firstParagraph = document.querySelector(".paragraph-js");
console.log("querySelector (First Paragraph):", firstParagraph);


// =========================================================================
// 🌐 TOPIC 06: Selecting All Matches (querySelectorAll)
// =========================================================================
// querySelectorAll returns a static NodeList containing all matching elements.
const allParagraphs = document.querySelectorAll(".paragraph-js");
console.log("querySelectorAll (All Paragraphs):", allParagraphs);

/*
   RECRUITER NOTE: 
   querySelector is ideal for single dynamic elements. 
   querySelectorAll is the industry standard for looping through 
   element groups natively using .forEach() in modern frameworks.
*/
