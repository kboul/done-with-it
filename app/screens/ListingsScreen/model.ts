import { StackNavigationProp } from '@react-navigation/stack';

import { FeedNavigatorParamList } from '../../navigation/FeedNavigator';

interface Image {
    url: string;
    thumbnailUrl: string;
}

interface Listing {
    id: number;
    images: Image[];
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

interface State {
    error: boolean;
    listings: Listing[];
    loading: boolean;
}

export type { Listing, ListingsScreenProps, State };
