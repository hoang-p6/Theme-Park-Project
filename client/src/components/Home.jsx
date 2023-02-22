import axios from 'axios'
import AddRide from './AddRide'
import RideList from './RideList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BASE_URL = `http://localhost:3001/api`

const Home = () => {
  const [rides, setRides] = useState([])
  const { id } = useParams()
  const [addingRide, setAddingRide] = useState(false)

  const getRides = async () => {
    const response = await axios.get(`${BASE_URL}/getAllRides`)
    setRides(response.data.rides)
  }
  useEffect(() => {
    const getRides = async () => {
      const response = await axios.get(`${BASE_URL}/getAllRides`)
      setRides(response.data.rides)
    }

    getRides()
  }, [])

  const addRide = () => {
    setAddingRide(true)
  }

  return (
    <div>
      <div className="rides" key={rides._id}>
        {rides.map((ride) => (
          <RideList
            name={ride.name}
            image={ride.image}
            location={ride.location}
            id={ride._id}
            getRides={getRides}
          />
        ))}
      </div>
      <button onClick={addRide} className="addRideButton">
        Add Ride
      </button>
      {addingRide && <AddRide getRides={getRides} />}
    </div>
  )
}

export default Home
