# 🛒 Product Manager / Cart App

This project is part of **Experiment 7**. It is a modern web application built with Next.js that allows users to manage a list of products inside a cart.

The app demonstrates global state management using Zustand and persistent storage using localStorage.

---

## 🚀 Features

* View products in a cart layout
* Increase / decrease product quantity
* Remove products from the cart
* Automatically updated total price
* Persistent data (saved in browser using localStorage)
* Clean and responsive UI

---

## 🧰 Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Zustand (state management)
* Zustand Persist Middleware

---

## 📁 Project Structure

app/
page.tsx → Main entry page

components/
Cart.tsx → Cart UI (products, quantity, actions)

store/
useProductStore.ts → Zustand store (state + logic)

---

## ⚙️ Installation & Setup

1. Clone the repository:

git clone https://github.com/PHANUELF/24bcy70220-7b-phanuel-philip.git

2. Navigate into the project:

cd 24bcy70220-7b-phanuel-philip

3. Install dependencies:

pnpm install

4. Run the development server:

pnpm dev

5. Open in browser:

http://localhost:3000

---

## 💡 How It Works

* The application uses Zustand to manage global state.
* The persist middleware saves product data to localStorage.
* When the page reloads, the cart data is restored automatically.
* Quantity updates and deletions instantly update the UI and storage.

---

## 📊 Learning Outcomes

* Understanding global state management
* Using Zustand with persistence
* Managing UI and state separation
* Building a responsive cart interface
* Handling client-side storage in modern web apps

---

## 👤 Author

Phanuel Philip

---

## 📌 Notes

* This project is for academic purposes (Experiment 7).
* Data is stored locally in the browser (no backend).

---
