import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Header from '../components/Header'

export default function AboutScreen(){
  return (
    <>
      <Header text="About" />
      <View style={styles.containerStyle}>
        <View style={styles.infoWrapperStyle}>
          <Text style={styles.title}>Developed by:</Text>
          <Text style={styles.name}>Udeshya Dhungana</Text>
          <Text style={styles.description}>075BCT095</Text>
          <Text style={styles.description}>Pulchowk Campus</Text>
          <Text style={styles.description}>IOE, Tribhuvan University</Text>
        </View>
      </View>
    </>
  )
}

let styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#eeeeee",
  },
  infoWrapperStyle: {
    textAlign: "left",
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 5,
    paddingHorizontal: 30,
    marginBottom: 125,
    backgroundColor: "#ffffff",
  },
  title: {
    fontWeight: "bold",
    textAlign: "right",
    fontFamily: "serif",
    marginVertical: 5,
  },
  name: {
    fontWeight: "bold",
    textAlign: "right",
    marginVertical: 5,
    fontFamily: "serif",
    fontSize: 20,
  },
  description: {
    marginVertical: 2,
    textAlign: "right",
  }
});
