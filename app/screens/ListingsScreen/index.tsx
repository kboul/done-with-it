import React from 'react';
import { FlatList } from 'react-native';

import Card from '../../shared/Card';
import Screen from '../../shared/Screen';
import { Listing, ListingsScreenProps } from './model';
import listings from './constants';
import styles from './styles';

export default function ListingsScreen({ navigation }: ListingsScreenProps) {
    const handleCardPress = (item: Listing) =>
        navigation.navigate('ListingDetails', item);

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        image={item.image}
                        onPress={() => handleCardPress(item)}
                        subtitle={`$ ${item.price}`}
                        title={item.title}
                    />
                )}
            />
        </Screen>
    );
}
