import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import useNotifications from '../hooks/useNotifications';

interface TabBarIconProps {
    color: string;
    size: number;
}

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
    })
});

export default function AppNavigator() {
    useNotifications();

    return (
        <Tab.Navigator>
            <Tab.Screen
                component={FeedNavigator}
                name="Feed"
                options={{
                    tabBarIcon: ({ color, size }: TabBarIconProps) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="home"
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                component={ListingEditScreen}
                name="ListingEdit"
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <NewListingButton
                            onPress={() => navigation.navigate('ListingEdit')}
                        />
                    ),
                    tabBarIcon: ({ color, size }: TabBarIconProps) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="plus-circle"
                            size={size}
                        />
                    )
                })}
            />
            <Tab.Screen
                component={AccountNavigator}
                name="Account"
                options={{
                    tabBarIcon: ({ color, size }: TabBarIconProps) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="account"
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
