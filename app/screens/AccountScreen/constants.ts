import colors from '../../config/colors';
import MenuItem from './model';

const menuItems: MenuItem[] = [
    {
        id: 1,
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        id: 2,
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
];

export default menuItems;
