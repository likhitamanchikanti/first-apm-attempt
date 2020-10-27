import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from 'react-native';

export default function RegScreenOne({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					textAlign: 'center',
					paddingBottom: '5%',
					fontSize: 20,
				}}
			>
				Forgot Password?
			</Text>
			<Text
				style={{
					textAlign: 'center',
					marginLeft: '5%',
					marginRight: '5%',
					paddingBottom: '5%',
				}}
			>
				We need your registered e-mail address to send you a reset link.
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

			<Button title="Reset Password"></Button>

			<View style={{ paddingTop: '90%' }}>
				<Button title="Don't have an account? Register" onPress={() => navigation.navigate('Register')} />
			</View>
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
