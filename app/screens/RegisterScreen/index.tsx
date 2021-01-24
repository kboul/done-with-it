import React, { useState } from 'react';
import { ApiResponse } from 'apisauce';

import Screen from '../../components/Screen';
import {
    Form,
    ErrorMessage,
    FormField,
    SubmitButton
} from '../../components/forms';
import ActivityIndicator from '../../components/ActivityIndicator';
import { useAuthContext } from '../../auth/context';
import authApi from '../LoginScreen/api';
import usersApi from './api';
import useApi from '../../hooks/useApi';
import validationSchema from './validationSchema';
import UserInfo from './model';
import styles from './styles';

export default function RegisterScreen() {
    const loginApi = useApi(authApi.login);
    const registerApi = useApi(usersApi.register);
    const { login } = useAuthContext();

    const [error, setError] = useState('');

    const handleSubmit = async (userInfo: UserInfo) => {
        const result: ApiResponse<any> = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError('An unexprected error occured.');
                throw Error(JSON.stringify(result));
            }
            return;
        }

        const { data }: ApiResponse<any> = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        login(data);
    };

    return (
        <>
            <ActivityIndicator
                visible={registerApi.loading || loginApi.loading}
            />
            <Screen style={styles.container}>
                <Form
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
                </Form>
            </Screen>
        </>
    );
}
