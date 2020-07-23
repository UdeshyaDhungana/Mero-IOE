import React from 'react';
import {TouchableOpacity} from 'react-native'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'


//components
import HomeScreen from './Screens/HomeScreen'
import AboutScreen from './Screens/AboutScreen'

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === 'Home') {
							iconName = focused
								? 'ios-home'
								: 'ios-home';
						} else if (route.name === 'About') {
							iconName = focused ? 'md-information-circle' :
								'md-information-circle-outline';
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: '#1583F9',
					inactiveTintColor: 'gray',
				}}
			>
					<Tab.Screen name="Home" component={HomeScreen} />
					<Tab.Screen name="About" component={AboutScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

