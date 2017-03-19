'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  apartment: {type: String, required: true},
  room: {type: String, required: true},
  admin: {type: Boolean, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('user', userSchema);
