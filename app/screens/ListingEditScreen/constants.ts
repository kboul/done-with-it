import colors from '../../config/colors';
import { Category } from './models';

const categories: Category[] = [
    {
        backgroundColor: colors.red,
        icon: 'floor-lamp',
        label: 'Furniture',
        value: 1
    },
    { label: 'Cars', icon: 'car', backgroundColor: colors.orange, value: 1 },
    {
        label: 'Cameras',
        icon: 'camera',
        backgroundColor: colors.yellow,
        value: 1
    },
    { label: 'Games', icon: 'cards', backgroundColor: colors.green, value: 2 },
    {
        label: 'Clothing',
        icon: 'show-heel',
        backgroundColor: colors.cyan,
        value: 3
    },
    {
        label: 'Sports',
        icon: 'basketball',
        backgroundColor: colors.brightBlue,
        value: 3
    },
    {
        label: 'Movies & Music',
        icon: 'headphones',
        backgroundColor: colors.softBlue,
        value: 3
    },
    {
        label: 'Books',
        icon: 'book-open-variant',
        backgroundColor: colors.purple,
        value: 2
    },
    {
        label: 'Other',
        icon: 'folder-outline',
        backgroundColor: colors.grey,
        value: 1
    }
];

const initialValues = {
    imageUris: [],
    title: '',
    price: '',
    category: null,
    description: ''
};

export { categories, initialValues };
