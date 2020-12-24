import React from 'react';
import { Image } from 'react-native';

import { AppForm, FormField, SubmitButton } from '../../shared/forms';
import Screen from '../../shared/Screen';
import validationSchema from './validationSchema';
import Values from './model';
import styles from './styles';

export default function Login() {
    return (
        <Screen style={styles.container}>
            <Image
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values: Values) => console.log(values)}
                validationSchema={validationSchema}>
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
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
