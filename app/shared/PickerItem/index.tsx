import React from 'react';
import { TouchableOpacity } from 'react-native';

import AppText from '../AppText';
import PickerItemProps from './model';
import styles from './styles';

export default function PickerItem({ label, onPress }: PickerItemProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    );
}
