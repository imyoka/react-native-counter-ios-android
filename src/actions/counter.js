import { createAction } from 'redux-actions'

export const increment= createAction('INCREMENT_COUNTER')
export const decrement= createAction('DECREMENT_COUNTER')

export function incrementIfOdd() {
  return (dispatch, getState) => {
    var { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
};

export function incrementAsync(delay) {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
};

export function decrementAsync(delay) {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(decrement());
    }, delay);
  };
};