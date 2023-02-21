import axios from 'axios'
import RideList from './RideList'
import { useEffect, useState } from "react"
const BASE_URL = `http://localhost:3001`


const Home = () => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async () => {
      const response = await axios.get(`${BASE_URL}/getAllRides`)
      console.log(response)
    }
    getRides()
  }, [])


  return (
    <div className='rides' key={rides._id}>
      <h1>Rides</h1>
      {rides.map((ride) => (
      <RideList name={ride.name} image={ride.image} location={ride.location} />
      ))}
    </div>
  )
}

export default Home