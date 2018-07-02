import { all } from 'redux-saga/effects';

import {watchUserLogin} from '../containers/UserProfile/saga';
export default function * rootSaga() {
  yield all([
    watchUserLogin()
  ]);
}
