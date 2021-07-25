/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {

  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {


  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming with Anjana</Text>
      <Button title="Youtube Channel" onPress={() => {Linking.openURL('https://youtube.com')}}></Button>

    </View>
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,

  }

});

export default App;
