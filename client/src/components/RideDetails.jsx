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
        {review.reviewName}
        {review.rating}
        {review.comments}
      </div>
    )
  })
  return (
    <div>
      {thisRide && (
        <div>
          <h1>{thisRide.name}</h1>
          <img src={thisRide.image} />
          <h1>{thisRide.location}</h1>
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
