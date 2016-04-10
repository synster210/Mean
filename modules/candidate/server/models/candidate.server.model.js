'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var CandidateSchema = new Schema({
  firstName: {
    type: String,
    default:'',
    required:'Please fill in the First Name',
    trim:true
  },
  lastName: {
    type: String,
    default: '',
    required:'Please fill in the Last Name',
    trim:true
  },
  skillSet: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default:'',
    trim:true
  },
  email: {
    type: String,
    default:'',
    trim:true
  },
  referred:{
    type:Boolean
  },
  created: {
    type: Date,
    default: Date.now
  },
  comment: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Candidate', CandidateSchema);
