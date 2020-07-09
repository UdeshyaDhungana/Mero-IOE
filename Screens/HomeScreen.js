import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'

//components
import Header from '../components/Header'
import EngineeringEntry from '../components/EngineeringEntry'

export default function HomeScreen(){
	return (
		<View style={styles.app}>
			<Header text={"Mero IOE"} />
			<ScrollView style={styles.scrollViewStyle}>
				<EngineeringEntry engineering={"Civil"} />
				<EngineeringEntry engineering={"Computer"} />
				<EngineeringEntry engineering={"Electrical"} />
				<EngineeringEntry engineering={"Electronics and Information"} />
				<EngineeringEntry engineering={"Mechanical"} />
				<EngineeringEntry engineering={"Aerospace"} />
				<EngineeringEntry engineering={"Architecture"} />
				<EngineeringEntry engineering={"Industrial"} />
				<EngineeringEntry engineering={"Geomatics"} />
				<EngineeringEntry engineering={"Chemical"} />
				<EngineeringEntry engineering={"Automobile"} />
				<EngineeringEntry engineering={"Agriculture"} />
			</ScrollView>
		</View>
	);
}

let styles = StyleSheet.create({
	app: {
		backgroundColor: '#eeeeee',
		flex: 1,
	}
})
