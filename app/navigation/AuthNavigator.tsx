import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Welcome from '../screens/Welcome';

export default function AuthNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Welcome}
                name="Welcome"
                options={{ headerShown: false }}
            />
            <Stack.Screen component={LoginScreen} name="Login" />
            <Stack.Screen component={RegisterScreen} name="Register" />
        </Stack.Navigator>
    );
}
