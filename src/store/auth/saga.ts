import * as actionTypes from './types';
import * as actions from './action';
import auth from 'services/auth';
import { call, put, takeLatest } from 'typed-redux-saga';

function* signIn(action: actionTypes.SignInAction) {
  try {
    yield put({ type: actionTypes.SIGN_IN, isLoading: true });
    const response = yield* call(
      auth.login,
      action.payload.username,
      action.payload.password
    );
    if (response) {
      yield put({
        type: actionTypes.SIGN_IN_SUCCESS,
        loggedInUser: {
          avatar: response.photo,
          displayName: response.display_name
        }
      });
    }
  } catch (e: any) {
    yield put({
      type: actionTypes.SIGN_IN_FAILED,
      error: e.response.data.error
    });
    console.log('Error: ', e);
  }
}

function* watchedSagas() {
  yield takeLatest(actions.SignIn, signIn);
}
export default watchedSagas;
