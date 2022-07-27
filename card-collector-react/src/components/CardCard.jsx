const CardCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.img} alt={props.name} />
      <h3 className="description">Name: {props.name}</h3>
      <h3 className="description">Type: {props.type}</h3>
      <h3 className="description">Effect: {props.effect}</h3>
      <h3 className="description">Rarity in Set: {props.rarity}</h3>
    </div>
  )
}
export default CardCard
