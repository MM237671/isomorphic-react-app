const initialState = {};

function translate(state = initialState, action) {
  switch (action.type) {
    case 'SET_TRANSLATE':
      return { ...state };
    default:
      return state;
  }
}

export default translate;
