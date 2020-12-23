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
        <Text style={[defaultStyles.text, style]} {...otherProps}>
            {children}
        </Text>
    );
}
