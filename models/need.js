const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Need Schema
const NeedSchema = mongoose.Schema ({
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

const Need = module.exports = mongoose.model('Need', Need);

module.exports.getEmailById = function(id, callback) {
    Need.findById(id, callback);
}
