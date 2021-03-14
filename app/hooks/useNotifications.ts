import { useEffect } from 'react';
import { Platform } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

import expoPushTokensApi from '../api/expoPushToken';
import { navigate } from '../navigation/routeNavigation';

export default function useNotifications() {
    useEffect(() => {
        registerForPushNotifications();

        Notifications.addNotificationReceivedListener(() =>
            navigate('Account', {})
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
}
