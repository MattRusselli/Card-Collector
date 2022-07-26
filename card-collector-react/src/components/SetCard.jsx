const SetCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div>
        <h3>{props.name}</h3>
        <h3> Number of Cards in set: {props.numberCardsSet}</h3>
      </div>
      <div className="img-wrapper">
        <img src={props.img} alt={props.name} />
      </div>
    </div>
  )
}

export default SetCard
