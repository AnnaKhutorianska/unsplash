import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { findImage } from '../stores/actions/photosActions';

function PhotoCard({id, description, userName, image, navigation}) {
	const dispatch = useDispatch();

	function handlePress(id) {
		dispatch(findImage(id));
		navigation.navigate('PhotoScreen')
	}

	return (
		<TouchableOpacity onPress={handlePress.bind(null, id)}>
			<View style={styles.photoCard}>
				<Image
					style={styles.image}
					source={{uri: image}}
				/>
				<Text style={styles.text}>{description}</Text>
				<Text style={styles.text}>{id}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    photoCard: {
		marginVertical: 10,
    	marginHorizontal: 30,
        borderRadius: 10,
		backgroundColor: '#e8e8e8',
    },
	image: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: '100%',
    	height: 200,
		resizeMode: 'stretch'
	},
	text: {
		fontSize: 15,
		fontWeight: '500',
		color: '#3e3e3e'
	}
});


export default PhotoCard;
