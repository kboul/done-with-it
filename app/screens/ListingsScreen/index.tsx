import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Card from '../../shared/Card';
import Screen from '../../shared/Screen';
import listingsApi from '../../api/listings';
import { Listing, ListingsScreenProps } from './model';
import styles from './styles';

export default function ListingsScreen({ navigation }: ListingsScreenProps) {
    const [listings, setListings] = useState<Listing[]>([]);

    const loadListings = async () => {
        const response = await listingsApi.getListings();
        setListings(response.data as Listing[]);
    };

    useEffect(() => {
        loadListings();
    }, []);

    const handleCardPress = (item: Listing) =>
        navigation.navigate('ListingDetails', item);

    return (
        <Screen style={styles.screen}>
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
