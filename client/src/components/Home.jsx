import axios from 'axios'
import AddRide from './AddRide'
import RideList from './RideList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BASE_URL = `http://localhost:3001/api`

const Home = () => {
  const [rides, setRides] = useState([])
  const [reviews, setReviews] = useState([])

  const { id } = useParams()

  const [addingRide, setAddingRide] = useState(false)

  const getRides = async () => {
    const response = await axios.get(`${BASE_URL}/getAllRides`)
    setRides(response.data.rides)
  }
  const getReviews = async () => {
    const response = await axios.get(
      'http://localhost:3001/api/getReview/63f5998c1e6c6e8a5670cd64'
    )
    setReviews(response.data.reviews)
  }
  useEffect(() => {
    getRides()
  }, [])

  const addRide = () => {
    setAddingRide((current) => !current)
  }

  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/deleteRides/${id}`)
    getRides()
  }

  return (
    <div className="rides">
      {rides.map((ride) => (
        <div key={ride._id}>
          <RideList
            name={ride.name}
            image={ride.image}
            location={ride.location}
            id={ride._id}
            getRides={getRides}
            getReviews={getReviews}
          />

          <button onClick={() => handleDelete(ride._id)}>Delete</button>
        </div>
      ))}
      <button onClick={addRide}>Add Ride</button>

      {addingRide && <AddRide getRides={getRides} />}
    </div>
  )
}

export default Home
