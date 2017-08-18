import { handleActions } from 'redux-actions'

const initialState = 0

export default handleActions({
    'INCREMENT_COUNTER': {
      next: (state, action) => state + 1 ,
      throw: (state, action) => {
        console.log('error', action);
      }
    },
    'DECREMENT_COUNTER': {
      next: (state, action) => state - 1 ,
      throw: (state, action) => {
        console.log('error', action);
      }
    }
}, initialState)
