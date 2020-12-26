import { StackNavigationProp } from '@react-navigation/stack';
import { AccountNavigatorParamList } from '../../navigation/AccountNavigator';

interface MenuItem {
    id: number;
    title: string;
    icon: {
        name: string;
        backgroundColor: string;
    };
    targetScreen: string;
}

type AccountScreenNavigationProp = StackNavigationProp<
    AccountNavigatorParamList,
    'Account'
>;

interface AccountScreenProps {
    navigation: AccountScreenNavigationProp;
}

export type { AccountScreenProps, MenuItem };
