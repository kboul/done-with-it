import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppTextInputProps from './model';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';
import styles from './styles';

export default function AppTextInput({
    icon,
    ...otherProps
}: AppTextInputProps) {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    color={colors.mediumGray}
                    name={icon}
                    size={20}
                    style={styles.icon}
                />
            )}
            <TextInput
                placeholderTextColor={colors.mediumGray}
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    );
}
