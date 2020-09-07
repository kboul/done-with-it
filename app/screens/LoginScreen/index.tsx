import React from 'react';
import { Image } from 'react-native';
import { Formik } from 'formik';

import AppFormField from '../../shared/AppFormField';
import Screen from '../../shared/Screen';
import SubmitButton from '../../shared/SubmitButton';
import validationSchema from './valdiationSchmema';
import styles from './styles';

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
            />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>
                {() => (
                    <>
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
                    </>
                )}
            </Formik>
        </Screen>
    );
};

export default LoginScreen;
