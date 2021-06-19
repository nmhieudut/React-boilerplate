import { LSManager } from './../../core/utils/localstoragemanager'
import * as actionTypes from './types'
import * as actions from './action'
import { login } from 'services/auth'
import { call, put, takeLatest } from 'typed-redux-saga'

function* signIn(action: actionTypes.SignInAction) {
  try {
    yield put({ type: actionTypes.SIGN_IN, isLoading: true })
    const response = yield* call(
      login,
      action.payload.username,
      action.payload.password
    )
    if (response) {
      yield put({
        type: actionTypes.SIGN_IN_SUCCESS,
        loggedInUser: {
          avatar: response.photo,
          displayName: response.display_name,
        },
      })
      LSManager.setToken(response.token)
    }
  } catch (e: any) {
    yield put({
      type: actionTypes.SIGN_IN_FAILED,
      error: e.response.data.error,
    })
    console.log('Error: ', e)
  }
}

function* watchedSagas() {
  yield takeLatest(actions.SignIn, signIn)
}
export default watchedSagas
