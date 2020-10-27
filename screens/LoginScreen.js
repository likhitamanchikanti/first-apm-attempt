import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				style={{ marginBottom: '5%' }}
				source={{
					uri: 'https://picsum.photos/200',
					width: 120,
					height: 100,
				}}
			></Image>

			<Text style={styles.textLeft}>User Id</Text>
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

			<Text style={styles.textLeft}>Password</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					minWidth: '70%',
					backgroundColor: 'white',
					paddingLeft: '1%',
				}}
			></TextInput>
			<View style={{ marginTop: '2.5%', alignSelf: 'flex-start', paddingLeft: '15%' }}>
				<Button title="Forgot Password?" onPress={() => navigation.navigate('Password')} />
			</View>

			<View style={{ marginTop: '2.5%' }}>
				<Button title="Log In" onPress={() => navigation.navigate('Home')} />
			</View>

			<View style={{ marginTop: '15%' }}>
				<Button title="Don't have an account? Register" onPress={() => navigation.navigate('Register')} />
			</View>

			<Button title="Log In with Facebook" />
			<Button title="Log In with Google" />
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
