import axios from 'axios'

import AddRide from './AddRide'
import RideList from './RideList'
import { useEffect, useState } from 'react'

const BASE_URL = `http://localhost:3001/api`

const Home = () => {
  const [rides, setRides] = useState([])

  const [addingRide, setAddingRide] = useState(false)

  const getRides = async () => {
    const response = await axios.get(`${BASE_URL}/getAllRides`)
    setRides(response.data.rides)
    console.log(response)
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
    <div className="rides" key={rides._id}>
      <h1>Rides</h1>
      {rides.map((ride) => (
        <RideList
          name={ride.name}
          image={ride.image}
          location={ride.location}
          id={ride._id}
          getRides={getRides}
        />
      ))}
      <button onClick={addRide}>Add Ride</button>

      {addingRide && (
        <AddRide getRides={getRides}/>
        
      )}

    </div>
  )
}

export default Home
