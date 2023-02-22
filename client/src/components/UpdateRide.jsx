import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UpdateRide = ({ rides, getRides }) => {
  let { id } = useParams()
  let navigate = useNavigate()

  const [formState, setFormState] = useState('')
  let foundRide = rides.filter((ride) => {
    return ride._id === id
  })
  const findRide = () => {
    setFormState(foundRide[0])
    console.log(formState)
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let updatedRide = {
      name: formState.name,
      image: formState.image,
      location: formState.location
    }
    await axios.put(`http://localhost:3001/api/updateRides/${id}`, updatedRide)
    foundRide[0] = updatedRide
    setFormState('')
    navigate(`/getRide/${id}`)
    getRides()
  }
  useEffect(() => {
    findRide()
  }, [])
  return (
    <>
      <div>
        {formState && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              onChange={handleChange}
              value={formState.name}
            ></input>
            <label htmlFor="image">Image URL:</label>
            <input
              id="image"
              type="text"
              onChange={handleChange}
              value={formState.image}
            ></input>
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              onChange={handleChange}
              value={formState.location}
            ></input>
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>
    </>
  )
}

export default UpdateRide
