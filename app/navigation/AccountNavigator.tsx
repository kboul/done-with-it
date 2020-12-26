import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

export type AccountNavigatorParamList = {
    Account: undefined;
    Messages: undefined;
};

export default function AccountNavigator() {
    const Stack = createStackNavigator<AccountNavigatorParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen component={AccountScreen} name="Account" />
            <Stack.Screen component={MessagesScreen} name="Messages" />
        </Stack.Navigator>
    );
}
