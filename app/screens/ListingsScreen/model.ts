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

export type { Listing, ListingsScreenProps };
