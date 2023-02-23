const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    reviewName: { type: String, required: true },
    rating: { type: String, required: true },
    comments: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
