'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  createdOn: {type: Date, default: date.Now},
  upvote: {type: Number};
  comments: [{type: Schema.Types.ObjectId, unique: true, ref:'comment'}],
  postingUserID: {type: Schema.Types.ObjectId, unique: true, required: true}
});

module.exports = mongoose.model('post', postSchema);
