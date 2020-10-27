import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from 'react-native';

export default function RegScreenOne({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					textAlign: 'center',
					paddingTop: '20%',
					paddingBottom: '5%',
					fontSize: 20,
				}}
			>
				General Information
			</Text>
			<Text style={styles.textLeft}>EMAIL</Text>
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

			<Text style={styles.textLeft}>PASSWORD</Text>
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

			<Text style={styles.textLeft}>CONFIRM PASSWORD</Text>
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

			<View>
				<Text>I agree with the Terms and Conditions.</Text>
			</View>

			<View style={{ marginTop: '60%' }}>
				<Button title="Next" onPress={() => navigation.navigate('Register (Optional)')} />
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
