import { useState } from 'react'
import axios from 'axios'

const Reviews = ({ reviews, getReviews, id, getRides }) => {
  const initialState = {
    reviewName: '',
    rating: "1",
    comments: ''

  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(
      `http://localhost:3001/api/ride/${id}/createReview`,
      formState
    )
    getRides()
    setFormState(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="reviews">
        <h3>Add a Review</h3>
        <label htmlFor="reviewName">Name:</label>
        <input
          id="reviewName"
          type="text"
          onChange={handleChange}
          value={formState.reviewName}
        ></input>

        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          onChange={handleChange}
          value={formState.rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
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
