import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppPickerProps from './model';
import AppText from '../AppText';
import colors from '../../config/colors';
import styles from './styles';

const AppPicker = ({ icon, placeholder, ...otherProps }: AppPickerProps) => {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={colors.mediumGray}
                    style={styles.icon}
                />
            )}
            <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons
                name="chevron-down"
                size={20}
                color={colors.mediumGray}
            />
        </View>
    );
};

export default AppPicker;
