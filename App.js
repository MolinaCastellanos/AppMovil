import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput} from 'react-native';


const App = () => {
  
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  return (
    /*
    <View style = {style.container}>
      <Text style = {style.title}>Hello World</Text>
      <Image source = {{uri:'https://picsum.photos/200/200'}}
      style = {style.image}
      />
    </View>

      <Button 
      title = "Presionar aqui"
      color = "#841584"
      onPress={() => console.log("Hello World")}/>

    */
   /*
    <View style = {style.container}>
      <Text style = {style.title}>Hello World</Text>
      <Image source = {{uri:'https://picsum.photos/200/200'}}
      style = {style.image}/>
      <TouchableOpacity
        style = {style.button}
        onPress = {onPress}
      >
          <Text style = {style.buttonText}>Presioname</Text>
      </TouchableOpacity>

    </View>
    */
    <View style = {styles.container}>
      <View style = {styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <Image source = {{uri:'https://picsum.photos/200/200'}}
      style = {styles.image}/>
      <TouchableOpacity
        style = {styles.button}
        onPress = {onPress}
      >
        <Text style = {styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
      <TextInput
        editable
        multiline
        rows={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peach',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize:30},
  image: {height:200, width:200},
  button: {backgroundColor: "blue", padding:7, marginTop:10},
  buttonText: {color: '#fff', fontSize: 20},
  countContainer: {alignItems: 'center', padding: 10},
  textinput: {borderColor: "black", borderWidth: 2}
});

export default App;
