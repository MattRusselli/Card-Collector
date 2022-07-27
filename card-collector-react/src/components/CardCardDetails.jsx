const CardCardDetails = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <h3>{props.effect}</h3>
      <h3>{props.rarity}</h3>
    </div>
  )
}
export default CardCardDetails
