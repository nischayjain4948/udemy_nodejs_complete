const url = 'mongodb://127.0.0.1:27017/mydatabase';
const mongoose = require("mongoose");
module.exports = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    // Start using Mongoose models and perform operations
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);     
  });