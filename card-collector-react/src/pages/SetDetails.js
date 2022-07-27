import { useEffect, useState } from 'react'
import axios from 'axios'
import SetCard from '../components/SetCard'
import { useNavigate } from 'react-router-dom'

const SetDetails = () => {
  const [setDetails, setSetDetails] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getSetDetails = async () => {
      await axios.get(`http://localhost:3001/api/set`).then((res) => {
        console.log(res.data.sets)
        setSetDetails(res.data.sets)
      })
    }
    console.log(setDetails)
    getSetDetails()
  }, [])

  return (
    <div>
      <div className="set-results container-grid">
        {setDetails.map((set) => (
          <SetCard
            key={set.name}
            name={set.name}
            numberCardsSet={set.numberCardsSet}
            img={set.img}
            onClick={() => {
              navigate(`/sets/cards/${set._id}/`)
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default SetDetails
