import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Demo from './screens/demo';
import configureStore from './redux/store';

const store = configureStore();

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Demo />
      </Provider>
    );
  }
}

export default App;
