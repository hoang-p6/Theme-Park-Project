const RideList = (props) => {

  return(
    <div className="rides">
      <div className="ride-info">
        <h3>{props.name}</h3>
        <img src={props.image} alt='ride'></img>
        <h5>{props.location}</h5>
      </div>
    </div>
  )
}

export default RideList