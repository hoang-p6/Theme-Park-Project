import { useState } from "react"

const BASE_URL = `http://localhost:3001`

const AddRide = () => {

  const initialState = {
    name: '',
    image: '',
    location: '',
  }

  const [formState, setFormState] = useState(initialState)

  const [ride, setRide] = useState()

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
    setRide(formState.ride)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}`, formState)
    setFormState(initialState)
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
      <button className="submit" type='submit'>Submit</button>
    </form>
  </div>
)
}

export default AddRide