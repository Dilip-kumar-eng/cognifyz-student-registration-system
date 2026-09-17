// 🎓 Cognifyz Student Registration System

A full-stack **Student Registration System** built using **Node.js, Express.js, EJS and MongoDB**.

The application allows users to register students and provides complete CRUD functionality to manage student records.

// 🚀 Features

//* 📝 Student Registration
//* 📋 View Registered Students
//* ✏️ Update Student Information
//* 🗑️ Delete Student Records
//* 🗄️ MongoDB Database Integration
//* 🔌 REST API
//* 🎨 Responsive Student Interface
//* ✅ Server-side Validation
//* 📱 Mobile-friendly Design

//🛠️ Technologies Used

//* **HTML5**
//* **CSS3**
//* **JavaScript**
//* **Node.js**
//* **Express.js**
//* **EJS**
//* **MongoDB**
//* **Mongoose**
//* **Git & GitHub**

// 📁 Project Structure

```text
cognifyz-project-internship/
│
├── models/
│   └── Student.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── students.ejs
│   └── success.ejs
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

// ⚙️ Installation

// 1. Clone the repository

```bash
git clone https://github.com/Dilip-kumar-eng/cognifyz-student-registration-system.git
```

// 2. Open the project

```bash
cd cognifyz-student-registration-system
```

// 3. Install dependencies

```bash
npm install
```

// 4. Start MongoDB

Make sure MongoDB is running on your computer.

The application uses:

```text
mongodb://127.0.0.1:27017/studentManagement
```

// 5. Start the server

```bash
node server.js
```

The application will run at:

```text
http://localhost:3000
```

// 🔌 API Endpoints

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/students`     | Get all students  |
| POST   | `/api/students`     | Add a new student |
| PUT    | `/api/students/:id` | Update a student  |
| DELETE | `/api/students/:id` | Delete a student  |
| GET    | `/students`         | View student page |

// 📌 How It Works

```text
Student Registration Form
          ↓
      Express.js
          ↓
      Mongoose
          ↓
       MongoDB
          ↓
    Student Records
          ↓
     Students Page
```

// 🧪 CRUD Operations

// Create

Students can be registered through the registration form.

// Read

All registered students are retrieved from MongoDB using:

```text
GET /api/students
```

// Update

Student information can be updated using the Edit button.

```text
PUT /api/students/:id
```

// Delete

Student records can be deleted using the Delete button.

```text
DELETE /api/students/:id
```

//🔮 Future Improvements

//* User Authentication
//* Admin Dashboard
//* Search and Filter Students
//* Pagination
//* Better Edit Form
//* Deployment to a cloud platform
//* Environment variables for configuration

// 👨‍💻 Author

**Dilip Kumar**

B.Tech CSE Student

// 📄 License

This project is created for learning and internship purposes.