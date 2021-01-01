import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import { AuthContext } from './app/auth/context';
import AuthNavigator from './app/navigation/AuthNavigator';
import OfflineNotice from './app/shared/OfflineNotice';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <View style={styles.container}>
            <AuthContext.Provider value={{ user, setUser }}>
                <OfflineNotice />
                <NavigationContainer theme={navigationTheme}>
                    {user ? <AppNavigator /> : <AuthNavigator />}
                </NavigationContainer>
            </AuthContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: 'yellow', flex: 1 }
});
