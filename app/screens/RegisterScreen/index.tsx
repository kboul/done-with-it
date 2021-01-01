import React from 'react';

import Screen from '../../shared/Screen';
import { AppForm, FormField, SubmitButton } from '../../shared/forms';
import validationSchema from './validationSchema';
import Values from './model';
import styles from './styles';

export default function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values: Values) => console.log(values)}
                validationSchema={validationSchema}>
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
