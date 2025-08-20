const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const carsRouter = require('./routes/cars'); // ✅ keep require here

// Load environment variables
dotenv.config({ path: './.env' });

const app = express(); // ✅ must be declared before using `app.use`

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('Prime Motors Backend API is running 🚗');
});

// Cars route
app.use('/api/cars', carsRouter); // ✅ move this BELOW app = express()

// Auth routes
const { router: authRouter } = require('./routes/auth');
app.use('/api/auth', authRouter);

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/prime_motors_db';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
