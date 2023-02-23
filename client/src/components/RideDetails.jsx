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
    <div>
      {thisRide && (
        <div>
          <img src={thisRide.image}></img>
          <h1>{thisRide.name}</h1>
          <h3>Location: {thisRide.location}</h3>
          <h3>topSpeed: {thisRide.topSpeed}</h3>
          <h3>heightRequirement: {thisRide.heightRequirement} </h3>
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
