import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import ActivityIndicator from '../../components/ActivityIndicator';
import Card from '../../components/Card';
import ErrorMessage from './ErrorMessage';
import Screen from '../../components/Screen';
import listingsApi from './api';
import useApi from '../../hooks/useApi';
import { Listing, ListingsScreenProps } from './model';
import styles from './styles';

export default function ListingsScreen({ navigation }: ListingsScreenProps) {
    const { data: listings, error, loading, request: loadListings } = useApi(
        listingsApi.getListings
    );

    useEffect(() => {
        loadListings();
    }, []);

    const handleCardPress = (item: Listing) =>
        navigation.navigate('ListingDetails', item);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && <ErrorMessage onPress={loadListings} />}
                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            imageUrl={item.images[0].url}
                            onPress={() => handleCardPress(item)}
                            subtitle={`$ ${item.price}`}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                            title={item.title}
                        />
                    )}
                />
            </Screen>
        </>
    );
}
