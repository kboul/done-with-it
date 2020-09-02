import React from 'react';
import { View, Image } from 'react-native';

import AppText from '../AppText';
import ICard from './model';
import styles from './styles';

const Card = ({ image, title, subtitle }: ICard) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
};

export default Card;
