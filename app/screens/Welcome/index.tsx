import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';

import AppButton from '../../components/AppButton';
import WelcomeProps from './model';
import colors from '../../config/colors';
import styles from './styles';

export default function Welcome({ navigation }: WelcomeProps) {
    return (
        <ImageBackground
            blurRadius={2}
            source={require('./assets/background.jpg')}
            style={styles.background}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Sell what you don&apos;t need</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton
                    onPress={() => navigation.navigate('Login')}
                    title="login"
                />
                <AppButton
                    color={colors.secondary}
                    onPress={() => navigation.navigate('Register')}
                    title="register"
                />
            </View>
        </ImageBackground>
    );
}
