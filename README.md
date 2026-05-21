# User Management App

A full-stack User Management Application built using the MERN stack that allows users to register, login, and manage users securely.

---

## 🚀 Features

- User Registration
- User Login Authentication
- JWT Authentication
- Password Hashing
- CRUD Operations
- Protected Routes
- MongoDB Database Integration
- Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

## 📂 Project Structure

```bash
User-Management-App/
│
├── frontend/
│
├── backend/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <your-github-repo-link>
```

### Navigate to Project Folder

```bash
cd User-Management-App
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users | Get All Users |
| PUT | /api/users/:id | Update User |
| DELETE | /api/users/:id | Delete User |

---

## 🚀 Deployment

### Frontend
- Vercel
- Netlify

### Backend
- Render
- Railway

### Database
- MongoDB Atlas

---

