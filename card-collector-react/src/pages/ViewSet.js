import { useEffect, useState } from 'react'
import axios from 'axios'
import CardCard from '../components/CardCard'
import { useNavigate } from 'react-router-dom'

const ViewSet = () => {
  const [setss] = useState([])
  const [viewCard, setViewCard] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3001/api/card/`).then((res) => {
      console.log(res.data.cards)
      setViewCard(res.data.cards)
    })
  }, [setss])

  return (
    <div className="container-grid">
      {viewCard.map((card) => (
        <CardCard
          key={card.img}
          img={card.img}
          name={card.name}
          type={card.type}
          effect={card.effect}
          rarity={card.rarity}
        />
      ))}
    </div>
  )
}
export default ViewSet
