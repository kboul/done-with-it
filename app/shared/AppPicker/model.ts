import { ElementType } from 'react';

import { Item } from '../models';

interface AppPickerProps {
    icon?: string;
    items: Item[];
    onItemSelect: (item: Item) => void;
    PickerItemComponent?: ElementType;
    placeholder: string;
    selectedItem: Item;
}

export type { Item, AppPickerProps };
