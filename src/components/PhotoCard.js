import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { SCREENS } from '../constants/screens';
import { findImage } from '../stores/actions/photosActions';

function PhotoCard({id, description, userName, image, navigation}) {
	const { first_name, last_name } = userName || {};
	const dispatch = useDispatch();

	function handlePress(id) {
		dispatch(findImage(id));
		navigation.navigate(SCREENS.PhotoScreen);
	}

	return (
		<TouchableOpacity onPress={handlePress.bind(null, id)}>
			<View style={styles.photoCard}>
				<Image
					style={styles.image}
					source={{uri: image}}
				/>
				{description && <Text style={[styles.text, styles.description]}>{description}</Text>}
				{userName && <Text style={[styles.text, styles.userName]}>{first_name} {last_name}</Text>}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    photoCard: {
		marginVertical: 10,
    	marginHorizontal: 30,
        borderRadius: 10,
		backgroundColor: '#eeeeee',
    },
	image: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: '100%',
    	height: 200,
		resizeMode: 'cover'
	},
	text: {
		color: '#3e3e3e',
		padding: 5
	},
	description: {
		fontSize: 15,
		fontWeight: '600'
	},
	userName: {
		fontSize: 14,
		fontStyle: 'italic'
	}
});


export default PhotoCard;
