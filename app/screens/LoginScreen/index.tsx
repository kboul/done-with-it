import React from 'react';
import { Image } from 'react-native';
import { Formik } from 'formik';

import Screen from '../../shared/Screen';
import styles from './styles';
import AppTextInput from '../../shared/AppTextInput';
import AppButton from '../../shared/AppButton';

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
            />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}>
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange('password')}
                            placeholder="password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </Screen>
    );
};

export default LoginScreen;
