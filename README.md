# 🧪 Async Activity: Build Your Own Mini API Viewer

## 🎯 Objective
Use JavaScript Promises, `.then()`, `async/await`, `fetch()`, and `setTimeout()` to build a small web app that fetches and displays data from a public API. You'll also simulate loading behavior and practice two ways to work with async code.

---

## 📝 Instructions

### 1. Setup
Open the `index.html` file in your browser and edit the `script.js` file to complete each of the steps below.

---

### 2. Your Tasks

#### 🔹 Step 1: Simulate a Loading Delay
Use `setTimeout()` to wait **2 seconds** before fetching the API data. Show a "Loading..." message during the delay.

#### 🔹 Step 2: Fetch Data from an API
Use the Dog CEO API:  
👉 `https://dog.ceo/api/breeds/image/random/5`  
This returns 5 random dog images.

#### 🔹 Step 3: Display Results
After fetching the data, show the 5 dog images on the page.

#### 🔹 Step 4: Use `.then()` for Fetching
Repeat steps 2–3 using `.then()` instead of `async/await`. Add a new button and function to trigger this version.

---

## 💡 Hints

- You'll need to use `data.message` from the Dog API response (it's an array of image URLs).
- Use `document.createElement("img")` and `.appendChild()` or `innerHTML` to add images.
- Wrap your fetch calls in a function and attach it to the button using `addEventListener()`.

---

## ✅ Challenge Goals

✔ Use `setTimeout()` to simulate loading  
✔ Fetch and parse JSON from an API  
✔ Display dynamic content in the DOM  
✔ Write one solution using `.then()` and one using `async/await`

---

## 🛠 Resources

- [Dog CEO API](https://dog.ceo/dog-api/)
- [MDN fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
