import React from 'react';
import { Image } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../../shared/AppButton';
import AppTextInput from '../../shared/AppTextInput';
import ErrorMessage from '../../shared/ErrorMessage';
import Screen from '../../shared/Screen';
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
                {({ handleChange, handleSubmit, errors }) => (
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
                        <ErrorMessage error={errors.email} />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange('password')}
                            placeholder="password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <ErrorMessage error={errors.password} />
                        <AppButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </Screen>
    );
};

export default LoginScreen;
