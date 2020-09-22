import React from 'react';
import { Text } from 'react-native';

import AppTextProps from './model';
import defaultStyles from '../../config/styles';

export default function AppText({
    children,
    style,
    ...otherProps
}: AppTextProps) {
    return (
        <Text {...otherProps} style={[defaultStyles.text, style]}>
            {children}
        </Text>
    );
}
