import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../../AppText';
import ListItemProps from './model';
import colors from '../../../config/colors';
import styles from './styles';

export default function ListItem({
    IconComponent,
    image,
    onPress,
    renderRightActions,
    showChevrons = false,
    subtitle,
    title
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
                        <AppText numberOfLines={1} style={styles.title}>
                            {title}
                        </AppText>
                        {subtitle && (
                            <AppText numberOfLines={2} style={styles.subtitle}>
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
