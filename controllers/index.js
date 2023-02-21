const Ride = require('../models/ride')
const Reviews = require('../models/reviews')

const getAllRides = async (req, res) => {
    try {
        const rides = await Ride.find()
        return res.status(200).json({ rides })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Reviews.find()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRidesById = async (req, res) => {
    try {
        const { id } = req.params;
        const ride = await Ride.findById(id)
        if (ride) {
            return res.status(200).json({ ride });
        }
        return res.status(404).send('Ride with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getReviewsById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Reviews.findById(id)
        if (review) {
            return res.status(200).json({ review });
        }
        return res.status(404).send('Review with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createRide = async (req, res) => {
    try {
        const ride = await new Ride(req.body)
        await ride.save()
        return res.status(201).json({
            ride,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createReview = async (req, res) => {
    try {
        const review = await new Reviews(req.body)
        await review.save()
        return res.status(201).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateRide = async (req, res) => {
    try {
        const ride = await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(ride)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateReview = async (req, res) => {
    try {
        const review = await Reviews.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(review)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteRide = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Ride.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Ride deleted");
        }
        throw new Error("Ride not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Reviews.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Review deleted");
        }
        throw new Error("Reviews not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {

    getAllRides,
    getAllReviews,
    getRidesById,
    getReviewsById,
    createRide,
    createReview,
    updateRide,
    updateReview,
    deleteRide,
    deleteReview,
}