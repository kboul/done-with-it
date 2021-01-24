import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import AppButtonProps from './model';
import styles from './styles';
import colors from '../../config/colors';

export default function AppButton({
    color = colors.primary,
    title,
    onPress
}: AppButtonProps) {
    return (
        <TouchableOpacity
            style={[{ backgroundColor: color }, styles.button]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
