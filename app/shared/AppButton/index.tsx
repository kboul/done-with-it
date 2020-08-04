import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IAppButton from './model';
import styles from './styles';

const AppButton = ({ title, onPress }: IAppButton) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default AppButton;
