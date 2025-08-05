# 🧪 Patient Test Portal Platform

A full-stack web application that allows patients to:

- Register and log in securely
- View available medical lab tests
- Book test appointments as per conveninent dates and time
- View booking history 
- Download dummy test reports in PDF format

This project consists of:
- **Frontend**: React.js , Css
- **Backend**: Node.js, Express.js, MongoDB

---

## 🔧 Tech Stack

### 🔹 Frontend
- React.js (with hooks)
- React Router
- Axios
- CSS 

### 🔹 Backend
- Node.js + Express.js
- MongoDB with Mongoose
- JWT for Authentication
- bcryptjs for password hashing
- PDFKit for generating PDF reports
- dotenv for environment config

---

## 🚀 Setup Instructions

### 1. Clone the Repository


git clone https://github.com/Karandevgan452/Patient_Test_Portal.git
cd Patient_Test_Portal


---

### 2. Backend Setup


cd backend
npm install


#### 🔐 Create `.env` file in `backend/` directory


PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_jwt_key


#### ▶️ Start Backend Server

```bash
npm start
```

Backend will run at: `http://localhost:3000`

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

#### ▶️ Start Frontend Dev Server

```bash
npm start
```

Frontend will run at: `http://localhost:5173` 

> ⚠️ Make sure both servers are running concurrently.

---

## 🧠 Project Approach

* Clean separation of **frontend** and **backend** for scalability
* JWT-based **authentication system**
* **Protected routes** using middleware
* **RESTful APIs** built with Express
* **PDF generation** for downloadable reports (via PDFKit)
* React frontend uses **Axios** for HTTP requests, and manages auth state with localStorage

---

## 📮 API Endpoints (Backend)

### Render link(Home Route) : https://patient-test-portal.onrender.com/

### 🔐 Auth (Patients) — `/api/patients`

| Method | Endpoint    | Description            |
| ------ | ----------- | ---------------------- |
| POST   | `/register` | Register new patient   |
| POST   | `/login`    | Login existing patient |

---

### 🧪 Lab Tests — `/api/tests`

| Method | Endpoint | Description             |
| ------ | -------- | ----------------------- |
| GET    | `/`      | Get all available tests |

---

### 📅 Bookings — `/api/bookings`

| Method | Endpoint | Description                        |
| ------ | -------- | ---------------------------------- |
| POST   | `/`      | Book a test (auth required)        |
| GET    | `/:id`      | Get patient bookings (auth needed) |

---

### 📄 Reports — `/api/report`

| Method | Endpoint    | Description                |
| ------ | ----------- | -------------------------- |
| GET    | `/download` | Download test report (PDF) (auth required) |

---

## 📂 Folder Structure

Patient_Test_Portal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── css/
│       ├── services/
│       ├── App.jsx
│       ├── main.jsx
│       └── ...
├── README.md



## 📢 Author

**\[Karan Devgan]**
GitHub: [@](https://github.com/yourusername)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

```

Let me know if you want me to include your actual GitHub name or project links in this README.
```
