import React from 'react';
import { View, Image } from 'react-native';

import AppText from '../../shared/AppText';
import ListItem from '../../shared/ListItem';
import styles from './styles';

const ListingDetailsScreen = () => {
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
                        title="Mosh Hamedani"
                        subtitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
};

export default ListingDetailsScreen;
