import React, { useState } from 'react';
import { Image } from 'react-native';
import { ApiResponse } from 'apisauce';
import jwtDecode, { JwtPayload } from 'jwt-decode';

import {
    AppForm,
    ErrorMessage,
    FormField,
    SubmitButton
} from '../../shared/forms';
import Screen from '../../shared/Screen';
import validationSchema from './validationSchema';
import UserCredentials from './model';
import auth from './api';
import styles from './styles';

export default function Login() {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async (values: UserCredentials) => {
        const { email, password } = values;
        const result: ApiResponse<any> = await auth.login(email, password);
        if (!result.ok) {
            setLoginFailed(true);
            return;
        }
        setLoginFailed(false);
        const token: string = result.data;
        const user = jwtDecode<JwtPayload>(token);
        console.log(user);
    };

    return (
        <Screen style={styles.container}>
            <Image
                source={require('../assets/logo-red.png')}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <ErrorMessage
                    error="Invalid email and/or password"
                    visible={loginFailed}
                />
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
