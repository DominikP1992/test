import * as types from '../../types/example/exampleTypes';

export default function(state = { data: [], toggleExample: false }, action) {
  switch (action.type) {
    case types.FETCH_EXAMPLE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case types.TOGGLE_EXAMPLE:
      return {
        ...state,
        toggleExample: !state.toggleExample,
      };
    default:
      return state;
  }
}
