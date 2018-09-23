import axios from 'axios'

//ACTION TYPES
const GET_SHOES = 'GET_SHOES'

//ACTION CREATORS
const getShoes = shoes => ({type: GET_SHOES, shoes})

//THUNK CREATORS
export const fetchShoes = moodId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/shoes/${moodId}`)
      dispatch(getShoes(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//REDUCER
export default function(shoes = [], action) {
  switch (action.type) {
    case GET_SHOES:
      return action.shoes
    default:
      return shoes
  }
}
