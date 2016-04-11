'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var NeedSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  team: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  geography: {
    type: String,
    default: '',
    trim: true
  },
  jobDescription: {
    type: String,
    default: '',
    trim: true
  },
  startDate: {
    type: Date,
    default: '',
    trim: true
  },
  creationDate: {
    type: Date,
    default: '',
    trim: true
  },
  skill: {
    type: String,
    default: '',
    trim: true
  },
  experience: {
    type: Number,
    default: '',
    trim: false
  },
  criticality: {
    type: String,
    default: '',
    trim: true
  },
  isOppurtunistic: {
    type: Boolean,
    default: '',
    trim: false
  },
   backfill: {
    type: String,
    default: '',
    trim: true
  },
  status: {
    type: String,
    default: '',
    trim: true
  },
  clientExecutive: {
    type: String,
    default: '',
    trim: true
  },
  oracleId: {
    type: String,
    default: '',
    trim: true
  },
  designation: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Need', NeedSchema);
