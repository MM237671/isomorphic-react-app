const initialState = [];

function artists(state = initialState, action) {
  switch (action.type) {
    case 'SET_ARTISTS':
      return { ...state };
    default:
      return state;
  }
}

export default artists;
