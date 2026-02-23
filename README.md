# Job Application Tracker 🚀

<img src="./Job Application Tracker.png">

---

## 📌 Project Overview

Job Application Tracker is a simple web application to track and manage job applications. Users can view job listings, mark jobs as **Interview**, **Rejected**, or **Not Applied**, filter jobs by status, and delete jobs. Built using **Vanilla JavaScript**, **Tailwind CSS**, and **HTML**, it runs smoothly in any modern browser without any backend.

---

## 🛠 Key Features

- 📊 **Dashboard:** Shows total jobs, interview count, and rejected count.  
- 🔖 **Tab Filtering:** Easily switch between All, Interview, and Rejected jobs.  
- ✅ **Status Management:** Change job status to Interview, Rejected, or Not Applied.  
- 🗑 **Delete Jobs:** Remove unnecessary jobs.  
- 📱 **Responsive Design:** Works well on mobile and desktop.  
- 💻 **Frontend-only:** No backend required.

---

## 🧰 Technologies Used

- HTML5  
- JavaScript (Vanilla JS)  
- Tailwind CSS (CDN)  
- Google Fonts (Geist)  
- Font Awesome Icons  

---


❓ Answers to Questions:
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:-
-> getElementById() → Selects a single element by its unique id.
-> getElementsByClassName() → Returns all elements with a specific class (live HTMLCollection).
-> querySelector() → Returns the first element that matches a CSS selector.
-> querySelectorAll() → Returns all elements matching a CSS selector (NodeList).


2. How do you create and insert a new element into the DOM?

Ans:-
    const div = document.createElement("div");
    div.textContent = "Hello World";
    document.body.appendChild(div);


3. What is Event Bubbling? And how does it work?

Ans:-
Event Bubbling is when an event starts from the target element and propagates up through parent elements. Parent elements can detect the same event.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans:-
Event Delegation allows a parent element to handle events for multiple child elements.

Benefits:
-> Fewer event listeners → better performance
-> Works with dynamically added elements
-> Simplifies code maintenance

    document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Item clicked");
    }
    });


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:-
-> preventDefault() → Stops the browser’s default behavior (like form submission).
-> stopPropagation() → Stops the event from propagating to parent elements.