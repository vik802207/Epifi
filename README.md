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
🔗 **Live Frontend**: [https://epify.netlify.app](https://epify.netlify.app)  
🔗 **Live Backend**: [https://epifi.onrender.com](https://epifi.onrender.com)

---
## Screenshots
---
## Backend Api
### 1. User Authentication
#### Signup
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(754).png?raw=true)
#### Login
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(755).png?raw=true)
### 2. Add Product
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(767).png?raw=true)
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(763).png?raw=true)
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(764).png?raw=true)
### 3. Update Product Quantity
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(766).png?raw=true)
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(765).png?raw=true)
### Frontend
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(756).png?raw=true)
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(757).png?raw=true)
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(758).png?raw=true)
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(759).png?raw=true)
## Database
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(760).png?raw=true)
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(761).png?raw=true)
![Alt text](https://github.com/vik802207/Epifi/blob/main/img/Screenshot%20(762).png?raw=true)


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





