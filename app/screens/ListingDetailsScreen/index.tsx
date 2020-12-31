import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../../shared/AppText';
import { ListItem } from '../../shared/lists';
import ListingDetailsScreenProps from './model';
import styles from './styles';

export default function ListingDetailsScreen({
    route
}: ListingDetailsScreenProps) {
    const listing = route.params;
    const { images, price, title } = listing;
    return (
        <View>
            <Image
                preview={{ uri: images[0].thumbnailUrl }}
                style={styles.image}
                tint="light"
                uri={images[0].url}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{`$${price}`}</AppText>
                <View style={styles.listItemContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        subtitle="5 Listings"
                        title="Mosh Hamedani"
                    />
                </View>
            </View>
        </View>
    );
}
