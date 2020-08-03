import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import styles from './styles';

const WelcomeScreen = () => {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text>Sell what you don&apos;t need</Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    );
};

export default WelcomeScreen;
