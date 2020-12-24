import { ElementType } from 'react';

import { Item } from '../../models';

export default interface FormPickerProps {
    items: Item[];
    name: string;
    numberOfColumns: number;
    PickerItemComponent: ElementType;
    placeholder: string;
}
