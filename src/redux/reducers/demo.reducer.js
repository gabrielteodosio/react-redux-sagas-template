import * as DemoActions from '../actionsTypes/demo.actions';

const initialState = {
  data: [],
  buttonText: '',
  message: 'Teste',
  showMessage: false,
};

function DemoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DemoActions.FETCH_API_SUCCESS: {
      const { message, showMessage } = action.payload;
      return { ...state, message, showMessage };
    }

    case DemoActions.FETCH_API_ERROR: {
      const { message, showMessage } = action.payload;
      return { ...state, message, showMessage };
    }

    default: {
      return state;
    }
  }
}

export default DemoReducer;
