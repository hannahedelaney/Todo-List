import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput, ListView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import SwipeOut from 'react-native-swipeout';

export default class ListItem extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            text: '',
            id: 0,
        }
    }

}