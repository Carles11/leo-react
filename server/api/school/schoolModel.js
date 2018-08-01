import mongoose, { Schema } from 'mongoose'

const currentYear = (new Date()).getFullYear()

const SchoolSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }, 
  contact: {
    type: String,
    required: true,
  },
  edition: {
    type: Number,
    default: currentYear,
  },
  email: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('School', SchoolSchema)