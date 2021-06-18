import { RootState } from '../reducers';
export const loggedInUser = (state: RootState) => {
  return state.auth.loggedInUser;
};
export const isLoading = (state: RootState) => {
  return state.auth.isLoading;
};

export const success = (state: RootState) => {
  return state.auth.success;
};

export const error = (state: RootState) => {
  return state.auth.error;
};
