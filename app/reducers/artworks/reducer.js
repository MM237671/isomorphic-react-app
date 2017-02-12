const initialState = [];

function artworks(state = initialState, action) {
  switch (action.type) {
    case 'SET_ARTWORKS':
      return { ...state };
    default:
      return state;
  }
}

export default artworks;
