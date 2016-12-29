export function set(data) {
  return dispatch => {
    dispatch({
      type: 'SET_ARTISTS',
      data
    });
  };
}
