import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'

const Tab = createMaterialBottomTabNavigator();

//components
import HomeTab from './Tabs/HomeTab'
import AboutTab from './Tabs/AboutTab'
import FinanceTab from './Tabs/FinanceTab'


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
          component={HomeTab} />

        <Tab.Screen
          name="Finance"
          options={{
            tabBarLabel: 'Finance',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="wallet" color={color} size={24} />
            ),
          }}
          component={FinanceTab} />
        <Tab.Screen
          name="About"
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="information" color={color} size={24} />
            ),
          }}
          component={AboutTab} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <Tabs />
    </>
  );
}
