import objectAssign from 'object-assign';

const initialState = {
  isFetched: false
};

function matchesReducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return {...state};
    default:
      return state;
  }
}

export default matchesReducer;
