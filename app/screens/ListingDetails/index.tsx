import React from 'react';
import { View, Image } from 'react-native';

import AppText from '../../shared/AppText';
import { ListItem } from '../../shared/lists';
import styles from './styles';

export default function ListingDetails() {
    return (
        <View>
            <Image
                source={require('../../assets/jacket.jpg')}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for sale</AppText>
                <AppText style={styles.subtitle}>$100</AppText>
                <View style={styles.listItemContainer}>
                    <ListItem
                        image={require('../../assets/mosh.jpg')}
                        subtitle="5 Listings"
                        title="Mosh Hamedani"
                    />
                </View>
            </View>
        </View>
    );
}
