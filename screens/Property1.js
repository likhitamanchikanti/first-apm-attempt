import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Property1({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Property 1 Detailed Info</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		alignSelf: 'flex-end',
		paddingRight: '15%',
	},
	textLeft: {
		alignSelf: 'flex-start',
		paddingLeft: '15%',
	},
});
