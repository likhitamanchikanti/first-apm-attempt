import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ForgotPassword from './screens/ForgotPassword';
import RegScreenOne from './screens/RegScreenOne';
import RegScreenTwo from './screens/RegScreenTwo';
import Property1 from './screens/Property1';
import Property2 from './screens/Property2';
import Home from './screens/Home';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
				<Stack.Screen options={{ headerShown: false }} name="Password" component={ForgotPassword} />
				<Stack.Screen name="Register" component={RegScreenOne} />
				<Stack.Screen name="Register (Optional)" component={RegScreenTwo} />
				<Stack.Screen name="Property 1" component={Property1} />
				<Stack.Screen name="Property 2" component={Property2} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;