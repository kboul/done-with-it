import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import ListingEdit from '../screens/ListingEdit';

export default function AppNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen component={FeedNavigator} name="Listings" />
            <Tab.Screen component={ListingEdit} name="ListingEdit" />
            <Tab.Screen component={Account} name="Account" />
        </Tab.Navigator>
    );
}
