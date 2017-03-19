'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  createdOn: {type: Date, default: date.Now},
  postID: {type: Schema.Types.ObjectId, unique: true, ref:'post'},
  postingUserID: {type: Schema.Types.ObjectId, unique: true, required: true}
});

module.exports = mongoose.model('post', postSchema);
