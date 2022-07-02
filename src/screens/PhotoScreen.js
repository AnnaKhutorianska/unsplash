import React from 'react';
import { ImageBackground,Text, Image, StyleSheet, Button } from 'react-native';

import { View } from 'react-native';
import { useSelector } from 'react-redux';


function PhotoScreen() {
	const photo = useSelector(state => state.selectedPhoto?.urls?.small);

	return (
		<View style={styles.container}>
			<ImageBackground
			style={styles.image}
			source={{ uri: photo }}
		>
			<Button style={styles.button} title='fsdfss'/>
		</ImageBackground>
		</View>
		
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	//   position: 'relative'
	},
	image: {
	//   flex: 1,
	  position: 'relative'
	//   justifyContent: 'center'
	},
	button: {
		position: 'absolute',
		top: 20
	}
  });

export default PhotoScreen;
