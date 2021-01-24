import { ReactNode } from 'react';

export default interface ListItemProps {
    image?: number;
    onPress?: () => void;
    renderRightActions?: () => ReactNode;
    showChevrons?: boolean;
    subtitle?: string;
    title: string;
    IconComponent?: ReactNode;
}
