import React from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './styles';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <ImageBackground
                style={styles.image}
                resizeMode="contain"
                source={require('../../assets/chair.jpg')}
            />
        </View>
    );
};

export default ViewImageScreen;
