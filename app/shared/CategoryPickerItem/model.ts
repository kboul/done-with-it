import { Category } from '../../screens/ListingEdit/models';

export default interface CategoryPickerItemProps {
    item: Category;
    onPress: () => void;
}
