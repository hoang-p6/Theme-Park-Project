const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ride = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    description: {type: String, required: true },
    heightRequirement: {type: String, required: true},
    topSpeed: {type: String, required: true},
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Ride', Ride)
