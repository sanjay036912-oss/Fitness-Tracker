# 🏋️ Fitness Tracker API

A backend REST API for tracking workouts and exercises with user authentication.

---

## Program Structure

<img width="1536" height="1024" alt="ff412a68-d2a6-45f9-b11d-eec19e434242" src="https://github.com/user-attachments/assets/7b19fbd6-c216-4b54-8945-cdd67977cfb6" />

---

## Enviroment variables
  DATABASE_URL=your_db_url
  JWT_SECRET=secretkey
  PORT=5000

---

## API Routes
 Auth
  - POST /auth/register
  - POST /auth/login
 Workouts
  - POST /workouts (protected)
  - GET /workouts (protected)
 Exercises
  - POST /exercises (protected)
  - GET /exercises/:workoutId (protected)

---

## 📈 Learning Outcome
 - Authentication system
 - REST API design
 - Database relations
 - Middleware usage

---
## SQL Table

<img width="1071" height="853" alt="Screenshot 2026-04-14 191600" src="https://github.com/user-attachments/assets/098f95e4-6afb-4150-84bf-019ec7265b46" />

---

# 🚀 FINAL STEP 3: GITHUB PUSH

```bash
git init
git add .
git commit -m "Fitness Tracker API completed"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```
---

## 🚀 Tech Stack
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication

---

## 🔐 Features
- User Register/Login
- JWT Authentication
- Protected Routes
- Create Workouts
- Add Exercises
- User-specific data isolation

---

## ⚙️ Setup

```bash
npm install
npx prisma migrate dev
node src/app.js
