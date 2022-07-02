import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ListScreen from '../screens/ListScreen';
import PhotoScreen from '../screens/PhotoScreen';

const Stack = createStackNavigator();

function Navigate() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="ListScreen"
					component={ListScreen}
					options={{
						title: 'Unsplash',
					}}
				/>
				<Stack.Screen
					options={{
						headerShown: false
					  }}
					name="PhotoScreen"
					component={PhotoScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigate;
