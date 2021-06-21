import { LSManager } from './../../core/utils/localstoragemanager'
import * as actionTypes from './types'
import { loginCall } from 'services/auth'
import { call } from 'typed-redux-saga'
import { put, takeLatest } from 'redux-saga/effects'

function* login(action: actionTypes.SignInActionType) {
  try {
    const data: any = yield* call(
      loginCall,
      action.payload.username,
      action.payload.password
    )
    if (data) {
      yield put({
        type: actionTypes.SIGN_IN_SUCCESS,
        loggedInUser: {
          avatar: data.photo,
          displayName: data.display_name,
        },
      })
      LSManager.setToken(data.token)
    }
    return
  } catch (e: any) {
    yield put({
      type: actionTypes.SIGN_IN_FAILED,
      error: e.response.data.error,
    })
    console.log('Error: ', e)
  }
}

function* watchedSagas() {
  yield takeLatest(actionTypes.SIGN_IN, login)
}
export default watchedSagas
