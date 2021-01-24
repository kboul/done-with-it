import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../AppText';
import CardProps from './model';
import styles from './styles';

export default function Card({
    imageUrl,
    onPress,
    subtitle,
    thumbnailUrl,
    title
}: CardProps) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image
                    preview={{ uri: thumbnailUrl }}
                    style={styles.image}
                    tint="light"
                    uri={imageUrl}
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
