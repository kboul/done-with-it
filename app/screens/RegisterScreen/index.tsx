import React, { useState } from 'react';
import { ApiResponse } from 'apisauce';

import Screen from '../../shared/Screen';
import {
    AppForm,
    ErrorMessage,
    FormField,
    SubmitButton
} from '../../shared/forms';
import { useAuthContext } from '../../auth/context';
import authApi from '../LoginScreen/api';
import usersApi from './api';
import validationSchema from './validationSchema';
import UserInfo from './model';
import styles from './styles';

export default function RegisterScreen() {
    const { login } = useAuthContext();

    const [error, setError] = useState('');

    const handleSubmit = async (userInfo: UserInfo) => {
        const result: ApiResponse<any> = await usersApi.register(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError('An unexprected error occured.');
                throw Error(JSON.stringify(result));
            }
            return;
        }

        const loginResult: ApiResponse<any> = await authApi.login(
            userInfo.email,
            userInfo.password
        );
        login(loginResult.data);
    };

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <ErrorMessage
                    error="A user with the given email already exists."
                    visible={Boolean(error)}
                />
                <FormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
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
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}
