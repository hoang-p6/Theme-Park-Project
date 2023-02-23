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
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let updatedRide = {
      name: formState.name,
      image: formState.image,
      location: formState.location,
      description: formState.description,
      heightRequirement: formState.heightRequirement,
      topSpeed: formState.topSpeed
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
      <div className="edit-form-container">
        {formState && (
          <form onSubmit={handleSubmit} className="edit-form">
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
            <label htmlFor="location">Description:</label>
            <textarea
              id="description"
              type="text"
              cols="30"
              rows="8"
              onChange={handleChange}
              value={formState.description}
            />
            <label htmlFor="location">Height Requirement:</label>
            <input
              id="heightRequirement"
              type="text"
              onChange={handleChange}
              value={formState.heightRequirement}
            />
            <label htmlFor="location">Top Speed:</label>
            <input
              id="topSpeed"
              type="text"
              onChange={handleChange}
              value={formState.topSpeed}
            />
            <button type="submit" className="submit-button">
              Save
            </button>
          </form>
        )}
      </div>
    </>
  )
}

export default UpdateRide
