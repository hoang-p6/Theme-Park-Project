import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Reviews from './Reviews'

const RideDetails = ({ rides, reviews, getReviews, getRides }) => {
  const { id } = useParams()
  const [thisRide, setThisRide] = useState(rides)
  const selectRide = () => {
    setThisRide(rides.find((ride) => ride._id === `${id}`))
  }

  useEffect(() => {
    selectRide()
  })

  const rideReviews = thisRide?.reviews?.map((review) => {
    const handleDelete = async () => {
      await axios.delete(
        `http://localhost:3001/api/deleteReviews/${review._id}`
      )
      getRides()
    }
    return (
      <div key={review._id}>
        <div>
          <p>{review.reviewName}</p>
          <p>Ride Rating: {review.rating}</p>
          <p>Additional Comments: {review.comments}</p>
          <button onClick={() => handleDelete(review._id)}>Delete</button>
        </div>
      </div>
    )
  })

  return (
    <div className="reviewPageContainer">
      {thisRide && (
        <div className="rideDetailsContainer">
          <img className="reviewImg" src={thisRide.image}></img>
          <div className="descriptionContainer">
            <h1 className="reviewTitle">{thisRide.name}</h1>
            <h3>
              <span class="material-symbols-outlined">location_on</span>
              Location: {thisRide.location}
            </h3>
            <h3>
              <span class="material-symbols-outlined">speed</span>topSpeed:{' '}
              {thisRide.topSpeed}
            </h3>
            <h3>
              <span class="material-symbols-outlined">boy</span>
              Height Requirement: {thisRide.heightRequirement}{' '}
              <h4>{thisRide.description}</h4>
            </h3>
            <h2>Ride Reviews</h2>
            {rideReviews}
          </div>
        </div>
      )}
      <div className="rideReviewsContainer">
        <Reviews
          reviews={reviews}
          getReviews={getReviews}
          id={id}
          getRides={getRides}
        />
      </div>
    </div>
  )
}

export default RideDetails
