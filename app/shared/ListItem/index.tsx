import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

import AppText from '../AppText';
import IListItem from './model';
import styles from './styles';
import colors from '../../config/colors';

const ListItem = ({ image, title, subtitle, onPress }: IListItem) => {
    return (
        <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default ListItem;
