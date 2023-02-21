const db = require('../db')
const Ride= require('../models/ride')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const ride = [
        {
          name: "goliath",
          image: "https://imgur.com/Eip2F9b",
          location: "sixflags",
        } 
    ]

    await Ride.insertMany(ride)
    console.log("Created a ride!")
}
const run = async () => {
    await main()
    db.close()
}

run()