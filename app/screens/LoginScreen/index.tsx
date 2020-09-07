import React from 'react';
import { Image } from 'react-native';

import { AppForm, AppFormField, SubmitButton } from '../../shared/forms';
import Screen from '../../shared/Screen';
import validationSchema from './validationSchema';
import styles from './styles';

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}
