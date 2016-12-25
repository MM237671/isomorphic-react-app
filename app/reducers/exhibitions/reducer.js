const initialState = [];

function matchesReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_EXIBITIONS':
      return { ...state };
    default:
      return state;
  }
}

export default matchesReducer;
