import React from 'react';
import { FlatList } from 'react-native';

import Card from '../../shared/Card';
import Screen from '../../shared/Screen';
import listings from './constants';
import styles from './styles';

export default function Listings() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        image={item.image}
                        subtitle={`$ ${item.price}`}
                        title={item.title}
                    />
                )}
            />
        </Screen>
    );
}
