import '../App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Collections = () => {
  const [lists, setList] = useState([])
  const initialState = {
    name: '',
    set: '',
    rarity: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [submitted, setSubmitted] = useState(true)

  useEffect(() => {
    const getSetList = async () => {
      try {
        if (submitted) {
          let res = await axios.get('http://localhost:3001/api/card/')
          setList(res.data.cards)
          setSubmitted(false)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getSetList()
  }, [submitted])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/api/card/', formState)
    console.log(res.data.card)
    console.log(formState)
    setFormState(initialState)
    setSubmitted(true)
    event.target.reset()
  }

  const handleDelete = async (_id) => {
    const res = await axios
      .delete(`http://localhost:3001/api/card/${_id}`)
      .catch((error) => console.log(error))
    console.log(res.data.cards)
  }

  const deleteCard = async (item) => {
    let index = lists.indexOf(item)
    let temp = [...lists]
    temp.splice(index, 1)
    setList(temp)
  }

  const handleUpdate = async (_id, name, set, rarity) => {
    const res = await axios
      .put(`http://localhost:3001/api/card/${_id}`, { name, set, rarity })
      .catch((error) => console.log(error))
    console.log(res.data.cards)
  }

  //   const updateCard = async (item) => {
  //     let index = lists.indexOf(item)
  //     let temp = [...lists]
  //     temp.splice(index, 1)
  //     setList(temp)
  //   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formState.subject}
        />
        <label htmlFor="set">Set:</label>
        <input
          type="text"
          id="set"
          onChange={handleChange}
          value={formState.subject}
        />
        <label htmlFor="rarity">Rarity:</label>
        <input
          type="text"
          id="rarity"
          onChange={handleChange}
          value={formState.subject}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <h1>Collection:</h1>
        {lists.map((list) => (
          <div key={list._id}>
            <h3>Name: {list.name}</h3>
            <p>Set: {list.set}</p>
            <p>Rarity: {list.rarity}</p>
            <button
              onClick={() => {
                handleDelete(list._id)
                deleteCard(list)
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleUpdate(list._id)
                // updateCard(list)
              }}
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Collections
