import axios from 'axios';

import * as types from '../../types/example/exampleTypes';

const URL =
  'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

function fetchExampleDataRequest() {
  return {
    type: types.FETCH_EXAMPLE_DATA_REQUEST,
  };
}

function fetchExampleDataSuccess(fetchedData) {
  return {
    type: types.FETCH_EXAMPLE_DATA_SUCCESS,
    payload: { data: fetchedData },
  };
}

function fetchExampleDataFailure() {
  return {
    type: types.FETCH_EXAMPLE_DATA_FAILURE,
  };
}

export function fetchExampleData() {
  return dispatch => {
    dispatch(fetchExampleDataRequest());
    return axios.get(`${URL}`).then(res => {
      console.log(res);
      if (res.status === 200) {
        return dispatch(fetchExampleDataSuccess(res.data));
      }
      dispatch(fetchExampleDataFailure());
      return false;
    });
  };
}

export function toggleExample() {
  return {
    type: types.TOGGLE_EXAMPLE,
  };
}
