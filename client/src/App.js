import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import AddRide from './components/AddRide'
import RideDetails from './components/RideDetails'
import axios from 'axios'
import { useState, useEffect } from 'react'
import UpdateRide from './components/UpdateRide'

const App = () => {
  const [rides, setRides] = useState([])

  const getRides = async () => {
    const response = await axios.get(`http://localhost:3001/api/getAllRides`)
    setRides(response.data.rides)
  }
  useEffect(() => {
    getRides()
  }, [])
  return (
    <div className='websiteContainer'>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/createRide" element={<AddRide />} />
            <Route
              path="//getRide/:id"
              element={<RideDetails getRides={getRides} rides={rides} />}
            />
            <Route
              path="/updateRides/:id"
              element={<UpdateRide rides={rides} getRides={getRides} />}
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
