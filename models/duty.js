const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Duty Schema
const DutySchema = mongoose.Schema ({
  name: {
    type: String
  },
  need: {
    type: Object
  },
  status: {
    type: Number,
    enum: ["active", "deleted"],
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const Duty = module.exports = mongoose.model('Duty', Duty);

module.exports.getEmailById = function(id, callback) {
    Duty.findById(id, callback);
}
