import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffacd',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
    <View style={styles.container}>
        <Text style={styles.title}>
          TODO List
        </Text>
    </View>
    );
  }
}