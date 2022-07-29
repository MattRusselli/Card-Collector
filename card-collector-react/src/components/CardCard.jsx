const CardCard = (props) => {
  return (
    <div className="cardDetails" onClick={props.onClick}>
      <div className="cardImg">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="description">
        <h3>Name: {props.name} </h3>
        <h3>Type: {props.type}</h3>
        <h3>Effect: {props.effect}</h3>
        <h3>Rarity in Set: {props.rarity}</h3>
      </div>
    </div>
  )
}
export default CardCard
