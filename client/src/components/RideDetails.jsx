import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Reviews from './Reviews'

const RideDetails = ({ rides, reviews, getReviews }) => {
  const { id } = useParams()
  const [thisRide, setThisRide] = useState(rides)
  const selectRide = () => {
    setThisRide(rides.find((ride) => ride._id === `${id}`))
  }

  useEffect(() => {
    selectRide()
  })
  return (
    <div>
      {thisRide && (
        <div>
          <h1>{thisRide.name}</h1>
          <img src={thisRide.image} />
          <h1>{thisRide.location}</h1>
          <h1>{thisRide.reviews}</h1>
        </div>
      )}
      <Reviews reviews={reviews} getReviews={getReviews} />
    </div>
  )
}

export default RideDetails