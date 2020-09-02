import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../AppText';
import IListItem from './model';
import styles from './styles';
import colors from '../../config/colors';

const ListItem = ({
    image,
    title,
    subtitle,
    onPress,
    renderRightActions
}: IListItem) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightGray}
                onPress={onPress}>
                <View style={styles.container}>
                    <Image source={image} style={styles.image} />
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

export default ListItem;
