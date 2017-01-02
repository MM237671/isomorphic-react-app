const initialState = [];

function places(state = initialState, action) {
  switch (action.type) {
    case 'SET_PLACES':
      return { ...state };
    default:
      return state;
  }
}

export default places;
