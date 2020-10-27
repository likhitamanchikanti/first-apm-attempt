import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from 'react-native';

export default function RegScreenOne({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ paddingTop: '20%', alignSelf: 'flex-start', paddingLeft: '15%' }}>ADDRESS</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					minWidth: '70%',
					backgroundColor: 'white',
					paddingLeft: '1%',
					marginBottom: '5%',
				}}
			></TextInput>

			<Text style={styles.textLeft}>CITY</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					minWidth: '70%',
					backgroundColor: 'white',
					paddingLeft: '1%',
					marginBottom: '5%',
				}}
			></TextInput>

			<Text style={styles.textLeft}>STATE</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					minWidth: '70%',
					backgroundColor: 'white',
					paddingLeft: '1%',
					marginBottom: '5%',
				}}
			></TextInput>

			<Text style={styles.textLeft}>COUNTRY</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					minWidth: '70%',
					backgroundColor: 'white',
					paddingLeft: '1%',
					marginBottom: '5%',
				}}
			></TextInput>

			<Text style={styles.textLeft}>ZIP CODE</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					minWidth: '70%',
					backgroundColor: 'white',
					paddingLeft: '1%',
					marginBottom: '5%',
				}}
			></TextInput>

			<Text style={styles.textLeft}>PHONE NUMBER</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					minWidth: '70%',
					backgroundColor: 'white',
					paddingLeft: '1%',
					marginBottom: '5%',
				}}
			></TextInput>

			<View style={{ paddingTop: '15%' }}>
				<Button title="Finish Registration" onPress={() => navigation.navigate('Home')} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
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
