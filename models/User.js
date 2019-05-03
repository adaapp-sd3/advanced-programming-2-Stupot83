const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password_hash: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

userSchema.index({
  name: 1,
  email: 1
}, {
  unique: true
});

module.exports = mongoose.model('User', userSchema);