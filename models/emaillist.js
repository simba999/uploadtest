const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// EmailList Schema
const EmailListSchema = mongoose.Schema ({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const EmailList = module.exports = mongoose.model('EmailList', EmailList);

module.exports.getEmailById = function(id, callback) {
  EmailList.findById(id, callback);
}

module.exports.addEmail = function(newEmail, callback) {
    newEmail.save(callback);
}
