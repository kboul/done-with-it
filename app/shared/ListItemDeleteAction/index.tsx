import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import IListItemDeleteAction from './model';
import colors from '../../config/colors';
import styles from './styles';

const ListItemDeleteAction = ({ onPress }: IListItemDeleteAction) => {
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
};

export default ListItemDeleteAction;
