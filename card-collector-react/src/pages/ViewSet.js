import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardCard from '../components/CardCard'
import { useNavigate } from 'react-router-dom'

const ViewSet = () => {
  const [set] = useState([])
  const [viewCard, setViewCard] = useState([])
  let { setId } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3001/api/card/${setId}`).then((res) => {
      console.log(res.data.cards)
      setViewCard(res.data.cards)
    })
  }, [set])

  return (
    <div className="container-grid">
      {viewCard.map((card) => (
        <CardCard
          img={card.img}
          onClick={() => {
            navigate(`/sets/cards/details`)
          }}
        />
      ))}
    </div>
  )
}
export default ViewSet
