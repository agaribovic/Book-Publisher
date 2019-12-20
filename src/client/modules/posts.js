import axios from 'axios'

// Initial state
const initialState = []

// Actions
const LOAD = 'posts/LOAD'

// Reducer
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case `${LOAD}_FULFILLED`: {
      return [...action.payload.data]
    }
    default: return state
  }
}

// Action Creators
export function loadPosts () {
  return dispatch => {
    return dispatch({
      type: LOAD,
      payload: axios.get('/api/posts')
    })
  }
}
