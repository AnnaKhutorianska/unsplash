import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';

import PhotoCard from '../components/PhotoCard';
import { getAllPhotos } from '../stores/actions/photosActions';

function ListScreen({ navigation }) {
    const dispatch = useDispatch();
    const photos = useSelector(state => state?.photosList);

    useEffect(() => {
        dispatch(getAllPhotos());
    }, [])

    return (
        <View style={styles.cardsList}>
            <FlatList
                data={photos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PhotoCard
                        id={item.id}
                        description={item.description}
                        userName={item.user}
                        image={item.urls.thumb}
                        navigation={navigation}
                    />
                )}
            />
            <PhotoCard />
        </View>
    );
}

const styles = StyleSheet.create({
    cardsList: {
        backgroundColor: '#fff',
    },
});

export default ListScreen;
