const db = require('../db')
const Review = require('../models/reviews')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const reviews = [
        {
          reviewName: "Bob",
          rating: "4",
          comments: "Ride so good"
        } 
    ]

    await Review.insertMany(reviews)
    console.log("Created a review!")
}
const run = async () => {
    await main()
    db.close()
}

run()