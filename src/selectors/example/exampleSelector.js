import { createSelector } from 'reselect';
import map from 'lodash/fp/map';
// simple selector

export const getStateData = createSelector(
  state => state.exampleState.data,
  data => map(e => e)(data),
);

export const getFilteredStateData = createSelector(
  state => state.exampleState.data,
  data => map(e => e)(data),
);
