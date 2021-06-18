import authReducer from 'store/auth/reducer';
import { combineReducers } from 'redux';

export const rootState = combineReducers({
  auth: authReducer
});
export type RootState = ReturnType<typeof rootState>;