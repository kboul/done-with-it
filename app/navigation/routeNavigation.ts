import { createRef, RefObject } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef: RefObject<NavigationContainerRef> = createRef();

export function navigate(name: string, params: Object) {
    navigationRef.current?.navigate(name, params);
}
