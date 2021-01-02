import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import expoPushTokensApi from '../api/expoPushToken';

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
    useEffect(() => {
        registerForPushNotifications();

        Notifications.addNotificationReceivedListener(notification =>
            console.log(notification)
        );
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(
                Permissions.NOTIFICATIONS
            );
            if (!permission.granted) return;

            const token = (await Notifications.getExpoPushTokenAsync()).data;
            expoPushTokensApi.register(token);
        } catch (error) {
            throw new Error('Error getting a push token');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C'
            });
        }
    };

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
