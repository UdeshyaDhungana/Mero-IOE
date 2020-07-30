import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

/* Screens */
import HomeMain from '../Screens/HomeMain'
/* TODO */
/* Add more screens, for engineering entry, etc */

const HomeStack = createStackNavigator();

export default function HomeTab(){
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeMain} />
    </HomeStack.Navigator>
  );
}
