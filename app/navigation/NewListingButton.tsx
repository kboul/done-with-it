import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

interface NewListingButtonProps {
    onPress: () => void;
}

export default function NewListingButton({ onPress }: NewListingButtonProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    color={colors.white}
                    name="plus-circle"
                    size={30}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 25,
        height: 80,
        justifyContent: 'center',
        width: 80
    }
});
