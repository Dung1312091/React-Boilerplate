import {LOGIN, LOGIN_SUCCESS} from '../../constants/actionTypes';
import {takeLatest, put} from 'redux-saga/effects';
function * userLogin(action) {
    console.log('saga run');
    yield put({
        type: LOGIN_SUCCESS,
        payload: 'Quang Dung'
    });
}
export function * watchUserLogin() {
    yield takeLatest(LOGIN, userLogin);
}