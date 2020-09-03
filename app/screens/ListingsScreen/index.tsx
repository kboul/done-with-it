import React from 'react';
import { FlatList } from 'react-native';

import Card from '../../shared/Card';
import Screen from '../../shared/Screen';
import listings from './constants';
import styles from './styles';

const ListingsScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subtitle={`$ ${item.price}`}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
};

export default ListingsScreen;
