import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'

//components
import Header from '../components/Header'
import EngineeringEntry from '../components/EngineeringEntry'
//images
const civil = require('../assets/HomeScreenImages/civil.jpg');
const computer = require('../assets/HomeScreenImages/computer.jpg');
const electrical = require('../assets/HomeScreenImages/electrical.jpg');
const electronics = require('../assets/HomeScreenImages/electronics.jpg');
const mechanical = require('../assets/HomeScreenImages/mechanical.jpg');
const aerospace = require('../assets/HomeScreenImages/aerospace.jpg');
const architecture = require('../assets/HomeScreenImages/architecture.jpg');
const agriculture = require('../assets/HomeScreenImages/agriculture.jpg');
const industrial = require('../assets/HomeScreenImages/industrial.jpg');
const geomatics = require('../assets/HomeScreenImages/geomatics.jpg');
const chemical = require('../assets/HomeScreenImages/chemical.jpg');
const automobile = require('../assets/HomeScreenImages/automobile.jpg');


export default function HomeScreen(){
	return (
		<View style={styles.app}>
			<Header text={"Mero IOE"} />
			<ScrollView style={styles.scrollViewStyle}>
				<View style={styles.wrapper}>
					<EngineeringEntry engineering={"Civil"} image={civil} />
					<EngineeringEntry engineering={"Computer"} image={computer}/>
					<EngineeringEntry engineering={"Electrical"} image={electrical}/>
					<EngineeringEntry engineering={"Electronics"} image={electronics}/>
					<EngineeringEntry engineering={"Mechanical"} image={mechanical}/>
					<EngineeringEntry engineering={"Aerospace"} image={aerospace}/>
					<EngineeringEntry engineering={"Architecture"} image={architecture}/>
					<EngineeringEntry engineering={"Industrial"} image={industrial}/>
					<EngineeringEntry engineering={"Geomatics"} image={geomatics}/>
					<EngineeringEntry engineering={"Chemical"} image={chemical}/>
					<EngineeringEntry engineering={"Automobile"} image={automobile}/>
					<EngineeringEntry engineering={"Agriculture"} image={agriculture}/>
				</View>
			</ScrollView>
		</View>
	);
}

let styles = StyleSheet.create({
	app: {
		backgroundColor: '#eeeeee',
		flex: 1,
	},
	wrapper: {
		alignItems: "center",
	}
})
