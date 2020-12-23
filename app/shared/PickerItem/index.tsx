import React from 'react';
import { TouchableOpacity } from 'react-native';

import AppText from '../AppText';
import PickerItemProps from './model';
import styles from './styles';

export default function PickerItem({ item, onPress }: PickerItemProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}
