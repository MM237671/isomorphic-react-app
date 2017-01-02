export function set(data) {
  return dispatch => {
    dispatch({
      type: 'SET_PLACES',
      data
    });
  };
}
