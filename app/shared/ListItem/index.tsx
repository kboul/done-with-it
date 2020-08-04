import React from 'react';
import { View, Image } from 'react-native';
import IListItem from './model';
import styles from './styles';
import AppText from '../AppText/AppText';

const ListItem = ({ image, title, subtitle }: IListItem) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
};

export default ListItem;
