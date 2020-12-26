import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}
