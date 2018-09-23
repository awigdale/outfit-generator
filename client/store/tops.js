import axios from 'axios'

//ACTION TYPES
const GET_TOPS = 'GET_TOPS'

//ACTION CREATORS
const getTops = tops => ({type: GET_TOPS, tops})

//THUNK CREATORS
export const fetchTops = moodId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/tops/${moodId}`)
      dispatch(getTops(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//REDUCER
export default function(tops = [], action) {
  switch (action.type) {
    case GET_TOPS:
      return action.tops
    default:
      return tops
  }
}
