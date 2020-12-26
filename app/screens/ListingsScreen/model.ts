import { StackNavigationProp } from '@react-navigation/stack';

import { FeedNavigatorParamList } from '../../navigation/FeedNavigator';

interface Listing {
    id: number;
    image: number;
    price: number;
    title: string;
}

type ListingsScreenNavigationProp = StackNavigationProp<
    FeedNavigatorParamList,
    'Listings'
>;

interface ListingsScreenProps {
    navigation: ListingsScreenNavigationProp;
}

export type { Listing, ListingsScreenProps };
