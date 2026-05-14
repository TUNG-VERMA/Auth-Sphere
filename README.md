# 🔐 AuthSphere – Authentication & Authorization System

AuthSphere is a full-stack backend authentication project built using Node.js, Express.js, MongoDB, and Mongoose.

This project demonstrates complete authentication and authorization concepts used in real-world backend applications.

---

# 🚀 Features

## ✅ Authentication Features

- User Signup
- User Login
- Password Hashing using bcrypt
- Session-Based Authentication
- Cookie Management
- JWT Authentication
- Logout System
- Protected Routes

---

## ✅ Authorization Features

- Role-Based Access Control
- Admin Middleware
- Protected Admin Panel

---

## ✅ Validation Features

- Input Validation using express-validator
- Email Validation
- Password Length Validation
- Confirm Password Validation

---

## ✅ Security Features

- Password Encryption
- HTTP-only Cookies
- Session Storage in MongoDB
- JWT Verification Middleware
- Secure Authentication Flow

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend Runtime |
| Express.js | Server Framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| bcrypt | Password Hashing |
| express-session | Session Authentication |
| connect-mongo | Store Sessions in MongoDB |
| jsonwebtoken | JWT Authentication |
| express-validator | Input Validation |
| EJS | Frontend Templating |
| dotenv | Environment Variables |

---

# 📂 Project Structure

```text
authsphere-project/
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   ├── isAuth.js
│   ├── isAdmin.js
│   ├── jwtAuth.js
│   └── validators.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── views/
│   ├── signup.ejs
│   ├── login.ejs
│   ├── dashboard.ejs
│   └── admin.ejs
│
├── .gitignore
├── .env
├── app.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Auth-Sphere.git
```

---

## 2️⃣ Open Project Folder

```bash
cd Auth-Sphere
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🌐 MongoDB Setup

You can use either:

- Local MongoDB
- MongoDB Atlas Cluster

---

## Local MongoDB URI

```env
MONGODB_URI=mongodb://127.0.0.1:27017/authsphere
```

---

## MongoDB Atlas URI

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/authsphere
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret
```

---

# ▶️ Run Project

## Development Mode

```bash
npm run dev
```

---

## Production Mode

```bash
npm start
```

---

# 🌍 Routes Overview

| Route | Method | Description |
|---|---|---|
| /signup | GET | Signup Page |
| /signup | POST | Register User |
| /login | GET | Login Page |
| /login | POST | Login User |
| /dashboard | GET | Protected Dashboard |
| /admin | GET | Admin Protected Route |
| /logout | GET | Logout User |
| /login-jwt | POST | JWT Login |
| /profile-jwt | GET | JWT Protected Route |

---

# 🔐 Authentication Flow

## Session Authentication

1. User logs in.
2. Server validates credentials.
3. Session is created.
4. Session ID stored in cookie.
5. Protected routes verify session.

---

## JWT Authentication

1. User logs in.
2. Server generates JWT token.
3. Client stores token.
4. Token sent in Authorization Header.
5. Middleware verifies token.

---

# 🍪 Cookies & Sessions

This project uses:

- express-session
- connect-mongo

Sessions are stored inside MongoDB.

Cookies store:

- Session ID
- Expiration Time

---

# 🔒 Password Security

Passwords are encrypted using bcrypt before storing in database.

Example:

```js
const hashedPassword = await bcrypt.hash(password, 10);
```

---

# 🛡️ Middleware Used

## isAuth Middleware

Protects routes from unauthorized users.

---

## isAdmin Middleware

Allows only admin users to access admin routes.

---

## jwtAuth Middleware

Verifies JWT token before allowing access.

---

# ✅ Validation System

Implemented using express-validator.

Validations include:

- Required Fields
- Email Format Validation
- Password Length Check
- Confirm Password Matching

---

# 🧠 Concepts Learned

This project covers:

- Authentication
- Authorization
- Sessions
- Cookies
- JWT
- Middleware
- MongoDB Integration
- MVC Structure
- Input Validation
- Password Hashing
- Protected Routes
- Role-Based Access Control

---

# 🚀 Future Improvements

Possible future upgrades:

- Email Verification
- Forgot Password System
- OAuth Login (Google/GitHub)
- Refresh Tokens
- Rate Limiting
- CSRF Protection
- Frontend Integration using React
- Deployment on Render/Railway

---

# 📚 Learning Outcome

This project helped in understanding:

- Real-world backend authentication systems
- Secure session handling
- JWT-based authentication flow
- Backend architecture using Express.js
- MongoDB and Mongoose integration

---

# 👨‍💻 Author

Tung Verma

B.Tech CSE (AI & ML)

---

# ⭐ If you like this project

Give this repository a star ⭐ on GitHub.