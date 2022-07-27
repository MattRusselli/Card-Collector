import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CardCardDetails from '../components/CardCard'

const CardDetails = () => {
  const [cardDetails, setCardDetails] = useState([])
  let navigate = useNavigate()

  let { cardId } = useParams()

  useEffect(() => {
    const getCardDetails = async () => {
      axios.get(`http://localhost:3001/api/card/${cardId}`).then((res) => {
        setCardDetails(res.data.cards)
      })
    }
    getCardDetails()
  }, [])

  console.log(cardDetails)

  return (
    <div className="carddetails">
      {cardDetails.map((card) => (
        <CardCardDetails
          name={card.name}
          effect={card.effect}
          rarity={card.rarity}
          img={card.img}
          onClick={() => {
            navigate(`/sets/cards/details/${card._id}`)
          }}
        />
      ))}

      {/* <section className="image-container">
        <div>
          {cardDetails != null ? <img src={cardDetails.img} alt="" /> : ``}
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3>{cardDetails != null ? <p>{cardDetails.name}</p> : ``}</h3>
          {cardDetails != null ? cardDetails.description_raw : ``}
        </div>
      </section> */}
    </div>
  )
}

export default CardDetails
