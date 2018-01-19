const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Event Schema
const EventSchema = mongoose.Schema ({
  name: {
    type: String
  },
  duty: {
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

const Event = module.exports = mongoose.model('Event', Event);

module.exports.getEmailById = function(id, callback) {
  Event.findById(id, callback);
}

module.exports.addEvent = function(newEvent, callback) {
    newEvent.save(callback);
}
