import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../../components/AppText';
import { ListItem } from '../../components/lists';
import ContactSellerForm from './ContactSellerForm';
import ListingDetailsScreenProps from './model';
import styles from './styles';

export default function ListingDetailsScreen({
    route
}: ListingDetailsScreenProps) {
    const listing = route.params;
    const { images, price, title } = listing;
    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
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
            <View style={styles.contactContainer}>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
    );
}
