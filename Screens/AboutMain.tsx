import React from 'react'
import {Linking, View, Text, StyleSheet} from 'react-native'
import {SocialIcon} from 'react-native-elements'

const myGithub:string = "https://www.github.com/UdeshyaDhungana";
const myTwitter:string = "https://www.github.com/Udeshya_D";
const myInsta:string = "https://www.github.com/d_ude95";

export default function AboutScreen(){
  return (
    <View style={styles.containerStyle}>

      <View style={styles.infoWrapperStyle}>
        <Text style={styles.title}>Developed by:</Text>
        <Text style={styles.name}>Udeshya Dhungana</Text>
        <Text style={styles.description}>075BCT095</Text>
        <Text style={styles.description}>Pulchowk Campus</Text>
        <Text style={styles.description}>IOE, Tribhuvan University</Text>
      </View>

      <View style={styles.iconsWrapper}>
        <SocialIcon
          type="github"
          onPress={() => {Linking.openURL(myGithub)}}
        />
        <SocialIcon
          type="twitter"
          onPress={() => {Linking.openURL(myTwitter)}}
        />
        <SocialIcon
          type="instagram"
          onPress={() => {Linking.openURL(myInsta)}}
        />
      </View>
    </View>
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
    width: "70%",
    textAlign: "left",
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 5,
    paddingHorizontal: 30,
    marginBottom: 50,
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
    marginVertical: 8,
    fontFamily: "serif",
    fontSize: 20,
  },
  description: {
    marginVertical: 2,
    textAlign: "right",
  },
  iconsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    alignItems: "center",
    marginBottom: 40,
  }
});
