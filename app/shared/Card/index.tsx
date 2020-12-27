import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import AppText from '../AppText';
import CardProps from './model';
import styles from './styles';

export default function Card({
    imageUrl,
    onPress,
    subtitle,
    title
}: CardProps) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
