import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'

function Header({text}:{text: string}){
  return (
    <>
      <StatusBar backgroundColor="#000" />
      <View style={styles.viewStyle}>
        <Text style={styles.headerText}>
          {text}
        </Text>
      </View>
    </>
  );
}

let styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#eee",
  },
  headerText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: "6%",
    paddingTop: 15,
    marginBottom: 15,
  }
});

export default Header;
