import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';

import AppButton from '../../shared/AppButton';
import colors from '../../config/colors';
import styles from './styles';

export default function Welcome() {
    return (
        <ImageBackground
            blurRadius={2}
            source={require('./assets/background.jpg')}
            style={styles.background}>
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
}
