import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style = {style.container}>
      <Text style = {style.title}>Hello World</Text>
      <Image source = {{uri:'https://picsum.photos/200/200'}}
      style = {style.image}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peach',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize:30},
  image: {height:200, width:200}
});

export default App;
