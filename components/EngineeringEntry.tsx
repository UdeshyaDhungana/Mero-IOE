import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

//constants
const borderRadius = 12;

function EngineeringEntry({engineering, image}:{engineering: string, image:any}){
	return (
		<TouchableOpacity style={styles.touchableOpacity}>
			<ImageBackground source={image} style={styles.backgroundImage}>
			<View style={styles.wrapper}>
				<View style={styles.textContainer}>
					<Text style={styles.textStyle}>
						{engineering}
					</Text>
          <MaterialCommunityIcons style={styles.icon} name="arrow-right-bold-circle" />
				</View>
			</View>
			</ImageBackground>
		</TouchableOpacity>
	);
}

let styles = StyleSheet.create({
	touchableOpacity: {
		overflow: "hidden",
		height: 75,
		width: "95%",
		marginVertical: 20,
		borderRadius,
		elevation: 5,
	},
	wrapper: {
		//make a wrapper identical to parent, ie touchableOpacity
		height: "100%",
		width: "100%",
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	backgroundImage: {
		width: "100%",
		height: "100%",
		opacity: 0.9,
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
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000",
		textShadowRadius: 5,
	},
	icon: {
		color: "#ffffff",
	}
})

export default EngineeringEntry;
