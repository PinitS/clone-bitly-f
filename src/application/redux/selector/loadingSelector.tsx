import { createSelector } from 'reselect';

const setLoadingSelector = (state: { setLoading: any }) => state.setLoading;
export const selectLoading = createSelector(
  [setLoadingSelector],
  ({ isLoading }) => isLoading
);