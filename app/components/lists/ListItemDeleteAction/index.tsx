import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListItemDeleteActionProps from './model';
import colors from '../../../config/colors';
import styles from './styles';

export default function ListItemDeleteAction({
    onPress
}: ListItemDeleteActionProps) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}
