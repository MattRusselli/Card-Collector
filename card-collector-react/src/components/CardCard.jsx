const CardCard = (props) => {
  return (
    <div className="cardDetails" onClick={props.onClick}>
      <div className="cardImg">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="description">
        <h3 className="cardName">Name: {props.name} </h3>
        <h3 className="cardType">Type: {props.type}</h3>
        <h3 className="cardEffect">Effect: {props.effect}</h3>
        <h3 className="cardRarity">Rarity in Set: {props.rarity}</h3>
      </div>
    </div>
  )
}
export default CardCard
