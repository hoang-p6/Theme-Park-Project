import { useState } from 'react'
import axios from 'axios'

const Reviews = ({ reviews, getReviews }) => {
  const initialState = ''
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/createReview', formState)
    console.log(formState)
    setFormState(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="reviews">
        <h1>Reviews</h1>
        <label htmlFor="reviewName">Name:</label>
        <input
          id="reviewName"
          type="text"
          onChange={handleChange}
          value={formState.reviewName}
        ></input>

        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="text"
          onChange={handleChange}
          value={formState.rating}
        ></input>

        <label htmlFor="comments">Comments:</label>
        <input
          id="comments"
          type="text"
          onChange={handleChange}
          value={formState.comments}
        ></input>

        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Reviews
