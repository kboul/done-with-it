import React from 'react';
import { ImageBackground, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const iconSize = 24;

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons
                    name="close"
                    size={iconSize}
                    color="white"
                />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={iconSize}
                    color="white"
                />
            </View>
            <ImageBackground
                style={styles.image}
                resizeMode="contain"
                source={require('./chair.jpg')}
            />
        </View>
    );
};

export default ViewImageScreen;
