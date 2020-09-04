import React from 'react';
import { TouchableOpacity } from 'react-native';

import AppText from '../AppText';
import PickerItemProps from './model';
import styles from './styles';

const PickerItem = ({ label, onPress }: PickerItemProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    );
};

export default PickerItem;
