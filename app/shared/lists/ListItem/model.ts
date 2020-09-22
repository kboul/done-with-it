import { ReactNode } from 'react';

export default interface ListItemProps {
    image?: number;
    onPress?: () => void;
    renderRightActions?: () => void;
    showChevrons?: boolean;
    subtitle?: string;
    title: string;
    IconComponent?: ReactNode;
}
