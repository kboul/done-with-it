import { RouteProp } from '@react-navigation/native';

import { FeedNavigatorParamList } from '../../navigation/FeedNavigator';

type ListingDetailsScreenRouteProp = RouteProp<
    FeedNavigatorParamList,
    'ListingDetails'
>;

export default interface ListingDetailsScreenProps {
    route: ListingDetailsScreenRouteProp;
}
