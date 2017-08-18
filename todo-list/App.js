import React, {Component, PropTypes} from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput, 
  ListView, TouchableOpacity, KeyboardAvoidingView, Navigator, } from 'react-native';
import Row from './Row';
import Header from './Header';
import Swipeout from 'react-native-swipeout';
import Checkbox from 'react-native-checkbox';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      text: '',
      items: [],
      dataSource: ds.cloneWithRows([]),
    };
  }

  insertItem(){
    if (this.state.text != '') {
      var tempList = this.state.items;
      tempList.push(this.state.text);
      this.setState({
        text: '',
        items: tempList,
        dataSource: this.state.dataSource.cloneWithRows(tempList)
      });
    }
  }

  removeItem() {
    for (var i=0; i<this.state.items.length; i++){
      if (this.state.text === this.state.items[i]) {
        var tempList = this.state.items.slice();
        var indexToRemove = this.state.items.indexOf(this.state.text);
        tempList.splice(indexToRemove, 1);
        this.setState({
          items: tempList,
          text: '',
          dataSource: this.state.dataSource.cloneWithRows(tempList)
        });
      }
    }
  }

  clearList() {
    this.setState({
      items: [],
      text: '',
      dataSource: this.state.dataSource.cloneWithRows([])
    });
  }

  clearText() {
    this._textInput.setNativeProps({text: ''});
  }

  renderRows(rowData, sectionId, rowId) {
    return(
    <Swipeout autoClose={true} onOpen={()=>this.setState({text: this.state.items[rowId]})} 
      right={[{text: 'Delete', backgroundColor: 'red', onPress: ()=>{this.removeItem()} }]}>
      <Row task={rowData} />
    </Swipeout>
    );
  }

  renderMyFooter() {
    return(
      <Footer clearButton={
        <TouchableOpacity 
          onPress={() => {this.clearList(); this.clearText()}}>
          <Text style={styles.footerButtonText}>Clear List</Text>
        </TouchableOpacity>} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionId, rowId) => this.renderRows(rowData, sectionId, rowId)}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={() => <Header />}
          renderFooter={() => this.renderMyFooter()}
        />
        <KeyboardAvoidingView behavior='padding'>
          <View style={styles.textInputContainer}>
            <TextInput 
              style={styles.textInput}
              multiline={true}
              placeholder='type task...' 
              placeholderTextColor= 'grey'
              onChangeText={(task) => this.setState({text: task})}
              ref={component => this._textInput = component}
            />
            <View style={styles.buttonPadding}>
              <TouchableOpacity style={styles.button} 
                onPress={() => {this.insertItem(); this.clearText()}}>
                <Text style={styles.buttonText}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffacd',
    paddingTop: 5,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  textInputContainer: {
    padding: 10,
    backgroundColor:'#dcdcdc',
    height: 60,
    borderWidth: .5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    padding: 10,
    flex: 1,
    backgroundColor:'white',
    height: 40,
    borderWidth: .5,
    borderRadius: 3,
    fontSize: 18,
  },
  button: {
    backgroundColor: 'skyblue',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPadding: {
    backgroundColor: '#dcdcdc',
    padding: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
  footerButtonText: {
    color: 'blue',
    fontSize: 15,
  },
});