import { ReactNode } from 'react';

export default interface ListItemProps {
    IconComponent?: ReactNode;
    image?: number;
    onPress?: () => void;
    renderRightActions?: () => ReactNode;
    showChevrons?: boolean;
    subtitle?: string;
    title: string;
}
