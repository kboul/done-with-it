import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';

import AppButton from '../../shared/AppButton';
import colors from '../../config/colors';
import styles from './styles';

const WelcomeScreen = () => {
    return (
        <ImageBackground
            style={styles.background}
            source={require('./assets/background.jpg')}
            blurRadius={2}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Sell what you don&apos;t need</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton
                    title="login"
                    onPress={() => console.log('press to login')}
                />
                <AppButton
                    title="register"
                    color={colors.secondary}
                    onPress={() => console.log('press to register')}
                />
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;
