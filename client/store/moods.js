import axios from 'axios'

//ACTION TYPES
const GET_MOODS = 'GET_MOODS'
const SELECT_MOOD = 'SELECT_MOOD'
const RESET_MOOD = 'RESET_MOOD'

//INITIAL STATE
const initialState = {
  moods: [],
  selectedMood: {}
}

//ACTION CREATORS
const getMoods = moods => ({type: GET_MOODS, moods})
export const selectMood = mood => ({type: SELECT_MOOD, mood})
export const resetMood = () => ({type: RESET_MOOD})

//THUNK CREATORS
export const fetchMoods = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/mood`)
      dispatch(getMoods(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOODS:
      return {...state, moods: action.moods}
    case SELECT_MOOD:
      return {...state, selectedMood: action.mood}
    case RESET_MOOD:
      return {...state, selectedMood: {}}
    default:
      return state
  }
}
