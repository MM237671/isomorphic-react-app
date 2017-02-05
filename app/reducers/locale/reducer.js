const initialState = [];

function locale(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCALE':
      return { locale: action.data.locale };
    default:
      return state;
  }
}

export default locale;
