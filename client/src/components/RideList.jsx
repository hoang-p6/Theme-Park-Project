import { Link } from 'react-router-dom'
const RideList = (props) => {
  return (
    <Link to={`/getRide/${props.id}`}>
      <div className="rides">
        <div className="ride-info">
          <h3>{props.name}</h3>
          <img src={props.image} alt="ride"></img>
          <h5>{props.location}</h5>
          <Link to={`updateRides/${props.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default RideList
