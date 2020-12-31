import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/shared/OfflineNotice';

export default function App() {
    return (
        <View style={styles.container}>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                <AppNavigator />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: 'yellow', flex: 1 }
});
