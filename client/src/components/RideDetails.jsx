import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Reviews from './Reviews'

const RideDetails = ({ rides, reviews, getReviews, getRides }) => {
  const { id } = useParams()
  const [thisRide, setThisRide] = useState(rides)
  const selectRide = () => {
    setThisRide(rides.find((ride) => ride._id === `${id}`))
  }
  console.log(thisRide)
  useEffect(() => {
    selectRide()
  })
  const rideReviews = thisRide?.reviews?.map((review) => {
    return (
      <div>
        <p>{review.reviewName}</p>
        <p>Ride Rating: {review.rating}</p>
        <p>Additional Comments: {review.comments}</p>
      </div>
    )
  })
  return (
    <div>
      {thisRide && (
        <div>
          <h1>{thisRide.name}</h1>
          <img src={thisRide.image} />
          <h3>Location: {thisRide.location}</h3>
          <h2>Ride Reviews</h2>
          {rideReviews}
        </div>
      )}
      <Reviews
        reviews={reviews}
        getReviews={getReviews}
        id={id}
        getRides={getRides}
      />
    </div>
  )
}

export default RideDetails
