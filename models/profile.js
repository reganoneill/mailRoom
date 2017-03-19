'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = Schema({
  name: {type: String, required: true},
  userID: {type: Schema.Types.ObjectId, unique: true, required: true},
  posts: {type: Schema.Types.ObjectId, unique: true, ref:'post'},
  comments: {type: Schema.Types.ObjectId, unique: true, ref:'comment'}
});

module.exports = mongoose.model('profile', profileSchema);
