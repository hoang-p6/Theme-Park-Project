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

    getRides()
  }, [])

  const addRide = () => {
    setAddingRide((current) => !current)
  }

  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/deleteRides/${id}`)
    getRides()
  }

  // console.log("Hello", handleDelete())
  return (

    <div className="rides">
      <h1>Rides</h1>
      {rides.map((ride) => (
        <div key={ride._id}>
          <RideList
            name={ride.name}
            image={ride.image}
            location={ride.location}
            id={ride._id}
            getRides={getRides}
          />

        <button onClick={() => handleDelete(ride._id)}>Delete</button>
        </div>
      ))}
      <button onClick={addRide}>Add Ride</button>

      {addingRide && (
        <AddRide getRides={getRides} />

      )}


    </div>
  )
}

export default Home
