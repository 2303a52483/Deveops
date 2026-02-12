const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let students = [];

// HTML page
app.get('/', (req, res) => {
  res.send(`
    <h2>Add Student</h2>
    <form method="POST" action="/students">
      <input type="text" name="name" placeholder="Enter name" required />
      <button type="submit">Add</button>
    </form>
    <br>
    <a href="/students">View Students</a>
  `);
});

// POST from form
app.post('/students', (req, res) => {
  const name = req.body.name;

  const newStudent = {
    id: students.length + 1,
    name: name
  };

  students.push(newStudent);
  res.send("Student Added Successfully!");
});

// GET students
app.get('/students', (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  console.log("HTML API running on port 3000");
});
