import React, { useState } from 'react';
import { Image } from 'react-native';

import Screen from '../../shared/Screen';
import styles from './styles';
import AppTextInput from '../../shared/AppTextInput';
import AppButton from '../../shared/AppButton';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Screen style={styles.container}>
            <Image
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placeholder="password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton
                title="Login"
                onPress={() => console.log(email, password)}
            />
        </Screen>
    );
};

export default LoginScreen;
