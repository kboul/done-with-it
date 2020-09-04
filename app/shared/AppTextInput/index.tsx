import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppTextInputProps from './model';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';
import styles from './styles';

const AppTextInput = ({ icon, ...otherProps }: AppTextInputProps) => {
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
            <TextInput {...otherProps} style={defaultStyles.text} />
        </View>
    );
};

export default AppTextInput;
