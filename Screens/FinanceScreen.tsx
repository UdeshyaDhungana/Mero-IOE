import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {SocialIcon} from 'react-native-elements'

type functionInterFace = () => void;

const SignInIcon = ({website,onClick}:{website: string, onClick:functionInterFace}) => {
  return (
    <SocialIcon
      button
      type={website}
      onPress={onClick}
      title={`Continue with ${website[0].toUpperCase()}${website.slice(1)}`}
    />
  );
}

export default () => {
  return (
    <View style={styles.view}>
      <SignInIcon website="google" onClick={() => {console.log("Clicked!")}} />
      <SignInIcon website="facebook" onClick={() => {console.log("Clicked!")}} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 70,
  },
});
