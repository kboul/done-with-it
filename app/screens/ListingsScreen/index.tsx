import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import ActivityIndicator from '../../shared/ActivityIndicator';
import Card from '../../shared/Card';
import ErrorMessage from './ErrorMessage';
import Screen from '../../shared/Screen';
import listingsApi from '../../api/listings';
import { Listing, ListingsScreenProps } from './model';
import { initialState } from './constants';
import styles from './styles';

export default function ListingsScreen({ navigation }: ListingsScreenProps) {
    const [state, setState] = useState(initialState);

    const setValue = (field: string, value: any) => {
        const tempState = { ...state };
        tempState[field] = value;
        setState(tempState);
    };

    const loadListings = async () => {
        setValue('loading', true);
        const response = await listingsApi.getListings();
        setValue('loading', false);

        if (!response.ok) {
            setValue('error', true);
            return;
        }

        setState(prevState => ({
            ...prevState,
            error: false,
            listings: response.data as Listing[]
        }));
    };

    useEffect(() => {
        loadListings();
    }, []);

    const handleCardPress = (item: Listing) =>
        navigation.navigate('ListingDetails', item);

    const { error, listings, loading } = state;

    return (
        <Screen style={styles.screen}>
            {error && <ErrorMessage onPress={loadListings} />}
            <ActivityIndicator visible={loading} />
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
