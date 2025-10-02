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


---

## 🔑 API Endpoints

### Authentication
- `POST /api/register/` → Register a new user  
- `POST /api/login/` → Login & receive JWT  

### Profile
- `GET /api/profile/` → Get logged-in user profile  

### Tasks
- `GET /api/tasks/` → Get all tasks (auth required)  
- `POST /api/tasks/` → Create a task  
- `PUT /api/tasks/:id/` → Update a task  
- `DELETE /api/tasks/:id/` → Delete a task  

---

## 🛠️ Tech Stack

**Backend**
- Node.js + Express.js / Django REST Framework  
- PostgreSQL / MySQL / MongoDB  
- JWT for authentication  

**Frontend**
- React.js / Next.js  
- Axios for API requests  
- TailwindCSS / CSS modules  

**Other**
- Postman for API testing  
- Swagger for documentation (optional)

---

## ▶️ How to Run Locally

### Backend
```bash
cd backend
npm install          # or pip install -r requirements.txt
npm run dev          # or python manage.py runserver

Backend → http://127.0.0.1:8000/
Frontend → http://localhost:3000/

### 📜 API Documentation

Postman collection included in:
postman/BackendAPIs.postman_collection.json

Import into Postman to test all endpoints.