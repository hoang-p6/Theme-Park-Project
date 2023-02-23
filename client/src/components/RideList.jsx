import { Link } from 'react-router-dom'
const RideList = (props) => {
  return (
    <Link to={`/getRide/${props.id}`}>
      <div className="rides">
        <img src={props.image} alt="ride"></img>
        <div className="ride-info">
          <h3 className="ride-title">{props.name}</h3>
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
