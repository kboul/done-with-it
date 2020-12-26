import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Welcome from '../../screens/Welcome';

export default function AuthNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}
