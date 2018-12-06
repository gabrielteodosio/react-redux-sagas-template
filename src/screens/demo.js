import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Text } from 'react-native';

import CustomButton from '../components/custom.button/custom.button.component';
import * as demoActionCreators from '../redux/actionCreators/demo.action.creator';

class Demo extends Component {
  render = () => {
    console.log('Demo props -=-=-=-==-=', this.props);
    console.log('actions --=-=', this.props.actions);

    const { actions, demoState } = this.props;

    return (
      <View style={styles.container}>
        <CustomButton
          title={'Clica ai'}
          onPress={() => actions.fetchApi()}
        />
        {demoState.showMessage && (
          <Text style={styles.welcome}>
            {demoState.message}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const bindActions = dispatch => {
  return {
    actions: bindActionCreators({ ...demoActionCreators }, dispatch),
  };
};

const mapStateToProps = state => ({
  demoState: state.demo,
});

export default connect(mapStateToProps, bindActions)(Demo);
