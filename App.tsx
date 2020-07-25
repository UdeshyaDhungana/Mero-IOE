import React from 'react';
import Header from './components/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'

const Tab = createMaterialBottomTabNavigator();

//components
import HomeScreen from './Screens/HomeScreen'
import AboutScreen from './Screens/AboutScreen'

function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{backgroundColor: "#fff"}}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
          component={HomeScreen} />
        <Tab.Screen
          name="About"
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="information" color={color} size={24} />
            ),
          }}

          component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <Header text="Mero IOE" />
      <Tabs />
    </>
  );
}
