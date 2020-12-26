import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
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
            <Stack.Screen component={Login} name="Login" />
            <Stack.Screen component={Register} name="Register" />
        </Stack.Navigator>
    );
}
