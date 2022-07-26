const CardCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.img} alt={props.name} />
    </div>
  )
}
export default CardCard
