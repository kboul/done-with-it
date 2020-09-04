import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../AppText';
import ListItemProps from './model';
import styles from './styles';
import colors from '../../config/colors';

const ListItem = ({
    title,
    subtitle,
    image,
    IconComponent,
    onPress,
    renderRightActions
}: ListItemProps) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightGray}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && (
                            <AppText style={styles.subtitle}>
                                {subtitle}
                            </AppText>
                        )}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

export default ListItem;
