import 'react-native-gesture-handler';
import React from 'react';
import Card from '../card';
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RegistrationScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					alignSelf: 'flex-start',
					paddingLeft: '15%',
					marginTop: '5%',
				}}
			>
				Income/expenses{'\n'}
			</Text>
			<Image
				style={{
					alignSelf: 'center',
					marginBottom: '5%',
				}}
				source={{
					uri: 'https://picsum.photos/200',
					width: 240,
					height: 15,
				}}
			></Image>
			<TouchableOpacity onPress={() => navigation.navigate('Property 1')}>
				<Card>
					<Image
						style={{
							marginBottom: '5%',
						}}
						source={{
							uri: 'https://picsum.photos/200',
							width: 120,
							height: 120,
						}}
					></Image>

					<Text
						style={{
							paddingLeft: '5%',
						}}
					>
						Property 1 General Info
					</Text>
				</Card>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Property 2')}>
				<Card>
					<Image
						style={{
							marginBottom: '5%',
						}}
						source={{
							uri: 'https://picsum.photos/200',
							width: 120,
							height: 120,
						}}
					></Image>

					<Text
						style={{
							paddingLeft: '5%',
						}}
					>
						Property 2 General Info
					</Text>
				</Card>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
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
