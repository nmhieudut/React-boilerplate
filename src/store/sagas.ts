import { all, fork } from 'redux-saga/effects'
import authSaga from 'store/auth/saga'

export default function* rootSagas() {
  yield all([fork(authSaga)])
}
