import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import IconProps from './model';
import colors from '../../config/colors';

const Icon = ({
    name,
    size = 40,
    backgroundColor = colors.black,
    iconColor = colors.white
}: IconProps) => {
    return (
        <View
            style={{
                width: size,
                height: 40,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <MaterialCommunityIcons
                name={name}
                size={size * 0.5}
                color={iconColor}
                back
            />
        </View>
    );
};

export default Icon;
