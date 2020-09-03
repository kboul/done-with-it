import { ReactNode } from 'react';

export default interface Props {
    title: string;
    subtitle?: string;
    image?: number;
    IconComponent?: ReactNode;
    onPress?: () => void;
    renderRightActions?: () => void;
}
