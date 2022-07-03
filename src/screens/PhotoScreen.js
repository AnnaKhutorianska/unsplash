import React from 'react';
import { ImageBackground, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { View } from 'react-native';
import { useSelector } from 'react-redux';

function PhotoScreen({navigation}) {
	const photo = useSelector((state) => state.selectedPhoto?.urls?.regular);

	function handlePress() {
		navigation.goBack();
	}

	return (
		<ImageBackground source={{ uri: photo }} style={styles.image}>
			<View style={styles.wrapper}>
				<TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Go Back</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: 'contain'
	},
	wrapper: {
		width: 100,
		marginTop: 50,
		marginLeft: 10
	},
	buttonContainer: {
		elevation: 7,
		backgroundColor: '#fff',
		borderRadius: 10,
		paddingVertical: 8,

	},
	buttonText: {
		fontSize: 15,
		color: '#000',
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},
});

export default PhotoScreen;
