import { Link } from 'react-router-dom'
const RideList = (props) => {
  return (
    <Link to={`/getRide/${props.id}`} className="ridelist">
      <div className='containerForImageandText'>
        <img src={props.image} alt="ride" className="main-image"></img>
        <div className="ride-title">
          <h2>{props.name}</h2>
          <h3>{props.location}</h3>
          {/* <Link to={`updateRides/${props.id}`}>
          <button>Edit</button>
        </Link> */}
        </div>
      </div>
    </Link>
  )
}

export default RideList
