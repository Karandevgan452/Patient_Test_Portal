
# 🧪 MEDICARE

A **full-stack web application** where patients can:

- ✅ Register and log in securely  
- 🔍 Browse available medical lab tests  
- 📅 Book test appointments at convenient times  
- 📂 View booking history  
- 📄 Download dummy test reports in PDF format  

🔗 **Live App**: [https://patient-test-portal.vercel.app/]

---

## 🧰 Tech Stack

### 🔹 Frontend
- React.js (with Hooks)
- React Router
- Axios
- CSS

### 🔹 Backend
- Node.js + Express.js
- MongoDB (with Mongoose)
- JWT for Authentication
- bcryptjs for password hashing
- PDFKit for generating PDF reports
- dotenv for environment configuration

---

## 🌐 Deployment

| Part      | Platform | URL |
|-----------|----------|-----|
| **Frontend** | [Vercel](https://vercel.com/) | [patient-test-portal.vercel.app](https://patient-test-portal.vercel.app) |
| **Backend**  | [Render](https://render.com/) | [patient-test-portal.onrender.com](https://patient-test-portal.onrender.com) |

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Karandevgan452/Patient_Test_Portal.git
cd Patient_Test_Portal
````

---

### 2. Backend Setup

```bash
cd backend
npm install
```

🔐 Create a `.env` file inside the `backend/` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_jwt_key
```

▶️ Start the backend server:

```bash
npm start
```

> Backend will run at: `http://localhost:3000`

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

▶️ Start the frontend dev server:

```bash
npm run dev
```

> Frontend will run at: `http://localhost:5173`

✅ **Make sure both servers are running concurrently.**

---

## 🧠 Key Features & Approach

* Clear separation of **frontend** and **backend** for maintainability
* JWT-based **authentication system**
* **Protected routes** using Express middleware
* **RESTful APIs** for all core functionalities
* **PDF generation** for downloadable test reports via PDFKit
* Used **.env** in both frontend and backend to manage render , mongo link , port and JWT_SECRET
* Frontend uses **Axios** for HTTP requests and manages auth state with `localStorage`

---

## 📮 API Endpoints

### 🔗 Base URL (Backend Render):

[https://patient-test-portal.onrender.com]

### 🔐 Auth — `/api/patients`

| Method | Endpoint    | Description                |
| ------ | ----------- | -------------------------- |
| POST   | `/register` | Register a new patient     |
| POST   | `/login`    | Log in an existing patient |

---

### 🧪 Lab Tests — `/api/tests`

| Method | Endpoint | Description              |
| ------ | -------- | ------------------------ |
| GET    | `/`      | Retrieve available tests |

---

### 📅 Bookings — `/api/bookings`

| Method | Endpoint | Description                              |
| ------ | -------- | ---------------------------------------- |
| POST   | `/`      | Book a lab test (requires auth)          |
| GET    | `/:id`   | Get a patient's bookings (requires auth) |

---

### 📄 Reports — `/api/report`

| Method | Endpoint    | Description                               |
| ------ | ----------- | ----------------------------------------- |
| GET    | `/download` | Download test report (PDF, auth required) |

---

## 📁 Project Structure

```
Patient_Test_Portal/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
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
|       └── .env
│       └── ...
├── README.md
```

---

## 👨‍💻 Author

**Karan Devgan**
GitHub: [@Karandevgan452](https://github.com/Karandevgan452)

