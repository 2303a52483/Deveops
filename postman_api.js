const express = require('express');
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Sita" }
];

// GET all
app.get('/students', (req, res) => {
  res.json(students);
});

// GET one
app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student)
    return res.status(404).json({ message: "Student not found" });

  res.json(student);
});

// POST
app.post('/students', (req, res) => {
  const { name } = req.body;

  const newStudent = {
    id: students.length + 1,
    name
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT
app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student)
    return res.status(404).json({ message: "Student not found" });

  student.name = req.body.name;
  res.json({ message: "Student updated", student });
});

// DELETE
app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);

  res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
  console.log("Postman API running on port 3000");
});
