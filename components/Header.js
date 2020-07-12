import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


function Header({text}){
	return (
		<View>
			<Text style={styles.headerText}>
				{text}
			</Text>
		</View>
	);
}

let styles = StyleSheet.create({
	headerText: {
		color: "#1583F9",
		fontSize: 24,
		fontWeight: "bold",
		marginLeft: "6%",
		paddingTop: 50,
		paddingBottom: 10,
	}
});

export default Header;
