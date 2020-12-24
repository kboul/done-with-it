import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import AppText from '../AppText';
import Icon from '../Icon';
import CategoryPickerItemProps from './model';
import styles from './styles';

export default function CategoryPickerItem({
    item,
    onPress
}: CategoryPickerItemProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} />
            </TouchableOpacity>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}
