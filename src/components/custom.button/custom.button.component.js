import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const CustomButton = (props) => {
  const { onPress, title } = props;

  return (
    <TouchableHighlight underlayColor={'cyan'} style={styles.buttonBody} onPress={onPress}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  buttonBody: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default CustomButton;
