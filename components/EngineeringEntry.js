import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

function EngineeringEntry({engineering}){
	return (
		<TouchableOpacity style={styles.viewStyle}>
			<View style={styles.textContainer}>
				<Text style={styles.textStyle}>
					{engineering}
				</Text>
				<AntDesign style={styles.icon} name="rightcircle" />
			</View>
		</TouchableOpacity>
	);
}

let styles = StyleSheet.create({
	viewStyle: {
		width: "93%",
		alignSelf: "center",
		height: 85,
		flexDirection: "row",
		justifyContent: 'flex-end',
		alignItems: "flex-end",
		marginVertical: 20,
		borderRadius: 12,
		borderColor: "black",
		borderWidth: 1,
	},
	textContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginRight: 15,
		alignItems: "center",
		marginBottom: 5,
	},
	textStyle: {
		marginRight: 7,
		fontWeight: "bold",
		fontSize: 18,
	}
})

export default EngineeringEntry;
