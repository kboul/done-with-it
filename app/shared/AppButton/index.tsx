import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Props from './model';
import styles from './styles';

const AppButton = ({ title, color, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={[{ backgroundColor: color }, styles.button]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AppButton;
