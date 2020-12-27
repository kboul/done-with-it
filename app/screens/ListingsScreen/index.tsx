import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Card from '../../shared/Card';
import ErrorMessage from './ErrorMessage';
import Screen from '../../shared/Screen';
import listingsApi from '../../api/listings';
import { Listing, ListingsScreenProps } from './model';
import { initialState } from './constants';
import styles from './styles';

export default function ListingsScreen({ navigation }: ListingsScreenProps) {
    const [state, setState] = useState(initialState);

    const loadListings = async () => {
        const response = await listingsApi.getListings();
        if (!response.ok) {
            setState(prevState => ({ ...prevState, error: true }));
            return;
        }
        setState({ error: false, listings: response.data as Listing[] });
    };

    useEffect(() => {
        loadListings();
    }, []);

    const handleCardPress = (item: Listing) =>
        navigation.navigate('ListingDetails', item);

    const { error, listings } = state;

    return (
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
                        title={item.title}
                    />
                )}
            />
        </Screen>
    );
}
