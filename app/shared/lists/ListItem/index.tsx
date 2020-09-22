import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../../AppText';
import ListItemProps from './model';
import styles from './styles';
import colors from '../../../config/colors';

export default function ListItem({
    image,
    onPress,
    renderRightActions,
    showChevrons = false,
    subtitle,
    title,
    IconComponent
}: ListItemProps) {
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
                    {showChevrons && (
                        <MaterialCommunityIcons
                            color={colors.mediumGray}
                            name="chevron-right"
                            size={25}
                        />
                    )}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
