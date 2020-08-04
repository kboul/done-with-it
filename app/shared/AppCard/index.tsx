import React from 'react';
import { View, Image } from 'react-native';
import AppText from '../AppText/AppText';
import IAppCard from './model';
import styles from './styles';

const AppCard = ({ title, subtitle, image }: IAppCard) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
};

export default AppCard;
