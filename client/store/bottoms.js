import axios from 'axios'

//ACTION TYPES
const GET_BOTTOMS = 'GET_BOTTOMS'

//ACTION CREATORS
const getBottoms = bottoms => ({type: GET_BOTTOMS, bottoms})

//THUNK CREATORS
export const fetchBottoms = moodId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/bottoms/${moodId}`)
      dispatch(getBottoms(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//REDUCER
export default function(bottoms = [], action) {
  switch (action.type) {
    case GET_BOTTOMS:
      return action.bottoms
    default:
      return bottoms
  }
}
