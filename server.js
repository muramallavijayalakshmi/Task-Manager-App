const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const taskRoutes = require('./routes/taskRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

// Middlewares
app.use(cors()); // Enables cross-origin requests for your frontend framework
app.use(express.json()); // Allows parsing of JSON payloads
app.use(express.urlencoded({ extended: false }));

// Routes API Link
app.use('/api/tasks', taskRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Task Manager API is running smoothly...');
});

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in development mode`);
});