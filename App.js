import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';


import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  constructor(){
    super()
    this.state={inputText:"",displayText:""}
  }
  
  render(){
  return (
    <View style={styles.container}>
      <Header backgroundColor={"red"} centerComponent={{
        text:"MonkeyChunkey",style:{color:"white",fontSize:20}
      }}/>
      <TextInput 
      style={styles.inputBox}
      onChangeText={(text)=>{
        this.setState({inputText:text})
      }}
      />
      <TouchableOpacity style={styles.goButton} onPress={()=>{
        this.setState({
          displayText:this.state.inputText
        })
      }}>
        <Text style={styles.buttonText}>
          SUBMIT
        </Text>
      </TouchableOpacity>
      <Text style={styles.displayText}>
        {this.state.displayText}
      </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#b8b8b8', }, inputBox: { marginTop: 200, width: '80%', alignSelf: 'center', height: 40, textAlign: 'center', borderWidth: 4  }, goButton: { width: '50%', height: 55, alignSelf: 'center', padding: 10, margin: 10, }, buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold', }, displayText: { textAlign: 'center', fontSize: 30, }, });
