import { Item } from '../models';

interface AppPickerProps {
    icon?: string;
    items: Item[];
    onItemSelect: (item: Item) => void;
    placeholder: string;
    selectedItem: Item;
}

export type { Item, AppPickerProps };
