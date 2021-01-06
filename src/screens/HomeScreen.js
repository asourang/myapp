import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const HomeScreen =  props => {
  console.log(props);
  
  return <View style={styles.container}>
      <Button 
         
          title   = "Welcome!"
          onPress = {()=> props.navigation.navigate("Login")}
          />
          
          </View >
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    top: '40%'

  },
  text: {
    fontSize: 100,
    fontWeight: 'bold'
  }
});