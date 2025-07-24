# 🛒 Inventory Management System

A full-stack inventory management system with product listing, authentication, quantity editing, and product CRUD operations.

## 🚀 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Auth**: JWT Token-based Authentication

---

## 📦 Features

- 🔐 User Signup & Login
- 📤 Add New Products
- 🖼️ Upload product image via URL
- 📋 Product Listing with:
  - Image, Name, Price, Quantity, Description
  - Edit Quantity 📝
  - Delete Product 🗑️
- 📬 Auth-protected API routes

---
## Screenshots
---
![Alt text](https://github.com/vik802207/DpDZero-Feedback/blob/main/img/Screenshot%20(522).png?raw=true)


## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/vik802207/Epifi.git
cd Epifi
```
### 2.Backend Setup (/backend folder)
```bash
cd backend
npm install

Environment File (.env)
PORT=8000
MONGO_URI=mongodb://localhost:27017/inventory
JWT_SECRET=your_jwt_secret_key
```
### Run server
```bash
node server.js
```
### 3. Frontend Setup (/frontend folder)
```bash
npm install
npm start
```
### 📂 Folder Structure
```bash
/frontend
  └── components/
      └── LoginForm.js
      └── SignupForm.js
      └── AddProductForm.js
      └── ProductList.js
  └── App.js
  └── index.js

/backend
  └── models/Product.js
  └── models/User.js
  └── routes/auth.js
  └── routes/products.js
  └── controllers/
  └── server.js
```
### 🔒 Authentication Flow
- **Login & Signup store JWT in localStorage**
- **Protected routes send Authorization: Bearer <token> header**
- **Unauthorized users are blocked from accessing inventory APIs**
### 👨‍💻 Author
Developed by Vikash Gupta





