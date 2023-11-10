const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  // Add other customer fields as needed
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
