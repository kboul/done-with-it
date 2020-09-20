import React from 'react';
import { ImageBackground, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const iconSize = 24;

export default function ViewImage() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons
                    color="white"
                    name="close"
                    size={iconSize}
                />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons
                    color="white"
                    name="trash-can-outline"
                    size={iconSize}
                />
            </View>
            <ImageBackground
                resizeMode="contain"
                source={require('./chair.jpg')}
                style={styles.image}
            />
        </View>
    );
}
