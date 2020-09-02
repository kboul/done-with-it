import React from 'react';

export default interface IListItem {
    title: string;
    subtitle?: string;
    image?: number;
    ImageComponent?: React.ReactNode;
    onPress?: () => void;
    renderRightActions?: () => void;
}
