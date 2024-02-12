const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const path = require('path');

async function startServer() {
  mongoose.connect('mongodb+srv://warstander45:comp3123@cluster0.djpgvtv.mongodb.net/raptors_fitness?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

  const employeeSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true}, // Add unique: true for email
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    salary: { type: Number, required: true },
  });
  
  

  const UserModel = mongoose.model('User', userSchema);
  const EmployeeModel = mongoose.model('Employee', employeeSchema);

  const app = express();
  app.use(bodyParser.json()); // Parse JSON requests

  // Serve static files (including index.html) from the 'public' directory
  app.use(express.static(path.join(__dirname, 'public')));

  // GET route for employee list
  app.get('/employees', async (req, res) => {
    const employees = await EmployeeModel.find();
    res.json(employees);
  });

  // GET route for admin page
app.get('/admin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin.html'));
});

app.get('/user-details.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/user-details.html'));
});


  app.post('/employees', async (req, res) => {
    try {
      const { first_name, last_name, email, gender, salary } = req.body;
      const newEmployee = new EmployeeModel({
        first_name,
        last_name,
        email,
        gender,
        salary,
      });
      const savedEmployee = await newEmployee.save();
      res.status(201).json(savedEmployee);
    } catch (error) {
      console.error('Error adding employee:', error);
      if (error.code === 11000) {
        res.status(400).json({ error: 'Email must be unique' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  });
  
  // GET route for sign up page
  app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/signup.html'));
  });

  // GET route for log in page
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
  });

  // GET route for memberships page
  app.get('/memberships', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/memberships.html'));
  });
  
// GET route for retrieving all users
app.get('/users', async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.json(allUsers);
  } catch (error) {
    console.error('Error fetching all users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT route for updating user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      { username, email, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE route for deleting user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




  // POST route for user sign up
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Assuming the user wants to purchase a membership during signup
  const user = new UserModel({ username, email, password: hashedPassword, hasMembership: true });
  
  await user.save();
  res.json(user);
});


  // POST route for user login
  app.post('/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;
    const user = await UserModel.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    res.json(user);
  });

  // GET route for searching employee by ID
  app.get('/employees/:id', async (req, res) => {
    const employee = await EmployeeModel.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  });

  // DELETE route for deleting employee by ID
  app.delete('/employees/:id', async (req, res) => {
    const employee = await EmployeeModel.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
