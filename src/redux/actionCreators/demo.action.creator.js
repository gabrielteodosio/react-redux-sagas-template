import * as DemoActions from '../actionsTypes/demo.actions';

export function fetchApi() {
  return {
    type: DemoActions.FETCH_API,
    payload: {},
  };
};

export function fetchApiSuccess(message, flag) {
  return {
    type: DemoActions.FETCH_API_SUCCESS,
    payload: {
      message,
      showMessage: flag,
    },
  };
}

export function fetchApiError(message, flag) {
  return {
    type: DemoActions.FETCH_API_ERROR,
    payload: {
      message,
      showMessage: flag,
    },
  };
}
