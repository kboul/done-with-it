import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';

import AppText from '../AppText';
import Icon from '../Icon';
import CategoryPickerItemProps from './model';
import colors from '../../config/colors';
import styles from './styles';

export default function CategoryPickerItem({
    item,
    onPress
}: CategoryPickerItemProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    backgroundColor={item.backgroundColor}
                    color={colors.white}
                    name={item.icon}
                />
            </TouchableOpacity>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}
