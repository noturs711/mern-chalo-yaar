const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse incoming JSON data

// Connect to MongoDB (without deprecated options)
mongoose.connect('mongodb://localhost:27017/bookings')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a booking schema with basic validation
const bookingSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: [true, 'Destination is required'],
    trim: true
  },
  people: {
    type: Number,
    required: [true, 'Number of people is required'],
    min: [1, 'Must be at least 1 person']
  },
  arrival: {
    type: Date,
    required: [true, 'Arrival date is required']
  },
  leaving: {
    type: Date,
    required: [true, 'Leaving date is required'],
    validate: {
      validator: function(value) {
        return value > this.arrival;
      },
      message: 'Leaving date must be after arrival date'
    }
  }
});

// Create a booking model
const Booking = mongoose.model('Booking', bookingSchema);

// Handle POST requests to save booking data
app.post('/api/book', async (req, res) => {
  const { destination, people, arrival, leaving } = req.body;
  
  const newBooking = new Booking({ destination, people, arrival, leaving });
  
  try {
    await newBooking.save(); // Save booking to MongoDB
    res.status(201).json({ message: 'Booking saved successfully!' });
  } catch (error) {
    // Send more informative error response
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: error.errors });
    }
    res.status(500).json({ message: 'Failed to save booking', error });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
