import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from '../../screens/Account';
import ListingEdit from '../../screens/ListingEdit';
import Listings from '../../screens/Listings';

export default function AppNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Listings" component={Listings} />
            <Tab.Screen name="ListingEdit" component={ListingEdit} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
}
