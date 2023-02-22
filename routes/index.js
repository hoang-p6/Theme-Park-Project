const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/getAllRides', controllers.getAllRides)
router.post('/createRide', controllers.createRide)
router.put('/updateRides/:id', controllers.updateRide)
router.delete('/deleteRides/:id', controllers.deleteRide)

router.get('/getAllReviews', controllers.getAllReviews)
router.post('/ride/:id/createReview', controllers.createReview)
router.put('/updateReviews/:id', controllers.updateReview)
router.delete('/deleteReviews/:id', controllers.deleteReview)

router.get('/getRide/:id', controllers.getRidesById)
router.get('/getReview/:id', controllers.getReviewsById)

module.exports = router
