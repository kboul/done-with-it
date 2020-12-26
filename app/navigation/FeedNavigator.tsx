import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';
import { Listing } from '../screens/ListingsScreen/model';

export type FeedNavigatorParamList = {
    Listings: undefined;
    ListingDetails: Listing;
};

export default function FeedNavigator() {
    const Stack = createStackNavigator<FeedNavigatorParamList>();
    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen component={ListingsScreen} name="Listings" />
            <Stack.Screen
                component={ListingDetailsScreen}
                name="ListingDetails"
            />
        </Stack.Navigator>
    );
}
