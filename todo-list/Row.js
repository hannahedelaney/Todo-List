import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Checkbox from 'react-native-checkbox';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fffacd',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
        color: 'black',
    },
    textContainer: {
        alignItems: 'flex-start',
        backgroundColor: '#fffacd',
        width: 275,
    },
});

export default class Row extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={styles.mainContainer}>
                <Checkbox label='' isChecked={false}/>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.props.task}</Text>
                </View>
            </View>
        );
    }
}