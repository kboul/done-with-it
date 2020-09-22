import { ElementType } from 'react';

import { Item } from '../../models';

export default interface AppFormPickerProps {
    items: Item[];
    PickerItemComponent: ElementType;
    name: string;
    placeholder: string;
}
