# 🚀 Full Stack Project – Backend Developer Intern Assignment

## 📌 About the Project
This project was built as part of the **Backend Developer Internship Assignment**.  
The aim is to design a **secure and scalable REST API** with authentication, role-based access, and CRUD functionality.  
A **basic frontend UI** is included to demonstrate interaction with the backend APIs.  

---

## ⚡ Features Implemented

### 🔹 Backend (Primary Focus)
- **User Authentication & Authorization**
  - Register & Login APIs
  - Password hashing using bcrypt/Django’s default hasher
  - JWT-based login & session management
  - Role-based access (`user` vs `admin`)

- **CRUD APIs**
  - Entity: **Tasks**
  - Endpoints for **Create, Read, Update, Delete**

- **API Essentials**
  - Input validation & error handling
  - API versioning (`/api/v1/...`)
  - Swagger/Postman API documentation
  - Database schema design (Postgres/MySQL/SQLite/MongoDB)

---

### 🔹 Frontend (Supportive)
- Built with **React.js / Next.js**
- UI Pages:
  - Register & Login forms
  - Protected Dashboard (JWT required)
  - Task Management: Create, Update, Delete tasks
- Error & success messages shown from API responses

---

### 🔹 Security & Scalability
- Password hashing with salt
- JWT stored securely in headers
- Input validation & sanitization
- Scalable & modular project structure
- Future-ready for:
  - Redis caching
  - Docker containerization
  - Centralized logging

---

## 📂 Project Structure

