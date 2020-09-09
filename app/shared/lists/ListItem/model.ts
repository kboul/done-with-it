import { ReactNode } from 'react';

export default interface ListItemProps {
    image?: number;
    onPress?: () => void;
    renderRightActions?: () => void;
    subtitle?: string;
    title: string;
    IconComponent?: ReactNode;
}
