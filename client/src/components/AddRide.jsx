import { useState } from "react"
import axios from 'axios'
import Home from "./Home"

const BASE_URL = `http://localhost:3001/api`

const AddRide = (props) => {

  const initialState = {
    name: '',
    image: '',
    location: '',
    description: '',
    heightRequirement: '',
    topSpeed: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [ride, setRide] = useState()

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
    setRide(formState.ride)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/createRide`, formState)
    setFormState(initialState)
    props.getRides()
  }

  return(
  <div className="ride-form">
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of the Ride</label>
      <input 
      type="text"
      id="name"
      onChange={handleChange}
      value={formState.name}
      />
        <label htmlFor="image">Image URL</label>
      <input 
      type="text"
      id='image'
      onChange={handleChange}
      value={formState.image}
      />
        <label htmlFor="location">Location of the Ride</label>
      <input
      type="text"
      id="location"
      onChange={handleChange}
      value={formState.location}
      />
        <label htmlFor="location">Description of the Ride</label>
      <input
      type="text"
      id="description"
      onChange={handleChange}
      value={formState.description}
      />
        <label htmlFor="location">Height Requirement of the Ride</label>
      <input
      type="text"
      id="heightRequirement"
      onChange={handleChange}
      value={formState.heightRequirement}
      />
        <label htmlFor="location">Top Speed of the Ride</label>
      <input
      type="text"
      id="topSpeed"
      onChange={handleChange}
      value={formState.topSpeed}
      />
      <button className="submit" type='submit'>Submit</button>
    </form>
  </div>
)
}

export default AddRide