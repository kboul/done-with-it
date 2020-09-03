import { ReactNode } from 'react';

export default interface Props {
    title: string;
    subtitle?: string;
    image?: number;
    ImageComponent?: ReactNode;
    onPress?: () => void;
    renderRightActions?: () => void;
}
