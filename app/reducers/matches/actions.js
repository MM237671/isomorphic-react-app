import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';


export function test() {
  return dispatch => {
    dispatch({
      type: 'TEST',
      data: { TEST: false }
    });
  };
}
