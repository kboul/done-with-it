import { Category } from '../../screens/ListingEditScreen/models';

export default interface CategoryPickerItemProps {
    item: Category;
    onPress: () => void;
}
