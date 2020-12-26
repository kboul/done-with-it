import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';

export default function AppNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen component={FeedNavigator} name="Listings" />
            <Tab.Screen component={ListingEditScreen} name="ListingEdit" />
            <Tab.Screen component={AccountNavigator} name="Account" />
        </Tab.Navigator>
    );
}
