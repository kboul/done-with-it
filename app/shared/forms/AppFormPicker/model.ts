import { ElementType } from 'react';

import { Item } from '../../models';

export default interface AppFormPickerProps {
    items: Item[];
    name: string;
    numberOfColumns: number;
    PickerItemComponent: ElementType;
    placeholder: string;
}
