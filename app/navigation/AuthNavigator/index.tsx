import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Welcome from '../../screens/Welcome';

export default function AuthNavigator() {
    const Auth = createStackNavigator();
    return (
        <Auth.Navigator>
            <Auth.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="Register" component={Register} />
        </Auth.Navigator>
    );
}
