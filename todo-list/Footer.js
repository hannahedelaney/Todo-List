import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#fffacd',
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

var myTask;

export default class Footer extends React.Component {
  render() {
    return(
      <View style={styles.buttonContainer}>
        {this.props.clearButton}
      </View>
    );
  }
}