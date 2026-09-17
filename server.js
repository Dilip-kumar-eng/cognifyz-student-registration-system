const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();
const PORT = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/studentManagement_2Internship")
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((error) => {
    console.log("MongoDB connection error:" , error);
});
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});
// GET all student
app.get("/api/students", async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to fetch students."
        });

    }

});

app.post("/api/students", async (req, res) => {

    const { name, email, course } = req.body;

    if (!name || !email || !course) {
        return res.status(400).json({
            message: "Name, email and course are required."
        });
    }

    try {

        const student = new Student({
            name,
            email,
            course
        });

        await student.save();

        res.status(201).json({
            message: "Student added successfully.",
            student
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error."
        });

    }

});

app.put("/api/students/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const { name, email, course } = req.body;

        const student = await Student.findByIdAndUpdate(
            id,
            {
                name,
                email,
                course
            },
            { new: true }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student updated successfully",
            student: student
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to update student"
        });

    }
});

app.delete("/api/students/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found."
            });
        }

        res.json({
            message: "Student deleted successfully.",
            student: student
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to delete student."
        });

    }
});
// Students page
app.get("/students", (req, res) => {
    res.render("students");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});