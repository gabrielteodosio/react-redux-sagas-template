import { all } from 'redux-saga/effects';
import { fetchApiSaga } from '../sagas/demo.sagas';

export default function* rootSaga() {
  yield all([
    fetchApiSaga(),
  ]);
}
