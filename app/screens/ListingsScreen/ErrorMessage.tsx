import React from 'react';

import AppButton from '../../shared/AppButton';
import AppText from '../../shared/AppText';

interface ErrorMessageProps {
    onPress: () => void;
}

export default function ErrorMessage({ onPress }: ErrorMessageProps) {
    return (
        <>
            <AppText>Couldn&apos;t retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={onPress} />
        </>
    );
}
