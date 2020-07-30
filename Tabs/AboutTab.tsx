import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const AboutStack = createStackNavigator();

/* Import Screen */
import AboutMain from '../Screens/AboutMain'

export default function AboutTab(){
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutMain} />
    </ AboutStack.Navigator>
  );
}
