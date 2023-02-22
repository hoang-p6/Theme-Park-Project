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
      await axios.delete(`http://localhost:3001/api/deleteReviews/${review._id}`)
      getRides()
    }
    return (
      <div key={review._id}>
        <div>
          {review.reviewName}
          {review.rating}
          {review.comments}
          <button onClick={() => handleDelete(review._id)}>Delete</button>
        </div>
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
