import { takeLatest, put } from 'redux-saga/effects';

import * as demoActionCreator from '../actionCreators/demo.action.creator';
import * as demoAction from '../actionsTypes/demo.actions';

function* fetchApi(action) {
  yield put(demoActionCreator.fetchApiSuccess('Deu bom', true));
}

export function* fetchApiSaga() {
  yield takeLatest(demoAction.FETCH_API, fetchApi);
}
