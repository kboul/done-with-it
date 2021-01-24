import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import IconProps from './model';
import colors from '../../config/colors';
import styles from './styles';

export default function Icon({
    backgroundColor = colors.black,
    color = colors.white,
    name,
    size = 40
}: IconProps) {
    const dynamicViewStyle = {
        width: size,
        borderRadius: size / 2,
        backgroundColor
    };
    return (
        <View style={[styles.view, dynamicViewStyle]}>
            <MaterialCommunityIcons
                back
                color={color}
                name={name}
                size={size * 0.5}
            />
        </View>
    );
}
